import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ContentModel} from "../../models/content.model";

@Component({
  selector: 'app-polygon-info',
  templateUrl: './polygon-info.component.html',
  styleUrls: ['./polygon-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PolygonInfoComponent {
  @Input() selectedPolygon: ContentModel | undefined;
}
