import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import useGetStopInfo from 'hooks/useGetStopInfo';
import { Padding } from 'components/UI/Spacing';
import { H3, H4 } from 'components/UI/Text';

const Container = styled.div(({ theme, isOpen, isLoading }) => {
  const getWidth = (desiredWidth) => (isOpen ? desiredWidth : 0);
  return {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: theme.colors.white,
    opacity: isLoading ? 0.5 : 1,
    maxWidth: getWidth(400),
    minWidth: getWidth(400),
    transitionProperty: 'max-width, min-width',
    transitionDuration: '400ms',
    transitionTimingFunction: 'ease-in-out',
    '@media only screen and (max-width: 800px)': {
      maxWidth: getWidth('100%'),
      minWidth: getWidth('100%'),
    },
  };
});

const RouteName = styled.span(({ theme }) => ({
  backgroundColor: theme.colors.lightGrey,
  padding: '0.5rem',
  margin: '0.25rem',
  display: 'inline-block',
  fontWeight: theme.font.weight.bold,
}));

const Time = styled.span(({ theme }) => ({
  fontFamily: 'monospace',
  fontWeight: theme.font.weight.bold,
  marginRight: '0.25rem',
}));

const TimeTableLine = styled.div({
  display: 'block',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
})

const LongName = styled.span({
  marginLeft: '0.25rem',
})

const StopInfo = ({ open, stopId }) => {
  const { t } = useTranslation();
  const { stopInfo, loading, error } = useGetStopInfo({
    id: stopId,
  });

  const { name, code, routes = [], stoptimesWithoutPatterns = [] } =
    stopInfo || {};

  return (
    <Container isOpen={open} isLoading={loading}>
      <Padding all={2}>
        {loading || (!stopInfo && !error) ? (
          <H3>{t('default:events.loading')}</H3>
        ) : error ? (
          <H3>{t('error:generalFailure')}</H3>
        ) : (
          <>
            <H3>{`${name} (${code})`}</H3>
            <H4>{t('default:address.stopInfo.routes')}</H4>
            {routes.map(({ shortName }) => (
              <RouteName key={shortName}>{shortName}</RouteName>
            ))}

            <H4>{t('default:address.stopInfo.arrivingSoon')}</H4>
            {stoptimesWithoutPatterns.map(
              ({ scheduledArrival, trip: { route } }) => {
                const hour = parseInt(Number(scheduledArrival) / 60 / 60, 10);
                const minute = parseInt(
                  Number(scheduledArrival - hour * 60 * 60) / 60,
                  10
                );
                const hourZerofilled = ('0'+hour).slice(-2);
                const minuteZerofilled = ('0'+minute).slice(-2);
                return (
                  <TimeTableLine key={route.shortName + '-' + scheduledArrival}>
                    <Time>{`${hourZerofilled}:${minuteZerofilled}`}</Time>
                    <RouteName>{route.shortName}</RouteName>
                    <LongName>{route.longName}</LongName>
                  </TimeTableLine>
                );
              }
            )}
          </>
        )}
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
