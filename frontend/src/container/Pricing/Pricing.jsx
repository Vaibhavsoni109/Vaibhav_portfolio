import React from 'react'
import './Pricing.scss';
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
    return (
        <>
            <div className=" main">
                <div id="PrSize">
                    <h2>Basic
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
                    <button className='btn'>Discuss now</button>
                </div>
                <div id="PrSize"> <h2>Medium Pack
                        <h1>Rs. 25k</h1>
                        <h6>/month</h6>
                    </h2>
                    <br />
                    <ul>
                        <li id='content'><FaCheck style={{ color: 'green' }} /> <span>Frontend & Backend Development</span>
                        </li>
                        <li id='content'><FaCheck style={{ color: 'green' }} /><span>Only Frontend Development</span>
                        </li>
                        <li id='content'><FaCheck style={{ color: 'green' }} /><span>Only Frontend Development</span></li>
                        <li id='content'><FaCheck style={{ color: 'green' }} /><span>Only Frontend Development</span></li>
                    </ul></div>
                <div id="PrSize"> <h2>Basic
                        <h1>Rs. 10k</h1>
                        <h6>/month</h6>
                    </h2>
                    <br />
                    <ul>
                        <li id='content'><FaCheck style={{ color: 'green' }} /> <span>Only Frontend Development</span>
                        </li>
                        <li id='content'><FaCheck style={{ color: 'green' }} /><span>Only Frontend Development</span>
                        </li>
                        <li id='content'><FaCheck style={{ color: 'green' }} /><span>Only Frontend Development</span></li>
                        <li id='content'><FaCheck style={{ color: 'green' }} /><span>Only Frontend Development</span></li>
                    </ul></div>
            </div>


        </>
    )
}

export default Pricing

