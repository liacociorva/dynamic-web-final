import { useEffect } from "react"; 
import { useRouter } from "next/router"; 
import CreateUserForm from "@/app/components/CreateUserForm";
import styles from "../app/components/components.module.css";

export default function Create( { createUser, isLoggedIn } ) {
    const router = useRouter(); 
    useEffect(() => {
        if (isLoggedIn) router.push("/"); 
    }, [isLoggedIn]); 
    return (
        <>
        <main>
            <h1 className={styles.title}>Create User</h1>
            <CreateUserForm createUser={createUser}/> 
        </main>
        </>
    )
} 
