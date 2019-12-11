import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Style from './Style'
import styled from 'styled-components'

const StylesWrapper = styled.div`
       background-color: #f7dc83;
       height: fit-content;
`;

const Styles = () => {
    const [data, setData] = useState({ hits: [] });
    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await axios(
                `https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/styles/?key=${process.env.REACT_APP_API_KEY}`,
            );
            // ...
            setData(response.data.data)
        }
        fetchData();
    }, []);

    console.log('DATA',data)
    const stylesList = data && data.length > 0 ? data.sort(function(a, b){
        if(a.shortName < b.shortName) { return -1; }
        if(a.shortName > b.shortName) { return 1; }
        return 0;
    }) : ''
    console.log(stylesList)
    const count = data && data.length > 0 ? `Cervezas en la lista: ${data.length}` : ''
    const list = data && data.length > 0 ? stylesList.map(style => <Style style={style}/>) : <h1 >🍺🍺🍺🍺 Cargando cervezas...</h1>

    return (
        <StylesWrapper>
            <div className='container'>
                <h3> {count}</h3>
                {list}
            </div>
        </StylesWrapper>
    );
}
export default Styles;

