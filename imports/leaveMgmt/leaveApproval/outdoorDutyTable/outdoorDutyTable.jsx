import React, {Component} from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';
import { withTracker } from 'meteor/react-meteor-data';
import { OutdoorDuty } from "/imports/leaveMgmt/leaveApproval/leaveapproval.js";


class outdoorDutyTable extends Component{


  render(){

				const data = this.props.odData;

					if(data){
					console.log("data", data);
				 }
				  const columns = [
				  
				    
				  {
				    Header: 'Date',
				    accessor: 'date' // String-based value accessors!
				  }, {
				    Header: 'In Time',
				    accessor: 'intime'
				    
				  }, {
				    Header: 'Out Time',
				    accessor:'outtime'  // Custom value accessors!
				  }, {
				    Header: 'Reason', // Custom header components!
				    accessor: 'reason'
				  }, ]

			return(
				<ReactTable className="text-center -striped -highlight"
					   	showPagination={0}
					   	minRows={0}
					    data={data}
					    columns={columns}
					  />
			)		
}

}

export default withTracker(()=>{
	const odDutySubHandle = Meteor.subscribe("odData");
	const odData = OutdoorDuty.find({}).fetch()||[{}];

	return{
		"loading" : odDutySubHandle.ready(),
		"odData" : odData,
	}
})(outdoorDutyTable);