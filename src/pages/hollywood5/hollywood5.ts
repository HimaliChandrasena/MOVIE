import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ModalController} from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FileTransfer, FileTransferObject} from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { AlertController } from 'ionic-angular';

declare let cordova: any;


@IonicPage()
@Component({
  selector: 'page-hollywood5',
  templateUrl: 'hollywood5.html',
})
export class Hollywood5Page {

storageDirectory: string = '';

	video: any = {
            url: 'https://www.youtube.com/embed/spY9lpDsf_M',
        // url: 'https://www.youtube.com/watch?v=-2m7GleLsj0',
        title: 'Awesome video'

    };
    trustedVideoUrl: SafeResourceUrl;

  constructor(public navCtrl: NavController, public platform: Platform, private file: File, private fileTransfer: FileTransfer, public modalCtrl: ModalController, public navParams: NavParams, private domSanitizer: DomSanitizer, public alertCtrl: AlertController) {
  }


   ionViewWillEnter(): void {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad Hollywood5Page');
  }

}
