import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Layout/Navbar'
import Footer from "./components/Layout/Footer";
import styled from 'styled-components'

const AppWrapper = styled.div`
       background-color: purple;
       height: 100%;
`;

function App() {
  return (
    <div>
        <Navbar/>
        <AppWrapper>

        </AppWrapper>
        <Footer/>
    </div>
  );
}

export default App;
