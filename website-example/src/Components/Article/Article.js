import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Article.css';

function Article({ article }) {
    const navigate = useNavigate();

    return (
        <div className="article">
            <button onClick={()=>navigate(`/article/${article.id}`, {state: article})}>{article.title}</button>
        </div>
    )
}

export default Article
