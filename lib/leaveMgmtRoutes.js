import React, {Component} from 'react';
import { mount } from 'react-mounter';

import {LmsLayout} from '/imports/leaveMgmt/LmsLayouts/LmsLayout.jsx';

import LocationWiseHolidays from "/imports/leaveMgmt/LocationWiseHolidays/LocationWiseHolidays.jsx";
import HolidaysHistory from "/imports/leaveMgmt/LocationWiseHolidays/HolidayHistory/HolidayHistory.jsx";
import CurrentHolidays from "/imports/leaveMgmt/LocationWiseHolidays/CurrentHolidays/CurrentHolidays.jsx";

import LeaveApprovalForm from "/imports/leaveMgmt/leaveApproval/LeaveApprovalForm.jsx";
import LeaveBalandHistory from "/imports/leaveMgmt/leaveApproval/leaveBalanceHistory/LeaveBalandHistory.jsx";
import LeaveView from "/imports/leaveMgmt/leaveApproval/leaveView/LeaveView.jsx";

import LeavePolicySettings from '/imports/leaveMgmt/adminSettings/LeavePolicy/LeavePolicySettings.jsx';
import LeaveBalance from "/imports/leaveMgmt/projectManager/leaveBal&His/LeaveBal.jsx";
import ListOfSubordinatesLeaves from "/imports/leaveMgmt/projectManager/listOfSubordinatesLeaves/ListOfSubordinatesLeaves.jsx";





// ===================== system Secutity==========================

// ===================== Leave Managent System==========================
FlowRouter.route('/LocationWiseHolidays', {
    action: function() {
        mount(LmsLayout,{main: (<LocationWiseHolidays/>)});
    }
});

FlowRouter.route('/LeaveApprovalForm', {
    action: function() {
        mount(LmsLayout,{main: (<LeaveApprovalForm/>)});
    }
});

FlowRouter.route('/LeaveBalanceHistory', {
    action: function() {
        mount(LmsLayout,{main: (<LeaveBalandHistory/>)});
    }
});


FlowRouter.route('/HolidaysHistory', {
    action: function() {
        mount(LmsLayout,{main: (<HolidaysHistory/>)});
    }
});

FlowRouter.route('/CurrentHolidays', {
    action: function() {
        mount(LmsLayout,{main: (<CurrentHolidays/>)});
    }
});


FlowRouter.route('/leavePolicySettings', {
    action: function() {
        mount(LmsLayout,{main: (<LeavePolicySettings />)});
    }
});

FlowRouter.route('/leaveBalance', {
    action: function() {
        mount(LmsLayout,{main: (<LeaveBalance />)});
    }
});

FlowRouter.route('/listOfSubordinatesLeaves', {
    action: function() {
        mount(LmsLayout,{main: (<ListOfSubordinatesLeaves />)});
    }
});

FlowRouter.route('/leaveView', {
    action: function() {
        mount(LmsLayout,{main: (<LeaveView />)});
    }
});


