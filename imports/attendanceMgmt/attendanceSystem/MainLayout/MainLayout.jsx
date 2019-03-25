import React, {Component} from 'react';
import "/imports/attendanceMgmt/attendanceSystem/MainLayout/mainLayout.css"
import Graphical from "/imports/attendanceMgmt/attendanceSystem/MonthlyCalendar/Graphical.jsx"
import FinalYearCalendar from "/imports/attendanceMgmt/attendanceSystem/FinalYearCalendar.jsx"


export default class MainLayout extends Component{
	constructor(){
		super(),
		this.state={

		}
	}

	render(){
		return(
					<div>
						  <ul className="nav nav-tabs">
						    <li className="active"><a data-toggle="tab" href="#monthly">Monthly</a></li>
						    <li><a data-toggle="tab" href="#yearly">Yearly</a></li>
						  </ul>



						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 calibri-font">
							<ul className="color-label">
								<li className="col-lg-2"><span className="label label-primary"></span><p>Present</p></li>
								<li className="col-lg-2"><span className="label label-warning"></span><p>Half-Day</p></li>
								<li className="col-lg-2"><span className="label label-danger"></span><p>Absent</p></li>
								<li className="col-lg-2"><span className="label label-default"></span><p>Weekly-Off</p></li>
								<li className="col-lg-2"><span className="label label-success"></span><p>Company Holiday</p></li>
							</ul>					
						</div>

						<br />
						<br />
						<br />

						 <div class="tab-content">
						    <div id="yearly" className="tab-pane fade">
						      <FinalYearCalendar/>
						    </div>

						    <div id="monthly" className="tab-pane fade in active">
								<Graphical />
						    </div>
						  </div>
					</div>
			)
	}
}