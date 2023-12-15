import {useEffect, useState} from "react";
import { useRouter } from "next/router";
import { getDocs, getFirestore, collection} from "firebase/firestore";
import PostCard from "@/app/components/PostCard";
import styles from "@/app/components/components.module.css"
export default function Dashboard({ isLoggedIn }) {
const router = useRouter();
const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
    async function getAllPosts() {
        const postsArray = [];
        const db = getFirestore();
        const postsQuery = await getDocs(collection(db, "posts"));

        postsQuery.forEach((post) => {
            postsArray.push({ id: post.id, ...post.data() });
        });
        setAllPosts(postsArray);
    }
    getAllPosts();
    }, []);

    return (
        <main>
        <div className={styles.title}>
            <h2> InkedUp</h2>
            <p> Connecting tattoo artists to tattoo lovers one post at a time. Post your tattoos to show up in the feed below! </p>
        </div>
        {allPosts.map((post, i) => (
           <PostCard post={post} key={i} />
        ))}
        </main>
    );
}