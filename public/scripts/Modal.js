class Modal {

  constructor(){
    this.div = document.getElementById('modal-message') || null;
    this.parent = document.getElementById(config.contentContainer);
  }

  static show(message) {
    let modal = new Modal();
    const div = document.createElement('div');
    modal.parent.appendChild(div);
    div.className = 'modal-300';
    div.id = 'modal-message';
    div.innerHTML = message;
  }

  static updateMessage(message){
    let modal = new Modal();
    modal.div.innerHTML = message;
  }

  static showMessageAndClose(message, time=2000) {
    let modal = new Modal();
    modal.div.innerHTML = message;
    Modal.close(time, modal.div);
  }

  static close(time=2000, div){
    try{
      if(!div) { div = document.getElementById('modal-message'); }
      setTimeout( ()=>{ 
          try{ div.parentNode.removeChild(div); }
          catch(e){}
        }, time);
      }
      catch(e){}
  }

}