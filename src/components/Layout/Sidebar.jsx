import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Nagivation = () => {
    return (
        <ul>
            <li>
                <Link to="/">Dashboard</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
        </ul>
    )
}

function Sidebar() {
    return (
        <div className='sidebar'>
            <img src={logo} alt='logo' />
            <Nagivation />
        </div>
    )
}

export default Sidebar