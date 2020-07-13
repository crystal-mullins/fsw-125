import React , {Component}from 'react'
import UpdateForm from "./UpdateForm"

class BountyCard extends Component{
    constructor(props){
        super(props)
        var { index, firstName, lastName, living, bounty_payout, type, handleDelete, handleUpdate, id } =this.props
        this.state= {
            index, firstName, lastName, living, bounty_payout, type, handleDelete, handleUpdate , id, updating: false
        }
    }
    
  
    render(){
    return(
        <div> 
            <h1 style={{backgroundColor:"aqua"}}>BOUNTY LIST</h1>
        <div className="wrapper">


                <p>Name: {this.state.firstName} {this.state.lastName}</p>
                {console.log("bountyCardState ", this.state)}
                <p>Living {this.state.living}</p>
                <p>Bounty Payout: {this.state.bounty_payout}</p>
                <p>Type: {this.state.type}</p>
                
                <button id={this.state.id} onClick={ (e) => this.state.handleDelete(this.state.index,e.target.id)} 
                > Delete Bounty</button>

                <button id={this.state.id} onClick={ (e) => { this.setState({updating: true, id : e.target.id})}} 
                > Update Bounty</button>
               
            
            {/* we have to coditionally render the update form here*/}
               {(this.state.updating? <UpdateForm id={this.state.id} index={this.state.index}/>: console.log("not updating"))}
            
            
        </div>
        </div>
    )
    }
}



export default BountyCard;