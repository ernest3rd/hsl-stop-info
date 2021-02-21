import { useLocation } from 'react-router-dom';

const useQueryParams = () => {
  console.log(useLocation().search);
  return new URLSearchParams(useLocation().search);
};

export default useQueryParams;
