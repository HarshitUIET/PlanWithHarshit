import React, { useState } from "react";


function Card({ id, name, info, image, price, remove }) {

    const [readMore, setReadmore] = useState(true);
    const description = readMore ? `${info.substr(0, 200)}...` : info;



    return (
        <div className="card">
         

                <img src={image} className="image" />

                <div className="tour-info">
                    <h4 className="tour-price">₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={() => { setReadmore(!readMore) }}>
                        {readMore ? 'Readmore' : 'Readless'}
                    </span>
                </div>

                <button className = "Inter-btn" onClick={() => { remove(id) }}>Not Interested</button>

           
        </div>
    )
}


export default Card;