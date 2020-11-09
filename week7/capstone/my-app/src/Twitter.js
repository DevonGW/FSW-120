import React, { useState } from 'react'        
import TwitterForm from './TwitterForm.js'


function Twitter(props) {
    const { twitterName, tagname, tweet, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="tweet">
            { !editToggle ?
                <>  
                    <span id="boldName">{ twitterName }</span>
                    <span id="tagnameLight"> { tagname }</span>
                    <p id="tweetSpace">{ tweet }</p>
                    <button
                        className="deleteButton"
                        onClick={() => props.deleteTweet(_id)}>
                        Delete
                    </button>
                    <button
                        className="editButton"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>            
                        Edit
                    </button>
                </>
            :
                <>
                    <TwitterForm
                        twitterName={twitterName}
                        tagname={tagname}
                        tweet={tweet}
                        _id={_id}
                        buttonText="Submit Edit"
                        submit={props.editTweet} 
                    />
                    <button id="closeButton"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                    </button>
                </>
            }
        </div>
    )
}



export default Twitter