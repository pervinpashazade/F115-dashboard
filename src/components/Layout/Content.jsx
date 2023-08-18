import React from 'react'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'

function Content() {
    return (
        <div className='content'>
            <Header />
            <div className="content-inner">
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>
        </div>
    )
}

export default Content