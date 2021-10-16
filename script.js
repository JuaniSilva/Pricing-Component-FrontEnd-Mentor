const radio = document.getElementById("switch");
const price = document.querySelectorAll(".price");
console.log(price)

function definePricing(e){
  const isChecked = e.target.checked;
  if(isChecked){
    price[0].textContent = 19.99;
    price[1].textContent = 24.99;
    price[2].textContent = 39.99;
  } else {
    price[0].textContent = 199.99;
    price[1].textContent = 249.99;
    price[2].textContent = 399.99;
  }
}



radio.addEventListener("click", definePricing);