import { Link } from "react-router-dom"
import "./Pricing.css"

import React from 'react'

const Pricing = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">- $50 -</p>
                <p>- 3 days -</p>
                <p>- 3 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>- Advanced -</h3>
                <span className="bar"></span>
                <p className="btc">- $200 -</p>
                <p>- 3 months -</p>
                <p>- 20 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>- Pro -</h3>
                <span className="bar"></span>
                <p className="btc">- $500 -</p>
                <p>- 1 year -</p>
                <p>- 70 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default Pricing