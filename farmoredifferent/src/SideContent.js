import React from 'react';




import {
    NavLink
} from "react-router-dom";
import { stories, whatImReading } from './storiesMetadata';


function SideContent() {

    const articleList = stories.slice(stories.length - 2, stories.length).map(article => {
        return (
            <NavLink to={article.path} style={{ textDecoration: 'none', color: 'inherit' }} >
                <div className="single_article side_card">
                    <h3>
                        {article.name}
                    </h3>
                    <p><span className="tech_label">published: </span>{article.published}   </p>

                </div>

            </NavLink>
        )
    });

    const bookList = whatImReading.map(book => {
        return (
            <li>
                <h3>{book.name}</h3>
                <p>{book.author}</p>
            </li>
        )
    });


    return (



        <div className="main_content side_content">
            <NavLink to="weekly" style={{ textDecoration: 'none', color: 'inherit' }} >
                <div className="single_article side_card">

                    <h3>
                        Weekly stories ✏️
                    </h3>

                    <p >Here you can read what I am learnign each week... I'm using this like an accountability journal.</p>
                </div>

            </NavLink>
            <h2>Latest stories 📰</h2>
            {articleList}

            <h2>What I am reading 📖</h2>
            <ul>
                {bookList}
            </ul>

        </div>
    )

}

export default SideContent;