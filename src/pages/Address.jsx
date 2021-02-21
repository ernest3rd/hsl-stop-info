import React from 'react';
import useTranslation from 'hooks/useTranslation';
import useQueryParams from '../hooks/useQueryParams';
import { H2, Paragraph } from '../components/UI/Text';
import styled from 'styled-components';

const Container = styled.div(({ full }) => ({
  flex: full ? 1 : 0,
}));

const Address = () => {
  const { t } = useTranslation();
  const query = useQueryParams();

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
