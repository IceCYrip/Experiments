import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <Link to={props.appName} style={{ textDecoration: 'none' }}>
      <div
        className="card"
        style={{
          width: 280,
          height: 100,
          backgroundColor: 'aquamarine',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid black',
          borderRadius: 25,
        }}
      >
        <span
          className="tag"
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black',
          }}
        >
          {props.label}
        </span>
      </div>
    </Link>
  )
}

export default Card
