class DataFilter{

  constructor(){

  }

  regions(data){
    let nodes = [];
    let links = [];
    let groups = [];
    let regions = data.TopologyRegions;
    regions.forEach(region => {
      if(region.type > 0){
        nodes.push({
          id: region.region_id, 
          group: region.type,
        });
      }
      if(region.parent){
        links.push({
          source: region.region_id, 
          target: region.parent, 
          value: region.type,
        });
        groups.push(region.type);
      }
      
    });

    groups = groups.sort((a, b) => (a-b));
    return { links, nodes, groups }
  }

  edges(data){
    let nodes = [];
    let links = data.TopologyEdges;
    let groups = [];
    let edgeData = data.TopologyNodes;
    edgeData.forEach(edge => {
      if(edge.hasOwnProperty("device_id")){
        nodes.push({
          id: edge.device_id,
          group: edge.type,
        });
        groups.push(edge.type);
      }
    });
    return { links, nodes, groups };
  }

}