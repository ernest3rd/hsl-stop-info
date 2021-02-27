import { vehicleModes } from './constants';
import pinShadow from 'leaflet/dist/images/marker-shadow.png';
import pinBus from 'leaflet/dist/images/marker-icon.png';
import pinFerry from 'leaflet/dist/images/marker-icon.png';
import pinRail from 'leaflet/dist/images/marker-icon.png';
import pinSubway from 'leaflet/dist/images/marker-icon.png';
import pinTram from 'leaflet/dist/images/marker-icon.png';
import pinDefault from 'leaflet/dist/images/marker-icon.png';

export const getStopPinIcon = (vehicleMode) => {
  switch (vehicleMode) {
    case vehicleModes.BUS:
      return pinBus;
    case vehicleModes.FERRY:
      return pinFerry;
    case vehicleModes.RAIL:
      return pinRail;
    case vehicleModes.SUBWAY:
      return pinSubway;
    case vehicleModes.TRAM:
      return pinTram;
    default:
      return pinDefault;
  }
};

export const getPinShadow = () => pinShadow;
