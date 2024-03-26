import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function BusinessDashboard() {
    var {details}=useSelector(state=>state.business);

  return (
    <div>
        <h1>{details.businessname}</h1>
        <p>{JSON.stringify(details)}</p>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card p-2">
                <h1>Plans</h1>
                <div class="card-body">
                    <h5 class="card-title">{details.plans?.length?details.plans.length:"no plans registered"}</h5>
                    <Link to={"/addPlan"} class="btn btn-success"> + Add Plan</Link>
                    
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card p-2">
                <h1>Customers</h1>
                <div class="card-body">
                    <h5 class="card-title">{details.customers?.length?details.customers.length:"no customers registered"}</h5>
                    <Link to={"/addCustomer"} class="btn btn-success"> + Add Customer</Link>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card p-2">
                <h1>Services</h1>
                <div class="card-body">
                    <h5 class="card-title">{details.services?.length?details.services.length:"no services registered"}</h5>
                    <Link to={"/addService"} class="btn btn-success"> + Add Service</Link>
                </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default BusinessDashboard