const menuCreate = () => {
  const div = document.querySelector('.quadrant');
  let html = '';
  menuItems.forEach( item => {
    const img = item.image ? `<img 
                                src=${item.image} 
                                width='32' height='32' 
                                class=${item.className} 
                              />` : '';

    html += `
        <div class="quadrant__item" 
          onmouseover='growImage(this)' 
          onmouseout='returnImage(this)' 
          data-uri='${item.dataURI}' 
          data-visualization=${item.visualization}
          onclick='loadDataVisualization(this)'
          >
          <div class="quadrant__item__content">
            ${img}
          </div>
        </div>
    `
  });
  div.innerHTML = html;
}

const growImage = (divObject) => {
  let imageObject = divObject.getElementsByTagName('img')[0];
  if(imageObject){ TweenLite.to(imageObject, 1, {scale:.8, rotation:180, skewX:45});}
}

const returnImage = (divObject) => {
  let imageObject = divObject.getElementsByTagName('img')[0];
  if(imageObject) { TweenLite.to(imageObject, 1, {scale:1, rotation:0, skewX:0}); }
}

const loadDataVisualization = (divObject) => {
  if(divObject.getAttribute('data-visualization')){
    switch(divObject.getAttribute('data-visualization')){
      case 'force-layout':
        forceLayout = new ForceLayout({
          dataURI: divObject.getAttribute('data-uri'),
          target: divObject,
          showPreloader: true,
          dataFilter: new DataFilter()
        });
        forceLayout.removeMenu()
          .then(forceLayout.showLoadingMessage)
          .then(()=> { return forceLayout.fetchData(divObject); })
          .then(() =>  {
            forceLayout.create(forceLayout.initVisualization());
          });

      default:
        break;
    }
  }
}

const moveHeading = () => {
  const div = document.getElementById('header');
  var tl = new TimelineLite();
  tl.to(div, .5, {
    transform: 'translate(-22%, 50%)'
  });
  //div.classList.remove('centered-text');
}