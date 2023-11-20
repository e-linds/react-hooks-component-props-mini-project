import React from "react";

function Article({ title, date="January 1, 1970", preview, minutes }) {


    function minutesEmoji() {
        
        if (minutes < 30) {
            const roundedMinutes = (minutes / 5)
            const emoji = "☕️"

            let newEmojiCount = ""


            for (let i=0; i < (roundedMinutes); i++) {

                newEmojiCount = `${newEmojiCount} ${emoji}`                       
            }   

            return <div>{newEmojiCount}</div>

        } else {
            const roundedMinutes = (minutes / 10)   
            const emoji = "🍱"

            const emojiCount = ""
            let newEmojiCount = ""
      
            for (let i=0; i < (roundedMinutes); i++) {
        
                newEmojiCount = `${newEmojiCount} ${emoji}`  
            }   

            return <div>{newEmojiCount}</div>
    }

   
}

  
    return (
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <p>{`${minutes} minute read`}</p>
        {minutesEmoji()}
    </article>
    )

}


export default Article
