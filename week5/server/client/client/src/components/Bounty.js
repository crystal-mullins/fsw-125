import React from 'react'

export default function Bounty(props){
    const { firstName,  lastName, bounty_payout } = props
    console.log(props)
    return(
        <div>
<   h1>Name:
        { firstName } 
        { lastName }</h1>
<p>Bounty { bounty_payout }</p>
        </div>
    )
}