import React, {Component} from 'react';
import SubHeader from '/imports/attendanceMgmt/attendanceSystem/layouts/SubHeader/SubHeader.jsx';




export const AuthLayout = ({main})=>(
	<div className="container-fluid">
		<div className="row">
				<div className="col-lg-10 col-md-10 col-sm-12 col-xs-12"> 
					<SubHeader />
				</div>
				<div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">{main}</div>
		</div>
	</div>
)