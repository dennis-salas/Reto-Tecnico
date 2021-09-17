import React, { useEffect } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import NavBarProduct from '../Components/NavBarProduct';
import App from '../Container/App';
import FormProduct from '../Container/FormProduct';
import { useDispatch } from 'react-redux';
import { startLoandingProduct } from '../action/productAcion';

const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoandingProduct());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <NavBarProduct />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/FormProduct" component={FormProduct} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter