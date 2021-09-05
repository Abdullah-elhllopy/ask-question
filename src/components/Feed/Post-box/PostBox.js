import React ,{useState} from 'react'
import {  Avatar} from '@material-ui/core'
import db from '../../../lib/firebase'

import './PostBox.css'

const PostBox = ({questionText}) => {

    const[question , setQuestion] = useState('');
    const date = new Date();
    const sendQuestion = (e)=>{
        e.preventDefault();
        db.collection('posts').add({
           
            userName : "Ainur Solveig",
            upVotesCount: 0,
            downVotesCount: 0,
            createdAt: date.toUTCString(),
            title : question,
            comments  :[]
            
        })
        setQuestion("")
    }
    
    return (
        <div className ="container mt-5">
        <form  className ="d-flex flex-row">
            <div className="d-flex flex-fill mx-2 ">
                 <Avatar src = "https://www.seekpng.com/png/full/356-3562377_personal-user.png" className = "mr-2"></Avatar>
                
                  <input class="form-control" 
                    type="text" placeholder="Ask Your Question Here..."
                    readonly
                    value = {question}
                    onChange = { (e) => setQuestion(e.target.value)}
                    className = "form-control "
                    style = {{height : '75px'}}
                  />
            </div>
            <button 
               disabled ={!question}
               type="submit" 
               className="btn btn-success mt-3 " 
               onClick = {sendQuestion}
               style = {{height : '40px'}}
               >
                   Ask Questtion
               
            </button>
           

        </form>
    </div>
    )
}

export default PostBox
