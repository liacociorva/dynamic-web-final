import { useEffect, useCallback} from "react"; 
import { useRouter } from "next/router"; 
import {getFirestore, collection, addDoc} from "firebase/firestore";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";
import styles from "../app/components/components.module.css"; 

export default function CreatePost( { isLoggedIn, userInformation } ) {
    const router = useRouter(); 
    useEffect(() => {
        if (!isLoggedIn) router.push("/"); 
    }, [isLoggedIn]);
    
    const createPostFunction = useCallback(
        async (e, imageUpload) =>  {
    e.preventDefault(); 
    const storage = getStorage();
    const db = getFirestore();

    // fetch post content from form
    const postContent = e.currentTarget.postContent.value;
  
    let imageURL;
    const storageRef = ref(storage, imageUpload.name);

        await uploadBytes(storageRef, imageUpload)
        .then(async (snapshot) => {
            await getDownloadURL(snapshot.ref)
            .then((url) => {
                imageURL=url;
            });
        })
        .catch((error) => {
            console.warn(error);
        });
    
   
    // linking post to user
    const userId = userInformation.uid;
    const data = await addDoc(collection(db, "posts"), { 
        postContent:postContent,
        userId: userId,
        imageURL,
    });

    if(data) {
     router.push("/");   
    }
}, [addDoc, collection, getFirestore, userInformation, router]);
    return (
    <div className={styles.wrapper}>
        <form onSubmit={(e) => createPostFunction(e, e.currentTarget.imageUpload.files[0])}>
        <div className={styles.inputs}>
          <label htmlFor="postContent" className={styles.label}>Post Content:</label>
          <textarea name="postContent" className={styles.textArea} />
        </div>
        <div className={styles.inputs}>
          <label htmlFor="imageUpload" className={styles.label}>
            Choose File
            <input type="file" name="imageUpload" id="imageUpload" className={styles.fileInput} />
          </label>
        </div>
  
        <button type="submit" className={styles.buttons}>Create</button>
      </form>
    </div>
    );
  }
    