import { Link, useNavigate, createSearchParams } from 'react-router-dom';
import styles from './style.module.css';

const BlogCard = (props) => {
  let navigate = useNavigate();

  const linkUrl = `${props.data.id}`;
  // const linkUrl = `${props.data.title.split(' ').join('-').toLowerCase()}`;

  const onReadMore = () => {
    // navigate({pathname: linkUrl});
    navigate({
      pathname: linkUrl,
      search: createSearchParams(props.data).toString(),
    });
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.h3}>{props.data.date}</h3>
      <h2 className={styles.h2}>{props.data.title}</h2>
      <p className={styles.p}>{props.data.description}</p>
      {/* <Link to={'' + props.data.id} className={styles.btn_primary}>
        Read More
      </Link> */}
      <Link
        to={`${linkUrl}?${createSearchParams(props.data)}`}
        className={styles.btn_primary}
      >
        Read More
      </Link>
      &nbsp; &nbsp;
      <button type='button' className={styles.btn_primary} onClick={onReadMore}>
        Read More Button
      </button>
    </div>
  );
};

export default BlogCard;
