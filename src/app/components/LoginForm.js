import styles from "./components.module.css"; 


const LoginForm = ({loginUser}) => {
    return (
        <div className={styles.loginContainer}>
            <h2>Login Form</h2>
            <form className={styles.form} onSubmit={(e) => loginUser(e)}>
            <label htmlFor= "username">Username</label>
                <input type="username" name="username" className={styles.inputField} />

            <label htmlFor= "email">Email</label>
                <input type="email" name="email" className={styles.inputField} />

            <label htmlFor= "password">Password</label>
                <input type="password" name="password" className={styles.inputField} />

                <button type= "submit" className={styles.buttons}>Login</button>   

            </form>
        </div>
    )
}

export default LoginForm;
