import React, { useContext } from 'react'
import './TopBar.css'
import AppContext from "../../contexts/AppContext"

function TopBar() {
  const ctx = useContext(AppContext)
  const { sidebarToggle } = ctx

  return (
    <div className="topbar">
      <h1>Data In Life Test task</h1>
      <button onClick={sidebarToggle} className="btn blue lighten-2">Открыть меню</button>
    </div>
  )
}

export default TopBar
