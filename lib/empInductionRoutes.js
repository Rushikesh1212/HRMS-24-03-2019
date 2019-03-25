import React, {Component} from 'react';
import { mount } from 'react-mounter';

import {empInductionLayouts} from '/imports/empInduction/empInductionLayouts/empInductionLayouts.jsx'

import Academics from "/imports/empInduction/academics/Academics.jsx";
import BankDetails from "/imports/empInduction/bankDetails/BankDetails.jsx";
import WorkExp from "/imports/empInduction/workExp/WorkExp.jsx";
import NewList from "/imports/empInduction/rollAllocation/NewList.jsx";
import RoleApprove from "/imports/empInduction/rollAllocation/RoleApprove.jsx";
import RoleDesignation from "/imports/empInduction/rollAllocation/RoleDesignation.jsx";
import MedicalHistory from "/imports/empInduction/medicalHistory/MedicalHistory.jsx";
import BasicInfo from "/imports/empInduction/personalInformation/personalInfo/BasicInfo.jsx";
import Address from "/imports/empInduction/personalInformation/address/Address.jsx";
import Contact from "/imports/empInduction/personalInformation/contactDetails/Contact.jsx";
import Skills from "/imports/empInduction/skills/Skills.jsx";
import Certi from "/imports/empInduction/certificate/Certi.jsx";
import FormIndex from "/imports/empInduction/formIndex/FormIndex.jsx";
import DisplayPro from "/imports/empInduction/displayProfile/DisplayPro.jsx";



FlowRouter.route('/Certi', {
    action: function() {
        mount(empInductionLayouts,{main: (<Certi />)});
    }
});


FlowRouter.route('/Skills', {
    action: function() {
        mount(empInductionLayouts,{main: (<Skills />)});
    }
});

FlowRouter.route('/Academics', {
    action: function() {
        mount(empInductionLayouts,{main: (<Academics/>)});
    }
});

FlowRouter.route('/BankDetails', {
    action: function() {
        mount(empInductionLayouts,{main: (<BankDetails/>)});
    }
});

FlowRouter.route('/WorkExp', {
    action: function() {
        mount(empInductionLayouts,{main: (<WorkExp/>)});
    }
});

FlowRouter.route('/NewList', {
    action: function() {
        mount(empInductionLayouts,{main: (<NewList/>)});
    }
});

FlowRouter.route('/RoleApprove', {
    action: function() {
        mount(empInductionLayouts,{main: (<RoleApprove/>)});
    }
});

FlowRouter.route('/RoleDesignation', {
    action: function() {
        mount(empInductionLayouts,{main: (<RoleDesignation/>)});
    }
});

FlowRouter.route('/RoleDesignation/:empid', {
    action: function() {
        mount(empInductionLayouts,{main: (<RoleDesignation/>)});
    }
});

FlowRouter.route('/MedicalHistory', {
    action: function() {
        mount(empInductionLayouts,{main: (<MedicalHistory/>)});
    }
});

FlowRouter.route('/BasicInfo', {
    action: function() {
        mount(empInductionLayouts,{main: (<BasicInfo/>)});
    }
});

FlowRouter.route('/Address', {
    action: function() {
        mount(empInductionLayouts,{main: (<Address/>)});
    }
});

FlowRouter.route('/Contact', {
    action: function() {
        mount(empInductionLayouts,{main: (<Contact/>)});
    }
});

FlowRouter.route('/FormIndex', {
    action: function() {
        mount(empInductionLayouts,{main: (<FormIndex/>)});
    }
});

FlowRouter.route('/DisplayProfile', {
    action: function() {
        mount(empInductionLayouts,{main: (<DisplayPro/>)});
    }
});

