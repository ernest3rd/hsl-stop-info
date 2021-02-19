import React from 'react';
import useTranslation from 'hooks/useTranslation';
import styled from 'styled-components';
import { spacing } from '../../helpers/styles';

const Container = styled.header(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: spacing(4, 0),
  '>h1': {
    lineHeight: '1em',
    padding: 0,
    margin: 0,
  },
}));

const Header = () => {
  const { t } = useTranslation();

  return (
    <Container className="backgroundColorized">
      <h1>{t('default:app.name')}</h1>
    </Container>
  );
};

export default Header;
