import { Component } from '@angular/core';
import { NavController, ModalController  } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { AllMoviesPage } from '../all-movies/all-movies';
import { CartoonPage } from '../cartoon/cartoon';
import { HollywoodPage } from '../hollywood/hollywood';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 splash = true;
 

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

 

//   doGoogleLogin(){
//   let nav = this.navCtrl;
//   let env = this;
//   let loading = this.loadingCtrl.create({
//     content: 'Please wait...'
//   });
//   loading.present();
//   this.googlePlus.login({
//     'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
//     'webClientId': '699805813441-sspkd5od0jega4ssi6fclmdoemas7kve.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
//     'offline': true
//   })
//   .then(function (user) {
//     loading.dismiss();

//     env.nativeStorage.setItem('user', {
//       name: user.displayName,
//       email: user.email,
//       picture: user.imageUrl
//     })
//     .then(function(){
//       nav.push(UserPage);
//     }, function (error) {
//       console.log(error);
//     })
//   }, function (error) {
//     loading.dismiss();
//   });
// }


   
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    setTimeout(() =>{
      this.splash = false;

    }, 4000);
  }

  public onButtoMore():void{
  let modal = this.modalCtrl.create(WelcomePage);
  modal.present();
}

  public onButtonbollywood():void{
  let modal = this.modalCtrl.create(AllMoviesPage);
  modal.present();
}

public onButtoncartoon():void{
  let modal = this.modalCtrl.create(CartoonPage);
  modal.present();
}
 
public onButtonhollwood():void{
  let modal = this.modalCtrl.create(HollywoodPage);
  modal.present();
}

}
