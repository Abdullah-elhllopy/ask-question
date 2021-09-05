/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React ,{useState ,useEffect} from 'react'
import './Comment.css'

const Comment = ({comments}) => {
    
	const[Comments , setComments] = useState([...comments]);
	const[text ,setText] = useState('')

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const addComment = () => {
		// preventing default nature of form of refresh
		if(text){
			setComments([...Comments,text])

		}
		setText('')
	
	  }
	
	  useEffect(()=>{
		addComment()
	 },[])
	 
	 let today = new Date().toLocaleDateString()

     const handleRemoveItem = (e) => {
		const name = e.target.getAttribute("name")
		console.log(name)
		setComments(Comments.filter(item => item !== name));
	};
	 



	return (
		<div class="">
		<div class="be-comment-block">
			<h1 class="comments-title">Comments ({Comments.length})</h1>
			{
				Comments.map(comment =>(
					<div class="be-comment " key = {comment}>
						<div class="be-img-comment">	
							<a href="blog-detail-2.html">
								<img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="be-ava-comment"/>
							</a>
						</div>
						<div class="be-comment-content">
							
								<span class="be-comment-name">
									<a href="blog-detail-2.html">Ravi Sah</a>
									</span>
								<span class="be-comment-time">
									<i class="fa fa-clock-o"></i>
									{today} 
								</span>
				
							<p class="be-comment-text min-vw-50 ">
								{comment}
							</p>
							
							<div className ="like p-2 cursor" >
							<i className="fa fa-trash"></i>
                                <span className="ml-1" name={comment} onClick ={handleRemoveItem}>Delete</span>
							</div>

						</div>
					</div>

				))

			}
			
			
			<div className="bg-light p-2">
				 <div className="d-flex flex-row align-items-start">
					  <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png" width="40"/> 
					  <textarea className="form-control ml-1 shadow-none textarea"
					    value ={text}
					    onChange = {(e)=>setText(e.target.value)}
					  >
						  </textarea> 
				</div> 
				<div className="mt-2 text-right"> 
					<button className="btn btn-primary btn-sm shadow-none" onClick = {addComment} type="button">Post comment</button> 
					<button className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button> 
				</div> 
			
			</div>
		</div>
		</div>
    )
}

export default Comment;
