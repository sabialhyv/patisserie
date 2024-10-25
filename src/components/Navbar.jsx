import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
        <nav>
            <h3>Pâtisserie aux Fraises</h3>
            <div className="pages">
                <Link to='/home'/>
                <Link to='/about'/>
                <Link to='/products'/>
                <Link to='/contact'/>
            </div>
        </nav>
        
        
        </>
    )
}

export default Navbar