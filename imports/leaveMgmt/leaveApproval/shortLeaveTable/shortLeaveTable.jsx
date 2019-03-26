import React, {Component} from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';
import { withTracker } from 'meteor/react-meteor-data';
import { ShortLeave } from "/imports/leaveMgmt/leaveApproval/leaveapproval.js";


class shortLeaveTable extends Component{


  render(){

				const data = this.props.slData;

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
				    
				  },  {
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
	const slSubHandle = Meteor.subscribe("slData");
	const slData = ShortLeave.find({}).fetch()||[{}];

	return{
		"loading" : slSubHandle.ready(),
		"slData" : slData,
	}
})(shortLeaveTable);