import React, {Component} from 'react';
import '/imports/attendanceMgmt/attendanceSystem/layouts/SubHeader/header.css'
import MainLayout from "/imports/attendanceMgmt/attendanceSystem/MainLayout/MainLayout.jsx"

export default class Header extends Component{
	constructor(props){
		super(props);
		this.state = {
		};		
	}


	render(){
		return (
				<div>
					<header className='timesFont headerLayout'>
						<h4 className="text">Attendance System</h4>
					</header>
					<hr className="blue-line" />

					<MainLayout />
				</div>
		);
	};
}
