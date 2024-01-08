import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function Addimage(){
    var {id} = useParams()  
    const [sand,setSand] = useState('');
    const [cement,setCement] = useState('');
    const [bricks,setBricks] = useState('');
    const [stone,setStone] = useState('');
    const [msand,setMsand] = useState('');
    const [psand,setPsand] = useState('');
    const [rod,setRod] = useState('');
    const [image,setImage] = useState('');
    const [price, setPrice] = useState('');

    useEffect(()=>{
        fetch('http://localhost:2222/addimage/'+id)
        .then((res) => res.json())
        .then((data) => {
        setSand(data[0].sand);
        setCement(data[0].cement);
        setBricks(data[0].bricks);
        setStone(data[0].stone);
        setMsand(data[0].msand);
        setPsand(data[0].psand);
        setRod(data[0].rod);
        setImage(data[0].image);
        setPrice(data[0].price);
    });
},[]);

function addimage(event){
    event.preventDefault();
    var sand = document.getElementById("sand").value;
    var cement = document.getElementById("cement").value;
    var bricks = document.getElementById("bricks").value;
    var stone = document.getElementById("stone").value;
    var msand = document.getElementById("msand").value;
    var psand = document.getElementById("psand").value;
    var rod = document.getElementById("rod").value;
    var image = document.getElementById("image").value;
    var price = document.getElementById("price").value;

    var key = {
        sand:sand,
        cement:cement,
        bricks:bricks,
        stone:stone,
        msand:msand,
        psand:psand,
        rod:rod,
        image:image,
        price:price,

      };
      if (sand === "") {
        alert("Enter the Sand");
      } else if (cement === "") {
        alert("Enter the Cement");
      } 
      else if (bricks === "") {
        alert("Enter the Bricks");
      }
      else if (stone === "") {
        alert("Enter the Stone");
      }
      else if (msand === "") {
        alert("Enter the Msand");
      }
      else if (psand === "") {
        alert("Enter the Psand");
      }
      else if (rod === "") {
        alert("Enter the Rod");
      } 
      else if (image === "") {
        alert("Enter the Image");
      }
      else if (price === "") {
        alert("Enter the Price");
      } 
      else {
        axios.post("http://localhost:2222/addimage/", key)
          .then((addimage) => {
            if (addimage.data.status === "error") {
              alert("image not added");
              console.log("not_added");
            } else if (addimage.data.status === "success") {
              alert("image added Successfully!");
              console.log("success");
            }
          });
      }
}
    return(
        <>
<div className="addimagepage">
               <div className="addimage container text-center w-75 p-5 text-white">
                     <form onSubmit={addimage} className="needs-validation">
                         <h1 className="mb-4">Add Image & Details</h1>

                         <div className="mb-3">
                             <label htmlFor="sand" className="form-label">
                             Sand
                             </label>
                             <input type="text" className="form-control" id="sand" required />
                         </div>

                         <div className="mb-3">
                             <label htmlFor="cement" className="form-label">
                                 Cement
                             </label>
                             <input type="text" className="form-control" id="cement" required />
                         </div>

                        <div className="mb-3">
                             <label htmlFor="bricks" className="form-label">
                             Bricks
                             </label>
                             <input type="text" className="form-control" id="bricks" required />
                         </div>

                         <div className="mb-3">
                             <label htmlFor="Stone" className="form-label">
                                 Stone
                             </label>
                             <input type="text" className="form-control" id="stone" required />
                         </div>

                         <div className="mb-3">
                             <label htmlFor="msand" className="form-label">
                                 Msand
                             </label>
                             <input type="text" className="form-control" id="msand" required />
                         </div>

                         <div className="mb-3">
                             <label htmlFor="psand" className="form-label">
                             Psand
                             </label>
                             <input type="text" className="form-control" id="psand" required />
                         </div>

                         <div className="mb-3">
                             <label htmlFor="rod" className="form-label">
                             Rod
                             </label>
                             <input type="text" className="form-control" id="rod" required />
                         </div>

                         <div className="mb-3">
                             <label htmlFor="Image" className="form-label">
                                 Enter the Image
                             </label>
                             <input type="text" className="form-control" id="image" required />
                         </div>

                         <div className="mb-3">
                             <label htmlFor="price" className="form-label">
                             Price
                             </label>
                             <input type="text" className="form-control" id="price" required />
                         </div>

                         <button type="submit" className="btn btn-primary btn-lg">
                             Add Image
                         </button>
                     </form>
                 </div>
             </div>
        </>
    );
}