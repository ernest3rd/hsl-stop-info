import React from 'react';
import useTranslation from 'hooks/useTranslation';
import useQueryParams from '../hooks/useQueryParams';
import { H2, Paragraph } from '../components/UI/Text';
import styled from 'styled-components';
import useGetStopsByRadius from '../hooks/useGetStopsByRadius';

const Container = styled.div(({ full }) => ({
  flex: full ? 1 : 0,
}));

const RADIUS = 1000;

const Address = () => {
  const { t } = useTranslation();
  const query = useQueryParams();
  const lat = parseFloat(query.get('lat'));
  const lng = parseFloat(query.get('lng'));
  const { stops, loading, error} = useGetStopsByRadius({lat, lng, radius: RADIUS});
  

  console.log({ loading, error, stops });

  return (
    <Container full>
      <H2>{query.get('label')}</H2>
      <Paragraph>
        Latitude: {query.get('lat')}, Longitude: {query.get('lng')}
      </Paragraph>
    </Container>
  );
};

export default Address;
