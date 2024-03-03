import React from 'react'

export default function Signup() {
  return (
    <>
       <div className='m-5'>
  <div className='display-4 lead '>SignUp</div>
<form class="row-3 m-3 p-3 form ">
  <div class="col-md-6">
    <label for="name" class="form-label">Enter Name :</label>
    <input type="text" class="form-control" id="name" placeholder='i-e Mark'/>
  </div>
  <div class="col-md-6">
    <label for="nu_id" class="form-label">Enter Nu ID :</label>
    <input type="email" class="form-control" id="nu_id" placeholder='i-e 22k-1234'/>
  </div>
  <div class="col-md-6">
    <label for="password" class="form-label">Enter Password :</label>
    <input type="password" class="form-control" id="password"/>
  </div>
  <div class="col-md-6">
    <label for="cpassword" class="form-label">Confirm Password :</label>
    <input type="cpassword" class="form-control" id="cpassword"/>
  </div>
  <div class="col-md-4">
    <label for="course" class="form-label">State</label>
    <select id="course" class="form-select">
      <option selected>Choose...</option>
      <option>CS</option>
      <option>SE</option>
      <option>Cyber security  </option>
      <option>Data Science</option>
    </select>
  </div>
  <div class="col-12">
  <br/>
    <button type="submit" class="btn btn-primary">Sign up</button>
  </div>
</form>
    </div>      
    </>
  )
}
    