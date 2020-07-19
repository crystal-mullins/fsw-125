import React, {Component} from 'react';
import SongSearch from './SongSearch'
import axios from 'axios'

import SongList from './SongMap'
import SongForm from './SongForm'

class Main extends Component {
  constructor(){
    super()
    this.state={
      songBadges: []
    }
  }
data (){
  axios.get('/songlist/')
  .then(res =>{
      console.log("res.data", res.data)
      this.setState({
          songBadges:res.data
      })
  })
}  componentDidMount(){
    this.data()
  }
  handleSubmit = (newSongData) => {
    this.setState(prevState => {
      return({songBadges: 
        [ ...prevState.songBadges, newSongData ],
        number:'',
        pop:'',
        author:'',
        type:'',
        songs:'',
  
    })
      
     })
    
  }

  

  handleDelete = (i, id) => {
    // let editedSongArray = this.state.songBadges
    // editedSongArray.splice(i, 1)
    

      axios.delete('/songlist/'+id)
      .then(res =>{
          console.log("res.data", res)
          this.data()
      })
    
  }

   
  render(){
  return (
    <main>
        <SongForm handleSubmit={this.handleSubmit} />
        <SongSearch />
        <SongList songBadges={this.state.songBadges}
        handleDelete={this.handleDelete}/>
    </main>

   
  );
  }
}

export default Main;
