

//   const products = document.querySelectorAll('.pdc_item');
// products.forEach(product => {
//     const productLink = product.querySelector('a');
//     productLink.addEventListener('click', (event) => {
//         event.preventDefault();
//     // Get the product name
//     const productName = product.querySelector('.pdc_item_name').textContent;

//     // Construct the URL with the product name as a parameter
//     const url = `products.html?product=${encodeURIComponent(productName)}`;

//     // Redirect to the new page
//     window.location.href = url;
//     console.log(productName)
//   });
// });


// // pass data to new page
// const urlParams = new URLSearchParams(window.location.search);
//   const productName = urlParams.get('product');
//   let productFound = null;
// for (const category of productsArray) {
//   for (const product of category.products) {
//     if (product.name === productName) {
//       productFound = product;
//       break;
//     }
//   }
//   if (productFound) {
//     break;
//   }
// }

// if (productFound) {
//    document.getElementById('item_main_img').src  = productFound.imageLink1;
//    document.getElementById('slide-2978-layer-2').textContent = productFound.name;
//    document.getElementById('slide-2978-layer-3').textContent = productFound.description1;
//    document.getElementById('item_detail_1').textContent = productFound.description2;
//    document.getElementById('item_detail_strong_1').textContent = productFound.description3;

// // alert(productFound.name)
// } else {
//   // Product not found
//   document.getElementById('product-name').textContent = 'Product not found';
//   productNameElement.textContent = 'Product not found';
//   const url = `index.html`;
//   window.location.href = url;
//   alert(productNameElement.textContent);
// }
