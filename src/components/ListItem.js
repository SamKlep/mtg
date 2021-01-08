import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img alt='card' src={item.imageUrl} />
        </div>
        <div className='card-back'>
          <Link to={`/cards/${item.multiverseid}`}>
            <h1>{item.name}</h1>
          </Link>
          <ul>
            <li>
              <strong>Type: </strong>
              {item.type}
            </li>
            <li>
              <strong> Set: </strong>
              {item.set}
            </li>
            <li>
              <strong> {item.number} </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ListItem
