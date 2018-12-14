import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';
// import { Router } from '@angular/router';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor( public navCtrl: NavController, public navParams: NavParams,private facebook: Facebook) {
  }

  login(){
    let provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithRedirect(provider).then(()=>{
      firebase.auth().getRedirectResult().then((result)=>{
         alert(JSON.stringify(result));

      }).catch(function(error)
      {
        alert(JSON.stringify(error))
      });
    })



    // this.facebook.login(["email"]).then((loginResponse) =>{
    //   let credencial = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);

    //   firebase.auth().signInWithCredential(credencial).then((info) => {
    //     alert(JSON.stringify(info));
    //   })
    // })
  }

  logout(){
    this.facebook.logout().then(() => {
      this.navCtrl.setRoot('LoginPage');
    }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
