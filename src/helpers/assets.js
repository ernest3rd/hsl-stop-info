import React from 'react';
import ReactDOMServer from 'react-dom/server'

import { DirectionsBus } from '@styled-icons/material-rounded/DirectionsBus';
import { Tram } from '@styled-icons/material-rounded/Tram';
import { DirectionsSubway } from '@styled-icons/material-rounded/DirectionsSubway';
import { DirectionsBoat } from '@styled-icons/material-rounded/DirectionsBoat';
import { DirectionsRailway } from '@styled-icons/material-rounded/DirectionsRailway';
import { DirectionsTransit } from '@styled-icons/material-rounded/DirectionsTransit';
import { divIcon, icon } from 'leaflet';
import pinShadow from 'leaflet/dist/images/marker-shadow.png';
import pin from 'leaflet/dist/images/marker-icon.png';

import { vehicleModes } from './constants';

const iconSize = 25;
const busHtml = ReactDOMServer.renderToString(<DirectionsBus size={iconSize} />);
const tramHtml = ReactDOMServer.renderToString(<Tram size={iconSize} />);
const subwayHtml = ReactDOMServer.renderToString(<DirectionsSubway size={iconSize} />);
const railHtml = ReactDOMServer.renderToString(<DirectionsRailway size={iconSize} />);
const ferryHtml = ReactDOMServer.renderToString(<DirectionsBoat size={iconSize} />);
const transitHtml = ReactDOMServer.renderToString(<DirectionsTransit size={iconSize} />);

const getIcon = (html) => new divIcon({
  html,
  className: 'stop-pin-icon',
});

export const getStopPinIcon = (vehicleMode) => {
  switch (vehicleMode) {
    case vehicleModes.BUS:
      return getIcon(busHtml);
    case vehicleModes.FERRY:
      return getIcon(ferryHtml);
    case vehicleModes.RAIL:
      return getIcon(railHtml)
    case vehicleModes.SUBWAY:
      return getIcon(subwayHtml)
    case vehicleModes.TRAM:
      return getIcon(tramHtml)
    default:
      return getIcon(transitHtml)
  }
};

export const getLocationPin = () => new icon({iconUrl: pin, shadowUrl: pinShadow});
