import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Container ,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


export default function Create() {
    const [data,setdata]=useState({
        name:"",
        review:"",
        mobile:"",
    })
    const Navigation=useNavigate()
    const handle=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/profile",data).then((res)=>{
            alert("data Insterted")
Navigation('/')
        })
    }
  return (
 <Container>
    <div>
    <form  onSubmit={handle}>
   
          <div>
          <label htmlFor="Name">Name</label>
            <input type="text" className='form-control' onChange={(e)=>{setdata({...data,name:e.target.value})}}/>
          </div>
          <div>
          <label htmlFor="Mobile">Mobile</label>
          <input type="text" className='form-control' onChange={(e)=>{setdata({...data,mobile:e.target.value})}} />
          </div>
          <div>
          <label htmlFor="review">Review</label>
          <input type="text" className='form-control' onChange={(e)=>{setdata({...data,review:e.target.value})}} />
          </div>
          <div>
            <Button type='submit' className='btn-danger'>Submit</Button>
          </div>
    </form>
    </div>
 </Container>
  )
}
