import React from "react";
import App from "./App"
import Article from "./Article"


function ArticleList(props) {

    const articleList = props.posts.map((item) => {
        return <Article title={item.title} date={item.date} preview={item.preview} minutes={item.minutes} key={item.id}/>
    })


    return (
        <main>
            {articleList}
        </main>

    )

}

export default ArticleList
