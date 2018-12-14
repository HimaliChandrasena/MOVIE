import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { Kolly1Page } from '../kolly1/kolly1';
import { Kolly2Page } from '../kolly2/kolly2';
import { Kolly3Page } from '../kolly3/kolly3';
/**
 * Generated class for the KollywoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kollywood',
  templateUrl: 'kollywood.html',
})
export class KollywoodPage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KollywoodPage');
  }

public onButtonmovie1():void{
  let modal = this.modalCtrl.create(Kolly1Page);
  modal.present();
}
public onButtonmovie2():void{
  let modal = this.modalCtrl.create(Kolly2Page);
  modal.present();
}
public onButtonmovie3():void{
  let modal = this.modalCtrl.create(Kolly3Page);
  modal.present();
}

}
