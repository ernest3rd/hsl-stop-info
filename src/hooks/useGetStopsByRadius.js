import { gql, useQuery } from '@apollo/client';
import { useMemo } from 'react';

const GET_STOPS_BY_RADIUS = gql`
  query GetStopsByRadius($lat: Float!, $lng: Float!, $radius: Int!) {
    stopsByRadius(lat: $lat, lon: $lng, radius: $radius) {
      edges {
        node {
          stop {
            gtfsId
            name
            lat
            lon
            code
            zoneId
            vehicleType
            vehicleMode
          }
          distance
        }
      }
    }
  }
`;

const useGetStopsByRadius = ({ lat = 0, lng = 0, radius = 100 }) => {
  const { loading, error, data } = useQuery(GET_STOPS_BY_RADIUS, {
    variables: { lat, lng, radius },
  });

  const stops = useMemo(() => {
    if(data) {  
      const { stopsByRadius: { edges = [] } = {} } = data;
      return edges.map(({node}) => {
        return node.stop;
      });
    }
    else {
      return [];
    }
  }, [data]);

  return {
    loading,
    error,
    stops,
  };
};

export default useGetStopsByRadius;
