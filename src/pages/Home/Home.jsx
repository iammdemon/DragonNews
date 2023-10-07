import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/Leftsidenav";
import RightSideNav from "../shared/Rightsidenav/Rightsidenav";
import Navbar from "../shared/navbar/Navbar";
import BreakingNews from "./BreakingNews";
import News from "./News";

const Home = () => {
    return ( 
        <div className="pt-10">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    <News></News>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
     );
}
 
export default Home;