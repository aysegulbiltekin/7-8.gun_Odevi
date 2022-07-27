const addBtn = document.querySelector('#add')
const showBtn = document.querySelector('#show')

list = []

function addToList () {
   let product = document.getElementById('input1').value

   list.push(product)
   document.getElementById('input1').value = ''

   let product2 = document.getElementById('input2').value
 
    list.push(product2)
    document.getElementById('input2').value = ''

    let product3 = document.getElementById('input3').value
 
    list.push(product3)
    document.getElementById('input3').value = ''

   console.log(...list)
}


function showList () {
  
  let UIProductList = document.querySelector('.product-list')
  UIProductList.innerHTML += `

  Kitap Bilgileri`

  for(i in list) { 
      UIProductList.innerHTML += `
      <div>${list[i]}</div>
      
  `
  }
  UIProductList.innerHTML += `

  <div style="color: green;">
  Ürünler eklendi
 </div>`
} 









