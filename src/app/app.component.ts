import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import {PolygonInitialService} from "./services/polygon-initial.service";
import {ContentModel} from "./models/content.model";
import {PolygonModel} from "./models/polygon.model";
import {polygonData} from "./data/polygon-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedPolygon = '';
  content: ContentModel | undefined;
  polygons: PolygonModel[] = [];
  // @ts-ignore
  private map: google.maps.Map

  constructor(private service: PolygonInitialService) {
  }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: this.service.getApiKey(),
    });

    loader.load().then(() => {
      const location = { lat: 51.233334, lng: 6.783333 }

      // @ts-ignore
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 3
      })

      // @ts-ignore
      this.polygons = polygonData;

      this.polygons.forEach( (value) => {
        value.map = this.map;
        let country = new google.maps.Polygon(value)
        country.addListener("click", (e: any) => this.showArrays(e, value.id));
      });
    })
  }

  showArrays(event: any, country: string): void {
    let infoWindow = new google.maps.InfoWindow();
    let contentString = '';

    switch (country) {
      case "turkey":
        contentString = this.service.contentStringCreator(event, country);
        break;
      case "iran":
        contentString = this.service.contentStringCreator(event, country);
        break;
      case "saidArabia":
        contentString = this.service.contentStringCreator(event, country);
        break;
    }
    this.selectedPolygon = contentString;
    this.content = this.service.getContent(country);

    infoWindow.setContent(contentString);
    infoWindow.setPosition(event.latLng);
    infoWindow.open(this.map);
  }
}
