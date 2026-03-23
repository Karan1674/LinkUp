import React from 'react'
import SidebarIcons from '../Store/ApplicationIcons'
import '../Styles/Menu.css'
import { Link } from 'react-router-dom'

export default function Menu() {

    return (
        <>
            <div className="menucontainer">
                <span className="menutext">Dashboard</span>

                <ul className="menulists ">

                    {SidebarIcons.map((icon, index) => (
                        <Link to={`/${icon.title}`} key={index}>
                            <li className="menuitem">
                                <icon.iconinfo className="menu-icon" />
                                <span className="menu-text">{icon.title}</span>
                            </li>
                        </Link>

                    ))}

                </ul>
            </div>
        </>
    )
}
