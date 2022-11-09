import React, { useState } from 'react'
import "./res.css"

import Menu from "./Api"
import All from './All'
import { NavLink, Routes, Route } from "react-router-dom"


import Breakfast from './Breakfast'
import Lunch from './Lunch'
import Dinner from './Dinner' 
    

const Home = () => {
    const [menuData, setMenuData] = useState(Menu)

    console.log(menuData);
    return (
        <>
            <div id="big">
                <div id='header'>
                <h1 id='h1'>Welcome to Food App</h1>
                </div>
                
                
                <nav id='nav'>
                    <div id='navigation'>

            <NavLink to="/" ><button>All</button></NavLink>
            <NavLink to="/breakfast"><button>Breakfast</button></NavLink>
            <NavLink to="/lunch"><button>Lunch</button></NavLink>
                        <NavLink to="/dinner"><button>Dinner</button></NavLink>
                        </div>
                    </nav>

          
            <Routes>
                <Route path='/' element={<All menuData={menuData} />}></Route>
                <Route path='/breakfast' element={<Breakfast menuData={ menuData} />}></Route>
                <Route path='/lunch' element={<Lunch menuData={menuData} />}></Route>
                <Route path='/dinner' element={<Dinner Data={menuData}/>}></Route>
               
            </Routes>


</div>



        </>
    )
}

export default Home