import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { updateBusinessDetails } from './businessSlice'
function BusinessLogin() {
    const [mobile, setmobile] = React.useState('')
    var dispatch = useDispatch()
    var navigate = useNavigate();
    function login(){
        axios.get(`http://localhost:4000/businessaccounts/?primarymobile=${mobile}`)
        .then((res)=>{
            console.log(res)
            if(res.data.length===0){
                alert("No account found with this Mobile Number")
                navigate("/businessregistration")
            }
            else{
                dispatch(updateBusinessDetails({...res.data[0]}))
                navigate("/businessdashboard")
            }
        })
    }
  return (
    <div className='w-50 ms-auto me-auto shadow p-3 card text-center'>
        <h3 className='m-3'>Business Login</h3>
        <div>
        <div class="mb-3 form-floating">
            <input type="text" onChange={(e)=>{setmobile(e.target.value)}} class="form-control" id="exampleInputEmail1" placeholder='Enter Your Mobile Number' />
            <label for="exampleInputEmail1">Enter Your Mobile Number</label>

        </div>
            {/* <button className='btn btn-outline-primary m-2 w-50'>Get OTP</button>
        <div class="mb-3 form-floating">
            <input type="password" class="form-control" placeholder='Enter OTP' id="exampleInputPassword1" />
            <label for="exampleInputPassword1" class="form-label"> Enter OTP</label>
        </div> */}
       
        <button type="submit" class="btn btn-primary w-50" onClick={()=>{login()}}>Login</button>
        <br />
        <Link to="/businessregistration">New User?</Link>
        </div>
    </div>
  )
}

export default BusinessLogin