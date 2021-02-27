import React, { useCallback, useRef, useState } from 'react';
import useTranslation from 'hooks/useTranslation';
import { SearchInput } from 'components/UI/Input';
import useAddressSearch from '../hooks/useAddressSearch';
import { ListItem } from '../components/UI/Box';
import { List } from '../components/UI/List';
import { Paragraph } from '../components/UI/Text';
import { toUrlParams } from '../helpers/url';

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
        <List>
          {results.map(
            ({
              properties: { label, gid } = {},
              geometry: { coordinates = [0, 0] } = {},
            }) => {
              const urlParams = toUrlParams({
                label,
                lng: coordinates[0],
                lat: coordinates[1],
              });
              return (
                <ListItem
                  key={gid}
                  fullWidth={true}
                  linkTo={`/address/${urlParams}`}
                >
                  <>
                  {label.split(',').map((part, i) => (
                    <Paragraph key={i} margin={0} padding={0}>
                      {part}
                    </Paragraph>
                  ))}
                  </>
                </ListItem>
              );
            }
          )}
        </List>
      )}
    </>
  );
};

export default Home;
