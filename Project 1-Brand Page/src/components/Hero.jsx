import React from 'react'

export default function Hero() {
                    

    return (
        <main className="hero">
            <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className="herobutton">
                <button>Shop Now</button>
                <button className='sec-btn'>Category</button>
            </div>

            <div className="shopping">
                <p>Also Available On</p>
                <div className="ecom">
                    <img src="/images/amazon.png" alt="amazon" />

                    <img src="/images/flipkart.png" alt="flipkart" />
                </div>

               
                    
                
            </div>
        </div>
        <div className="hero-img">
                <img src="/images/hero-image.png" alt="Nike Shoe" />
            </div>
        </main>
    )
}
