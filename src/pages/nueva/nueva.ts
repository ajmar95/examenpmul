import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NuevaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nueva',
  templateUrl: 'nueva.html',
})
export class NuevaPage {
  nombre:any[]=[{Nombre:"Iris"},
  {Nombre:"Rebeca"},
  {Nombre:"Ivan"},
  {Nombre:"Yago"},
  {Nombre:"Amanda"}
]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaPage');
  }

}
