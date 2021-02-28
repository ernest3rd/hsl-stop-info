import { useEffect } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

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

const LIMIT = 10;

const useGetStopInfo = ({ id }) => {
  const [queryStopInfo, { loading, error, data: { stop } = {} }] = useLazyQuery(
    GET_STOP_INFO
  );

  useEffect(() => {
    if (id) {
      queryStopInfo({
        variables: {
          id,
          startTime: parseInt(new Date().getTime() / 1000, 10),
          limit: LIMIT,
        },
      });
    }
  }, [id]);

  return {
    loading,
    error,
    stopInfo: stop,
  };
};

export default useGetStopInfo;
