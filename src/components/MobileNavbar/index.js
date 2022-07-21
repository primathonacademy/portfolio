import Typography from '../Typography';

import './style.css';

const MobileNavbar = () => {
  return (
    <nav className='app-mobile-nav'>
      <ul>
        <li>
          <Typography type='H5' className='menu-font text-black'>
            Home
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
            About Us
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
            Our Work
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
            Clients
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
            Our Blog
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
            Contact Us
          </Typography>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
