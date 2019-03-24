import React from "react";

import '/imports/empInduction/displayProfile/DisplayPro.css';

export default class DisplayPro extends React.Component {
  state = {
  };

  render(){
    return(
        <div>
          <div className="container box col-lg-12">
            <div className="col-lg-8 profile-box">
              <img className="col-lg-2 img-responsive" src="images/profile.png"/>
              <div className="col-lg-8">
                <h4>Ms. XYZ <small>123456</small></h4>
                <br/>
                <p className="text-blue text-bold">Employee</p>
                <br/>
                <p className="text-grey text-normal">Category</p>
                <br/>
                <p className="text-grey text-normal">Dept.</p>
                <br/>
                <br/>
                <p className="text-grey text-normal">Location</p>
              </div>
              <img className="col-lg-2 img-responsive" src="images/earth-india.png"/>
              <div className="col-lg-8 contact-header"></div>
              <div className="col-lg-8 contact-body">
                <p className="text-blue text-normal">Mobile: </p>
                <br/>
                <p className="text-blue text-normal">Office:</p>
                <br/>
                <p className="text-blue text-normal">Email:</p>
                <br/>
              </div>
            </div>
            
            <div className="col-lg-4 org-chart">
              <div className="org-chart-header text-center bg-primary">Organization Chart</div>
            </div>


            
            <div className="col-lg-12">
              <ul className="nav nav-pills">         
                <li className="nav-item">
                  <a className="nav-link active" href="#">Personal</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Educational Qualification</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Work Expereince</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Reporting Structure</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Summary</a>
                </li>
            </ul>
            </div>
          </div>
        </div>
      );
  }
}
