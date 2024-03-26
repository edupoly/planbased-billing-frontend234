import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function BusinessRegistration() {
  const [newbusiness, setnewbusiness] = React.useState({
    businessname:'',
    primarymobile:''
  })
  var navigate = useNavigate()
  function register(){
    axios.post("http://localhost:4000/businessaccounts",newbusiness)
    .then(()=>{
      alert("Busuness added");
      navigate("/businesslogin")
    })
    .catch(()=>{
      alert("Something went wrong")
    })
  }
  return (
    <div className='w-50 ms-auto me-auto shadow p-3 card text-center'>
      <h3 className='m-3'>Business Registration</h3>
      <div className=''>
        <div class="mb-3 form-floating">
            <input type="text" onChange={(e)=>{setnewbusiness({...newbusiness,businessname:e.target.value})}} class="form-control" placeholder='Enter Business Name' id="businessname"/>
            <label for="businessname">Enter Business Name</label>
        </div>
        <div class="mb-3 form-floating">
            <input type="text" onChange={(e)=>{setnewbusiness({...newbusiness,primarymobile:e.target.value})}}  class="form-control" placeholder='Enter Your Primary Mobile' id="exampleInputEmail1"/>
            <label for="exampleInputEmail1" class="form-label">Enter Your Primary Mobile</label>
        </div>
        {/* <button className='btn btn-outline-primary mb-2'>Get OTP</button> */}
        {/* <div class="mb-3 form-floating">
            <input type="password" class="form-control" placeholder='Enter OTP' id="exampleInputPassword1" />
            <label for="exampleInputPassword1" class="form-label">Enter OTP</label>
        </div> */}
       
        <button type="submit" class="btn btn-primary" onClick={()=>{register()}}>Submit</button>
        <br />
        <Link to="/businesslogin">Existing User?</Link>
      </div>
    </div>
  )
}

export default BusinessRegistration