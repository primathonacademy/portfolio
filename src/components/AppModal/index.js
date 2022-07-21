import Modal from 'react-modal';

import './style.css';

const customStyles = {
  content: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    borderRadius: '0',
    padding: '0',
    border: 'none',
  },
};

Modal.setAppElement('#root');
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.75)';

const AppModal = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onCloseModal}
      style={customStyles}
      contentLabel={props.contentLabel}
    >
      {props.children}
    </Modal>
  );
};

export default AppModal;
