import React, {Component} from 'react';
import { mount } from 'react-mounter';
import {AuthLayout} from "/imports/attendanceMgmt/attendanceSystem/AuthLayout/AuthLayout.jsx";

// import {empLayout} from "/imports/attendanceMgmt/layouts/empLayout.jsx"
import EmpTR  from '/imports/attendanceMgmt/textReport/EmpTR.jsx';
import ManagerCSV  from '/imports/attendanceMgmt/textReport/ManagerCSV.jsx';
// import {AuthenticatedLayout} from '/imports/attendanceMgmt/attendanceMgmtLayouts/attendanceMgmtLayout.jsx';
import DataAbsent from "/imports/attendanceMgmt/attendance/fetchAbsent/DataAbsent.jsx";
import UserName from "/imports/attendanceMgmt/attendance/fetchAbsent/UserName.jsx";

import Graphical from "/imports/attendanceMgmt/attendanceSystem/MonthlyCalendar/Graphical.jsx";
import FinalYearCalendar from "/imports/attendanceMgmt/attendanceSystem/FinalYearCalendar.jsx";

FlowRouter.route('/calendarfns', {
    action: function() {
        mount(AuthLayout,{main:(<Graphical/>)});
    }
});
FlowRouter.route('/layout', {
    action: function() {
        mount(AuthLayout,{main:(<FinalYearCalendar />)});
    }
});


// manali task..
// for manager- perticular emp text report
FlowRouter.route('/userName', {
    action: function() {
        mount (UserName);
    }
});


// teju task... 

// for emp absentee text report
FlowRouter.route('/data', {
    action: function() {
        mount (EmpTR );
    }
});

// for manager- absentee text report
FlowRouter.route('/manager', {
    action: function() {
        mount (ManagerCSV);
    }
});



