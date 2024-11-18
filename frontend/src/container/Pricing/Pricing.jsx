import React from 'react'
import './Pricing.scss';
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
    return (
        <>
            <div className=" main">
                <div id="PrSize">
                    <h2>Basic Pack
                        <h1>Rs. 10k</h1>
                        <h6>/month</h6>
                    </h2>
                    <br />
                    <ul>
                        <li id='content'><FaCheck style={{ color: 'green' }} /> <span>Only Frontend Development</span>
                        </li>
                        <li id='content'><FaCheck style={{ color: 'green' }} /><span>Hosting not included
                        </span>
                        </li>
                        <li id='content'><FaCheck style={{ color: 'green' }} /><span>Maintenance not included</span></li>
                        <li id='content'><FaCheck style={{ color: 'green' }} /><span>Testing Included</span></li>
                    </ul>
                    <button className='btn'><h4>Discuss now</h4></button>
                </div>
                <div id="PrSize"> <h2>Medium Pack
                    <h1>Rs. 25k</h1>
                    <h6>/month</h6>
                </h2>
                    <br />
                    <ul>
                        <li id='content'><FaCheck style={{ color: 'green' }} /> <span>Frontend & Backend Development</span>
                        </li>
                        <li id='content'><FaCheck style={{ color: 'green' }} /><span>Basic Web Hostingt</span>
                        </li>
                        <li id='content'><FaCheck style={{ color: 'green' }} /><span>Free Domain not included</span></li>
                        <li id='content'><FaCheck style={{ color: 'green' }} /><span>Limited Maintenance for 1 month</span></li>
                    </ul><button className='btn'><h4>Discuss now</h4></button></div>
                <div id="PrSize"> <h2>Premium Pack
                    <h1>Rs. 10k</h1>
                    <h6>/month</h6>
                </h2>
                    <br />
                    <ul>
                        <li id='content'><FaCheck style={{ color: 'green' }} /> <span>Fullstack Development</span>
                        </li>
                        <li id='content'><FaCheck style={{ color: 'green' }} /><span>Premium Web Hosting</span>
                        </li>
                        <li id='content'><FaCheck style={{ color: 'green' }} /><span>Free Domaint</span></li>
                        <li id='content'><FaCheck style={{ color: 'green' }} /><span>Free Maintenance for 1st year</span></li>
                    </ul><button className='btn'><h4>Discuss now</h4></button></div>
            </div>


        </>
    )
}

export default Pricing

