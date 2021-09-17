import React, { useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hook/useForm';
import { clearProduct, startSaveProduct } from '../../action/productAcion';

const FormEdit = () => {

    const { active } = useSelector(state => state.product)
    let file = []
    const dispatch = useDispatch();

    const activeId = useRef(active.id)

    useEffect(() => {
        if (active.id !== activeId.current) {
            reset(active)
        }
        activeId.current = active.id
    }, [active])

    const [formValue, handleInputChange, reset] = useForm(active)

    const { title, category, description, price } = formValue;

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            file = e.target.files[0]
            console.log(file);
        }
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleSave = (e) => {
        e.preventDefault();
        //console.log(formValue)
        dispatch(startSaveProduct(formValue, file))
    }


    const handelClear = () => {
        dispatch(clearProduct())
    }
    return (
        <div>
            <Container className="text-center">
                <p className="text-center my-2">Actualizar Producto</p>
                <Form onSubmit={handleSave}>
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

                        <button type="submit"
                            className="btn btn-primary mt-2 mx-2"
                        >
                            Guardar
                        </button>
                        <button type="submit" className="btn btn-info mt-2"
                            onClick={handelClear}>
                            limpiar
                        </button>
                    </div>
                </Form>
            </Container>

        </div>
    )
}

export default FormEdit


