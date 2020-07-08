import React , {Component}from 'react'
import UpdateForm from "./UpdateForm"

class BountyCard extends Component{
    constructor(props){
        super(props)
        var { index, firstName, lastName, living, bounty_payout, type, handleDelete, handleUpdate } =this.props
        this.state= {
            index, firstName, lastName, living, bounty_payout, type, handleDelete, handleUpdate , updating: false
        }
    }
    
  
    render(){
    return(
        <div> 
            <h1 style={{backgroundColor:"aqua"}}>HUSBAND HUNT BOUNTY LIST</h1>
        <div className="wrapper">


                <p>Name: {this.state.firstName} {this.state.lastName}</p>
                
                <p>SINGLE {this.state.living}</p>
                <p>Bounty Payout: {this.state.bounty_payout}</p>
                <p>Type: {this.state.type}</p>
                
                <button onClick={ () => this.state.handleDelete(this.state.index)} 
                > Delete Bounty</button>

                <button onClick={ () => { this.setState({updating: true})}} 
                > Cashout Bounty</button>
               
            
            {/* we have to coditionally render the update form here*/}
               {(this.state.updating? <UpdateForm handleUpdate={this.state.handleUpdate} index={this.state.index}/>: console.log("not updating"))}
            
            
        </div>
        </div>
    )
    }
}



export default BountyCard;