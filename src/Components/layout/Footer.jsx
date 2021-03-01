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
  flexDirection: 'column',
  padding: spacing(6, 0),
  '> p': {
    margin: '0.25rem',
  }
}));

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container className="backgroundColorized">
      <p>{t('default:app.byWho')}</p>
      <p>
        {t('default:app.attribution', {
          year: new Date().getUTCFullYear(),
        })}
      </p>
    </Container>
  );
};

export default Footer;
