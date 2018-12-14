import { Component } from '@angular/core';
import { IonicPage, NavController,ModalController, NavParams } from 'ionic-angular';
import { Malayalam1Page } from '../malayalam1/malayalam1';
import { Malayalam2Page } from '../malayalam2/malayalam2';
import { Malayalam3Page } from '../malayalam3/malayalam3';
import { Malayalam4Page } from '../malayalam4/malayalam4';
/**
 * Generated class for the MalayalamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-malayalam',
  templateUrl: 'malayalam.html',
})
export class MalayalamPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MalayalamPage');
  }

  public onButtonmovie1():void{
  let modal = this.modalCtrl.create(Malayalam1Page);
  modal.present();
}

 public onButtonmovie2():void{
  let modal = this.modalCtrl.create(Malayalam2Page);
  modal.present();
}

 public onButtonmovie3():void{
  let modal = this.modalCtrl.create(Malayalam3Page);
  modal.present();
}
 public onButtonmovie4():void{
  let modal = this.modalCtrl.create(Malayalam4Page);
  modal.present();
}
}
