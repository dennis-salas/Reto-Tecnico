import React from 'react';
import '../css/login.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from '../hook/useForm';
import validator from 'validator';
import { setError, removeError } from '../action/actionError';
import { useDispatch, useSelector } from 'react-redux';
import { startRegister } from '../action/auth'

export const Register = () => {

    const dispatch = useDispatch();
    const { msjError } = useSelector(state => state.ui)

    const [formValues, handleInputChange, reset] = useForm({
        name: "",
        lastName: "",
        email: "",
        password: "",
        password2: ""
    });

    const { name, lastName, email, password, password2 } = formValues;

    const formValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('nombre requerido'))
            return false
        }
        if (lastName.trim().length === 0) {
            dispatch(setError('apellido requerido'))
            return false
        }
        else if (!validator.isEmail(email)) {
            dispatch(setError('Email requerido'))
            return false
        }
        else if (password !== password2 || password < 5) {
            dispatch(setError('La contraseña es incorecta'))
            return false
        }

        dispatch(removeError(''))
        return true
    }


    const handleRegister = (e) => {
        e.preventDefault();
        if (formValid()) {
            dispatch(startRegister(name, lastName, email, password))
        }
        console.log(formValues);
        reset()
    }
    return (
        <div>
            <Container className="bg-white pb-5">
                <Row className="d-flex justify-content-start align-items-center mt-sm-5">
                    <Col lg={6} md={12}>
                        <div className="p-5">
                            <img src="https://i.ibb.co/7tSJgS2/Shoes-and-bags-close-up.jpg" alt="" />
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className="justify-content-center align-items-center">
                            <img src="https://i.ibb.co/Pw9kgvt/logo.jpg" alt="logo" className="logo rounded mx-auto d-block" />
                            <h5 className="text-center">Registra tus datos</h5>
                            {
                                msjError &&
                                (
                                    <div className="auth_alert-error">
                                        {msjError}
                                    </div>
                                )
                            }
                            <form className="pt-4">
                                <div className="d-flex flex-column pb-3">
                                    <label for="email">Ingresa Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={handleInputChange}
                                        className="border-bottom border-dark"
                                    />
                                </div>
                                <div className="d-flex flex-column pb-3">
                                    <label for="email">Ingresa Apellido</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={lastName}
                                        onChange={handleInputChange}
                                        className="border-bottom border-dark"
                                    />
                                </div>
                                <div className="d-flex flex-column pb-3">
                                    <label for="email">Ingresa Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={handleInputChange}
                                        className="border-bottom border-dark"
                                    />
                                </div>
                                <div className="d-flex flex-column pb-3">
                                    <label for="password">Ingresa Contraseña</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={handleInputChange}
                                        className="border-bottom border-dark"
                                    />
                                </div>
                                <div className="d-flex flex-column pb-3">
                                    <label for="password2">Ingresa Contraseña</label>
                                    <input
                                        type="password"
                                        name="password2"
                                        value={password2}
                                        onChange={handleInputChange}
                                        className="border-bottom border-dark"
                                    />
                                </div>
                                <div className="d-flex justify-content-center pb-4">
                                    <input
                                        type="button"
                                        value="Enviar"
                                        className="btn btn-dark btn-block"
                                        onClick={handleRegister}
                                    />
                                </div>
                                <div className="register d-flex justify-content-center pb-4">
                                    <p>Ya estas registrada? <Link to="/auth/Login">haz click aquí</Link></p>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}