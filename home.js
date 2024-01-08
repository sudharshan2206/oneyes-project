import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

export function Dashboard() {
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        fetch("http://localhost:2222/imagedisplay")
            .then(response => response.json())
            .then(data => setDetail(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []); // Pass an empty dependency array to useEffect to run the effect only once on mount

    return (
        <>
            <div className="imageReview">
                <div>
                    <h3 className="text-center"><Typewriter
                        options={{
                            strings: ['Blueprint Image Valuation'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></h3>
                    <div>
                        <Link to="/addimage" className="btn btn-dark ms-2">ADD IMAGE</Link>
                    </div>
                    <div className="row">

                        {detail.map((value, index) => (
                            <div key={index} className="col-lg-3 ms-4 mt-4">
                                <div className="card carditems col-lg-9">
                                    <img src={value.image} className="cardimg" alt={`Image ${index}`} />
                                    <div className="card-body">
                                        <Link to={`/singleimage/${value.id}`} className="btn btn-dark">view more</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
