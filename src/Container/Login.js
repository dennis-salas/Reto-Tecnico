import React from 'react';
import '../css/login.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from '../hook/useForm';
import { startLoginEmailPassword, startGoogleLogin } from '../action/authAction'

export const Login = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email: "",
        password: "",
    });
    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
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
                            <h5 className="text-center">Inicio de sesión</h5>
                            <form className="pt-4" >
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
                                <div className="d-flex justify-content-center pb-4">
                                    <input
                                        type="button"
                                        value="Iniciar sesión"
                                        className="btn btn-dark btn-block"
                                        onClick={handleLogin}
                                    />
                                </div>
                                <div className="d-flex justify-content-center pb-4">
                                    <button className="btn btn-block btn-dark rounded "
                                        onClick={handleGoogleLogin}
                                    >
                                        Iniciar sesión con cuenta google
                                    </button>
                                </div>
                                <div className="register d-flex justify-content-center pb-4">
                                    <p>No tienes cuenta? <Link to="/auth/Register">registrate aquí</Link></p>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}