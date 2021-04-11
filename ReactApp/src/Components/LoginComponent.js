import React from "react";

const LoginComponent = (props) =>{
    return (
      React.createElement('div', {},
      React.createElement('div', {className: 'text-center'}, <img src="/assets/icon-256x256.png" class="rounded" alt="Logo"/>),
      React.createElement('div',{className:"form-group row justify-content-md-center justify-content-center"},React.createElement('div',{className:"col-6 mt-4 col-sm-6 col-md-4 col-lg-3"},<input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>)),
      React.createElement('div',{className:"form-group row justify-content-md-center justify-content-center"},React.createElement('div',{className:"col-6 mt-4 col-sm-6 col-md-4 col-lg-3"},<input type="password" class="form-control" id="inputPassword3" placeholder="Password"/>)),
      React.createElement('div',{className:"form-group row justify-content-md-center justify-content-center"},React.createElement('div',{className:"col-5 mt-4"},<button type="submit" class="btn btn-primary btn-lg mx-auto d-block">Login</button>))
      

      )
     
      //React.createElement('div',{className:"form-group row justify-content-md-center justify-content-center"},React.createElement('div',{className:"col-6 mt-4 col-sm-6 col-md-4 col-lg-3"},<input type="email" class="form-control" id="inputEmail3" placeholder="Email"/></input>)))

  //   <div class="text-center">
  //   <img src="/assets/icon-256x256.png" class="rounded" alt="Logo">
  //   </div>
  //   <form>
  //   <div class="form-group row justify-content-md-center justify-content-center">
  //     <div class="col-6 mt-4 col-sm-6 col-md-4 col-lg-3">
  //       <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
  //     </div>
  //   </div>
  //   <div class="form-group row justify-content-md-center justify-content-center">
  //     <div class="col-6 mt-4 col-sm-6 col-md-4 col-lg-3">
  //       <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
  //     </div>
  //   </div>
   
  //   <div class="form-group row justify-content-md-center justify-content-center">
  //     <div class="col-5 mt-4">
  //       <button type="submit" class="btn btn-primary btn-lg mx-auto d-block">Login</button>
  //     </div>
  //   </div>
  // </form>
    )
}

export default LoginComponent;