/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React ,{useState ,useEffect} from 'react';
import db from '../lib/firebase'
const Posts = () => {
    const[posts , setPosts] = useState([]);
    useEffect(()=>{
        db.collection('posts').orderBy("createdAt").onSnapshot(snapShot=>(
            setPosts(snapShot.docs.map(doc => (  {id:doc.id , post: doc.data()}) ))
        ))
    },[])
    return (
       <div style = {{marginTop : '40px'}}>
           {
               posts.map(item =>(

                
                    <div className="container " key = {item.id}>
                        <div className="d-flex justify-content-center row">
                            <div className="col-md-8">
                                <div className="d-flex flex-column comment-section">
                                    <div className="bg-white p-2">
                                        <div className="d-flex flex-row user-info">
                                            <img className="rounded-circle" 
                                            src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" 
                                            width="40"
                                            />

                                            <div className="d-flex flex-column justify-content-start ml-2">
                                                <span className="d-block font-weight-bold name">{item.post.userName}</span>
                                                <span className="date text-black-50">Shared publicly - Jan 2020</span> 
                                            </div>
                                            
                                        </div>
                                    
                                        <div className="mt-2">
                                            <p className="comment-text">{item.post.title}</p>
                                        </div>
                                    
                                    </div>
                                    <div className="bg-white">
                                        <div className="d-flex  fs-12">
                                            <div className="like p-2 cursor" 
                                            onClick={(Event) =>
                                                db.collection("posts").doc(item.id).delete()
                                            }
                                            
                                            >
                                                <i className="fa fa-trash"></i>
                                                <span className="ml-1">Delete</span>
                                            </div>
                                            
                                        
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
           )) 
        }
    </div>
    )
}

export default Posts
