import {Injectable} from '@angular/core';
import {ContentModel} from "../models/content.model";
import {contentData} from "../data/content-data";
import {apiKey} from "../data/api-key";

@Injectable({
  providedIn: 'root'
})
export class PolygonInitialService {

  getApiKey(): string {
    return apiKey;
  }

  getContent(polygonId: string): ContentModel {
    const result = contentData.filter(function (el){
      return el.id == polygonId;
    })
    return result[0];
  }

  contentStringCreator(event: any, country: string): string {
    let content: ContentModel = this.getContent(country);
    return `<b>${content.name}</b><br>` +
      `<b>Влажность: ${content.humidity}</b><br>` +
      `<b>T: ${content.temperature}</b><br>` +
      "Clicked location: <br>" +
      event.latLng.lat() +
      "," +
      event.latLng.lng() +
      "<br>";
  }
}
