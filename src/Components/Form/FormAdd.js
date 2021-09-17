import React from 'react'
import { useForm } from '../../hook/useForm';
import { Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AddProduct } from '../../action/productAcion';

const FormAdd = () => {

    const dispatch = useDispatch();
    let file = [];

    const [formValue, handleInputChange, reset] = useForm({
        title: '',
        description: '',
        price: '',
        category: ''
    });

    const { title, description, price, category } = formValue

    const handleNewProduct = (e) => {
        e.preventDefault();
        dispatch(AddProduct(formValue, file));
        reset()
    }


    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            file = e.target.files[0]
        }
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click()
    }
    return (
        <div>
            <Container className="text-center">
                <p className="text-center">Agrega un producto</p>
                <Form onSubmit={handleNewProduct}>
                    <Form.Control
                        type="text"
                        name="title"
                        placeholder="Nombre del Producto"
                        value={title}
                        onChange={handleInputChange}
                        required />
                    <br />
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="description"
                        placeholder="Descripcion del Producto"
                        value={description}
                        onChange={handleInputChange}
                        required

                    />
                    <br />
                    <div className="form-group">
                        <Form.Control
                            type="number"
                            name="price"
                            placeholder="Precio del producto"
                            value={price}
                            onChange={handleInputChange}
                            required />
                        <br />
                    </div>
                    <Form.Control
                        type="text"
                        name="category"
                        placeholder="Categoria del Producto"
                        value={category}
                        onChange={handleInputChange}
                        required />
                    <br />
                    <input
                        id="fileSelector"
                        type="file"
                        name="file"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <div>
                        <input
                            type="button"
                            className="btn border-bottom shadow-sm"
                            onClick={handlePictureClick}
                            value="Carga una imagen"
                        />
                        <button type="submit" className="btn btn-primary mt-2 mx-2">
                            Enviar
                        </button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default FormAdd

