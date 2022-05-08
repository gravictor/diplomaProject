export interface PolygonModel {
  id: string;
  paths: PathsModel[],
  strokeColor: string,
  strokeOpacity: number,
  strokeWeight: number,
  fillColor: string,
  fillOpacity: number
  map: google.maps.Map;
}

export interface PathsModel {
  lat: number;
  lng: number;
}
