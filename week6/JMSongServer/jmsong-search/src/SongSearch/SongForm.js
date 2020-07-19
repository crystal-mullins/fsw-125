import React, {Component} from 'react';
import '../App.css'


// import SongList from './SongList'
// import songlist from './songlist'
// const songlist =require('songlist')

class SongForm extends Component{
              constructor(){
              super()
              this.state={
                number: '',
                pop: '',
                author: '',
                type: '',
                songs: '', 
                   
                  handleDelete: this.handleDelete,
                   handleEdit: this.handleEdit
    }
}


  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name] : value})
    }


  handleSubmit = (e) =>{
        console.log(this.state)
    e.preventDefault()
    let newSongData= {
        number: this.state.number,
        pop: this.state.pop,
        author: this.state.author,
        type: this.state.type,
        song: this.state.song,    
    }
    this.props.handleSubmit(newSongData)
    
}


render(){
  
  return(
   <div>
                <form onSubmit={this.handleSubmit} className="song-form-wrap"
                
                >
                    <textarea className="song-input-box"

                      type="text"
                      name="song"
                      placeholder="Enter Song Here"
                      value={this.state.song}
                      onChange={this.handleChange}

/>

                      <input className="author-box"

                      type="text"
                      name="authors"
                      placeholder="author:"
                      value={this.state.authors}
                      onChange={this.handleChange}
                    
                      />
                    
             
{/* change to boolean */}
                      <input className="pop-box"
                      type="text"
                      name="pop"
                      placeholder="pop:"
                      value={this.state.pop}
                      onChange={this.handleChange}
                      
                      />
                      
                
                <button style={{gridColumn:"span 2", width:"20%", marginLeft:"40%", backgroundColor:"skyblue"}}>Submit Song</button>
            </form>
            {/* <SongCard 
                songData={this.state.songBadges}
                handleDelete={this.state.handleDelete}
                handleEdit={this.state.handleEdit}
                /> */}
    
    </div>
    
  );
}
}
export default SongForm
