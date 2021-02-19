import React from 'react';
import useTranslation from 'hooks/useTranslation';
import styled from 'styled-components';
import { spacing } from '../../helpers/styles';

const Container = styled.footer(() => ({
  width: '100%',
  height: '1em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: spacing(6, 0),
}));

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container className="backgroundColorized">
      <p>{t('default:app.byWho')}</p>
    </Container>
  );
};

export default Footer;
