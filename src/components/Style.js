import React from 'react'

const Style = props => {
    const style = props.style
    return (
        <div className='pt-2'>
            <div className="card">
                <h5 className="card-header">{style.name}</h5>
                <div className="card-body">
                    <p className="card-text">{style.description}</p>
                    <a href="#" className="btn btn-warning">Ver especificaciones</a>
                </div>
            </div>
        </div>
    )
}

export default Style
