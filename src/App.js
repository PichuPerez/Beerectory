import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import styled from 'styled-components'
import Styles from './components/Styles'

const AppWrapper = styled.div`
       background-color: #f7dc83 !important;
       height: 100vh;
`;

function App() {
  return (
    <AppWrapper>
        <Navbar/>
            <Styles/>
        <Footer/>
    </AppWrapper>
  );
}

export default App;
