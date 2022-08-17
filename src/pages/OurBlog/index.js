import { useNavigate } from 'react-router-dom';

import { removeStorageData, USER_DATA } from '../../services/storage';

import Header from '../../components/Header';
import styles from './style.module.css';
import BlogCard from '../../components/BlogCard';
import BLOG_DATA from '../../constants/blog-data';

const OurBlog = () => {
  let navigate = useNavigate();

  const onLogout = () => {
    removeStorageData(USER_DATA);
    navigate('/login');
  };

  return (
    <>
      <Header onLogout={onLogout} />
      <div className={styles.grid}>
        {BLOG_DATA.map((data) => (
          <BlogCard data={data} key={data.id} />
        ))}
      </div>
    </>
  );
};

export default OurBlog;
