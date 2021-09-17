import React, { useEffect, useState } from 'react';
import CardProduct from '../Components/CardProduct';
import { Row } from 'react-bootstrap';
import FormProduct from './FormProduct';

const App = () => {

    const [product, setProduct] = useState([]);
    const [click, setClick] = useState(false);

    const handleActiveForm = () => {
        setClick(true)
    }

    useEffect(() => {
        const getProduct = async () => {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => setProduct(json))
        };
        getProduct();
    }, []);

    return (
        <div>
            <div>
                <h1 className="text-center my-2">Tienda Virtual ShoppingShop</h1>
                {
                    (click === true) ? <FormProduct />
                        : <Row xs={1} md={3} className='g-4'>
                            {product.map((element) => (
                                <CardProduct product={element} key={element.id} />
                            ))}

                        </Row>
                }
            </div>
        </div>
    )
}

export default App
