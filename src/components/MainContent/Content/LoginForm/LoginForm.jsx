import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { LoginAuth, LogoutAuth } from '../../../../redux/login_reducer';
import { connect } from 'react-redux';

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field
          type="email"
          placeholder="Email"
          name="email"
          component={'input'}
        />
        <Field
          type="password"
          placeholder="Password"
          name="password"
          component={'input'}
        />
        <Field type="checkbox" name="rememberMe" component={'input'} />
        <button>Login</button>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.LoginAuth(formData.email, formData.password, formData.rememberMe);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapDispathToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapDispathToProps, { LoginAuth, LogoutAuth })(Login);
