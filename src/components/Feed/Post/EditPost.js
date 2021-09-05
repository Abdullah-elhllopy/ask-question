/* eslint-disable jsx-a11y/anchor-is-valid */
import React ,{useState} from 'react'
import db from '../../../lib/firebase'
const EditPost = ({item}) => {
    const[input , setInput] = useState(item.post.title);
    const updateTodo = () => {
        // update the todo with the new input
        db.collection("posts").doc(item.id).update(
          {
            title: input
          }
        );
        
      };

    return (
        <>
                      
          
            <div className="like p-2 cursor"   
                            
            >
              <i className="fa fa-edit" ></i>
             <span className="ml-1" data-toggle="modal" data-target="#exampleModalCenter">Edit</span>
         </div>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Message:</label>
                            
                            <input type="text" class="form-control" id="message-text" name="text" value={input} onChange={(e)=> setInput(e.target.value)} />
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" onClick = {updateTodo}>Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default EditPost
