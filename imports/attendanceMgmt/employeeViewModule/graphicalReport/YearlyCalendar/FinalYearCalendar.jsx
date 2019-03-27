import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Calendar, CalendarControls } from 'react-yearly-calendar';

import { withTracker } from 'meteor/react-meteor-data';
import { Attendance } from '/imports/attendanceMgmt/employeeViewModule/graphicalReport/MonthlyCalendar/apiGraphical.js';


import '/imports/attendanceMgmt/employeeViewModule/graphicalReport/YearlyCalendar/customStyle.css';

class FinalYearCalendar extends React.Component {
  constructor(props) {
    super(props);

    const today = moment();





    this.state = {
      year: today.year(),
      selectedDay: today,
      selectedRange: [today, moment(today).add(15, 'day')],
      showDaysOfWeek: true,
      showTodayBtn: true,
      showWeekSeparators: true,
      selectRange: false,
      firstDayOfWeek: 0, // sunday
      present: [],
      customCSSclasses:[]
    };
  }

  onPrevYear() {
    this.setState(prevState => ({
      year: prevState.year - 1
    }));
  }

  onNextYear() {
    this.setState(prevState => ({
      year: prevState.year + 1
    }));
  }

  goToToday() {
    const today = moment();

    this.setState({
      selectedDay: today,
      selectedRange: [today, moment(today).add(15, 'day')],
      year: today.year()
    });
  }

  datePicked(date) {
    this.setState({
      selectedDay: date,
      selectedRange: [date, moment(date).add(15, 'day')]
    });
  }


  toggleShowDaysOfWeek() {
    this.setState(prevState => ({
      showDaysOfWeek: !prevState.showDaysOfWeek
    }));
  }

  toggleForceFullWeeks() {
    this.setState(prevState => ({
      showDaysOfWeek: true,
      forceFullWeeks: !prevState.forceFullWeeks
    }));
  }

  toggleShowTodayBtn() {
    this.setState(prevState => ({
      showTodayBtn: !prevState.showTodayBtn
    }));
  }




  selectFirstDayOfWeek(event) {
    this.setState({
      firstDayOfWeek: parseInt(event.target.value, 10)
    });
  }

  updateClasses() {
    const { customCSSclasses } = this.state;
    const input = this.customClassesInput.value;
    const context = { customCSSclasses, moment };

    try {
      safeEval(input, context);

      const nextCustomCSSclasses = context.customCSSclasses;
      this.setState({
        customCSSclasses: nextCustomCSSclasses,
        customClassesError: false
      });
    } catch (e) {
      this.setState({
        customClassesError: true
      });
      throw e;
    }
  }




  render() {
    const {
      year,
      showTodayBtn,
      selectedDay,
      showDaysOfWeek,
      forceFullWeeks,
      showWeekSeparators,
      firstDayOfWeek,
      selectRange,
      selectedRange,
    } = this.state;

    let customCSSclasses = {
      present: this.props.presentDays,
      absent: this.props.absentDays,
      half: this.props.halfDays,
      weekend: 'Sat,Sun',
    };
    console.log("customCSSclasses=",customCSSclasses);


    return (
      <div>
        <div id="calendar">
          <CalendarControls
            year={year}
            onPrevYear={() => this.onPrevYear()}
            onNextYear={() => this.onNextYear()}
          />
          <div className="container-fluid">
            <Calendar
              year={year}
              selectedDay={selectedDay}
              showDaysOfWeek={showDaysOfWeek}
              firstDayOfWeek={firstDayOfWeek}
              onPickDate={(date, classes) => this.datePicked(date, classes)}
              onPickRange={(start, end) => this.rangePicked(start, end)}
              customClasses={customCSSclasses}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withTracker(()=>{
  const dataHandle = Meteor.subscribe("att");
  const finalAttendanceData = Attendance.find({}).fetch()||[{}];
  console.log("finalAttendanceData", finalAttendanceData);

  let data = finalAttendanceData;
  let empRecord=[];

  for(var i=0; i<data.length;i++){
    for (var j=0; j<data[i].dailyAttendance.length; j++) {
      let record={
        Status: data[i].dailyAttendance[j].Status,
        Date: data[i].dailyAttendance[j].Date,
      };
      empRecord.push(record)
    }
  }
  console.log("ye", empRecord);

  let presentDays = [];
  let absentDays = [];
  let halfDays = [];
  
  for(var i=0; i<empRecord.length;i++){
      if(empRecord[i].Status == "P"){
         presentDays.push(empRecord[i].Date);    
      }   
      if(empRecord[i].Status == "A"){
        absentDays.push(empRecord[i].Date);  
      }
      if(empRecord[i].Status == "H"){
        halfDays.push(empRecord[i].Date);  
      }
    }
  console.log("presentDays=",presentDays);
  console.log("absentDays=",absentDays);
  console.log("halfDays=",halfDays);


  return{
      "loading" : !dataHandle.ready(),
      "finalAttendance" : finalAttendanceData,
      "presentDays": presentDays,
      "absentDays": absentDays,
      "halfDays": halfDays,
  }
})(FinalYearCalendar);  