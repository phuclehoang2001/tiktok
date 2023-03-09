import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import LoginForm from './LoginForm';

const cx = classNames.bind(styles);
function Login() {
    const [currentView, setCurrentView] = useState('logIn');

    const changeView = (view) => {
        setCurrentView(view);
    };

    const renderView = () => {
        switch (currentView) {
            case 'signUp':
                return (
                    <LoginForm
                        label="Sign Up"
                        title="Create Account"
                        submit
                        refLogin
                        changeView={changeView}
                    ></LoginForm>
                );
            case 'logIn':
                return (
                    <LoginForm
                        label="Welcome Back!"
                        title="Log In"
                        login
                        createAccount
                        changeView={changeView}
                    ></LoginForm>
                );
            case 'PWReset':
                return (
                    <LoginForm
                        label="Reset Password"
                        title="Password Reset"
                        reset
                        backLogin
                        changeView={changeView}
                    ></LoginForm>
                );
            default:
                break;
        }
    };

    return <section className={cx('loginPage')}>{renderView()}</section>;
}

export default Login;
