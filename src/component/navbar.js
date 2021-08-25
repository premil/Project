import { useState } from 'react'

//  const [click, setClick] = useState();
//  const handleClick = () => setClick(!click)

function navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="image">
                        <img src="/img/Home-Page_0006s_0001_Image-1.png" alt="img" className='img1' />
                    </div>
                    <div className="menu-icon" >
                        Menu
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default navbar;
