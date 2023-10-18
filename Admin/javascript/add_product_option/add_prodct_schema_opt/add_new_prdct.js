function addNewProduct(event) {
    event.preventDefault();
}

const productName = document.getElementById('product_name').value;
const price = document.getElementById('price').value;

NewProductRequestF({ productName , price})

.then((productId) =>{
    console.log("Ta qi nonen")
})
.catch((error) => {
    console.log("Yarrai Yering")
});
