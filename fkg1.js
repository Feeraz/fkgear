const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if(bar){
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}

if(close){
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}



const updateShoppingCartHTML = function(){
    if(productsInCart.length > 0){

    }
    else{
        document.querySelector(".checkout").classList.add("hidden");
        parentElement.html
    }
}

let productsInCart = [];
const parentElement = document.querySelector("#buyItems");
const cartSumPrice = document.querySelector("#sum-prices");
const products = document.querySelectorAll(".product-under");

function updateProductsInCart(product){
    for(let i=0; i < productsInCart.length; i++){
        if(productsInCart[i].id == product.id){
            productsInCart[i].count +=1;
            return;
        }
    }
    productsInCart.push(product);
}


products.forEach(product => {
    product.addEventListener('click', (e) =>{
        if( e.target.classList.contains('add-to-cart')){
            const productID = e.target.dataset.productId;
            const productName = product.querySelector(".productName").innerHTML;
            const productPrice = product.querySelector(".productPrice").innerHTML;
            const productImage = product.querySelector(".img").src;
            let productToCart = {
                name: productName,
                image: productImage,
                id: 1,
                price: productPrice,
            }
            updateProductsInCart(productToCart);
            updateShoppingCartHTML();
        }
    });
});