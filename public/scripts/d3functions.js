class CreateForcedLayout {
  constructor(options) {
    this.resetData().then( () => { this.run(options); });   
  }

  resetData(){
    return new Promise(resolve => {
      let svg = d3.select("#svg");      
      setTimeout(()=>{
        d3.select('svg').remove();
        resolve();
      },0)
    })
    
  }

  run({ update, links, nodes, tooltip, groups, width, height, div }){
    let strength = -5;
    let factor = 2;
    const svg = d3.select(div).append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('id', 'svg-force-layout');

    let link = svg.selectAll('line')
      .data(links)
      .enter().append('line');

    const color = d3.scaleOrdinal(d3.schemeSet3);
    groups.forEach(group => color(group));

    const forceSimulation = d3.forceSimulation()
      .nodes(nodes)
      .force('link', d3.forceLink().id(d => d.id))
      .force('charge', d3.forceManyBody().strength(strength))
      .force('center', d3.forceCenter(width / factor, height / factor))
      .on('tick', () => {
        link
          .attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y);

        nodeElements
          .attr('transform', d => `translate(${d.x},${d.y})`);
      });

    forceSimulation.force('link')
      .links(links);

    const R = 6; //circle radius

    link
      .attr('class', 'link-line')
      .on('mouseover.tooltip', function (d) {
        tooltip.transition()
          .duration(300)
          .style("opacity", .8);
        tooltip.html("Source:" + d.source.id +
          "<p/>Target:" + d.target.id +
          "<p/>Strength:" + d.value)
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY + 2) + "px");
      })
      .on("mouseout.tooltip", function () {
        tooltip.transition()
          .duration(100)
          .style("opacity", 0);
      })
      .on('mouseout.fade', fade(1))
      .on("mousemove", function () {
        tooltip.style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY + 10) + "px");
      });
    ;

    let nodeElements = svg.append('g')
      .selectAll('circle')
      .data(nodes)
      .enter().append('circle')
      .attr('r', R)
      .attr("fill", function (d) { return color(d.group); })
      .on('mouseover.tooltip', function (d) {
        tooltip.transition()
          .duration(300)
          .style("opacity", .8);
        tooltip.html("Name:" + d.id + "<p/>group:" + d.group)
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY + 10) + "px");
      })
      .on('mouseover.fade', fade(0.1))
      .on("mouseout.tooltip", function () {
        tooltip.transition()
          .duration(100)
          .style("opacity", 0);
      })
      .on('mouseout.fade', fade(1))
      .on("mousemove", function () {
        tooltip.style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY + 1) + "px");
      })
      .on('dblclick', releasenode)
      .attr('class', 'node')
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));


    nodeElements.append('text')
      .attr('x', 0)
      .attr('dy', '.15em')
      .text(d => d.name);

    nodeElements.exit().remove();

    function dragstarted(d) {
      if (!d3.event.active) forceSimulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) forceSimulation.alphaTarget(0);
      // if wanted things to move back into place, we could reset this to null
      // d.fx = null;
      // d.fy = null;
    }
    function releasenode(d) {
      d.fx = null;
      d.fy = null;
    }

    const neighbors = {};
    links.forEach(d => {
      neighbors[`${d.source.index},${d.target.index}`] = 1;
    });

    function isConnected(a, b) {
      return neighbors[`${a.index},${b.index}`] || neighbors[`${b.index},${a.index}`] || a.index === b.index;
    }

    function fade(opacity) {
      return d => {
        nodeElements.style('stroke-opacity', function (o) {
          const thisOpacity = isConnected(d, o) ? 1 : opacity;
          this.setAttribute('fill-opacity', thisOpacity);
          return thisOpacity;
        });

        link.style('stroke-opacity', o => (o.source === d || o.target === d ? 1 : opacity));

      };
    }

    this.addLegend(svg, groups, width, height);
    return;
  }

  addLegend(svg, groups, width, height) {
    var sequentialScale = d3.scaleOrdinal(d3.schemeSet3)
      .domain(groups);


    svg.append('rect')
      .attr('class', 'legendContainer')
      .attr('width', 100)
      .attr('height', 300)
      .attr('transform', "translate(" + (width - 120) + "," + (height - 380) + ")");

    svg.append("g")
      .attr("class", "legendKey")
      .attr("transform", "translate(" + (width - 100) + "," + (height - 350) + ")");

    var legendKey = d3.legendColor()
      .shapeWidth(30)
      .cells(groups.length)
      .orient("vertical")
      .title("Key")
      .titleWidth(100)
      .scale(sequentialScale)

    svg.select(".legendKey")
      .call(legendKey);
  }
}



