import React, {PropTypes} from 'react';
import styles from './Login.css';
import {Spin, Form, Input, Checkbox, Button, Row} from 'antd';

const FormItem = Form.Item;

const Login = ({
  loginLoading,
  form: {
    getFieldDecorator //comes from Form.create()
  }
}) => {

  return (
    <div className={styles.spins}>
      <Spin tip='Loading...' spinning={loginLoading} size='large'>
        <div className={styles.normal}>
          <div className={styles.logo}>
            <h1>Account Book Login</h1>
          </div>
          <form>
            <FormItem hasFeedback={true}>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: 'username is required'
                  }
                ]
              })(<Input size='large' placeholder='username'/>)}
            </FormItem>
            <FormItem hasFeedback={true}>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'password is required'
                  }
                ]
              })(<Input size="large" type="password" placeholder="password"/>)}
            </FormItem>
            <FormItem>
              <Row type="flex" justify="space-between">
                {getFieldDecorator("remember", {
                  valuePropName: "checked",
                  initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <a>Forgot password</a>
              </Row>
              <Row>
                <Button type="primary" size="large" className={styles.button}>
                  Login
                </Button>
              </Row>
            </FormItem>
          </form>
        </div>
      </Spin>
    </div>
  );
};

Login.propTypes = {
  form: PropTypes.object,
  loginLoading: PropTypes.bool,
};

export default Form.create()(Login);
