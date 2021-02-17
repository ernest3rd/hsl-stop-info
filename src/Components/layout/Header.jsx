import React from 'react';
import useTranslation from 'hooks/useTranslation';

const Header = () => {
  const { t } = useTranslation();
  return <header>{t('common:app.name')}</header>;
};

export default Header;
