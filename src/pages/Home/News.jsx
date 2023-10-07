import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const News = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    },[])

    return ( 
        <div>
            
            
        </div>
     );
}
 
export default News;