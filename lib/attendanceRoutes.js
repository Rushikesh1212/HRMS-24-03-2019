import React, {Component} from 'react';
import { mount } from 'react-mounter';
import MainLayout from "/imports/attendanceMgmt/employeeViewModule/graphicalReport/MainLayout/MainLayout.jsx";

import EmpTR  from '/imports/attendanceMgmt/employeeViewModule/textReport/EmpTR.jsx';
import ManagerCSV  from '/imports/attendanceMgmt/managerViewModule/managerTextReport/ManagerCSV.jsx';
import DataAbsent from "/imports/attendanceMgmt/absentReport/fetchAbsent/DataAbsent.jsx";
import UserName from "/imports/attendanceMgmt/absentReport/fetchAbsent/UserName.jsx";


FlowRouter.route('/report', {
    action: function() {
        mount(MainLayout);
    }
});

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



