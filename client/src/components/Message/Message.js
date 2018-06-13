import React from 'react'
import "./Message.css"

 const Message=(props)=> {
    return (
      <div className="message">
          {props.message.sender==props.user._id?
          <div className="row">
            <div className="col-lg-8 col-sm-2">
            </div>
            <div className="col-lg-4 col-sm-10">
              <div>
              <p>{props.message.side?"Pro":"Con"}</p>
              <div className={"card "+props.message.side?"pro":"con"} >
                <div className="card-body">
                  <p>{props.message.message}</p>
                </div>
              </div>
          </div>
            </div>
          </div>
          :
          <div className="row">
            <div className="col-lg-4 col-sm-10">
            <p>{props.message.side?"Pro":"Con"}</p>
            <div className={"card "+props.message.side?"pro":"con"} >
              <div className="card-body">
                <p>{props.message.message}</p>
              </div>
            </div>
            </div>
            <div className="col-lg-8 col-sm-2">
            </div>
          </div>
          
          }

      
      </div>
    )
  }



export default Message