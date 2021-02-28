import { useMemo, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { deduplicateByKey } from '../helpers/array';

const GET_STOP_INFO = gql`
  query GetStopInfo($id: String!, $startTime: Long = 0, $limit: Int = 5) {
    stop(id: $id) {
      gtfsId
      name
      code
      vehicleMode
      direction
      routes {
        id
        shortName
        longName
        mode
      }
      stoptimesWithoutPatterns(
        startTime: $startTime
        numberOfDepartures: $limit
      ) {
        scheduledArrival
        realtimeArrival
        arrivalDelay
        scheduledDeparture
        realtimeDeparture
        departureDelay
        headsign
        trip {
          id
          gtfsId
          route {
            id
            shortName
            longName
            mode
          }
          directionId
        }
        __typename
      }
      __typename
    }
  }
`;

const useGetStopInfo = ({ id }) => {
  const [startTime] = useState(parseInt(new Date().getTime() / 1000, 10));
  const { loading, error, data: { stop } = {} } = useQuery(GET_STOP_INFO, {
    variables: { id, startTime, limit: 10 },
  });

  return {
    loading,
    error,
    stopInfo: stop,
  };
};

export default useGetStopInfo;
