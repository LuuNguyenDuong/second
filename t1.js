const arrListProduct = [
    {
        img : "img/image 29.png",
        name : "Fresh and Healthy Mixed Mayonnaise Salad"
        
    },
    {
        img : "img/image 30.png",
        name : "The Creamiest Creamy Chicken"
        
    },
    {
        img : "img/image 31.png",
        name : "Fruity Pancake with Orange & Blueberry"
        
    },
    {
        img : "img/image 29.png",
        name : "Fresh and Healthy Mixed Mayonnaise Salad"
        
    },
    {
        img : "img/image 30.png",
        name : "The Creamiest Creamy Chicken"
        
    },
    {
        img : "img/image 31.png",
        name : "Fruity Pancake with Orange & Blueberry"
        
    }
];
function showProduct(data) {
    //cấu trục của query : vd :document.querySelector("[css của thẻ muốn lấy]")
    let Product_item = document.querySelector(".six");
    //kiểm tra xem nó có tồn tại hay k
    if (Product_item) {
        for (let item of data) {
            Product_item.innerHTML += `
            <div class="banner1">
                <img src="${item.img}" alt="" class="dishes_img">
                <h4> ${item.name} </h4>
            <div class="one_text">
                <div>
                    <img src="img/Timer.png" alt="">
                    <p>$30</p>
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
            `;
        }
    }
}
showProduct(arrListProduct);