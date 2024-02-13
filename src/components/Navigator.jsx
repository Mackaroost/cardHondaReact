import React from 'react';
import './navigator.css';

const Nav = () => {
    let links = ['Menu', 'Location', 'About', 'Contact'];
    let imagen = 'images/honda.png';

    return (
        <div className='container-nav'>
            <nav className='navigator'>
                <div className='logo'>
                    <img alt='imagen' src={imagen} />
                </div>
                {
                    links.map((e, index) => (
                        <div className='nav-item' key={index}>
                            <a className='links-nav' href='#'>{e}</a>
                        </div>
                    ))
                }
                <button className='btn'> Login </button>
            </nav>
        </div>
    );
}

export default Nav;
