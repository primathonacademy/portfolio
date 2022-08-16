import { Link } from 'react-router-dom';
import Typography from '../Typography';

import './style.css';

const DesktopNavbar = (props) => {
  const getClassNames = () =>
    `app-desktop-nav ${props.className ? props.className : ''}`;

  return (
    <nav className={getClassNames()}>
      <ul>
        <li>
          <Link to='/'>
            <Typography type='H5' className='menu-font text-black'>
              Home
            </Typography>
          </Link>
        </li>

        <li>
          <Link to='/about'>
            <Typography type='H5' className='menu-font text-black'>
              About Us
            </Typography>
          </Link>
        </li>

        <li>
          <Link to='/our-work'>
            <Typography type='H5' className='menu-font text-black'>
              Our Work
            </Typography>
          </Link>
        </li>

        <li>
          <Link to='/clients'>
            <Typography type='H5' className='menu-font text-black'>
              Clients
            </Typography>
          </Link>
        </li>

        <li>
          <Link to='/our-blog'>
            <Typography type='H5' className='menu-font text-black'>
              Our Blog
            </Typography>
          </Link>
        </li>

        <li>
          <Link to='/contact-us'>
            <Typography type='H5' className='menu-font text-black'>
              Contact Us
            </Typography>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
