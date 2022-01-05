import {useState, useEffect} from 'react';
import Article from '../../Components/Article/Article';

function Home() {

    const [articles, SetArticles] = useState([]);

    const LoadArticles = async() =>{
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        let data = await res.json();
        SetArticles(data);
    }

    useEffect(()=>{
        LoadArticles();
    }, [])

    return (
        <div className="flex-container flex-cols flex-wrap w-90 center-block space-around">
            {articles.map(item=><Article key={item.id} article={item} />)}
        </div>
    )
}

export default Home
