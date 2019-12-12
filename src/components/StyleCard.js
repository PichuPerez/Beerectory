import React from 'react'
import { Link } from 'react-router-dom'

const StyleCard = props => {
  const style = props.style
  return (
    <div className="pt-2">
      <div className="card">
        <h5 className="card-header">{style.name}</h5>
        <div className="card-body">
          <p className="card-text">{style.description}</p>
          <Link to={`/style/${style.id}`}>
            <button className="btn btn-warning">Ver especificaciones</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default StyleCard
