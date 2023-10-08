import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return ( 
        <div className='text-center mt-10'>
            <img src={logo} className='mx-auto'/>
            <p className='my-3 text-xl'>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format('dddd, MMMM D, YYYY')}</p>
        </div>
     );
}
 
export default Header;