import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function AddPlan() {
    var [plan,setPlan]=useState({
        title:"Silver",
        discount:"20",
        price:"3000"
    })
    var {details} = useSelector(state=>state.business)
    function addPlan(){
        var temp = JSON.parse(JSON.stringify(details))
        if(!temp.plans){
            temp.plans=[];
        }
        temp.plans.push(plan);
        axios.put(`http://localhost:4000/businessaccounts/${details.id}`,temp)
        .then((res)=>{console.log(res)})
    }
  return (
    <div>
        <h1>AddPlan</h1>
        <div className="form-group">
            <div class="mb-3 form-floating">
                <input type="text" value={plan.title} onChange={(e)=>{setPlan({...plan,title:e.target.value})}} class="form-control" id="title" placeholder='Enter Title' />
                <label for="title">Enter Title</label>
            </div>
            <div class="mb-3 form-floating">
                <input type="text" value={plan.discount} onChange={(e)=>{setPlan({...plan,discount:e.target.value})}} class="form-control" id="discount" placeholder='Enter Discount' />
                <label for="discount">Enter Discount</label>
            </div>
            <div class="mb-3 form-floating">
                <input type="text" value={plan.price} onChange={(e)=>{setPlan({...plan,price:e.target.value})}} class="form-control" id="price" placeholder='Enter Price' />
                <label for="price">Enter price</label>
            </div>
            <button class="btn btn-info" onClick={()=>{addPlan()}}> + Add Plan</button>
        </div>
    </div>
  )
}

export default AddPlan