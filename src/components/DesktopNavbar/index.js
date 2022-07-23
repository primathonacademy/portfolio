import Typography from '../Typography';

import './style.css';

const DesktopNavbar = (props) => {
  const getClassNames = () =>
    `app-desktop-nav ${props.className ? props.className : ''}`;

  return (
    <nav className={getClassNames()}>
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

export default DesktopNavbar;
