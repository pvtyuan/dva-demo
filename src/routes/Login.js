import React, {PropTypes} from 'react';
import styles from './Login.css';
import {Spin, Form, Input, Checkbox, Button, Row, Col} from 'antd';

const FormItem = Form.Item;

class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.spins}>
        <Spin tip='Loading...' spinning={this.props.loginLoading} size='large'>
          <div className={styles.normal}>
            <Row type="flex" justify="center">
              <h1 className={styles.h1}>Account Book Login</h1>
            </Row>

            <form>
              <FormItem hasFeedback={true}>
                {this.props.form.getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                      message: 'username is required'
                    }
                  ]
                })(<Input size='large' placeholder='username'/>)}
              </FormItem>
              <FormItem hasFeedback={true}>
                {this.props.form.getFieldDecorator('password', {
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
                  {this.props.form.getFieldDecorator("remember", {
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
  }

  static propTypes = {
    form: PropTypes.object,
    loginLoading: PropTypes.bool,
  };
}

export default Form.create()(Login);
