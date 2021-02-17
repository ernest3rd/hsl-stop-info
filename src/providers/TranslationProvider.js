import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { Translation } from 'react-i18next';

export const TranslationContext = createContext();

const TranslationProvider = ({ ns, children }) => (
  <Translation ns={ns}>
    {(t, { i18n }) => (
      <TranslationContext.Provider value={{ t, i18n }}>
        {children}
      </TranslationContext.Provider>
    )}
  </Translation>
);

TranslationProvider.propTypes = {
  ns: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.element,
};

export default TranslationProvider;
