import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, ConfigProvider } from 'antd';
import './login.css';

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div style={{ 
      width: '250px',
      height: '900px',
      margin: '150px auto',
      position: 'relative',
      bottom: '200px'
      }} >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <ConfigProvider
      theme={{
        token: {
          colorPrimaryHover: '#fbc02d',
          colorPrimary: ' #fdd835'
        },
      }}
    >
        <Form.Item
          name="username"
          rules={[{required: true, message: '아이디를 입력해주세요'} ]}
          className='id-form'
          
        >
          <Input 
            prefix={<UserOutlined className="site-form-item-icon" />} 
            placeholder="아이디" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '비밀번호를 입력해주세요'}]}
          className='pw-form'
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="비밀번호" />
        </Form.Item>
          <div style={{ textAlign: 'center' }}>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" >
                <Checkbox prefixCls='login-state'> 로그인 상태유지 </Checkbox>
              </Form.Item>
              <a className="login-form-forgot" href="" style={{ color: 'black'}}>
                아이디 찾기
              </a>
              <span>&nbsp;&nbsp;&nbsp;</span>
              <a className="login-form-forgot" href="" style={{ color: 'black'}}>
                비밀번호 찾기
              </a>
            </Form.Item>
    
            <Form.Item >
              <Button type="primary" htmlType="submit" className="login-form-button" 
              style={{ 
                fontWeight: 'bold', WebkitTextStroke: '0.1px gray', color: 'black',
                background: "#ffeb38", 
              }} >
                Log in
              </Button>
              <span>&nbsp;&nbsp;Or&nbsp;&nbsp;</span> 
              <a href="" style={{ color: '#fbc02d', fontWeight: 'bold', textShadow: '0px 0.2px gray' }}>지금 회원가입</a>
            </Form.Item>
          </div>
        </ConfigProvider>
      </Form>

    </div>
  )
}

export default Login


