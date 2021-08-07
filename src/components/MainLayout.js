import React, { useContext } from 'react'
import { useParams } from "react-router-dom"
import Goods from "./Goods"
import Sidebar from "./Sidebar/Sidebar"
import TopBar from "./TopBar/TopBar"
import AppContext from "../contexts/AppContext"
import axios from "axios"

function MainLayout({ goods }) {
  let { id } = useParams()

  const data = id === undefined
    ? goods[0]
    : goods.find(g => g.rid === id)

  const ctx = useContext(AppContext)
  const { totalPrice, setTotalPrice, bodyFormData, goodsInCart, setGoodsInCart } = ctx

  document.title = `${data.rname} || Data In Life Test task`

  const handleCartClick = () => {
    const keys = Object.keys(goodsInCart)

    keys.forEach(k => bodyFormData.append(k, goodsInCart[k]))

    axios({
      method: "post",
      url: "https://datainlife.ru/junior_task/add_basket.php",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(res => console.log(res))
      .finally(() => {
        setTotalPrice(0)
        setGoodsInCart({})
      })
      .catch(err => console.log(err))
  }

  return (
    data &&
    <div className="container">
      <TopBar />
      <h3 className='center'>{ data.rname }</h3>
      <Goods data={data.goods} />
      <Sidebar data={goods} />
      <div className="total blue lighten-4 z-depth-3">
        <p>Total pirice: { totalPrice }</p>
        <button onClick={handleCartClick} className="btn blue lighten-4">
          <i className="material-icons black-text">add_shopping_cart</i>
        </button>
      </div>
    </div>
  )
}

export default MainLayout
