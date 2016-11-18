import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native'

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  barcode = {}

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    
  }

  scan(){

    let alert = this.alertCtrl.create({
      title: 'Sucesso',
      subTitle: "TESTE",
      buttons: [
        {
          text: "SCAN",
          handler: data => {

            BarcodeScanner.scan().then(
              (barcodeData) => {

                this.barcode = barcodeData.text

              }, (error) => {
                let alert3 = this.alertCtrl.create({
                  title: 'Sucesso',
                  subTitle: error,
                  buttons: ['OK']
                });
                alert3.present();
              });
          }
        }
      ]
    });
    alert.present();

   

  }

}
