import styles from "./components.module.css";
const CreateUserForm = ({ createUser }) => {
    return (
      <div className={styles.createContainer}>

        <form onSubmit={(e) => createUser(e)}>
          <div className={styles.forms}>
            <label htmlFor="name" className={styles.labelTitle}>
              Username
            </label>
            <input type="text" name="name" className={styles.inputField} />
          </div>
  
          <div className={styles.forms}>
            <label htmlFor="email" className={styles.labelTitle}>
              Email
            </label>
            <input type="email" name="email" className={styles.inputField} />
          </div>
  
          <div className={styles.forms}>
            <label htmlFor="password" className={styles.labelTitle}>
              Password
            </label>
            <input type="password" name="password" className={styles.inputField} />
          </div>
  
          <button type="submit" className={styles.buttons}>
            Create Profile
          </button>
        </form>
      </div>
    );
  };
  
  export default CreateUserForm;
