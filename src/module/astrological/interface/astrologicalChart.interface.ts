export interface geo {
  lat: number;
  lng: number;
}

export interface chartLongitudes {
  as: string;
  ju: string;
  ma: string;
  me: string;
  mo: string;
  sa: string;
  su: string;
  ve: string;
}

export interface astrologicalRespose {
  name: string;
  gender: string;
  localTime: string;
  utc: string;
  tz: string;
  offset: number;
  geo: geo;
  ayanmashaValue: number;
  chartLongitudes: chartLongitudes;
}

export interface geoTimequeryParams{
  loc: string;
  dtl: string;
}

export interface time{
  zoneName: string;
  utc: string;
  gmtOffset: number;
}

export interface geoTimeResponse{
  time: time;
}

export interface ayanamsha{
  value: number;
}

export interface longitudes{
  value: number;
}

export interface astrologicalChartResponse{
  ayanamsha: ayanamsha;
  longitudes: chartLongitudes;
}
