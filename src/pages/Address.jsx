import React from 'react';
import useTranslation from 'hooks/useTranslation';
import useQueryParams from '../hooks/useQueryParams';
import { H2, Paragraph } from '../components/UI/Text';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';

const Container = styled.div(({ full }) => ({
  flex: full ? 1 : 0,
}));

const GET_STOPS_BY_RADIUS = gql`
  query GetStopsByRadius($lat: Float!, $lng: Float!, $radius: Int!) {
    stopsByRadius(lat: $lat, lon: $lng, radius: $radius) {
      edges {
        node {
          stop {
            gtfsId
            name
          }
          distance
        }
      }
    }
  }
`;

const RADIUS = 1000;

const Address = () => {
  const { t } = useTranslation();
  const query = useQueryParams();
  const lat = parseFloat(query.get('lat'));
  const lng = parseFloat(query.get('lng'));
  const { loading, error, data } = useQuery(GET_STOPS_BY_RADIUS, {
    variables: { lat, lng, radius: RADIUS },
  });

  console.log({ loading, error, data });

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
