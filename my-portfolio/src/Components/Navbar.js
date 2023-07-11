import React from 'react'
import { FaInstagram, FaLinkedinIn, FaGithubSquare } from 'react-icons/fa'


function Navbar() {

    return (
        //logo
        <div className="navbar">
            <div className="logo">
                <h3>Adivya</h3>
            </div>
            <div className="togglepage">
                <ul>
                    <li>
                        <a href="#"> Home </a>

                    </li>
                    <li>
                        <a href="#"> Resume </a>

                    </li>
                    <li>
                        <a href="#"> Websites </a>

                    </li>
                    <li>
                        <a href="#"> DSA </a>

                    </li>
                    <li>
                        <a href="#"> My Blogs </a>

                    </li>
                </ul>

            </div>

            <div className="direct-contact">
                <ul className="contacts">
                    <li>
                        <a href="https://www.instagram.com/adivya._.jain/"><FaInstagram /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/adivya-jain/"><FaLinkedinIn /></a>
                    </li>
                    <li>
                        <a href="https://github.com/adivya-jain"><FaGithubSquare /></a>
                    </li>
                </ul>

            </div>
        </div>



    )



}


export default Navbar;