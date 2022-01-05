import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function ArticleDetails() {
    let location = useLocation();

    const [details, SetDetails] = useState(location.state);

    return (
        <div>
            <h1>
                {details.title}
                <small>&nbsp;&nbsp;published by {details.userId}</small>
            </h1>
            <p>{details.body}</p>

        </div>
    )
}

export default ArticleDetails
