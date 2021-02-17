import React, { useCallback, useRef, useState } from 'react';
import useTranslation from 'hooks/useTranslation';
import { SearchInput } from 'components/UI/Input';
import useAddressSearch from '../hooks/useAddressSearch';

const Home = () => {
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState('');
  const { search, results } = useAddressSearch();
  const searchDelayTimer = useRef(null);

  // Restart search delay timer
  const restartSearchTimer = () => {
    const { current } = searchDelayTimer;
    if (current !== null) {
      clearTimeout(current);
    }
    searchDelayTimer.current = setTimeout(() => search(searchText), 400);
  };

  // Handle enter key press
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        console.log(results && results[0]);
      }
    },
    [results]
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
      {results && (
        <ul>
          {results.map(({ properties }) => (
            <li key={properties.gid}>{properties.label}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
