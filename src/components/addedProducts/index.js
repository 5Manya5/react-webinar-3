import React from "react";
import PropTypes from "prop-types";
import './style.css';

function AddedProducts ({productsCount, priceSumm}) {
    return (
        <div className='AddedProducts'>
            <div className="AddedProducts-content">
                <div className="AddedProducts-content-summ">
                    В корзине: {productsCount}/{priceSumm}
                </div>
                <div className="AddedProducts-content-controls">
                    {/* <button onClick ={()=>
                        в разработке
                    }>перейти

                    </button> */}
                </div>

            </div>
        </div>
    )
}

export default React.memo(AddedProducts);