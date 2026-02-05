import React from 'react';

import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';
const map = 'img/map.png';

function MyMap() {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
}

export default function Localisation() {
  return (
    <div className='bg-white mb-32'>
      <div className='text-center text-4xl'>
        <h1>Localisation</h1>
      </div>
      <img
        className='m-auto p-4 md:w-full lg:w-2/3'
        src={`${process.env.PUBLIC_URL}/${map}`}
        alt={`Carte`}
      />
      <MyMap></MyMap>
    </div>
  );
}
