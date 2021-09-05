/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React ,{ useCallback,useState ,useEffect} from 'react';
import db from '../../lib/firebase'
import PostBox from './Post-box/PostBox';
import Post from './Post/Post';

const Feed = () => {
    const[posts , setPosts] = useState([]);
    useEffect(()=>{
        db.collection('posts').orderBy("createdAt").onSnapshot(snapShot=>(
            setPosts(snapShot.docs.map(doc => ( {id:doc.id , post: doc.data()}) ))
        ))
    },[])
    const [question, setQuestion] = useState('');

    const callback = useCallback((count) => {
        setQuestion(count);
    }, []);
    
   
    return (
        <div>
            <PostBox questionText = {question}  />
            <div  style ={{marginTop :'30px' }}>
                {
                    posts.map(post =>(
                        <Post
                            parentCallback={callback}
                            item = {post}
                            key = {post.id}

                        />
                    ))
                }
                
            </div>
        </div>
    )
}

export default Feed
