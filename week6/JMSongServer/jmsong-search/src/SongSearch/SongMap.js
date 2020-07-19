import React, {Component} from 'react'
import SongCard from './SongCard'
// import songData= require('./songlist')


class SongList extends Component {
    
    render(){
        console.log(this.props)
        
       
            // console.log(card)
            
        return(
                <div>
                    
                    {this.props.songBadges.map( (card, i) => { return (< SongCard
                        key={i}
                        index={i}
                        card={card}
                        
        
                        handleDelete={this.props.handleDelete}
                        
                        handleEdit={this.props.handleEdit}
                        id={card._id}
                    
                        />
                        )}
                        )}
            </div>
        )
    }
}

export default SongList