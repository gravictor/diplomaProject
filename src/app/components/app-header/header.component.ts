import {Component} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {InfoDialogComponent} from "../info-dialog/info-dialog.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

  openInfoDialog(): void {
    this.dialog.open(InfoDialogComponent);
  }
}
