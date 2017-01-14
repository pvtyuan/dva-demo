import React, {PropTypes} from 'react';
import {connect} from "dva";
import styles from './Login.css';
import {Spin, Form, Input, Checkbox, Button, Row, message} from 'antd';

const FormItem = Form.Item;

const Login = ({
  children,
  location,
  dispatch,
  LoginModel,
  form:{
    getFieldDecorator,
    validateFieldsAndScroll
  }
}) => {
  const {loading, failed} = LoginModel;

  const onSubmit = () => {
    validateFieldsAndScroll((errors, values) => {
      console.log(values);
      if (!errors) {
        dispatch({type: "App/rememberMe", payload: values.remember});
        dispatch({
          type: "LoginModel/doLogin", payload: {
            username: values.username,
            password: values.password
          }
        })
      }
    })
  };

  return (
    <div className={styles.page}>
      <div className={styles.normal}>
        <Row type="flex" justify="center">
          <h1 className={styles.h1}>Account Book Login</h1>
        </Row>

        <form>
          <FormItem hasFeedback={true}>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'username is required'
                }
              ]
            })(<Input size='large' placeholder='Username'/>)}
          </FormItem>
          <FormItem hasFeedback={true}>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'password is required'
                }
              ]
            })(<Input size="large" type="password" placeholder="Password"/>)}
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
              <Button type="primary" size="large"
                      className={styles.button}
                      onClick={onSubmit}
                      loading={loading}>
                Login
              </Button>
            </Row>
          </FormItem>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.bool,
};

function mapStateToProps({...LoginModel}) {
  return {...LoginModel};
}
export default connect(mapStateToProps)(Form.create()(Login));
