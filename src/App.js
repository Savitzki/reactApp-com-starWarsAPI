import React from 'react';
/*
BrowserRouter - roteador do navegador
Switch - faz a alternancia entre as rotas
Route -criar uma rota 
Link - criar um link
*/
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './screens/Home'
import Detail from './screens/Detail'
//Aplicacao
const App = () => {
    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Detail'>Detail</Link>
                </li>

            </ul>

            <Switch>
                {/*Passando a rota da pagina detail */}
                <Route path='/detail'>
                    < Detail />
                </Route>
                {/*Passando a rota da pagina home */}
                {/*É importante que esta rota fique por ultimo por como é a raiz, se ficar acima das outras pode pegar uma rota errada quando
                for redirecionada */}
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );

};

//permite que seja importada no index
export default App;