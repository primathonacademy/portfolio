import AppImage from '../AppImage';

import './style.css';

const Header = () => {
  return (
    <header class='app-header'>
      <div>
        <AppImage
          src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
          alt='Logo'
        />
      </div>

      <div>
        <AppImage
          src={`${process.env.PUBLIC_URL}/assets/svgs/light.svg`}
          alt='Light'
        />
      </div>

      <div>
        <AppImage
          src={`${process.env.PUBLIC_URL}/assets/svgs/menu.svg`}
          alt='Menu'
        />
      </div>
    </header>
  );
};

export default Header;
