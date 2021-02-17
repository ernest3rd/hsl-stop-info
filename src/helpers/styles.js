import theme from 'theme';

export const spacing = (...args) => {
  const { unitSize } = theme;
  return args
    .reduce((values, arg) => {
      if (typeof arg === 'number') {
        return [...values, `${unitSize * arg}px`];
      }
      if (arg) {
        return [...values, `${unitSize * arg}px`];
      }
      return values;
    }, [])
    .join(' ');
};
