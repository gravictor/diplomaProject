import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-polygon-info',
  templateUrl: './polygon-info.component.html',
  styleUrls: ['./polygon-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PolygonInfoComponent implements OnInit {

  @Input() selectedPolygon: any;

  constructor() { }

  ngOnInit(): void {
  }

}
