import React, { useState, useEffect } from 'react'
import axios from 'axios'

const StyleDetail = props => {
  const { params } = props.match
  const [data, setData] = useState({ hits: [] })

  useEffect(() => {
    async function fetchData() {
      const response = await axios(
        `https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/style/${params.id}/?key=${process.env.REACT_APP_API_KEY}`
      )
      console.log(response.data)
      setData(response.data.data)
    }
    fetchData()
  }, [])
  console.log(params)
  return <h1>{params.id}</h1>
}

export default StyleDetail
