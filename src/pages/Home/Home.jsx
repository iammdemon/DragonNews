import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/Leftsidenav";
import RightSideNav from "../shared/Rightsidenav/Rightsidenav";
import Navbar from "../shared/navbar/Navbar";
import BreakingNews from "./BreakingNews";

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
                    <h2 className="text-4xl">New Coming Soon</h2>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
     );
}
 
export default Home;