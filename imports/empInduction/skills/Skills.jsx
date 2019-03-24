import React, {Component} from 'react';

import "/imports/empInduction/skills/skills.css";
import { CertiMaster } from "/imports/empInduction/skills/SkillsAPI.js";

class Skills extends Component {
  constructor() {
    super();
    this.state = {
    
      shareholders: [{ name: "" }],
      share: [ {city:""}]
    };
  }

  

  handleShareholderNameChange = idx => evt => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value};
    });

    this.setState({ shareholders: newShareholders });
  };
  handleShareholderCityChange = idx => evt => {
    const brandnewShareholders = this.state.share.map((share, sidx) => {
      if (idx !== sidx) return shares;
      return { ...share,city: evt.target.value };
    });

    this.setState({ share: brandnewShareholders });
  };

  handleSubmit = evt => {
    const { name, shareholders } = this.state;
    alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
  };

  handleAddShareholder = () => {
    this.setState({
      shareholders: this.state.shareholders.concat([{ name: "" }]),
      share: this.state.share.concat([{ city: "" }])
    });
  };

  handleRemoveShareholder = idx => () => {
    this.setState({
      shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        
    

        <h4>Skills</h4>

        {this.state.shareholders.map((shareholder, idx) => (

        <div className="shareholder">
        <div className="col-lg-12">
           <div className="col-lg-4">
            <label>Skill</label>
      
            <input

              type="text"
              className="form-control"
              placeholder="Skills"
              value={shareholder.name}
              onChange={this.handleShareholderNameChange(idx)}
            />
            </div>
             <div className="col-lg-4">
               <label>Description</label>
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              value={shareholder.city}
              onChange={this.handleShareholderCityChange(idx)}
            />
            </div>

            <div className="col-lg-3">
               <label>How Do you Rate yourself?</label>

               <div>
                    
                 <div className="col-lg-1">
                      <i className="fa fa-star"></i>
                 </div>

                                  <div className="col-lg-1">
                                         <i className="fa fa-star"></i>
                                   </div>


                                  <div className="col-lg-1">
                                         <i className="fa fa-star"></i>
                                   </div>
                                        


                                  <div className="col-lg-1">
                                         <i className="fa fa-star"></i>
                                   </div>
                                        


                                  <div className="col-lg-1">
                                         <i className="fa fa-star"></i>
                                   </div>
                                      
                                 </div>
                            </div>


                     <div className="col-lg-1">
                      <button
                    type="button"
                    onClick={this.handleRemoveShareholder(idx)}
                    className="small"
                  >
              -
            </button>
        </div>         
    </div>
 </div>
        ))}


         <div className="col-lg-12" ><img src="/images/plus1.png"  id="size" onClick={this.handleAddShareholder}/></div>
         <div className="col-lg-12" >
           <button className="submit  btn pull-right">Submit</button>
         </div>
         
      
      </form>


    );
  }
}

export default Skills
