import React from 'react';
import { ImPencil2 } from "react-icons/im";
import { FaLinkedin, FaGithub  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './HeaderPage.css';

const HeaderPage=()=>{
    return(
       
         <nav className='header-container'>
            <div className='logo'>
                <p>Aithor</p>
                <div className='icon'>
                <ImPencil2 width={60}/>
                </div>
            </div>

            <div>
            <ul className='nav-links'>
                <li>
                    <a href='https://www.linkedin.com/in/kokatam-janardhan-reddy' target='_blank' className='anchor-tag'>
                    <FaLinkedin/>
                    </a>
                    </li>
                <li>
                    <a href='https://github.com/Janardhan-2003/Aithor1' target='_blank' className='anchor-tag'>
                    <FaGithub/>
                    </a>
                    </li>
                <li>
                    <a href='https://x.com/Jana_kokatam9' target='_blank' className='anchor-tag'><FaXTwitter/>
                    </a>
                    </li>
            </ul>
            </div>

         </nav>
       
    )
}

export default HeaderPage;