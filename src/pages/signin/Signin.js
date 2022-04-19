import React from 'react';
import './signin.css'
export default function signin() {
  return (
  <div>
    
     <div className='signinbox'>
      <div classname='signinheadtext'>
        <div>
          <div className='signinmainhead'>
            My Account
          </div>
          <div className='signinsubhead'>
            Sign in for more options
          </div>
          
          </div>
      </div>
    </div> 
      
       <div>
       <form> 
         <div class="mb">
  <div class="mb-3">
    <label for="exampleInputName" class="form-label">FullName</label>
    <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp"></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputNumber" class="form-label">Contact Number</label>
    <input type="number" class="form-control" id="exampleInputNumber" aria-describedby="emailHelp"></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword2"></input>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form> 
</div>
</div>)
          

   
  
}

