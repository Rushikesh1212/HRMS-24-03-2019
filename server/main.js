import { Meteor } from 'meteor/meteor';

// Leave mgmt System
import '/imports/leaveMgmt/leaveApproval/leaveapproval.js';
import "/imports/leaveMgmt/LocationWiseHolidays/lwhMaster.js";
import "/imports/leaveMgmt/adminSettings/LeavePolicy/leavePolicySettings.js";
import "/imports/leaveMgmt/projectManager/listOfSubordinatesLeaves/listOfSubordinatesLeaves.js";


// Shift Roster
import "/imports/shiftMgmt/shiftRoster/empTemp/empMaster.js";
import "/imports/shiftMgmt/shiftRoster/shiftAllotment/shiftAllocation.js";
import "/imports/shiftMgmt/shiftRoster/shiftSetting/shiftSetting.js";



//Attendance Mgmt
import { Attendance } from '/imports/attendanceMgmt/employeeViewModule/graphicalReport/MonthlyCalendar/apiGraphical.js';


//emp Induction
import "/imports/empInduction/rollAllocation/roleDesignation/rollAllocationApi.js";
import "/imports/empInduction/bankDetails/BankDetailsAPI.js";
import "/imports/empInduction/certificate/CertiAPI.js";
import "/imports/empInduction/skills/SkillsAPI.js";
import "/imports/empInduction/workExp/WorkExpAPI.js";
import "/imports/empInduction/academics/academicsApi.js";


/*import Links from '/imports/api/links';
>>>>>>> Stashed changes

function insertLink(title, url) {
  Links.insert({ title, url, createdAt: new Date() });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
/*  if (Links.find().count() === 0) {
    insertLink(
      'Do the Tutorial',
      'https://www.meteor.com/tutorials/react/creating-an-app'
    );

    insertLink(
      'Follow the Guide',
      'http://guide.meteor.com'
    );

    insertLink(
      'Read the Docs',
      'https://docs.meteor.com'
    );

    insertLink(
      'Discussions',
      'https://forums.meteor.com'
    );
  }*/

