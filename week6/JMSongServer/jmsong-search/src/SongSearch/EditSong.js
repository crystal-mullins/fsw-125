import React, {Component} from 'react'
import SongList from './SongList'
import axios from 'axios'

class EditSong extends Component {
    constructor(props){
        super(props)
        this.state={
            number:'',
            authors:'',
            song:'',
            pop:'',
            type:'',
            songCards:[],
            id: this.props.id
            
        }
    }
    handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name] : value})
    }

    handleDelete = (i) => {
        let updatedSongArray = this.state.songCards
        updatedSongArray.splice(i, 1)
        this.state({songCards: updatedSongArray})
    }
  

       
    handleEdit = (editState, id) => {
        let editedSongArray = this.state.songCards
        editedSongArray.splice(editState, id)


const {number, authors, song, pop, type} = editState
    var editedSong= {
        number,
        authors,
        pop,
        song,
        type
}

axios.put('./songlist/' + id, editedSong ).then(res => {
   
    console.log(res)
})
}


    render(){
        console.log("Edit song")
        return(
            <div> 
                
                <form id={this.state.id}  onSubmit={(e)=>{
                    e.preventDefault()
                    this.handleEdit(this.state, 
                     e.currentTarget.id)
                     window.location.reload()}}>
                <input
                className="author-box"
                type="text"
                name="authors"
                placeholder="author:"
                value={this.state.authors}
                onChange={this.handleChange}
               
                />
               
                <input
                className="pop-box"
                type="text"
                name="pop"
                placeholder="pop"
                value={this.state.pop}
                onChange={this.handleChange}
                
                />
               
                <textarea
                className="song-input-box"
                type="text"
                name="song"
                placeholder="Edit song:"
                value={this.state.song}
                onChange={this.handleChange}
               
                />
               
               <input
                className="type-box"
                type="text"
                name="type"
                placeholder="type"
                value={this.state.type}
                onChange={this.handleChange}
                
                />
               
                
              

                </form>
                <SongList 
                songCards={this.state.songCards}
               
                handleEdit={this.state.handleEdit}
                />
                </div>
        )
    };
}

export default SongForm;