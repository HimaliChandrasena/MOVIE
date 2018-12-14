import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ModalController} from 'ionic-angular';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { FileTransfer } from '@ionic-native/file-transfer';
//import { File } from '@ionic-native/file';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Cartoon2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//declare let cordova: any;

@IonicPage()
@Component({
  selector: 'page-cartoon2',
  templateUrl: 'cartoon2.html',
})
export class Cartoon2Page {

	storageDirectory: string = '';

	video: any = {
            url: 'https://www.youtube.com/embed/SpifFaYKzko',
        // url: 'https://www.youtube.com/watch?v=-2m7GleLsj0',
        title: 'Awesome video'

    };
    trustedVideoUrl: SafeResourceUrl;

  constructor(public navCtrl: NavController, public platform: Platform, public modalCtrl: ModalController, public navParams: NavParams, private domSanitizer: DomSanitizer, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cartoon2Page');
  }
    ionViewWillEnter(): void {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
}    


}
