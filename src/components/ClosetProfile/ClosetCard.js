import React from 'react'
import ClosetManager from "../../modules/ClosetManager"


const ClosetCard = props => {
return (
    <div className="closetCard">
    <div className="closetCard__content">
        <h3>Title: <span className="closetCard__itemdescription">
            {props.clothingItem.itemDescription} </span></h3>
        <p> Size: {props.clothingItem.size} </p>
        <p> URL: {props.news.url} </p>
        <button type="button"
           onClick={() => props.history.push(`/${props.news.id}/editnews`)}>
               Edit News 
        </button>    
        <button type="button" onClick={() => props.deleteNews(props.news.id)}>Delete News</button>
    </div>

</div>
)
}