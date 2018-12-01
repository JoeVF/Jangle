function makeItems() {
  key1 = new Component(26, 10, img, 100, 20, 'image');
  
	items.push(key1);

}

// update the items
function updateitems(){

  items.forEach(function(item)
  {
		if(item){
      item.draw()}
  })
}