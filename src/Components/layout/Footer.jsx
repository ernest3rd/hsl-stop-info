import React from 'react';
import useTranslation from 'hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <p>{t('common:app.byWho')}</p>
    </footer>
  );
};

export default Footer;
