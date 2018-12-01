
const config = {
  jsSource: [
    'https://code.jquery.com/jquery-3.3.1.min.js',
    '/scripts/Walls.js',
    '/scripts/Screen.js',
    '/scripts/Component.js',
    '/scripts/Player1.js',
    '/scripts/collisions.js',
    '/scripts/Items.js',
    '/scripts/itemPickup.js',
    '/scripts/events.js',
    '/scripts/Game.js',
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
  document.getElementById('gameCanvas').style.display = 'block';
  startGame();
}