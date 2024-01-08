// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// export function Update() {
//     var { id } = useParams();
//     const [sand, setSand] = useState("");
//     const [cement, setCement] = useState("");
//     const [bricks, setBricks] = useState("");
//     const [stone, setStone] = useState("");
//     const [timber,setTimber] = useState('');
//     const [msand, setMsand] = useState("");
//     const [psand, setPsand] = useState("");
//     const [price, setPrice] = useState("");
//     const [rod, setRod] = useState("");
//     const [image, setImage] = useState("");

//     useEffect(() => {
//         fetch("http://localhost:2222/singleimage/" + id)
//             .then((detail) => detail.json())
//             .then((singleimage) => {
//                 setSand(data[0].sand);
//                 setCement(data[0].cement);
//                 setBricks(data[0].bricks);
//                 setStone(data[0].stone);
//                 setTimber(data[0].timber);
//                 setMsand(data[0].msand);
//                 setPsand(data[0].psand);
//                 setRod(data[0].rod);
//                 setImage(data[0].image);
//             });
//     }, []);

//     function update(event) {
//         event.preventDefault();
//         var key = {
//             sand:sand,
//             cement:cement,
//             bricks:bricks,
//             stone:stone,
//             timber:timber,
//             msand:msand,
//             psand:psand,
//             rod:rod,
//             image:image,
//         };

//         if (sand === "") {
//             alert("Enter the Sand");
//           } else if (cement === "") {
//             alert("Enter the Cement");
//           } 
//           else if (bricks === "") {
//             alert("Enter the Bricks");
//           }
//           else if (stone === "") {
//             alert("Enter the Stone");
//           }
//           else if (timber === "") {
//             alert("Enter the Timber");
//           }
//           else if (msand === "") {
//             alert("Enter the Msand");
//           }
//           else if (psand === "") {
//             alert("Enter the Psand");
//           }
//           else if (rod === "") {
//             alert("Enter the Rod");
//           } 
//           else if (image === "") {
//             alert("Enter the Image");
//           } else {
//             axios.put("http://localhost:2222/updateimage/" + id, key)
//                 .then((upddet) => {
//                     if (upddet.data.status === "not_updated") {
//                         alert("data not updated");
//                         console.log("not_updated");
//                         console.log(key);
//                     } else if (upddet.data.status === "success") {
//                         alert("data updated Successfully!");
//                         console.log("success");
//                         window.location.href = /singleimage/${id};
//                     }
//                 });
//         }
//     }

//     return (
//         <>
//             <div className="updateImage container-fluid">
//                 <div className="container text-center title">
//                     <h3>Image Valuation</h3>
//                 </div>
//                 <div className="container text-center w-75 p-5">
//                     <form onSubmit={update}>

//                     <input
//                             type="text"
//                             className="form-control mb-2"
//                             placeholder="Sand"
//                             onChange={(upd) => setSand(upd.target.value)}
//                             id="sand"
//                             value={sand}
//                         />

//                     <input
//                             type="text"
//                             className="form-control mb-2"
//                             placeholder="Cement"
//                             onChange={(upd) => setCement(upd.target.value)}
//                             id="cement"
//                             value={cement}
//                         />

//                         <input
//                             type="text"
//                             className="form-control mb-2"
//                             placeholder="Brick"
//                             onChange={(upd) => setBricks(upd.target.value)}
//                             id="brick"
//                             value={brick}
//                         />

//                         <input
//                             type="text"
//                             className="form-control mb-2"
//                             placeholder="Stone"
//                             onChange={(upd) => setStone(upd.target.value)}
//                             id="stone"
//                             value={stone}
//                         />

// <input
//                             type="text"
//                             className="form-control mb-2"
//                             placeholder="Timber"
//                             onChange={(upd) => setTimber(upd.target.value)}
//                             id="timber"
//                             value={timber}
//                         />

//                         <input
//                             type="text"
//                             className="form-control mb-2"
//                             placeholder="Msand"
//                             onChange={(upd) => setMsand(upd.target.value)}
//                             id="msand"
//                             value={msand}
//                         />
//                         <input
//                             type="text"
//                             className="form-control mb-2"
//                             placeholder="Psand"
//                             onChange={(upd) => setPsand(upd.target.value)}
//                             id="psand"
//                             value={psand}
//                         />
//                         <input
//                             type="text"
//                             className="form-control mb-2"
//                             placeholder="Price"
//                             onChange={(upd) => setPrice(upd.target.value)}
//                             id="price"
//                             value={price}
//                         />

// <input
//                             type="text"
//                             className="form-control mb-2"
//                             placeholder="Rod"
//                             onChange={(upd) => setRod(upd.target.value)}
//                             id="rod"
//                             value={rod}
//                         />

//                         <input
//                             type="text"
//                             className="form-control mb-2"
//                             placeholder="Image URL"
//                             onChange={(upd) => setImage(upd.target.value)}
//                             id="image"
//                             value={image}
//                         />
//                         <input
//                             type="submit"
//                             className="btn btn-secondary btn-lg bg-success"
//                             value="Update"
//                         />
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
//     }

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Update() {
    const { id } = useParams();
    const [sand, setSand] = useState("");
    const [cement, setCement] = useState("");
    const [bricks, setBricks] = useState("");
    const [stone, setStone] = useState("");
    const [timber, setTimber] = useState('');
    const [msand, setMsand] = useState("");
    const [psand, setPsand] = useState("");
    const [rod, setRod] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        fetch("http://localhost:2222/singleimage/" + id)
            .then((response) => response.json())
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
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

    function update(event) {
        event.preventDefault();
        var key = {
            sand: sand,
            cement: cement,
            bricks: bricks,
            stone: stone,
            msand: msand,
            psand: psand,
            rod: rod,
            image: image,
            price: price,
        };

        if (sand === "" || cement === "" || bricks === "" || stone === "" || msand === "" || psand === "" || rod === "" || image === "" || price == "") {
            alert("Please fill in all the fields");
        } else {
            axios.put("http://localhost:2222/updateimage/" + id, key)
                .then((upddet) => {
                    if (upddet.data.status === "not_updated") {
                        alert("Data not updated");
                        console.log("not_updated");
                        console.log(key);
                    } else if (upddet.data.status === "success") {
                        alert("Data updated successfully!");
                        console.log("success");
                        window.location.href = `/singleimage/${id}`;
                    }
                })
                .catch((error) => console.error("Error updating data:", error));
        }
    }

    return (
        <>
            {/* <div className="updateImage">
                <div className="text-center row">
                    <h3>Image Valuation</h3>
                </div>
                <div className="col-lg-4">

                    <form onSubmit={update}>
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Sand"
                            onChange={(upd) => setSand(upd.target.value)}
                            value={sand}
                        />

<input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Cement"
                            onChange={(upd) => setCement(upd.target.value)}
                            id="cement"
                            value={cement}
                        />

<input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Cement"
                            onChange={(upd) => setCement(upd.target.value)}
                            id="cement"
                            value={cement}
                        />

<input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Bricks"
                            onChange={(upd) => setBricks(upd.target.value)}
                            id="bricks"
                            value={bricks}
                        />

<input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Stone"
                            onChange={(upd) => setStone(upd.target.value)}
                            id="stone"
                            value={stone}
                        />

<input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Msand"
                            onChange={(upd) => setMsand(upd.target.value)}
                            id="msand"
                            value={msand}
                        />

<input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Psand"
                            onChange={(upd) => setPsand(upd.target.value)}
                            id="psand"
                            value={psand}
                        />

<input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Rod"
                            onChange={(upd) => setRod(upd.target.value)}
                            id="rod"
                            value={rod}
                        />

                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Price"
                            onChange={(upd) => setPrice(upd.target.value)}
                            id="price"
                            value={price}
                        />

<input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Image URL"
                            onChange={(upd) => setImage(upd.target.value)}
                            id="image"
                            value={image}
                        />

                        <input
                            type="submit"
                            className="btn btn-secondary btn-lg bg-success"
                            value="Update"
                        />
                    </form>
                </div>
            </div> */}

            <div className="updateImage">
                <div className="text-center row">
                    <h3 className="text-white">Image Valuation</h3>
                </div>
                <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
                    <form onSubmit={update}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-2"
                                placeholder="Sand"
                                onChange={(upd) => setSand(upd.target.value)}
                                value={sand}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-2"
                                placeholder="Cement"
                                onChange={(upd) => setCement(upd.target.value)}
                                value={cement}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-2"
                                placeholder="Bricks"
                                onChange={(upd) => setBricks(upd.target.value)}
                                value={bricks}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-2"
                                placeholder="Stone"
                                onChange={(upd) => setStone(upd.target.value)}
                                value={stone}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-2"
                                placeholder="Msand"
                                onChange={(upd) => setMsand(upd.target.value)}
                                value={msand}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-2"
                                placeholder="Psand"
                                onChange={(upd) => setPsand(upd.target.value)}
                                value={psand}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-2"
                                placeholder="Rod"
                                onChange={(upd) => setRod(upd.target.value)}
                                value={rod}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-2"
                                placeholder="Price"
                                onChange={(upd) => setPrice(upd.target.value)}
                                value={price}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-2"
                                placeholder="Image URL"
                                onChange={(upd) => setImage(upd.target.value)}
                                value={image}
                            />
                        </div>

                        <input
                            type="submit"
                            className="btn btn-secondary bg-success updateBtn"
                            value="Update"
                        />
                    </form>
                </div>
            </div>

        </>
    );
}
