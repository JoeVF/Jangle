
class ForceLayout extends Preloader {

  constructor(options) {
    super();
    this.dataURI = options.dataURI;
    this.target = options.target;
    this.width = config.forceLayoutWidth;
    this.height = config.forceLayoutHeight;
    this.data = null;
    this.rawData = null;
    this.dataSource = config.defaultSource;
    this.dataFilter = options.dataFilter;
  }

  fetchData() {
    return fetch(this.dataURI).then(response => response.json()).then(data => {
      Modal.updateMessage('Data has loaded', 500);
      this.data = data;
      this.rawData = data;
      return;
    });
  }

  initVisualization() {
    this.removeContainer();
    this.addToolbar();
    this.addToolbarAction();
    return this.addContainer();
  }

  create(divContainer) {
    const { links, nodes, groups } = this.getData();
    const options = {
      links,
      nodes,
      groups,
      tooltip: this.addTooltip(),
      width: this.width,
      height: this.height,
      div: divContainer
    }
    const createForcedLayout = new CreateForcedLayout(options);
    Modal.close();
  }

  getData() {
    switch (this.dataSource) {
      case 'regions':
        return this.dataFilter.regions({ ...this.rawData });

      case 'edges':
        return this.dataFilter.edges({ ...this.rawData });

      default:
        return null;
    }
  }

  updateData(dataSource) {
    // Modal.show('Fetching new data');
    // this.removeContainer();
    // this.fetchData(this.dataURI).then( ()=> {
    //   this.create(forceLayout.initVisualization());
    // });

    this.removeContainer();
    const divContainer = this.addContainer();
    Modal.show("<span class='wait'>Updating visualization...</span>");
    this.fetchData(this.dataURI).then(() => {
      this.dataSource = dataSource;
      const { links, nodes, groups } = this.getData();
      new CreateForcedLayout({
        update: true,
        links,
        nodes,
        groups,
        width: this.width,
        height: this.height,
        div: divContainer,
        tooltip: this.tooltip
      });
      Modal.close();
    });;

  }

  removeContainer() {
    const visDiv = document.getElementById('vis');
    d3.select('#svg-force-layout').selectAll('svg').remove();
    document.getElementById('svg-force-layout');
    const svg = document.getElementById('svg-force-layout');
    if (svg) { svg.parentNode.removeChild(svg); }
    if (visDiv) {
      visDiv.innerHTML = '';
      visDiv.parentNode.removeChild(visDiv);
    }
  }

  addTooltip() {
    const tooltipDiv = document.querySelector(".tooltip");
    if (tooltipDiv) { tooltipDiv.parentNode.removeChild(tooltipDiv); }
    const tooltip = d3.select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);
    this.tooltip = tooltip;
    return tooltip;
  }

  addContainer() {
    const parent = document.getElementById(config.contentContainer);
    const div = document.createElement('div');
    div.className = 'visualization-div';
    div.id = 'vis';
    div.style.width = `${config.forceLayoutWidth}px`;
    div.style.height = `${config.forceLayoutHeight}px`;
    parent.appendChild(div);
    return div;
  }

  addToolbar() {
    const parent = document.getElementById(config.contentContainer);
    const div = document.createElement('div');
    div.style.width = `${config.forceLayoutWidth - 10}px`;
    div.id = "visualization-toolbar";
    div.innerHTML = `<div>Visualization</div>
                      <div>
                        <select id='dataSource'>
                          <option value=''>Select a data source</option>
                          <option value='regions'>Topology Regions</option>
                          <option value='edges'>Topology Edges</option>
                        </select>
                      </div>
                    </div>
                    `;
    parent.appendChild(div);
  }

  addToolbarAction() {
    let select = document.getElementById('dataSource');
    select.onchange = () => {
      this.data = this.updateData(select.options[select.selectedIndex].value);
    }
  }


}

