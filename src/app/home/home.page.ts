import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private menuCtrl: MenuController) {}

  openFirstMenu() {
    this.menuCtrl.open('first-menu');
  }

  openEndMenu() {
    this.menuCtrl.open('end');
  }
}
