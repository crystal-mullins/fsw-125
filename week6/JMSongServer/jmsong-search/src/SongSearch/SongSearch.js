

import React, {Component} from 'react';
// import SongList from './SongMap';


export default class SearchForm extends Component {
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
        
        e.preventDefault()
        let newSongData= {
            number: this.state.number,
            pop: this.state.pop,
            authors: this.state.authors,
            song: this.state.song,
            type: this.state.type,
        }
        this.setState({flickerBadges: [ newSongData, ...this.state.songBadges],
            number:'',
            pop:'',
            authors:'',
            song:'',
            type:'',
        })
    }
    render(){
        return (
           
            <div>
            <form className='search-form-wrapper'>
            <input className="search"/>
            
            
            
            <button onClick={ () => {} }>search
            </button>
            </form>

        <div>
        {/* <SongList /> */}
        </div>
       </div>
       )
}
}


