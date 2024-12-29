
let bagItems ;
 onLoad();

function onLoad(){
  displayItems()
  let bagItemStr = localStorage.getItem('bagItems');
bagItems = bagItemStr? JSON.parse(bagItemStr) : [];
displayBagIcon();
}


function addToBag(itemId){
     bagItems.push(itemId)
     localStorage.setItem('bagItems', JSON.stringify(bagItems));
     displayBagIcon();
}


function displayBagIcon(){
  let bagItemCountElement = document.querySelector(".bag-item-count");
 
  bagItemCountElement.innerText = bagItems.length
 
}



function displayItems(){
  let itemsContainerElement = document.querySelector(".items-container");
  if(!itemsContainerElement){
    return;
  }
  let innerHtml = ''
  items.forEach(item=>{
      innerHtml += `  
               <div class="item-container">
                <img class="item-image"  src="${item.image}" alt="product">
                <div class="rating">
                  ${item.rating.stars} ⭐ | ${item.rating.count}
                </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                  <span class="current-price">${item.current_price}</span>
                  <span class="orignal-price">${item.original_price}</span>
                  <span class="discount">${item.discount_percentage}% off</span>
                  
                </div>
                <button class="btn-add-bag" onclick = 'addToBag(${item.id})' >Add to Bag</button>
              </div>`
  })
  
  
  
  itemsContainerElement.innerHTML = innerHtml;
}




             