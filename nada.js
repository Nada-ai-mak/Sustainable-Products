const product =[
    {

        id: 0,
        Image: 'photo_2023-12-24_22-31-44.jpg',
        title: 'face mask',
        price: 500,
    },
    {
        id:1,
        Image:'photo_2023-12-24_22-33-05.jpg',
        ttle: 'face serum',
        price:600,
    },
    {
        id:2,
        Image:'photo_2023-12-24_22-32-45.jpg',
        title:'body serumm',
        price:800,
    }
];
const categories = [...new set(product.map((item)=>
{return item}))]
let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} =item;
    return(
       `<div class='box'>
           <div class='img-box'>
              <img class='images' src=${image}></img>
          </div> 
          <div class='bottom'>
            <p>${title}</p>
            <h2>${price}.00</h2>`+
            "<button onclik='addtocart("+(i++)+")'>Add to cart</button>"+
          `</div>
       </div>`
    )
}).join('')
