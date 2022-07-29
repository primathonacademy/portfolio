import Homepage from '../Homepage';
import Signup from '../Signup';

import styles from './style.module.css';

const App = () => {
  return (
    <>
      <h1 className={styles['my-h1']}>App Anywhere in your app!</h1>

      <Signup />
      {/* <BasicForm /> */}
      {/* <Homepage /> */}
    </>
  );
};

export default App;
