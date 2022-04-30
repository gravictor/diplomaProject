import { Injectable } from '@angular/core';
import {polygonData} from "../data/polygon-data";

@Injectable({
  providedIn: 'root'
})
export class PolygonInitialService {
  polygonsArray = [];

  public getPolygons(): any {
    for (let polygonDataKey in polygonData) {
      console.log('lds  ' + polygonDataKey)
    }
    return polygonData;
  }


}
