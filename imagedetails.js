import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export function Singleimage() {
    var { id } = useParams()
    const [detail, setDetail] = useState('')
    const [image, setImage] = useState('')
    const [bricks, setBricks] = useState('')
    const [cement, setCement] = useState('')
    const [rod, setRod] = useState('')
    const [sand, setSand] = useState('')
    const [stone, setStone] = useState('')
    const [msand, setMsand] = useState('')
    const [psand, setPsand] = useState('')
    const [price, setPrice] = useState('')


    useEffect(() => {
        fetch("http://localhost:2222/singleimage/" + id)
            .then(detail => detail.json())
            .then((singleimage) => {
                setImage(singleimage[0].image)
                setBricks(singleimage[0].bricks)
                setCement(singleimage[0].cement)
                setRod(singleimage[0].rod)
                setSand(singleimage[0].sand)
                setStone(singleimage[0].stone)
                setMsand(singleimage[0].msand)
                setPsand(singleimage[0].psand)
                setPrice(singleimage[0].price)
            }
            )
    }, [])
    const del = (id) => {
        var key = { id: id }
        axios.post("http://localhost:2222/delete/", key)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("data not deleted")
                }
                else if (res.data.status === "success") {
                    alert("data deleted")
                }
            })
    }

    return (
        <>

            <div className="singleImage">
                <div className="text-center">
                    <h3>Image Valuation</h3>
                </div>
                <Link to={`/`} className="btn btn-dark ms-2">Home</Link>
                <div className='row'>
                    <div className='col-lg-4 singlecard ms-2 mt-3'>
                        <img src={image} className='img-fluid' />
                    </div>
                    <div className="col-lg-2"></div>
                    <div className='col-lg-4 singlecard mt-5'>
                        <p>Cement: {cement} Bags</p>
                        <p className="singledesc" >Bricks: {bricks} counts</p>
                        <p className="singleprice">Rod: {rod} counts</p>
                        <p >Sand: {sand} units</p>
                        <p className="singlecat">Stone: {stone} units</p>
                        <p className="singlecat">Msand: {msand} units</p>
                        <p className="singlecat">Psand: {psand} units</p>
                        <p className="singlecat">Price: <span>$</span>{price} </p>

                        <Link to={`/updateimage/${id}`} className="btn btn-primary">Update Image</Link>
                        <button className="btn bg-danger ms-2 text-white" onClick={() => { del(id) }}>Delete</button>


                    </div>

                </div>
            </div>
        </>
    );
}