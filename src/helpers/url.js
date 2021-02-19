export const toUrlParams = (params) =>
  Object.keys(params).reduce(
    (queryString, key) =>
      `${queryString ? `${queryString}&` : '?'}${key}=${params[key]}`,
    ''
  );
