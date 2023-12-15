import styles from "./components.module.css"; 

const UserProfileCard = ({user}) => {
    return (
        <div className={styles.userProfile}>
            <h2> User Profile </h2>
            <h2>Name: {user.name}</h2>
        </div>
    ); 
}; 

export default UserProfileCard