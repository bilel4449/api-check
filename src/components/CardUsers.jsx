import React from 'react'

const CardUsers = ({user}) => {
  return (
    <div className='div'>
        <h1>{user.name}</h1>
        <h3>{user.email}</h3>
        <h4>{user.id}</h4>
    </div>
  )
}

export default CardUsers