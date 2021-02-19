import React, { useCallback, useRef, useState } from 'react';
import useTranslation from 'hooks/useTranslation';
import { SearchInput } from 'components/UI/Input';
import useAddressSearch from '../hooks/useAddressSearch';
import { Link } from 'react-router-dom';

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
        ref={(input) => input && input.focus()}
        placeholder={t('default:home.searchPlaceholder')}
        value={searchText}
        onChange={({ target }) => {
          setSearchText(target.value);
        }}
        onKeyUp={restartSearchTimer}
        onKeyDown={handleKeyDown}
      />
      {results && (
        <ul>
          {results.map(
            ({ properties, geometry: { coordinates = [0, 0] } = {} }) => (
              <li key={properties.gid}>
                <Link to={`/address/${coordinates[0]}/${coordinates[1]}`}>
                  {properties.label}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
};

export default Home;
