import { useReducer, useEffect } from 'react';

const TEXT = ['Freelancer', 'UX Designer', 'Web Developer', 'Web Designer'];

// Reducers ............
const initialState = { activeIndex: 0, slicedIndex: 0, isForward: true };

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_INDEX':
      return { ...state, ...action.payload };
    // x ={1 : 12, 2 : 13}
    // y = {1 : 14, 4 : 16}
    // z = {...x, ..y} => {1 : 14, 2 : 13, 4 : 16}
    // z = {...y, ..x} => {1 : 12, 2 : 13, 4 : 16}
    case 'UPDATE_ACTIVE_INDEX':
      return { ...state, activeIndex: action.payload };
    // x = {1 : 12, 2 : 13}
    // z = {...x, 2: 20} => {1 : 12, 2 : 20}
    default:
      return state;
  }
};

const Animation = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [state, dispatch] = useReducer(() => {}, 0);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDispatch = (actionType, payload) => {
    dispatch({
      type: actionType,
      payload,
    });
  };

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (state.isForward) {
          if (state.slicedIndex >= TEXT[state.activeIndex].length) {
            // handleDispatch('UPDATE_INDEX', { isForward: false });

            dispatch({
              type: 'UPDATE_INDEX',
              payload: { isForward: false },
            });
          } else {
            // handleDispatch('UPDATE_INDEX', {
            //   slicedIndex: state.slicedIndex + 1,
            // });

            dispatch({
              type: 'UPDATE_INDEX',
              payload: {
                slicedIndex: state.slicedIndex + 1,
              },
            });
          }
        } else {
          if (state.slicedIndex <= 0) {
            // direction should be forward
            // active index should be changed
            // sliced index should be reset to 0
            // handleDispatch('UPDATE_INDEX', {
            //   isForward: true,
            //   activeIndex: (state.activeIndex + 1) % TEXT.length,
            //   slicedIndex: 0,
            // });

            dispatch({
              type: 'UPDATE_INDEX',
              payload: {
                isForward: true,
                activeIndex: (state.activeIndex + 1) % TEXT.length,
                slicedIndex: 0,
              },
            });
          } else {
            // handleDispatch('UPDATE_INDEX', {
            //   slicedIndex: state.slicedIndex - 1,
            // });

            dispatch({
              type: 'UPDATE_INDEX',
              payload: {
                slicedIndex: state.slicedIndex - 1,
              },
            });
          }
        }
      },
      state.isForward ? 400 : 100
    );

    if (interval) {
      return () => clearInterval(interval);
    }
  }, [state]);

  return (
    <h1
      style={{
        textAlign: 'center',
        marginTop: '200px',
      }}
    >
      {TEXT[state.activeIndex].slice(0, state.slicedIndex)}
    </h1>
  );
};

export default Animation;
