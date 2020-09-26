import React, { useState, useEffect } from 'react';
import { doGet } from '../../helpers/ApiHelper';


const Home = () => {

    const [people, setpeople] = useState([]);

    //Executa apenas uma vez
    useEffect(() => {
        doGet('/people').then(response => setpeople(response.results));

    });


    console.log(people);

    return <h1 > Home </h1>;
};


export default Home;