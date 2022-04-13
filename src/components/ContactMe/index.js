import React, { useRef, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './index.css'
import emailjs from '@emailjs/browser';
import Modal from '../Modal/index'
import { Button } from './ContactMeElements';


const Contact = () => {
    const form = useRef();
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    };



    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_71uh50f', 'template_432mw93', form.current, 'AxsbSE6XCmR-esNdV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <>
            <Container id="contact" className=''>
                <Row className='mb-5 mt-3'>
                    <Col lg='12' className='text-center'>
                        <h1 className="mb-5 mt-5 ">Contact Me</h1>
                    </Col>
                </Row>

                <Row className="sec_sp">
                    <Col lg='5' className="mb-5">
                        <h3 className='color_sec py-4'>Get in touch</h3>
                        <address>
                            <strong>Email : jbryanmcgrath@gmail.com</strong>
                            <br />
                            <br />
                            <p>
                                <strong>
                                    Phone : 541-699-7799
                                </strong>
                            </p>
                        </address>
                        <p>Please reach out. I look forward to hearing from you.</p>
                    </Col>
                    <Col Lg='7' className="d-flex align-items-center">
                        <form ref={form} onSubmit={sendEmail} className='contact__form w-100'>
                            <Row>
                                <Col Lg='6' className="form-group">
                                    <input
                                        className='form-control rounded-0'
                                        id='name'
                                        name='name'
                                        placeholder='Name'
                                        type='text'
                                    />
                                </Col>
                                <Col Lg='6' className="form-group">
                                    <input
                                        className='form-control rounded-0'
                                        id='email'
                                        name='email'
                                        placeholder='Email'
                                        type='email'
                                    />
                                </Col>
                            </Row>
                            <textarea className='form-control rounded-0 mt-5' id="message" name='message' placeholder='Message' rows='5'>
                            </textarea>
                            <br />
                            <Row>
                                <Col lg='12' className="form-group">
                                    <Button onClick={openModal} type="submit"> Send</Button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default Contact