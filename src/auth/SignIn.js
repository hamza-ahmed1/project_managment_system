import React from 'react'

export default function SignIn() {
  return (
 <>
       <div className='m-5'>
      <div className='display-4 lead'>SignIn</div>
<form class="row-4 m-3 form p-3">
 
  <div class="col-md-6">
    <label for="nu_id" class="form-label">Enter Nu ID :</label>
    <input type="email" class="form-control" id="nu_id" placeholder='i-e 22k-1234'/>
  </div>
  <div class="col-md-6">
    <label for="password" class="form-label">Enter Password :</label>
    <input type="password" class="form-control" id="password"/>
  </div>
  <div class="col-md-12">
  <br/>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
    </div>
 </>
  )
}
