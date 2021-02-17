import axios from 'axios';
import { useCallback, useState } from 'react';

const useAddressSearch = () => {
  const [results, setResults] = useState();
  const search = useCallback((searchText) => {
    if (!searchText) {
      return setResults([]);
    }
    axios
      .get('http://api.digitransit.fi/geocoding/v1/search', {
        params: { text: searchText },
      })
      .then(({ data: { features } = {} }) => setResults(features))
      .catch((error) => {
        console.error(error);
      });
  });

  return { search, results };
};

export default useAddressSearch;
