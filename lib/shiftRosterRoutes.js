import React, {Component} from 'react';
import { mount } from 'react-mounter';

import {AuthLayout} from '/imports/shiftMgmt/shiftRosterLayouts/shiftRosterLayout.jsx';
import ShiftSetting from "/imports/shiftMgmt/shiftRoster/shiftSetting/shiftSetting.jsx";
import ShiftAllot from "/imports/shiftMgmt/shiftRoster/shiftAllotment/shiftAllot.jsx";
import EmpBasicInfo from "/imports/shiftMgmt/shiftRoster/empTemp/empBasicInfo.jsx";


//============================================= Emp Basic Info ==============================================
FlowRouter.route('/shiftSetting', {
    action: function() {
        mount(AuthLayout,{main: (<ShiftSetting />)});
    }
});

FlowRouter.route('/empInfo', {
    action: function() {
        mount(AuthLayout,{main: (<EmpBasicInfo />)});
    }
});

FlowRouter.route('/shiftAllot', {
    action: function() {
        mount(AuthLayout,{main: (<ShiftAllot />)});
    }
});