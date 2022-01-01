import React from 'react'
import BasketItem from './BasketItem'

const Basket = ({basket, total, products, resetBasket}) => {
    return (
        <div>
            <div className="basket-container">
                {
                basket.map(item => (
                    <BasketItem  product={products.find(p => p.id === item.id)}item={item} />
                ))
            }
            {
                total > 0 && (
                    <div>
                        Toplam : $ {total}
                    </div>
                )
            }
            <button onClick={resetBasket}>Sepeti Sıfırla</button>
            </div>

            <style jsx>{`
            .basket-container{
                border:1px solid red;
                width: 1000px;
                margin: 0 auto;
            }
            
            `}

            </style>
        </div>
    )
}

export default Basket
