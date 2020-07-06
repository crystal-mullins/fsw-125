import React, {Component} from 'react'
import BountyList from './BountyList'


class UpdateForm extends Component {
    constructor(){
        super()
        this.state={
            firstName:'',
            lastName:'',
            living:'',
            bounty_payout:'',
            type:'',
            bountyBadges:[],
            
        }
    }
    handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name] : value})
    }

    


    render(){
        
        return(
            <div> 
                
                <form className="wrapper" onSubmit={(e)=>{
                    e.preventDefault()
                    this.props.handleUpdate(this.props.index,  this.state)}}>
                <input
                type="text"
                name="firstName"
                placeholder="First Name:"
                value={this.state.firstName}
                onChange={this.handleChange}
               
                />
               
                <input
                type="text"
                name="lastName"
                placeholder="Last Name:"
                value={this.state.lastName}
                onChange={this.handleChange}
                
                />
                  <input
                type="text"
                name="living"
                placeholder="living"
                value={this.state.living}
                onChange={this.handleChange}
                
                />
               
                <input 
                type="number"
                name="bounty_payout"
                placeholder="Bounty payout:"
                value={this.state.bounty_payout}
                onChange={this.handleChange}
                
                />
               
              
               
                <input
                type="text"
                name="type"
                placeholder="type:"
                value={this.state.type}
                onChange={this.handleChange}
               
                />
               
               
                
                <button style={{gridColumn:"span 2", width:"50%", marginLeft:"25%"}}>On Submit</button>

                </form>
                <BountyList 
                bountyBadges={this.state.bountyBadges}
               
                handleUpdate={this.state.handleUpdate}
                />
                </div>
        )
    };
}

export default UpdateForm;