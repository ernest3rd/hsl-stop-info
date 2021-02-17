import React from 'react';
import useTranslation from 'hooks/useTranslation';
import styled from 'styled-components';

const Container = styled.footer(() => ({
  width: '100%',
  height: '3em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <p>{t('common:app.byWho')}</p>
    </Container>
  );
};

export default Footer;
