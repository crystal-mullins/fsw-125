import React, {Component} from 'react'
import BountyList from './BountyList'
import axios from 'axios'



export default class BountyForm extends Component {
    constructor(){
        super()
        this.state={
            firstName:'',
            lastName:'',
            living:'',
            bounty_payout:'',
            type:'',
            bountyBadges:[],
            handleDelete: this.handleDelete,
            handleUpdate: this.handleUpdate
        }
    }
    componentDidMount(){
        axios.get('/bountys')
        .then(res =>{
            console.log("res.data", res.data)
            this.setState({
                bountyBadges:res.data
            })
        })
    }
    handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name] : value})
    }

    handleSubmit = (e) =>{
        
        e.preventDefault()
        let newBountyData= {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            living:
            this.state.living,
            bounty_payout: this.state.bounty_payout,
            type: this.state.type,
            
            
                
            
        }
        this.setState({bountyBadges: [ newBountyData, ...this.state.bountyBadges],
            firstName:'',
            lastName:'',
            living:'',
            bounty_payout:'',
            type:'',
            
         })
       

    }

    handleDelete = (i) => {
        let updatedBountyArray = this.state.bountyBadges
        updatedBountyArray.splice(i, 1)
        this.setState({bountyBadges: updatedBountyArray})
    }
       
    
    
    
//     handleUpdate = (i, updateState) => {
//             let updatedBountyArray = this.state.bountyBadges
//    console.log("updateState", updateState)
//    const {firstName,
//             lastName,
//             living,
//             bounty_payout,
//             type} = updateState
//     var updatedBounty= {
//         firstName,
//         lastName,
//         living,
//         bounty_payout,
//         type
//     }
//     Object.assign(updatedBountyArray[i], updatedBounty)
//     console.log("updatedBountyArray",updatedBountyArray)
//             this.setState({bountyBadges: updatedBountyArray})
    
//     }
    render(){
        
        return(
            <div> 
                
                <form className="wrapper" onSubmit={this.handleSubmit}>
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
                handleDelete={this.state.handleDelete}
                handleUpdate={this.state.handleUpdate}
                
                />
                </div>
        )
    }
}

// export default BountyForm;