import axios from 'axios';
import React, { useCallback, useRef, useState } from 'react';
import useTranslation from 'hooks/useTranslation';
import { SearchInput } from 'components/UI/Input';

const Home = () => {
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState();
  const searchDelayTimer = useRef(null);

  // Make a search query with the current search text
  const doSearch = useCallback(() => {
    axios
      .get('http://api.digitransit.fi/geocoding/v1/search', {
        params: { text: searchText },
      })
      .then(({ data: { features } = {} }) => setSearchResults(features))
      .catch((error) => console.error(error));
  }, [searchText]);

  // Restart search delay timer
  const restartSearchTimer = () => {
    const { current } = searchDelayTimer;
    if (current !== null) {
      clearTimeout(current);
    }
    searchDelayTimer.current = setTimeout(doSearch, 500);
  };

  // Handle enter key press
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        console.log(searchResults && searchResults[0]);
      }
    },
    [searchResults]
  );

  return (
    <>
      <SearchInput
        placeholder={t('common:home.searchPlaceholder')}
        value={searchText}
        onChange={({ target }) => {
          setSearchText(target.value);
        }}
        onKeyUp={restartSearchTimer}
        onKeyDown={handleKeyDown}
      />
      {searchResults && (
        <ul>
          {searchResults.map(({ properties }) => (
            <li key={properties.gid}>{properties.label}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
