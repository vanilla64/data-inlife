import './App.css'
import { useState, useEffect } from "react"
import Api from "./utils/Api"
import { Route, Switch } from "react-router-dom"
import MainLayout from "./components/MainLayout"
import Preloader from "./components/Preloader"
import AppContext from "./contexts/AppContext"

function App() {

  const [goods, setGoods] = useState([])
  const [goodsInCart, setGoodsInCart] = useState({})
  const [totalPrice, setTotalPrice] = useState(0)

  const [isLoading, setIsLoading] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const bodyFormData = new FormData()

  // context value
  const value = {
    goods,
    bodyFormData,
    goodsInCart,
    setGoodsInCart,
    totalPrice,
    setTotalPrice,
    isSidebarOpen,
    sidebarToggle: () => setIsSidebarOpen(prev => !prev)
  }

  //fetch goods from server
  useEffect(() => {
    Api.get('/')
      .then(res => setGoods(res.data))
      .finally(() => setIsLoading(false))
      .catch(err => console.log(err))
  }, [])

  return (
    <AppContext.Provider value={value}>
      <div className="app">
        { isLoading && <Preloader /> }
        <Switch>
          <Route path="/" exact >
            { !isLoading && <MainLayout goods={goods} /> }
          </Route>
          <Route path="/:id" exact>
            { !isLoading && <MainLayout goods={goods} /> }
          </Route>
        </Switch>
      </div>
    </AppContext.Provider>
  )
}

export default App
