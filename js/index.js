window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here


  // document.querySelector('.quantity').onclick = function () {


  // }
}
)


// ITERATION 1

function updateSubtotal(product, quantity) {

  const priceValue = document.querySelector('.price span').textContent
  const quantityValue = document.querySelector('.quantity').value

  return "$" + priceValue * quantityValue

  //... your code goes here

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const subTotalValue = updateSubtotal()

  document.querySelector('.subtotal').textContent = subTotalValue

  const totalValues =+ subTotalValue
  
  document.querySelector('#total-value').textContent = "Total: " + subTotalValue

  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

