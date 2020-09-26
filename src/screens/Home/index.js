import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { doGet, getIdFromUrl } from '../../helpers/ApiHelper';


const Home = () => {

    const [people, setpeople] = useState([]);

    //Executa apenas uma vez
    useEffect(() => {
        doGet('/people').then(response => setpeople(response.results));

    });
    if (!people || !people.length) {
        return <h1>Loading...</h1>;
    }
    //    console.log(people);
    const peopleList = people.map(p => {

        const id = getIdFromUrl(p.url);
        return (<li key={p.url}>
            <Link to={`/detail/${id}`}> {p.name}</Link></li>)
    });

    return (<>
        <h1 > Home </h1>
        <ul>{peopleList}</ul>
    </>
    );
};

export default Home;