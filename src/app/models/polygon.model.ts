export interface PolygonModel {
  id: string;
  paths: { lat: number; lng: number; }[],
  strokeColor: string,
  strokeOpacity: number,
  strokeWeight: number,
  fillColor: string,
  fillOpacity: number
  map: google.maps.Map;
}
