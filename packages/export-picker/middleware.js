export default ({ dispatch }) => next => (action) => {
  switch (action.type) {
    default:
      break;
  }
  return next(action);
};
