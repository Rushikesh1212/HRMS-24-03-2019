import React, {Component} from 'react';
import "/imports/attendanceMgmt/common/Sidebar/sidebar.css";

export default class Sidebar extends Component{
	constructor(props){
		super(props);
		this.state = {
		};		
	}


	render(){
		return (
			<div className="row">
				<div className="upper">
					<header className="lname">
						<div className="logo">
							<a href={"/adminLte"}>
								<span className="logo-lg nav-label "><b>Admin</b>LTE</span>
							</a>
						</div>
						<br/>

						<div className=" profile " id="profilepic">
							<img src="images/user.png " className="img-circle" alt="userimg"/>
						</div>

						<div  className="col-lg-8 col-md-10 col-sm-10">
							<h6 className="name bg-white row"> Alexander Pierce</h6>
							<div className="dot img-circle row "></div>
							<div className="col-lg-4 col-md-6 col-sm-8 row name"><p>Online</p></div>
						</div>


						<div className="container-fluid">
							<form action="#" method="get" className="sidebar-form" >
									<div className="input-group" id="bar" >
										<input type="text" name="q" className="form-control" id="searchbar" placeholder="Search..."/>
										<span className="input-group-btn">
											<button type="submit" name="search" id="search-btn" className="btn btn-flat">
												<i className="fa fa-search"></i>
											</button>
										</span>
									</div>
							</form>
						</div>     
					</header>
				</div>
				<div className="row">
				<nav className="sidebar col-lg-12 col-md-12 col-sm-12 hidden-xs">	
					<ul className="navbar-primary-menu">
					
						<li>
						<a  href="#" className="mylabel">
						<span className="nav-label myhead"> Main navigation </span> 
						</a> 


						<a  data-toggle="collapse" href="#collapse1"  id="sidelist">
						<span className="glyphicon">
						<i className=" fa fa-tachometer-alt"></i> 
						</span>
						<span className="nav-label">Dashboard<span className="caret pull-right"></span></span></a>  

						<div id="collapse1" className="panel-collapse collapse" >
							<ul className="list-group dashmenu" id="sublist" >
								<li className="list-group-item " > <i className="  fa fa-circle"></i>  Dashboard 1</li>
								<li className="list-group-item " > <a href="index.html"> <i className="  fa fa-circle"></i>  Dashboard 2 </a></li>     
							</ul>
						</div>



						<a  data-toggle="collapse" href="#collapse2" id="sidelist" >
						<span className="glyphicon">
						<i className="fa fa-copy"></i>
						</span>
						<span className="nav-label">Layout Options  
						<span className="label label-primary pull-right">4</span></span></a>  


						<div id="collapse2" className="panel-collapse collapse" >
						<ul className="list-group dashmenu" id="sublist" >
						<li className="list-group-item "  > <i className="  fa fa-circle"></i>  Top Navigation</li>
						<li className="list-group-item " > <i className="  fa fa-circle"></i>  Boxed</li> 
						<li className="list-group-item " > <i className="  fa fa-circle"></i>  Fixed</li> 
						<li className="list-group-item " > <i className="  fa fa-circle"></i>  Collapsed Sidebar</li>     
						</ul>
						</div>  


						<a  data-toggle="collapse" href="#" id="sidelist">
						<span className="glyphicon">
						<i className="fa fa-th"></i>
						</span>
						<span className="nav-label">Widgets  </span>
						<span className="label label-success pull-right">New</span></a>  


						<a  data-toggle="collapse" href="#collapse3" id="sidelist">
						<span className="glyphicon">
						<i className="fa fa-chart-pie"></i>
						</span>
						<span className="nav-label">Charts <span className="caret pull-right"></span>
						</span></a>  

						<div id="collapse3" className="panel-collapse collapse" >
						<ul className="list-group dashmenu" id="sublist" >
						<li className="list-group-item "  > <i className="  fa fa-circle"></i>  ChartJs</li>
						<li className="list-group-item " > <i className="  fa fa-circle"></i> Morris</li> 
						<li className="list-group-item " > <i className="  fa fa-circle"></i>  Flot</li> 
						<li className="list-group-item " > <i className="  fa fa-circle"></i>  Inline charts</li>     
						</ul>
						</div>  




						<a  data-toggle="collapse" href="#collapse4" id="sidelist">
						<span className="glyphicon">
						<i className="fa fa-laptop"></i>
						</span>
						<span className="nav-label">UI Elements <span className="caret pull-right"></span>
						</span></a>  

						<div id="collapse4" className="panel-collapse collapse" >
						<ul className="list-group dashmenu" id="sublist" >
						<li className="list-group-item "  > <i className="  fa fa-circle"></i> General</li>
						<li className="list-group-item " > <i className="  fa fa-circle"></i> Icons</li> 
						<li className="list-group-item " > <i className="  fa fa-circle"></i> Buttons</li> 
						<li className="list-group-item " > <i className="  fa fa-circle"></i>  Sliders</li>
						<li className="list-group-item " > <i className="fa fa-circle"></i>  Timeline</li>
						<li className="list-group-item " > <i className="fa fa-circle"></i>  Modals</li>     
						</ul>
						</div>  


						<a  data-toggle="collapse" href="#collapse5" id="sidelist">
						<span className="glyphicon">
						<i className="fa fa-edit"></i>
						</span>
						<span className="nav-label">Forms <span className="caret pull-right"></span>
						</span></a>  

						<div id="collapse5" className="panel-collapse collapse" >
						<ul className="list-group dashmenu" id="sublist" >
						<li className="list-group-item "  > <a href={"/empInfo"}><i className="  fa fa-circle"></i> General Elements</a></li>
						<li className="list-group-item " > <i className="  fa fa-circle"></i> Advance Elements</li> 
						<li className="list-group-item " > <i className="  fa fa-circle"></i>  Editors</li> 

						</ul>
						</div>  


						<a  data-toggle="collapse" href="#collapse6" id="sidelist">
						<span className="glyphicon">
						<i className="fa fa-table"></i>
						</span>
						<span className="nav-label">Tables <span className="caret pull-right"></span>
						</span></a>  

						<div id="collapse6" className="panel-collapse collapse" >
						<ul className="list-group dashmenu" id="sublist" >
						<li className="list-group-item "  > <a href={"/empList"}> <i className="  fa fa-circle"></i> Simple Tables</a></li>
						<li className="list-group-item " > <i className="  fa fa-circle"></i> Data Tables</li> 

						</ul>
						</div>  

						<a  data-toggle="collapse" href="#" id="sidelist">
							<span className="glyphicon">
							<i className="fa fa-calendar-alt"></i>
							</span>

							<span className="nav-label">Calendar &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
							<span className="label label-primary">17</span> 
							<span className="label label-danger">3</span>
						</a>  


						<a  data-toggle="collapse" href="#" id="sidelist">
							<span className="glyphicon">
								<i className="fa fa-envelope"></i>
							</span>
							<span className="nav-label">Mailbox &nbsp; &nbsp; &nbsp; &nbsp;</span>
							<span className="label label-danger">5</span>
							<span className="label label-success">16</span>
							<span className="label label-warning">12</span>
						</a>  


							<a  data-toggle="collapse" href="#collapse8" id="sidelist">
								<span className="glyphicon">
								<i className="fa fa-folder"></i>
								</span>
								<span className="nav-label">Examples <span className="caret pull-right"></span>
								</span>
							</a>  

							<div id="collapse8" className="panel-collapse collapse" >
								<ul className="list-group dashmenu" id="sublist" >
									<li className="list-group-item "  > <i className="  fa fa-circle"></i> Invoice</li>
									<li className="list-group-item " > <i className="  fa fa-circle"></i> Profile</li> 
								</ul>
							</div>  

							<a  data-toggle="collapse" href="#collapse9" id="sidelist">
							<span className="glyphicon">
							<i className="fa fa-share"></i>
							</span>
							<span className="nav-label">Multilevel <span className="caret pull-right"></span>
							</span></a>  

							<div id="collapse9" className="panel-collapse collapse" >
							<ul className="list-group dashmenu" id="sublist" >
							<li className="list-group-item "  > <i className="  fa fa-circle"></i> Level One</li>
							<li className="list-group-item " > <i className="  fa fa-circle"></i> Level One</li> 

							</ul>
							</div> 

							<a  data-toggle="collapse" href="#" id="sidelist">
							<span className="glyphicon">
							<i className="fa fa-book"></i>
							</span>
							<span className="nav-label"> Documentation  </span>  
							</a>  

							<a  href="#" className="mylabel">

							<span className="nav-label myhead"> Label </span> 
							</a>  

							<a  data-toggle="collapse" href="#" id="sidelist">
								<span className="glyphicon">
									<i className="fa fa-circle fa-red"></i>
								</span>
							<span className="nav-label"> Impoartant </span>  
							</a>


							<a  data-toggle="collapse" href="#" id="sidelist">
								<span className="glyphicon">
									<i className="fa fa-circle fa-yellow"></i>
								</span>
								<span className="nav-label"> Warning </span>  
							</a>

							<a  data-toggle="collapse" href="#" id="sidelist">
								<span className="glyphicon">
									<i className="fa fa-circle fa-blue"></i>
								</span>
								<span className="nav-label"> Information </span>  
							</a>


							<a  data-toggle="collapse" id="greenlabel" href="#" id="sidelist">
								<span className="glyphicon star">
									<i className="fa fa-star empty"></i>
									<i className="fa fa-star filled"></i>
								</span>
								<span className="nav-label"> Premium Templates </span>  
							</a>
						</li>
					</ul>
				</nav>	
				</div>
			</div>

		);
	};
}


