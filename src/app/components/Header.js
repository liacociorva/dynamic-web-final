import Link from "next/link";
import styles from "./components.module.css";


const Header = ({isLoggedIn, logoutUser}) => {
    return ( 

        <header className={styles.header}>
            <nav className={styles.headerNav}>
        
              
            { isLoggedIn && (
                <>
                <Link href="/">Fresh Ink</Link>
                 <Link href="/profile">User Profile</Link>
                 <Link href="/createPost">Create Post</Link>
                 <a onClick={logoutUser}>Log Out</a>
                </>
            )}
            {!isLoggedIn && (
                <>
                <Link href="/login">Login User</Link>
                <Link href="/createUser">Create Profile </Link> 
                </>
            )}
                </nav>
        </header>
    );
};

export default Header;