import { Component } from '@angular/core';
import { IonicPage,ModalController, NavController, NavParams } from 'ionic-angular';
import { Hollywood1Page } from '../hollywood1/hollywood1';
import { Hollywood2Page } from '../hollywood2/hollywood2';
import { Hollywood3Page } from '../hollywood3/hollywood3';
import { Hollywood4Page } from '../hollywood4/hollywood4';
import { Hollywood5Page } from '../hollywood5/hollywood5';

/**
 * Generated class for the HollywoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hollywood',
  templateUrl: 'hollywood.html',
})
export class HollywoodPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HollywoodPage');
  }

  public onButtonmovie1():void{
  let modal = this.modalCtrl.create(Hollywood1Page);
  modal.present();
}

 public onButtonmovie2():void{
  let modal = this.modalCtrl.create(Hollywood2Page);
  modal.present();
}
public onButtonmovie3():void{
  let modal = this.modalCtrl.create(Hollywood3Page);
  modal.present();
}
public onButtonmovie4():void{
  let modal = this.modalCtrl.create(Hollywood4Page);
  modal.present();
}
public onButtonmovie5():void{
  let modal = this.modalCtrl.create(Hollywood5Page);
  modal.present();
}
}
