import React, {useContext, useState, useEffect } from 'react'
import AppContext from "../contexts/AppContext"

function TableRow({ id, title, price }) {
  const [quantity, setQuantity] = useState(0)
  const { goodsInCart, totalPrice, setTotalPrice, setGoodsInCart } = useContext(AppContext)

  useEffect(() => {
    setGoodsInCart(prev => {
      return {
        ...prev,
        [`product[${id}]`]: quantity
      }
    })

    if (quantity === 0) {
      delete goodsInCart[`product[${id}]`]
      return setGoodsInCart(goodsInCart)
    }
    // eslint-disable-next-line
  }, [quantity])

  useEffect(() => {
    if (totalPrice === 0) return setQuantity(0)
  }, [totalPrice])


  const handleChange = (evt) => {
    console.log('CHANGE')

    const { value } = evt.target
    setQuantity(value)
    goodsInCart.push({
      id,
      quantity
    })

  }

  const handleMinusClick = () => {
    if (quantity <= 0) return
    setQuantity(prev => prev - 1)
    setTotalPrice(prev => prev - parseInt(price))
  }

  const handlePlusClick = () => {
    setQuantity(prev => prev + 1)
    setTotalPrice(prev => prev + parseInt(price))
  }

  return (
    <tr>
      <th>{ id }</th>
      <th>{ title }</th>
      <th>{ price }</th>
      <th
        style={{width: 350}}
      >
        <button onClick={handleMinusClick} className="btn blue lighten-2">- 1</button>
        <input
          style={{width: '45%', margin: '0 20px'}}
          type="number"
          name="quantity"
          value={quantity}
          onChange={handleChange}
        />
        <button onClick={handlePlusClick} className="btn blue lighten-2">+ 1</button>
      </th>
      <th>{ price * quantity }</th>
    </tr>
  )
}

export default TableRow
