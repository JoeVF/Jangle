
const config = {
  jsSource: [
    'https://d3js.org/d3.v4.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/d3-legend/2.24.0/d3-legend.min.js',
    'https://d3js.org/d3-scale-chromatic.v1.min.js',
    '/scripts/menu-items.js',
    '/scripts/DataFilter.js',
    '/scripts/button.js',
    '/scripts/menu.js',
    '/scripts/Preloader.js',
    '/scripts/ForceLayout.js',
    '/scripts/Modal.js',
    '/scripts/d3functions.js'
  ],
  contentContainer: 'content',
  menuContainer: 'container-cube',
  forceLayoutWidth: 1200,
  forceLayoutHeight: 500,
  defaultSource: 'edges'
};


const loadJS =  async() => {
  const div = document.createElement('div');
  div.classList.add('modal-300');
  div.innerHTML = 'loading...';
  document.body.appendChild(div);

  const head = document.getElementsByTagName('head')[0];
  for(let i=0; i<config.jsSource.length; i++){
    const script = document.createElement('script');
    script.src = config.jsSource[i];
    head.appendChild(script);
    await new Promise((resolve, reject) => {
      try{
      script.onload = () => {
        setTimeout( () => {
          div.innerHTML = `Loading: ${script.src.slice(0, 40)}...`;
          resolve();
        }, 200);
      }
    }
    catch(e){
      console.log(e);
      reject();
    }
    });
  }
  div.parentNode.removeChild(div);
  menuCreate();
  initTweening();
}