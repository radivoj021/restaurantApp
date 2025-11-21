import React, {useState} from "react";
import "./Container.css";
import Category from "./Category/Category";
import LeftBar from "../LeftBar/LeftBar";
import RightBar from "../RightBar/RightBar";
import "bootstrap/dist/css/bootstrap.min.css";

const Container = () =>{
    const [cartProducts, setCartProducts] = useState([]);

    const removeFromCart = (index) => {
    setCartProducts((prev) => prev.filter((_, i) => i !== index));
    };

    const addToCart = (product) =>{
        setCartProducts((prev) => {
            const updatedCard = [...prev, product];
            console.log(updatedCard);
            return updatedCard;
            
        });
        confirm("Ubacili ste " + product.name + " u korpu");
    }

    return(
        <div>
            <div className="orderingSection row">                
                <div className="col-xl-2 leftBar">
                    <LeftBar />
                </div>
                <div className="col-xl-8">
                    <div className="centralPart">
                        <div className="containerHeader">
                            <div className="orderingTitle">
                                <p id="bigTitle">Get Up To 20% Discount On Your First Order</p>
                                <p id="smallTitle">Fast, reliable, and delicious — food ordering made simple. 
                                    Craving something special? Explore thousands of mouthwatering options.
                                </p>
                            </div>
                            <div className="headerImage"
                                 style={{
                                        backgroundImage: 'url("/images/headerBurger.jpg")',
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                            >

                            </div>

                        </div>
                            {/* <Category /> */}
                            <Category addProduct = {addToCart}/>
                {/*         <div className="popularOrders">

                            <div className="popularOrdersTitle">Popular Orders</div>
                        </div>

                        <div className="lastOrders">
                            <div className="lastOrders">Last Orders</div>
                        </div> */}
                    </div>
                </div>
                <div className="col-xl-2">{/* <RightBar products={cartProducts} /> */}
                                    <RightBar products={cartProducts} removeProduct={removeFromCart}/>
                </div>
            </div>
        </div>
    )
}

export default Container;