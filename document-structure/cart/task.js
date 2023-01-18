const productAddBtn = Array.from(document.querySelectorAll('.product__add'))
const cartProducts = [...document.getElementsByClassName('cart__products')]
const productQuantityBtn = [...document.querySelectorAll('.product__quantity-controls')]


function addProductInCart(){
    let product = event.target.closest('.product')
    let productQuantity = event.target.closest('.product__quantity')
    const productInCart = [...document.getElementsByClassName('cart__product')]
    if(productInCart.length === 0){
        createCartProduct()
        return
    } else {
        for (const elem of productInCart) {
            let productCountInCurt = 0
            if(elem.getAttribute('data-id') === product.getAttribute('data-id')) {
                productCountInCurt = Number(elem.querySelector('.cart__product-count').textContent) + Number(productQuantity.querySelector('.product__quantity-value').textContent)
                elem.querySelector('.cart__product-count').textContent = productCountInCurt  
            } else {
                continue
            }
            return
        }
    }
    createCartProduct()
}

function createCartProduct(){
    let productQuantity = event.target.closest('.product__quantity')
    let product = event.target.closest('.product')
    let cartProduct = document.createElement('div')
    cartProduct.className = 'cart__product'
    cartProduct.setAttribute('data-id', product.getAttribute('data-id'))
    let cartProductImage = document.createElement('img')
    cartProductImage.className = 'cart__product-image'
    cartProductImage.src = product.querySelector('.product__image').src
    let cartProductCount = document.createElement('div')
    cartProductCount.className = 'cart__product-count'
    cartProductCount.insertAdjacentText("afterBegin", productQuantity.querySelector('.product__quantity-value').textContent)
    cartProduct.insertBefore(cartProductImage, null)
    cartProduct.insertBefore(cartProductCount, null)
    cartProducts[0].appendChild(cartProduct)
}

productAddBtn.forEach(element => element.addEventListener('click', addProductInCart))

function changeQuantityValue(){
    let inc = event.target.closest('.product__quantity-control_dec')
    let dec = event.target.closest('.product__quantity-control_inc')
    let value = event.target.parentElement.querySelector('.product__quantity-value')
    if(dec){
        value.textContent++
    } else if(inc){
        value.textContent > 0 ? value.textContent-- : value.textContent = 0
    }
}

productQuantityBtn.forEach(element => element.addEventListener('click', changeQuantityValue))

