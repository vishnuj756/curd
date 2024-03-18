import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Container, } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'


export default function Delete() {
    const {id}=useParams()
    const[data,setdata]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3000/profile/${id}`).then((res)=>{
            setdata(res.data)
        })
    },[])
    const navigation=useNavigate()
    const handle=(e)=>{
e.preventDefault()
axios.delete(`http://localhost:3000/profile/${id}`).then((res)=>{
    alert('data has been deleted');
    navigation('/')
})
    }
  return (
    <Container>
        <div className='p-5 border border-3 mt-5'>
         <form onSubmit={handle}>
         <div>
          <label htmlFor="id">Id</label>
          <input type="text" className='form-control' readOnly value={data.id} />
          </div>
          <div>
          <label htmlFor="Name">Name</label>
            <input type="text" className='form-control' readOnly value={data.name} />
          </div>
          <div>
          <label htmlFor="Mobile">Mobile</label>
          <input type="text" className='form-control' readOnly value={data.mobile} />
          </div>
          <div>
          <label htmlFor="review">Review</label>
          <input type="text" className='form-control' readOnly value={data.review} />
          </div>
          <div>
            <Button type='submit' className='btn-danger'>Delete</Button>
          </div>
         </form>
        </div>
    </Container>
  )
}
