import { Component } from '@angular/core';
import { IonicPage, NavController,ModalController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AllMoviesPage } from '../all-movies/all-movies';
import { ListPage } from '../list/list';
import { HollywoodPage } from '../hollywood/hollywood';
import { KollywoodPage } from '../kollywood/kollywood';
import { CartoonPage } from '../cartoon/cartoon';
import { MalayalamPage } from '../malayalam/malayalam';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

   public onButtontest():void{
  let modal = this.modalCtrl.create(HomePage);
  modal.present();
}

 public onButtonbollywood():void{
  let modal = this.modalCtrl.create(AllMoviesPage);
  modal.present();
}
public onButtonhollywood():void{
  let modal = this.modalCtrl.create(HollywoodPage);
  modal.present();
}
public onButtonkollywood():void{
  let modal = this.modalCtrl.create(KollywoodPage);
  modal.present();
}
public onButtoncartoon():void{
  let modal = this.modalCtrl.create(CartoonPage);
  modal.present();
}
public onButtonmalayalam():void{
  let modal = this.modalCtrl.create(MalayalamPage);
  modal.present();
}


 itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }


}
