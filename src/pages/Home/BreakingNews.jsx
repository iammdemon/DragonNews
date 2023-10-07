import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return ( 
        <div className="flex mt-5">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true}>
                <Link to="/" className="mr-5">I can be a React component.....</Link>
                <Link to="/" className="mr-5">I can be a React component.....</Link>
                <Link to="/" className="mr-5">I can be a React component.....</Link>
            </Marquee>
        </div>
     );
}
 
export default BreakingNews;