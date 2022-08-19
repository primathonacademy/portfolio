import { useState, useEffect, useReducer } from 'react';

const TEXT = ['Freelancer', 'UX Designer', 'Web Developer', 'Web Designer'];

const Animation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slicedIndex, setSlicedIndex] = useState(0);

  // const [state, dispatch] = useReducer(() => {}, 0);

  let isForward = true;

  const animationLogic = () => {
    let shouldUpdateActiveIndex = false;

    setSlicedIndex((prevSlicedIndex) => {
      if (isForward) {
        if (prevSlicedIndex >= TEXT[activeIndex].length) {
          // direction should be backward
          isForward = false;
        } else {
          return prevSlicedIndex + 1;
        }
      } else {
        if (prevSlicedIndex <= 0) {
          // direction should be forward
          isForward = true;

          // active index should be changed
          shouldUpdateActiveIndex = true;
          // // debugger;
          // setActiveIndex((prev) => (prev + 1) % TEXT.length);

          // set slice index to start=0
          return 0;
        } else {
          return prevSlicedIndex - 1;
        }
      }
    });

    if (shouldUpdateActiveIndex) {
      setActiveIndex((prev) => (prev + 1) % TEXT.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(animationLogic, 200);

    if (interval) {
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <h1
      style={{
        textAlign: 'center',
        marginTop: '200px',
      }}
    >
      {TEXT[activeIndex]}
      <br />
      {TEXT[activeIndex].slice(0, slicedIndex)}
    </h1>
  );
};

export default Animation;
