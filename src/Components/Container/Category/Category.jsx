import React from "react";
import "./Category.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Category = ({ addProduct }) =>{

    /* const categoryProducts = () =>{
        const cards = [];
            for(let i = 0; i < 5; i++){
                cards.push
                (<div key={i} className="card" 
                        style={{ width: "200px",
                                backgroundImage: 'url("/images/itemBurger.jpg")',
                                
                             }}>
                        <img className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                            Burger
                            </p>
                            <button className="btn btn-primary">+</button>
                        </div>
                    </div>);
            }
            return cards.slice(0, 4);
    } */

    /* const [orderedProducts, setOrderedProducts] = useState([]); */

     const products = [
    { id: 1, name: "Burger", price: 200, img: "./images/burger.jpg", ingredients: "ketchup, mozzarela, cheesse, mayo," },
    { id: 2, name: "Pizza", price: 100, img: "./images/pizza.jpg", ingredients: "ketchup, mozzarela, cheesse, mayo," },
    { id: 3, name: "Pancake", price: 300, img: "./images/pancakes.jpg", ingredients: "ketchup, mozzarela, cheesse, mayo," },
    { id: 4, name: "Chicken", price: 500, img: "./images/chicken.jpg", ingredients: "ketchup, mozzarela, cheesse, mayo," },
    { id: 5, name: "Pie", price: 600, img: "./images/pie.jpg", ingredients: "ketchup, mozzarela, cheesse, mayo," },
    { id: 6, name: "Burger", price: 200, img: "./images/burger.jpg", ingredients: "ketchup, mozzarela, cheesse, mayo," },
    { id: 7, name: "Pizza", price: 100, img: "./images/pizza.jpg", ingredients: "ketchup, mozzarela, cheesse, mayo," },
    { id: 8, name: "Pancake", price: 300, img: "./images/pancakes.jpg", ingredients: "ketchup, mozzarela, cheesse, mayo," },
    { id: 9, name: "Chicken", price: 500, img: "./images/chicken.jpg", ingredients: "ketchup, mozzarela, cheesse, mayo," },
    { id: 10, name: "Pie", price: 600, img: "./images/pie.jpg", ingredients: "ketchup, mozzarela, cheesse, mayo," },
  ];

    return(
        <div className="category">
            <div id="categoryTitle" className="categoryTittles">Products</div>
            {/* <div id="seeAllTitle" className="categoryTittles">See All</div> */}



                    <div className="category">
                        {/* For larger devices */}
                        <div className="categoryProducts">
                            {products.map((product) => (
                            <div key={product.id} className="card">
                                <img className="card-img-top" src={product.img} alt={product.name} />
                                <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">  {product.price},00 rsd</p>
                                <button className="btn btn-primary" onClick={() => addProduct(product)}>
                                    Order Product
                                </button>
                                </div>
                            </div>
                            ))}
                        </div>

                        {/* for mobile devices */}
                        <div className="categoryProductsMobile">
                            {products.map((product) => (
                            <div key={product.id} className="cardMobile">
                                <img className="cardMobile-img" src={product.img} alt={product.name} />
                                <div className="card-body-mobile">
                            
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">  {product.price},00 rsd</p>    
                
                                    
                                    <div>
                                        <div className="ingredients">{product.ingredients}</div>

                                        <div className="clickCounterForBasket">
                                            <button type="button" className="btn btn-primary removeBtn">-</button>
                                            <div className="counter">0</div>
                                        </div>

                                        <button type="button" className="btn btn-primary addBtn" onClick={() => addProduct(product)}>
                                            +
                                        </button>
                                    </div>
                                  
                                </div>
                            </div>
                            ))}


                          {/*   <div key={product.id} className="cardMobile">
                                <img className="cardMobile-img" src={product.img} alt={product.name} />
                            </div> */}
                        </div>
                    </div>




                {/* {categoryProducts()}     */}   

              {/*   <div className="card">
                    <img className="card-img-top" src="./images/burger.jpg" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Burger</h5>
                        <p className="card-text">
                        =200,00 rsd
                        </p>
                        <button className="btn btn-primary">Order Product</button>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src="./images/pizza.jpg" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Pizza</h5>
                        <p className="card-text">
                        = 100,00 rsd 
                        </p>
                        <button className="btn btn-primary">Order Product</button>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src="./images/pancakes.jpg" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Pancake</h5>
                        <p className="card-text">
                        = 300,00 rsd
                        </p>
                        <button className="btn btn-primary">Order Product</button>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src="./images/chicken.jpg" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Chicken</h5>
                        <p className="card-text">
                        =500,00 rsd
                        </p>
                        <button className="btn btn-primary">Order Product</button>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src="./images/pie.jpg" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Pie</h5>
                        <p className="card-text">
                        =600,00 rsd
                        </p>
                        <button className="btn btn-primary">Order Product</button>
                    </div>
                </div> */}

            </div>
    )
}

export default Category;