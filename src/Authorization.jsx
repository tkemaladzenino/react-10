

import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Authorization = () => {
    const handleLogin = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (!username || !password) {
            window.alert('ყველა ველის შევსება აუცილებელია');
        } else {
            window.alert('თქვენ წარმატებით გაიარეთ ავტორიზაცია');
        }
    };

    return (
        <div className="container-fluid layout-bodyR  d-flex justify-content-center pt-5 ">
            <div className="row">
                <div className="col-md-6  d-flex justify-content-center flex-column gap-4 pt-5">
                    <h4 style={{ color: '#6fd0e1' }}>ავტორიზაცია</h4>

                    <Form className="custom-form">
                        <Form.Group>
                            <Form.Label>მომხმარებლის სახელი</Form.Label>
                            <Form.Control id="username" type="text" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>პაროლი</Form.Label>
                            <Form.Control id="password" type="password" />
                        </Form.Group>
                        <Button className="custom-buttonA" variant="primary" onClick={handleLogin}>
                            შესვლა
                        </Button>
                    </Form>

                </div>

            </div>

        </div>
    );
};

export default Authorization;
