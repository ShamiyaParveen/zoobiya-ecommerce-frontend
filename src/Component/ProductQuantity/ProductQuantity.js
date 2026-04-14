import React, { useEffect, useState } from 'react'
import './product-quantity.css';


const ProductQuantity = ({ value = 1, onChange }) => {

        const [inputvalue, setInputValue] = useState(value);

          useEffect(() => {
            setInputValue(value);
          }, [value]);
       
          const minus = () =>{
              if(inputvalue !== 1 && inputvalue > 0){
                const updatedValue = inputvalue - 1;
                setInputValue(updatedValue);
                if (onChange) {
                  onChange(updatedValue);
                }
              }
                
            }
        
                const plus = () =>{
                    const updatedValue = inputvalue + 1;
                    setInputValue(updatedValue);
                    if (onChange) {
                      onChange(updatedValue);
                    }
            }

  return (
    <>

        

          {/* Actions: Quantity & Add to Cart */}
                    <div className="action-wrapper">
                      <div className="qty-selector">
                        <button onClick={minus}>-</button>
                        <input type="text" value={inputvalue} readOnly />
                        <button onClick={plus}>+</button>
                      </div>
                      </div>
                   
                   
    </>
  )
}

export default ProductQuantity
