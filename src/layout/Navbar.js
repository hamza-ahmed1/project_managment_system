import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

export default function Navbar() {
  return (
    <div className="container-fluid mt-4 m-0">
      <div className="row">
        <div className="col-md-12">

          <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="col order-first">
       
              <Link to={'/'} className='navbar-brand '>
              <img src='logo.avif' height={'50'} width={'50'} className='rounded-pill ms-3 ' alt="Profile"/>
              </Link>
              <Link className="navbar-brand lead" to={"/"}>
                Fast Projects
              </Link>
            </div>
            <div className="col">
              <SignedInLinks />
            </div>
            <div className="col order-last">
              <SignedOutLinks/>
            </div>
      
    </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
