import React from 'react'
import BasketItem from './BasketItem'

const Basket = ({basket, total, products}) => {
    return (
        <div>
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
        </div>
    )
}

export default Basket
