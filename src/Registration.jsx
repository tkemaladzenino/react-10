

import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Registration = () => {
    const handleRegister = () => {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;


        if (!username || !email || !password) {
            window.alert('ყველა ველის შევსება აუცილებელია');
        } else if (!isValidEmail(email)) {
            window.alert('შეიყვანეთ ელ ფოსტის სწორი ფორმატი');
        } else {
            window.alert('თქვენ წარმატებით გაიარეთ რეგისტრაცია');
        }
    };

    const isValidEmail = (email) => {
        // A simple regular expression to check for the "@" symbol in the email.


        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    };
    return (
        <div className="container-fluid layout-bodyA  d-flex justify-content-center  pt-4">
            <div className="row">
                <div className="col-md-6  d-flex justify-content-center flex-column gap-4 pt-5">
                    <h4>რეგისტრაცია</h4>
                    <Form>
                        <Form.Group>
                            <Form.Label>მომხმარებლის სახელი</Form.Label>
                            <Form.Control id="username" type="text" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>ელექტრონული ფოსტა</Form.Label>
                            <Form.Control id="email" type="email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>პაროლი</Form.Label>
                            <Form.Control id="password" type="password" />
                        </Form.Group>
                        <Button variant="primary" onClick={handleRegister}>
                            რეგისტრაცია
                        </Button>
                    </Form>
                </div>

            </div>

        </div>


    );
};

export default Registration;





