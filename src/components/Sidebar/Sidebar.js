import React, { useContext } from 'react'
import './Sidebar.css'
import { NavLink } from "react-router-dom"
import AppContext from "../../contexts/AppContext"

function Sidebar({ data }) {
  const ctx = useContext(AppContext)
  const { isSidebarOpen, sidebarToggle } = ctx

  const styles = {
    sidebar: isSidebarOpen
      ? 'sidebar sidebar_active'
      : 'sidebar',
    overlay: isSidebarOpen
      ? 'sidebar__overlay sidebar__overlay_active'
      : 'sidebar__overlay'
  }

  return (
    <div className={styles.sidebar}>
      <div className="sidebar__content grey darken-3 z-depth-3">
        <div className="sidebar__navigation">
          {
            data.map((i, index) => {
              if (index > data.length - 2) return undefined

              return (
                <NavLink
                  key={index}
                  activeClassName="sidebar__link_active"
                  className="sidebar__link" to={`/${i.rid}`}
                >
                  {i.rname}
                </NavLink>
              )
            })
          }
        </div>
      </div>
      <div onClick={sidebarToggle} className={styles.overlay} />
    </div>
  )
}

export default Sidebar
