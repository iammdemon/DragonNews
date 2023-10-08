import { Link, useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";
import Header from "../shared/Header/Header";
import BreakingNews from "./BreakingNews";
import RightSideNav from "../shared/Rightsidenav/Rightsidenav";
import Navbar from "../shared/navbar/Navbar";

const News = () => {

    const {id, title, details, thumbnail_url} = useParams();

    return ( 
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 mt-10">
                <div className="col-span-3">
                    <h2 className="text-2xl font-bold">Detail News</h2>
                    <h2 className="text-2xl font-bold">{title}</h2>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
     );
}
 
export default News;