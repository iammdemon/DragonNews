import { Link } from "react-router-dom";

const NewsCard = ({news}) => {

    const {title, details, thumbnail_url, _id} = news;

    return ( 
        <div className="card w-full bg-base-100 shadow-xl mb-10">
            <figure><img src={thumbnail_url} alt="Shoes" className="w-full h-60"/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details.slice(0,100)}... <Link className="text-blue-600 font-bold" to={`/news/${_id}`}>Read More</Link></p>
            </div>
        </div>
     );
}
 
export default NewsCard;