let total = 0;
let tax = 0.10;

shoppingCartAdd();
toastButton();

function shoppingCartAdd() {
  document.getElementById('burger').addEventListener('click', function() {
    total += 8.99
    let grandTotal = total + (tax * total);
    document.getElementById('shopping-cart').innerHTML += `<tr><td>Royale with Cheese</td><td class='right'>$8.99</td></tr>`
    document.getElementById('subtotal').innerHTML = "$" + total.toFixed(2)
    document.getElementById('tax').innerHTML = "$" + (tax * total).toFixed(2)
    document.getElementById('total').innerHTML = "$" + grandTotal.toFixed(2)
  })

  document.getElementById('pizza').addEventListener('click', function() {
    total += 11.99
    let grandTotal = total + (tax * total);
    document.getElementById('shopping-cart').innerHTML += `<tr><td>Arugula Pie</td><td class='right'>$11.99</td></tr>`
    document.getElementById('subtotal').innerHTML = "$" + total.toFixed(2)
    document.getElementById('tax').innerHTML = "$" + (tax * total).toFixed(2)
    document.getElementById('total').innerHTML = "$" + grandTotal.toFixed(2)
  })

  document.getElementById('sandwich').addEventListener('click', function() {
    total += 14.99
    let grandTotal = total + (tax * total);
    document.getElementById('shopping-cart').innerHTML += `<tr><td>Smoked Swine</td><td class='right'>$14.99</td></tr>`
    document.getElementById('subtotal').innerHTML = "$" + total.toFixed(2)
    document.getElementById('tax').innerHTML = "$" + (tax * total).toFixed(2)
    document.getElementById('total').innerHTML = "$" + grandTotal.toFixed(2)
  })

  document.getElementById('ice-cream').addEventListener('click', function() {
    total += 7.99
    let grandTotal = total + (tax * total);
    document.getElementById('shopping-cart').innerHTML += `<tr><td>Ice Cream Biscuit</td><td class='right'>$7.99</td></tr>`
    document.getElementById('subtotal').innerHTML = "$" + total.toFixed(2)
    document.getElementById('tax').innerHTML = "$" + (tax * total).toFixed(2)
    document.getElementById('total').innerHTML = "$" + grandTotal.toFixed(2)
  })
}

function toastButton() {
  document.getElementById('button').addEventListener('click', function() {
    event.preventDefault()
    Materialize.toast('Great Success!', 4000)
  })
}
