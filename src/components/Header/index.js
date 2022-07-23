import { useState } from 'react';

import AppImage from '../AppImage';
import AppModal from '../AppModal';
import DesktopNavbar from '../DesktopNavbar';
import MobileNavbar from '../MobileNavbar';

import './style.css';

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className='app-header'>
        <div>
          <AppImage
            src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
            alt='Logo'
          />
        </div>

        <DesktopNavbar className='desktop-nav' />

        <div>
          <AppImage
            src={`${process.env.PUBLIC_URL}/assets/svgs/light.svg`}
            alt='Light'
          />
        </div>

        <div className='app-mobile-menu' onClick={onOpenModal}>
          <AppImage
            src={`${process.env.PUBLIC_URL}/assets/svgs/menu.svg`}
            alt='Menu'
          />
        </div>
      </header>

      <AppModal
        isOpen={modalIsOpen}
        onRequestClose={onCloseModal}
        contentLabel='Example Modal'
      >
        <header className='app-header'>
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

          <div className='app-mobile-close' onClick={onCloseModal}>
            <AppImage
              src={`${process.env.PUBLIC_URL}/assets/svgs/close.svg`}
              alt='Menu Close'
            />
          </div>
        </header>

        <MobileNavbar />
      </AppModal>
    </>
  );
};

export default Header;
