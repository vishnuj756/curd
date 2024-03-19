import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function Read() {
    const { id }=useParams();
    const[data,setData]=useState(null);
    useEffect(()=>{
        axios.get(`http://localhost:3000/profile/${id}`).then((res)=>{
            setData(res.data)
        })
    },[])
  return (
    <div className='container border-2 border-warning mt-3'>
    <h1>Read Operation</h1>
    <table className='table border border-5 '>
    <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Reviews</th>
    </thead>
    <tbody>
        <tr>
            <td>{data?.id}</td>
            <td>{data?.name}</td>
            <td>{data?.review}</td>
        </tr>
    </tbody>
      </table>
    </div>
  )
}
