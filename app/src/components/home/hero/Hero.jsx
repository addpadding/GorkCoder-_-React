import React from "react";

import "./hero.css";
import Title from "../../common/title/Title";

const Hero = () => {
    return (
    <>
    <section className="hero">
        <div className="container">
            <div className="row">
                
                <Title subtitle="Welcome TO ACADEMIA" title="Best Online Education" />

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perspiciatis accusantium beatae cumque, laudantium tempora aliquid
                    rerum quae fuga doloremque, asperiores eum animi dolorum est iure
                    similique ducimus ut molestiae quisquam!
                </p>

                <div className="button">
                    <button className="primary-btn">
                        Get Startet Now <i className="fa fa-long-arrow-alt-right"></i>
                    </button>
                    <button>
                        View Cource <i className="fa fa-long-arrow-alt-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <div className="margin"></div>
    
    </>
    );
};

export default Hero;
