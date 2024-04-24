import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component{

    render(){
        return(
        <div className='nav-container'>
        <div className='logo'>
        </div>
        <div className='nav-items'>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"> <li>About</li></Link>
                {/* <Link to="/services"> <li>Services</li></Link>
                <Link to="/contact"><li>Contact</li></Link> */}
            </ul>
        </div>
    </div>
        )
    }
}

export default Header;