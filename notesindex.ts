import products from './products'; //import the products.ts file 

const productName : string = 'fanny pack'; // declared variable, annotated type: string, set value of 'fanny pack' from products.ts file
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number; //adustable variable with set annotation type
const shippingAddress: string = '123 fake st, Birmingham, Al';

const product = products.filter(product => product.name === productName)[0];
//filter method will iterate through the product list to find the variable productName match on the .name property and take the first result and store it in the variable product. 



if (product.preOrder) {
  console.log ('We will notify you once the items is shipped.');
} //conditional to check preorder property is true and message log

if (Number (product.price) > 25) {
  console.log('Free Shipping for this product');
  shipping = 0;
  } else {
  shipping = 5;
} // conditional for shipping costs transformed type in place instead of rewriting all types in products.ts 

if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
}else {
  taxPercent = 0.05;
} //checking address for New York and setting tax percent to be collected

taxTotal = Number(product.price) * taxPercent; 
total = Number(product.price) + taxTotal + shipping;

console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`); // receipt