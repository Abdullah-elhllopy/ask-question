import React ,{useState ,useEffect} from 'react'
import Comment from './Comment/Comment'
import db from '../../../../lib/firebase'

const Comments = ({comments ,item}) => {
    const[comment , setComments] = useState([]);
    
    useEffect(()=>{
        db.collection("posts").doc(item.id).collection("comments").get().then(snapshot => {
            snapshot.forEach(doc => {
         
            });
        })

    },[ item.id])
    
    return (
        <div>   
          <Comment comments ={comments} />       
        </div>
    )
}

export default Comments
