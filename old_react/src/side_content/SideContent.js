import React from 'react';

import './Side.css'
import './SideMobile.css'

import {
    NavLink
} from "react-router-dom";
import { books, stories } from '../storiesMetadata';


function SideContent() {

    const articleList = stories.slice(0, 2).map(article => {
        return (
            <div className="single_article side_card">

                <NavLink to={article.path} style={{ textDecoration: 'none', color: 'inherit' }} >
                    <h3>
                        {article.name}
                    </h3>
                    <p><span className="tech_label">published: </span>{article.published}   </p>
                    <p >{article.summary}</p>



                </NavLink>
            </div>

        )
    });

    const bookList = books.slice(0, 1).map(book => {
        return (
            <div className="single_article side_card">

                <NavLink to={book.path} style={{ textDecoration: 'none', color: 'inherit' }} >
                    <h3>
                        {book.name}
                    </h3>
                    <p><span className="tech_label">published: </span>  {book.author}   </p>


                </NavLink>
            </div>




        )
    });


    return (


        <div className="side_wrapper">
            <div className="side_content">

                <div className="single_article side_card">
                    <NavLink to="weekly" style={{ textDecoration: 'none', color: 'inherit' }} >


                        <h3>
                            Weekly stories ✏️
                    </h3>

                        <p >Here you can read what I am learnign each week... I'm using this like an accountability journal.</p>
                    </NavLink>

                </div>

                <h2>Latest stories 📰</h2>
                {articleList}



                <h2>What I am reading 📖</h2>
                {bookList}



            </div>
        </div>
    )

}

export default SideContent;