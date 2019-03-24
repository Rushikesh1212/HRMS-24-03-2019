import React, {Component} from 'react';
import "/imports/attendanceMgmt/attendanceSystem/MainLayout/mainLayout.css"
// import Graphical from "/imports/attendanceSystem/MonthlyCalendar/Graphical.jsx"
// import FinalYearCalendar from "/imports/attendanceSystem/FinalYearCalendar.jsx"


export default class MainLayout extends Component{
	constructor(){
		super(),
		this.state={

		}
	}

	render(){
		return(
			<div>

				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 tab calibri-font">
					<ul className="nav nav-pills" data-tabs="tabs" role="tablist">
						  <li><p>Calendar View: </p></li>						 
						  <li className="nav-item">
						    <a className="nav-link" data-toggle="tab" href="#monthlyCalendar">Monthly</a>
						  </li>
						  <li className="nav-item active">
						    <a className="nav-link active" data-toggle="tab" href="#yearlyCalendar">Yearly</a>
						  </li>
					</ul>
				</div>

				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 calibri-font">
					<ul className="color-label">
						<li className="col-lg-2"><span className="label label-primary"></span><p>Present</p></li>
						<li className="col-lg-2"><span className="label label-warning"></span><p>Half-Day</p></li>
						<li className="col-lg-2"><span className="label label-danger"></span><p>Absent</p></li>
						<li className="col-lg-2"><span className="label label-default"></span><p>Weekly-Off</p></li>
						<li className="col-lg-2"><span className="label label-success"></span><p>Company Holiday</p></li>
					</ul>					
				</div>

				
			</div>
			)
	}
}