import React, {useState} from 'react';
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Spinner from '../components/Spinner';
const Login = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    // from submit
    const submitHandler = async (values) => {
        try {
            setLoading(true);
            const {data} = await axios.post('/users/login', values)
            setLoading(false);
            message.success('login success')
            localStorage.setItem('user', JSON.stringify({ ...data, password: '' }))
            navigate('/')
        } catch (error) {
            setLoading(false);
            message.error("Something went wrong");
        }
    };

    return (

        <>
            <div className="register-page">
                {loading && <Spinner />}
                <Form layout="vertical" onFinish={submitHandler}>
                    <h1> Login Form </h1>


                    <Form.Item label="Email" name="email">
                        <Input type="email" />

                    </Form.Item>

                    <Form.Item label="Password" name="Password">
                        <Input type="password" />

                    </Form.Item>
                    <div className="d-flex justify-content-between">
                        <Link to="/register"> Not a user ? Click here to register </Link>
                        <button className="btn btn-primary">Login</button>
                    </div>


                </Form>
            </div>

        </>
    )


}

export default Login