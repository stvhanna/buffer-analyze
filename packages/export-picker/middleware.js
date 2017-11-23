export default () => next => (action) => {
  switch (action.type) {
    default:
      break;
  }
  return next(action);
};
