import React from "react";
import './App.css';
const List=(props)=>{
    return(
        <>
        {props.tickets.map((ticket,index)=>(
            <div> 
                <div>
                <img src={ticket.Poster} className="image"></img>
                </div>
                <div>
                <h2 className="title">{ticket.title}</h2>
                </div>
            </div>
             
        ))}
        </>
    )
}
export default List;