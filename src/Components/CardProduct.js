import React from 'react'
import { Card, ListGroup, ListGroupItem, Col } from 'react-bootstrap'

const CardProduct = (product) => {

    return (
        <Col className='mb-4 mt-4' md={4} xs={12}>
            <Card className="Card-Tienda">
                <Card.Img variant='top' src={product.product.image} className='img-fluid img-card' />
                <Card.Body>
                    <Card.Title>{product.product.title}</Card.Title>
                    <ListGroup>
                        <ListGroupItem>Precio: <small>{product.product.price}</small></ListGroupItem>
                        <ListGroupItem>Categoria: <small>{product.product.category}</small></ListGroupItem>
                    </ListGroup>
                    <button className="btn btn-primary mr-3 my-2"
                    ///onClick={handleEdit}
                    >
                        Editar</button>
                    <button className="btn btn-danger mr-3 my-2 mx-2"
                    ///onClick={handleDelete}
                    >Eliminar</button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardProduct
