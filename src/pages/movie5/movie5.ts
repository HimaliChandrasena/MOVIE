import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ModalController} from 'ionic-angular';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the Movie5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
  //declare let cordova: any;

@IonicPage()
@Component({
  selector: 'page-movie5',
  templateUrl: 'movie5.html',
})
export class Movie5Page {

	storageDirectory: string = '';

	video: any = {
            url: 'https://www.youtube.com/embed/1MjC30zo1KA',
        // url: 'https://www.youtube.com/watch?v=-2m7GleLsj0',
        title: 'Awesome video'

    };

  constructor(public navCtrl: NavController, private fileTransfer:FileTransfer, public platform: Platform, public modalCtrl: ModalController, public navParams: NavParams, private domSanitizer: DomSanitizer, private file: File, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Movie5Page');
  }

}
