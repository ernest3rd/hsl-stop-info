import React from 'react';
import useTranslation from 'hooks/useTranslation';
import styled from 'styled-components';
import { spacing } from '../../helpers/styles';

const Container = styled.main(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: spacing(2, 0),
}));

const Header = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <h1>{t('common:app.name')}</h1>
    </Container>
  );
};

export default Header;
