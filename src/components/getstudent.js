import React,{useState,useEffect} from 'react'
import studentservice from '../services/studentservice'
import { Table,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';



const Getstudent = () => {
    const initialValue = [];
    let studentsdatas = []
    const [students,setstudents] = useState(initialValue);
    const reptiles = ['alligator', 'snake', 'lizard'];

    useEffect(()=>{
        getstudentdata();
        setstudents(studentsdatas)
        // console.log(students)

    },[])

    const getstudentdata = () => {
        studentservice.getAll()
            .then(response => {
                setstudents(response.data);
                console.log(response.data);
                
                
            })
            .catch(e => {
                console.log(e);
            });
    };
   

    return (<>
        <Table striped bordered hover>
            <thead>
                <tr>
                    
                    <th>Name</th>
                    <th>rollno</th>
                    <th>college</th>
                </tr>
            </thead>
            <tbody >
                {students.map(item =>(
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.roll}</td>
                        <td>{item.college}</td>
                       
                    </tr>

                ))}
             
               
            </tbody>
        </Table>
        <Button><Link to="/add">Add</Link></Button>
    </>)

  
}

export default Getstudent
