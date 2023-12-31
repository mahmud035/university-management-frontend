'use client';

import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { Button, Col, Row } from 'antd';
import Image from 'next/image';
import { SubmitHandler } from 'react-hook-form';
import loginImage from '../../assets/login-image.svg';

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (error) {}
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: '100vh',
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login-image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: '15px 0',
            fontSize: '28px',
            fontWeight: 600,
          }}
        >
          Login Your Account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div
              style={{
                margin: '15px 0',
              }}
            >
              <FormInput name="id" type="text" size="large" label="User Id" />
            </div>
            <div
              style={{
                margin: '15px 0',
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>

            <Button type="primary" htmlType="submit" className="bg-blue-500">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
