import React, {Component} from 'react';

import Header from "/imports/empInduction/common/Header/Header.jsx";
import Footer from "/imports/empInduction/common/Footer/Footer.jsx";
import Sidebar from "/imports/empInduction/common/Sidebar/Sidebar.jsx";

export const empInductionLayouts = ({main})=>(
	<div className="container-fluid">
	<div className="row">
		 
			<div className="col-lg-2 col-md-2 col-sm-2 col-xs-12"> 
			<Sidebar />
			</div>

			<div className="col-lg-10 col-md-10 col-sm-10 col-xs-12"> 
			<Header />
			</div>

			<div className="col-lg-10 col-md-10 col-sm-10 col-xs-12"> 
				<div className="contentWrapper">
					{main}
				</div>
			</div>
	
			<div className="col-lg-10 col-md-10 col-sm-10 col-xs-12"> 
			<Footer />
			</div>
		

	</div>
	</div>
);