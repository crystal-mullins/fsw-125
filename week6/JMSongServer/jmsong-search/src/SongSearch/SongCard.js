import React , {Component}from 'react'
import SongForm from './SongForm'

class SongCard extends Component{
    constructor(props){
        super(props)
        var {  handleDelete, handleEdit, id, card } =this.props
        console.log(card)
      
        this.state= {

            // index, number, author, pop,  song, type, 
             handleDelete, handleEdit , id, editing: false

        }
    }
    componentDidMount(){
//   var { number, author, pop, song, type}=this.props.card
  console.log(this.props.card)
       this.setState({
                ...this.props.card
       })
       
      }



    handleSubmit = (newObject) =>{
console.log(newObject)

        this.setState( {
            number:newObject.number,
            author:newObject.author,
            pop:newObject.pop,
            song:newObject.song,
            type:newObject.type, 
            editing:false   
         })
    }

    
  
    render(){
      
    return(
        <div> 
            <h1 className='card-banner'>What is your favroite John Mayer song?</h1>
        <div className="card-wrapper">

                <div className='song-card'>

                <p>Song Name: {this.state.songs}</p>
                
                <p>author: {this.state.author}</p>

                <p>Pop?: {this.state.pop}</p>

                <p>Type: {this.state.type}</p>


                </div>
               
                
                
                <button style={{gridColumn:"span 2", width:"20%", marginLeft:"30%", backgroundColor:"blue"}} id={this.state.id} onClick={ (e) => this.state.handleDelete(this.state.index,e.target.id)} 
                > Delete</button>

                <button style={{gridColumn:"span 2", width:"20%", marginRight:"1%", backgroundColor:"green"}}id={this.state.id} onClick={ (e) => { this.setState({editing: true, id : e.target.id})}} 
                > edit</button>
               
            
            {/* we have to coditionally render the update form here*/}
               {(this.state.editing? <SongForm 
               id={this.state.id} 
               index={this.state.index}
               handleSubmit={this.handleSubmit}
               />: <p></p>)}
            
            
        </div>
        </div>
    )
    }
}



export default SongCard;