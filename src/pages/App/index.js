import Homepage from '../Homepage';
import BasicForm from '../BasicForm';

import styles from './style.module.css';

const App = () => {
  return (
    <>
      <h1 className={styles['my-h1']}>App Anywhere in your app!</h1>

      <BasicForm />
      <Homepage />
    </>
  );
};

export default App;
