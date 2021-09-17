import React from 'react';
import { useSelector } from 'react-redux';
import { Card, ListGroup, ListGroupItem, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { activeProduct } from '../action/productAcion';
import { startDeleting } from '../action/productAcion'

const CardProuctBD = () => {

    const dispatch = useDispatch()

    const { product } = useSelector(state => state.product)

    const handleEdit = (id, product) => {
        dispatch(activeProduct(id, product));
    }

    const handleDelete = (id) => {
        dispatch(startDeleting(id));
    }

    return (
        <Row xs={1} md={3} className='g-4 my-3 mx-2'>
            {
                product.map(product => (
                    <Col className='mb-4 mt-4' md={4} xs={12} key={product.id}>
                        <Card className="Card-Tienda">
                            <Card.Img variant='top' src={product.url} className='img-fluid img-card' />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <ListGroup>
                                    <ListGroupItem>Precio: <small>{product.price}</small></ListGroupItem>
                                    <ListGroupItem>Categoria: <small>{product.category}</small></ListGroupItem>
                                </ListGroup>
                                <button className="btn btn-primary mr-3 my-2"
                                    onClick={() => handleEdit(product.id, product)}
                                >
                                    Editar</button>
                                <button className="btn btn-danger mr-3 my-2 mx-2"
                                    onClick={() => handleDelete(product.id, product)}
                                >Eliminar</button>
                            </Card.Body>
                        </Card>
                    </Col>

                ))
            }
        </Row>
    )
}

export default CardProuctBD
