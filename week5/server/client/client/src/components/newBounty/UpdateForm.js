import React, {Component} from 'react'
import BountyList from './BountyList'
import axios from 'axios'

class UpdateForm extends Component {
    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            living:'',
            bounty_payout:'',
            type:'',
            bountyBadges:[],
            id: this.props.id
            
        }
    }
    handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name] : value})
    }

       
    handleUpdate = (updateState, id) => {
        let updatedBountyArray = this.state.bountyBadges
console.log("updateState", updateState)
const {firstName,
        lastName,
        living,
        bounty_payout,
        type} = updateState
var updatedBounty= {
    firstName,
    lastName,
    living,
    bounty_payout,
    type
}

axios.put('./bountys/' + id, updatedBounty ).then(res => {
   
    console.log(res)
})
}


    render(){
        
        return(
            <div> 
                
                <form id={this.state.id} className="wrapper" onSubmit={(e)=>{
                    e.preventDefault()
                    this.handleUpdate(this.state, 
                     e.currentTarget.id)
                     window.location.reload()}}>
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
               
               
                
                <button id={this.state.id} style={{gridColumn:"span 2", width:"50%", marginLeft:"25%"}}>Update</button>

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