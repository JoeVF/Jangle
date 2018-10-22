var tl = new TimelineLite({ paused: true });

class Preloader {

  constructor() {
    this.menuVisible = true;
    this.menuContent = document.getElementById(config.menuContainer);
  }

  removeMenu() {
    return new Promise(resolve => {
      if (this.menuVisible) {
        this.removeDefaultMessage();
        tl.to(this.menuContent, 0.5,
          {
            css: { scale: 0.05, opacity: 0, rotation: 180 },
            ease: Quad.easeOut,
            onComplete: () => {
              setTimeout( ()=>{ resolve()}, 200 );
            }
          });
      }
    })
  }

  showLoadingMessage(){
    /* wait at least 2 seconds */
    return new Promise( resolve => {
      Modal.show("<span class='wait'>Loading data, please wait...</span>");
      setTimeout(()=>{
        resolve();
      }, 1000);
    });
  }

  returnMenu() {
    tl.timeScale(1.8);
    tl.reverse();
  }

  removeDefaultMessage() {
    document.getElementById('msg').innerHTML = '';
  }

}