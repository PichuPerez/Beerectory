import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import styled from 'styled-components'
import Styles from './components/Styles'
import Routes from './Routes'
const AppWrapper = styled.div`
  background-color: #f7dc83 !important;
  height: 100vh;
`

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Navbar />
        <Route path="/" component={Routes} />
      </BrowserRouter>
      <Footer />
    </AppWrapper>
  )
}

export default App
