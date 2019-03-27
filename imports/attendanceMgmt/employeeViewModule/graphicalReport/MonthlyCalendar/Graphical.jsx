import React from "react";
import dateFns from "date-fns";
import moment from 'moment';
import { withTracker } from 'meteor/react-meteor-data';
import { Attendance } from '/imports/attendanceMgmt/employeeViewModule/graphicalReport/MonthlyCalendar/apiGraphical.js';


import "/imports/attendanceMgmt/employeeViewModule/graphicalReport/MonthlyCalendar/container.css"

class Graphical extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  
  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row1 flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            <i className="fa fa-chevron-left"></i>
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon"><i className="fa fa-chevron-right"></i></div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center weekdays" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row1">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd =  dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let adays = [];
    let pdays = [];
    let hdays = [];
    let wodays = [];
    let day = startDate;
    let formattedDate = "";

    for(let j=0;j<this.props.presentDays.length;j++){
       pdays[j] = this.props.presentDays[j]; 
    } 
    for(let j=0;j<this.props.absentDays.length;j++){
       adays[j] = this.props.absentDays[j]; 
    } 
    for(let j=0;j<this.props.halfDays.length;j++){
       hdays[j] = this.props.halfDays[j]; 
    } 
    for(let j=0;j<this.props.weekOffDays.length;j++){
       wodays[j] = this.props.weekOffDays[j]; 
    } 
    
         while (day <= endDate) {
            for (let i = 0; i < 7; i++) {

              formattedDate = dateFns.format(day, "D");
              days.push(
                <div
                  className={`col cell ${
                      !dateFns.isSameMonth(day, monthStart)
                      ? "disabled"
                      : pdays.includes(dateFns.format(day, "YYYY-MM-DD")) 
                      ? "present" 
                      : adays.includes(dateFns.format(day, "YYYY-MM-DD"))
                      ? "absent"
                      : hdays.includes(dateFns.format(day, "YYYY-MM-DD"))
                      ? "half"
                      : wodays.includes(dateFns.format(day, "YYYY-MM-DD"))
                      ? "wOff"
                      : "x"
                  }`}
                  key={day}
                >
                  <span className="number">{formattedDate}</span>
                  <span className="bg">{formattedDate}</span>
                </div>
              );
              day = dateFns.addDays(day, 1);
          }
        rows.push(
              <div className="row1" key={day}>
                {days}
              </div>
            );
          days = [];
    }
      return <div className="body">{rows}</div>;
  }


  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    
    return (
      <div className="monthlycalendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
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

  let presentDays = [];
  let absentDays = [];
  let halfDays = [];
  let weekOffDays = [];
  
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
      if(empRecord[i].Status == ""){
        weekOffDays.push(empRecord[i].Date);  
      }
    }

console.log("weekOffDays",weekOffDays)

  return{
      "loading"         : !dataHandle.ready(),
      "finalAttendance" : finalAttendanceData,
      "presentDays"     : presentDays,
      "absentDays"      : absentDays,
      "halfDays"        : halfDays,
      "weekOffDays"     : weekOffDays,
  }
})(Graphical);  
