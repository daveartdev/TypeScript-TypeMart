import products from './products'; 

const productName : string = 'fanny pack';  
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number; 
const shippingAddress: string = '123 fake st, Birmingham, Al';

const product = products.filter(product => product.name === productName)[0];

if (product.preOrder) {
  console.log ('We will notify you once the items is shipped.');
} 

if (Number (product.price) > 25) {
  console.log('Free Shipping for this product');
  shipping = 0;
  } else {
  shipping = 5;
} 

if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
}else {
  taxPercent = 0.05;
} 

taxTotal = Number(product.price) * taxPercent; 
total = Number(product.price) + taxTotal + shipping;

console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`); 