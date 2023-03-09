import { useState } from 'react';
function LoginForm({ label, title, reset, backLogin, submit, refLogin, login, createAccount, changeView }) {
    const [account, setAccount] = useState({
        username: '',
        password: '',
        email: '',
    });
    const handleClick = (view) => {
        changeView(view);
        setAccount({});
    };

    const setParams = (e) => {
        const { id, value } = e.target;
        setAccount((prevState) => ({
            ...prevState,
            [id]: value,
        }));
        console.log(account);
    };

    return (
        <form>
            <h2>{label}</h2>
            <fieldset>
                <legend>{title}</legend>
                {reset && (
                    <ul>
                        <li>
                            <em>A reset link will be sent to your inbox!</em>
                        </li>
                        <li>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" required onChange={setParams} />
                        </li>
                    </ul>
                )}
                {login && (
                    <ul>
                        <li>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" required onChange={setParams} />
                        </li>
                        <li>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" required onChange={setParams} />
                        </li>
                        <li>
                            <i />
                            <a href="#" onClick={() => handleClick('PWReset')}>
                                Forgot Password?
                            </a>
                        </li>
                    </ul>
                )}
                {submit && (
                    <ul>
                        <li>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" required onChange={setParams} />
                        </li>
                        <li>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" required onChange={setParams} />
                        </li>
                        <li>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" required onChange={setParams} />
                        </li>
                    </ul>
                )}
            </fieldset>
            {submit && <button>Submit</button>}
            {refLogin && (
                <button type="button" onClick={() => handleClick('logIn')}>
                    Have an Account?
                </button>
            )}
            {login && <button>Login</button>}
            {createAccount && (
                <button type="button" onClick={() => handleClick('signUp')}>
                    Create an Account
                </button>
            )}
            {reset && <button>Send Reset Link</button>}
            {backLogin && (
                <button type="button" onClick={() => handleClick('logIn')}>
                    Go Back
                </button>
            )}
        </form>
    );
}

export default LoginForm;
