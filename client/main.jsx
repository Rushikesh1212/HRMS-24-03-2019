import React,{Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
/*import App from '/imports/ui/App'*/
import '/lib/leaveMgmtRoutes.js';
import '/lib/shiftRosterRoutes.js';
import "/lib/attendanceRoutes.js"
import '/lib/empInductionRoutes.js'



Meteor.startup(() => {
  // render(<App />, document.getElementById('react-target'));

});


