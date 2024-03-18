import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Container ,Button} from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
export default function Update() {
    const {id}=useParams();
    const [data,setdata]=useState({
        id:id,
        name:"",
        mobile:"",
        review:""
    })
    useEffect(()=>{
        axios.get(`http://localhost:3000/profile/${id}`).then((res)=>{
            setdata(res.data)
        })
    },[])
    const navigation=useNavigate()
    const handle=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:3000/profile/${id}`,data).then((res)=>{
            alert("data is updated")
            navigation('/')
        })
    }
  return (
    <Container c>
        <div className='p-5 border shadow-lg'>
        <form  onSubmit={handle}>
   <div>
    <label htmlFor="id">Id:</label>
   </div>
   <div>
   <label htmlFor="Name">Name:</label>
     <input type="text" className='form-control' onChange={(e)=>{setdata({...data,name:e.target.value})}} value={data.name}/>
   </div>
   <div>
   <label htmlFor="Mobile">Mobile:</label>
   <input type="number" className='form-control' onChange={(e)=>{setdata({...data,mobile:e.target.value})}} value={data.mobile} />
   </div>
   <div>
   <label htmlFor="review">Review:</label>
   <input type="text" className='form-control' onChange={(e)=>{setdata({...data,review:e.target.value})}} value={data.review} />
   </div>
   <div>
     <Button type='submit' className='btn-danger'>Submit</Button>
   </div>
</form>
        </div>
    </Container>
  )
}
