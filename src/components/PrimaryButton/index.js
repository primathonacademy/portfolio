import './style.css';

const PrimaryButton = (props) => {
  const getClassNames = () =>
    `h3 text-white bg-orange app-primary-button ${
      props.className ? props.className : ''
    }`;

  return (
    <button className={getClassNames()} type='button' onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default PrimaryButton;
