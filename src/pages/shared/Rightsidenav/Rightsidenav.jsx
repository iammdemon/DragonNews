import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';


const RightSideNav = () => {
    return ( 
        <div>
            <div className='p-4 space-y-3'>
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-info btn-outline w-full ">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full ">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className='p-4'>
                <h2 className="text-3xl mb-3">Find Us On</h2>
                <a href='#' className='p-4 flex justify-center items-center text-xl gap-3 border-2 rounded-t-lg'>
                    <FaFacebook className='text-blue-500'></FaFacebook>
                    Facebook
                </a>
                <a href='#' className='p-4 flex justify-center items-center text-xl gap-3 border-x-2'>
                    <FaTwitter className='text-blue-400'></FaTwitter>
                    Twitter
                </a>
                <a href='#' className='p-4 flex justify-center items-center text-xl gap-3 border-2 rounded-b-lg'>
                    <FaInstagram className='text-pink-500'></FaInstagram>
                    Instagram
                </a>
            </div>
            <div className='p-4 space-y-3'>
                <h2 className='text-3xl'>Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
     );
}
 
export default RightSideNav;