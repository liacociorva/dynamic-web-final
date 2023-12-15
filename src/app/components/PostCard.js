import styles from "./components.module.css"; 

const PostCard = ({ post, user}) => {
    return (
        <div className={styles.postCardContainer}>
        <div className={styles.postCard}>
            <div className={styles.imageContainer}>
                 <img className = {styles.postImage} src={post.imageURL} alt="" />
            </div>
            <p className={styles.postContent}>{post.postContent}</p>
        </div>
        </div>

    ); 
}; 

export default PostCard;