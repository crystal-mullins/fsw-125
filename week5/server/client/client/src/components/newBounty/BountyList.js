import React, {Component} from 'react'
import BountyCard from './BountyCard'

// import FormBadge from './FormBadge'

class BountyList extends Component {
    

    
    render(){
        console.log(this.props)
        
        const mappedCards = this.props.bountyBadges.map( (card, i) => {
            return(
                < BountyCard
                key={i}
                index={i}

                firstName={card.firstName}

                lastName={card.lastName}

                living={card.living}

                bounty_payout={card.bounty_payout}
                
                type={card.type}

                handleDelete={this.props.handleDelete}
                
                handleUpdate={this.props.handleUpdate}
                id={card._id}
                
                />
            )
        })
        return(
                <div>
                    
                    {mappedCards}
            </div>
        )
    }
}

export default BountyList