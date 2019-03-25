import React, {Component} from 'react';
import { LwhMaster } from '/imports/leaveMgmt/LocationWiseHolidays/lwhMaster.js';
import { withTracker } from 'meteor/react-meteor-data';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';



const modifiers = {
  sunday: { daysOfWeek: [0] },
};


class Calender extends Component{


  render(){
    var dates=this.props.dates;

    return (
      <div>
              <style>{`
                .DayPicker-Day--sunday {
                  color: #f00;
                  background-color:#fff;
                }

                .DayPicker-Day--sunday:not(.DayPicker-Day--today) {
                   color: #f00; 
                }

                .DayPicker {
                  display: inline-block;
                  font-size: 2.75vmin;
                  border: 1px solid black;
                  box-shadow: 10px 5px 5px #eee;
                }

                .DayPicker-Day--today {
                   color: #33b5e5;
                   font-weight: 700;
                }

                 .DayPicker-Day {
                    padding: 0.1em 1.0em;
                    border-radius: 5px;
                 
                }

                .DayPicker-Month {
                    margin: 0px 1em;
                    margin-top: 1em;
                }

                .DayPicker-Caption{
                    background-color: #33b5e5;
                    padding: 0.5em;
                    color:#f2f2f2;
                }

                .DayPicker-NavButton {
                    top: 1.6em;
                }

                .DayPicker-Weekday {
                    padding: 0.0em;
                }

                .DayPicker-Caption > div {
                    font-weight: 500;
                    font-size: 1em;
                }

                .DayPicker-NavButton--prev {
                    margin-right: 1.5em;
                    background-image: url(images/left-arrow.png);
                }

                .DayPicker-NavButton--next {
                    margin-left: 1.5em;
                    background-image: url(images/right-arrow.png);
                }

                .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
                  position: relative;
                  background-color: #33b5e5;
                  color: #f2f2f2;
                }
                `}</style>

                {/*Eeact-date-picker Component to show holidays in calender view*/}
                <DayPicker
                  selectedDays={dates}
                   modifiers={modifiers}
                />

        </div>  
      );
  };       

    
        
}
export default withTracker((props)=>{
  const yearSubHandle = Meteor.subscribe("allEmpData");
  const allLwhData = LwhMaster.find({}).fetch()||[{}];

/*Get all added dates*/

    var dates=[];
    for(var i = 0; i < allLwhData.length;i++){
      for(var j=0;j<allLwhData[i].holidays.length;j++){
         dates[i]=new Date(allLwhData[i].holidays[j].date);     
      }

  }

  console.log("dates",dates);

  

//======================================================================
  
  var result =  {

    "loading"   : !yearSubHandle.ready(),
    "allyear"     : allLwhData,
    "dates" :dates,

  };
  return result;
})(Calender);/////222