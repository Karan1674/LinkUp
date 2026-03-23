import React from 'react'
import SidebarIcons from '../Store/ApplicationIcons'
import { Link } from 'react-router-dom'

export default function Icons({ showAllIcons }) {
  return (
    <>
      <ul className="sidebarlists ">

        {SidebarIcons.slice(0, showAllIcons ? SidebarIcons.length : 10).map((icon, index) => (
          <Link to={`/${icon.title}`} className='listitemLink' key={index}>
            <li className="listitem">
              <icon.iconinfo className="sidebar-icon" />
              <span className="sidebar-text">{icon.title}</span>
            </li>
          </Link>

        ))}

      </ul>
    </>


  )
}
