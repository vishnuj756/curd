import React from "react";
import { useEffect } from "react";
import axios from 'axios';
import { Button, Container} from 'react-bootstrap'
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home () {
    const [data,setdata]=useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/profile").then((res) => {
            setdata(res.data);
        })
    }, [])
    return (<div>
        <Container className="">
            <h2 className="text-center">Curd Operation</h2>
            <div className="border border-3 p-5">
            <div className="text-end"><Link to="/create"><Button className="btn-primary">Create +</Button></Link></div>
<table className="table ">
    <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Mobile</th>
        <th>Review</th>
        <th>Action</th>
    </thead>
    <tbody>
        {
            data.map((item)=>{
                return(<>
                    <tr key="item.id" className="pt-5">
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.mobile}</td>
                    <td>{item.review}</td>
                    <td className="d-flex gap-3">
                        <Link to={`/read/${item.id}`}><Button className="btn-success"> Read</Button></Link>
                        <Link to={`/delete/${item.id}`}><Button className="btn-danger"> Delete</Button></Link>
                        <Link to={`/update/${item.id}`}><Button className="btn-warning">Update</Button></Link>
                    </td>
                    </tr>
                </>)
            })
        }
           
    </tbody>
</table>
            </div>
        </Container>
    </div>)
}