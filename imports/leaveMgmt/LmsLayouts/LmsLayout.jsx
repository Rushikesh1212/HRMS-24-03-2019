import React, {Component} from 'react';

import LeaveApprovalForm from "/imports/leaveMgmt/leaveApproval/LeaveApprovalForm.jsx";
import LeaveBalandHistory from "/imports/leaveMgmt/leaveApproval/leaveBalanceHistory/LeaveBalandHistory.jsx";

import LocationWiseHolidays from "/imports/leaveMgmt/LocationWiseHolidays/LocationWiseHolidays.jsx";
import HolidayHistory from "/imports/leaveMgmt/LocationWiseHolidays/HolidayHistory/HolidayHistory.jsx";



import Header from "/imports/common/Header/Header.jsx";
import Footer from "/imports/common/Footer/Footer.jsx";
import Sidebar from "/imports/common/Sidebar/Sidebar.jsx";




export const LmsLayout = ({main})=>(
	<div className="container-fluid">
	<div className="row">
		 	 
			<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"> 
				<Sidebar />
			</div>

			<div className="col-lg-10 col-md-10 col-sm-10 col-xs-10"> 
				<Header />
			</div>

			

			<div className="col-lg-10 col-md-10 col-sm-10 col-xs-10"> 
				<div className="contentWrapper">
					{main}
				</div>
			</div>

		{/*	<div className="col-lg-10 col-md-10 col-sm-10 col-xs-10"> 
				<Footer />
			</div>
		*/}
		

	</div>
	</div>
);