import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NuevaPage } from '../nueva/nueva'
import { ToastController } from 'ionic-angular';
import { LoadingController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  num : number=0;
  
 
  incrementar(){
    this.num++;
  }
  nuevapag(){
    this.navCtrl.push(NuevaPage);
  }
  mensaje(){
      let toast = this.toastCtrl.create({
        message: 'Aida',
        duration: 3000,
        position: 'top'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
    
  }
  mensaje2(){
    if(this.num%2==0){
      let loading = this.loadingCtrl.create({
        content: 'cargando'
      });
      loading.present();
    
      setTimeout(() => {
        loading.dismiss();
      }, 2000);
      this.navCtrl.push(NuevaPage);
    }
  }
  constructor(private toastCtrl: ToastController , public loadingCtrl: LoadingController , public navCtrl: NavController) {

  }

}
