import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import useGetStopInfo from 'hooks/useGetStopInfo';
import { Padding } from 'components/UI/Spacing';
import { H2 } from 'components/UI/Text';

const Container = styled.div(({ open }) => ({
  overflow: 'hidden',
  flex: 1,
  maxWidth: open ? 400 : 0,
  minWidth: open ? 400 : 0,
  transitionProperty: 'max-width, min-width',
  transitionDuration: '400ms',
  transitionTimingFunction: 'ease-in-out',
  '@media only screen and (max-width: 800px)': {
    maxWidth: open ? '100%' : 0,
    minWidth: open ? '100%' : 0,
  },
}));

const StopInfo = ({ open, stopId, onClose }) => {
  const { t } = useTranslation();
  const { stopInfo, loading, error } = useGetStopInfo({
    id: stopId
  });

  console.log({stopInfo});
  const {name, code} = stopInfo || {};

  return (
    <Container open={open}>
      <Padding all={2}>
        {loading || !stopInfo ? <H2>{t('default:events.loading')}</H2> : <H2>{`${name} (${code})`}</H2>}
      </Padding>
    </Container>
  );
};

StopInfo.propTypes = {
  open: PropTypes.bool,
  stopId: PropTypes.string,
  onClose: PropTypes.func,
};

export default StopInfo;
