const selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];



const thisproducts = document.querySelectorAll('.pdc_item_q');
const updateItem = ()=>{
  thisproducts.forEach(product => {
    const productName = product.querySelector('.pdc_item_name_q').textContent;
    const index = selectedItems.indexOf(productName);
    if (index === -1) {
      product.classList.remove('bg-white');
      product.classList.add('bg-gray-200');
    } else {
      product.classList.remove('bg-gray-200');
      product.classList.add('bg-white');
    }
  }
    )
}


thisproducts.forEach(product => {
    product.addEventListener('click', (event) => {
        event.preventDefault();
    const productName = product.querySelector('.pdc_item_name_q').textContent;

    const index = selectedItems.indexOf(productName);
    if (index === -1) {
      selectedItems.push(productName);
    } else {
      selectedItems.splice(index, 1);
    }
    
   localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
   updateItem();
    console.log(selectedItems) // check selected products

  });
});


updateItem();