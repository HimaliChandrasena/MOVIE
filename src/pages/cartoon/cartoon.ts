import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { Cartoon1Page } from '../cartoon1/cartoon1';
import { Cartoon2Page } from '../cartoon2/cartoon2';
import { Cartoon3Page } from '../cartoon3/cartoon3';
import { Cartoon4Page } from '../cartoon4/cartoon4';
import { Cartoon5Page } from '../cartoon5/cartoon5';
/**
 * Generated class for the CartoonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cartoon',
  templateUrl: 'cartoon.html',
})
export class CartoonPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartoonPage');
  }
  public onButtonmovie1():void{
  let modal = this.modalCtrl.create(Cartoon1Page);
  modal.present();
} 
public onButtonmovie2():void{
  let modal = this.modalCtrl.create(Cartoon2Page);
  modal.present();
} 
public onButtonmovie3():void{
  let modal = this.modalCtrl.create(Cartoon3Page);
  modal.present();
}
public onButtonmovie4():void{
  let modal = this.modalCtrl.create(Cartoon4Page);
  modal.present();
}
public onButtonmovie5():void{
  let modal = this.modalCtrl.create(Cartoon5Page);
  modal.present();
}
}
