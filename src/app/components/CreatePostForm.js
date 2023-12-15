import { useState } from "react";
import styles from "./components.module.css";

const CreatePostForm = ({createPostFunction}) => {
    const [imageUpload, setImageUpload] = useState();
    return (
        <div>
            <h2>Create Post Form</h2>
            <form className={styles.form} onSubmit={(e) => createPostFunction(e, imageUpload)}>
            <label htmlFor="postContent" >Post Content</label>
            <input type text="text" id="postContent" name="postContent" />
            <label htmlFor="image">Image</label>
            <input
            type="file"
            id="image"
            name="image"
            placeholder="Choose image"
            accept="image/png,image/jpeg"
            onChange={(e) => {
            setImageUpload(e.target.files[0]);
            }}
            />
            <button type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePostForm;