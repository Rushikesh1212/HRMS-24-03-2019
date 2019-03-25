import React, {Component} from 'react';
import "/imports/attendanceMgmt/attendanceSystem/layouts/Header/header.css";
import ScriptTag from 'react-script-tag';

export default class Header extends Component{
	constructor(props){
		super(props);
		this.state = {
		};		
	}


	render(){
		
		return (

		<div className="row">
		<ScriptTag isHydrating={ true } type="text/javascript" src="/imports/common/Header/myscript.js"/>

		
					<div className="headerComp">
						<div id="navbar" className="collapse navbar-collapse">
							<div className=" pull-left">
							<a href="#" className="btn-expand-collapse"> <span className="glyphicon"><i className="fa fa fa-bars tbtn"></i>
							</span></a>
							</div>

							<div className="navbar-custom-menu pull-right">
								<ul className="nav navbar-nav">
									
									<li className="imgtext ">
										<i className="fa fa-envelope "></i>
										<span className="label label-success navlbl">4</span>
									</li>

									<li className=" imgtext">
										<i className="fa fa-bell "></i>
										<span className="label label-warning navlbl">10</span>
									</li>

									<li className=" imgtext">
										<i className="fa fa-flag "></i>
										<span className="label label-danger navlbl">9</span>
									</li>

									<li className=" imgtext1 ">
										<img src="images/user.png " className="imgUser  " alt="User Image"/>
										<span >Alexander Pierce</span>
									</li>

									<li className="  imgtext" >
										<i className="fa fa-gears"></i>
									</li>

								</ul>
							</div>
						</div>
					</div>

			</div>
		);
	};
}