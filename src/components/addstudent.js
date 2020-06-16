import React from 'react'
import { Button } from "react-bootstrap";
import studentservice from '../services/studentservice'
import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
const Addstudent = () => {
    // const initialTutorialState = {
       
    //     name: "",
    //     roll: "",
    //     college: ""
    // };

    // const [tutorial, setTutorial] = useState(initialTutorialState);
    // const [submitted, setSubmitted] = useState(false);
    const [name, setName] = React.useState('')
    const [roll, setRoll] = React.useState('')
    const [college, setCollege] = React.useState("")
    

    // const handleInputChange = event => {
    //     const { name, value } = event.target;
    //     setTutorial({ ...tutorial, [name]: value});
   // };
    const saveTutorial = async e => {
        let response
        e.preventDefault()
        response = await studentservice.create({name:name,roll:roll,college:college})

        if (response) {
            //
            console.log("success")
            console.log(response)
        } else {
            // show alert
        }

        // studentservice.create(data)
        //     .then(response => {
        //         setTutorial({
        //             name: response.data.name,
        //             roll: response.data.roll,
        //             college: response.data.college
        //         });
        //         setSubmitted(true);
        //         console.log(response.data);
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     });
    };
  

    
    return (
        <>
            <div className="submit-form">
                {(
                        <div>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    required
                                    value={name}
                                    onChange={e=>setName(e.target.value)}
                                    name="name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="college">College</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="college"
                                    required
                                    value={college}
                                    onChange={e => setCollege(e.target.value)}
                                    name="college"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="college">roll</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="roll"
                                    required
                                    value={roll}
                                    onChange={e => setRoll(e.target.value)}
                                    name="roll"
                                />
                            </div>
                            

                            <button onClick={saveTutorial} className="btn btn-success">
                                <Link to="/"></Link>
                                Submit
          </button>
                        </div>
                    )}
            </div>
                     
     </>
        
    )
}

export default Addstudent
