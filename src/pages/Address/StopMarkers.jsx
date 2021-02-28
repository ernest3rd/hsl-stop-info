import React, { useMemo } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { getStopPinIcon } from '../../helpers/assets';

const StopMarkers = ({ stops, onMarkerSelect, onMarkerDeselect }) => useMemo(() => (stops || []).map(({ gtfsId, code, name, lat, lon, vehicleMode }) => (
    <Marker
      key={gtfsId}
      position={[lat, lon]}
      icon={getStopPinIcon(vehicleMode)}
    >
      <Popup
        onOpen={() => onMarkerSelect({ id: gtfsId, lat, lng: lon })}
        onClose={() => onMarkerDeselect({ id: gtfsId, lat, lng: lon })}
      >
        <h3>{code}</h3>
        <span>{name}</span>
      </Popup>
    </Marker>
  )), [stops]);

export default StopMarkers;
