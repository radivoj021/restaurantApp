import React, {useRef} from "react";
import "./RightBar.css";

const RightBar = ({products, removeProduct}) =>{

      let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
      totalPrice += products[i].price;
    }

    const removeFromList = () =>{

    }


    return(
        <div>
            <div id="rightBar">
            Your Balance:
                <div id="balanceCounterBox">
                  <div id="balanceCounter">
                    {totalPrice},00 rsd
                  </div>
                </div>
            </div>

            <div id="orderedItems">
                <div id="orderedItemsTitle">Ordered items:</div>
                <div id="orderedList">
                      {
                        (
                          () => {
                            if (products.length === 0) {
                              return <p>Korpa je prazna</p>;
                            } else {
                              return (
                                <ul>
                                  {products.map((p, i) => (
                                    <li id="listItem" key={i}>
                                      {p.name} - {p.price},00 rsd
                                      <div id="deleteItemFromList" onClick={() => removeProduct(i)}>remove</div>
                                    </li>

                                    
                                  ))}
                                </ul>
                              );
                            }
                          }
                        )()
                      }
                </div>              
            </div>

            <button className="btn btn-basket-close">Empty Basket</button>
            <button className="btn btn-basket-order">Finish Order</button>
            
        </div>
/*      <div className="rightBar">
      <h2>Korpa</h2>
      {products.length === 0 ? (
        <p>Korpa je prazna</p>
      ) : (
        <ul>
          {products.map((p, i) => (
            <li key={i}>
              {p.name} - {p.price},00 rsd
            </li>
          ))}
        </ul>
      )}
    </div> */
        
    );

}

export default RightBar;