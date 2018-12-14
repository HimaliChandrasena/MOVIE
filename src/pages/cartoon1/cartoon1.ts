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
  selector: 'page-cartoon1',
  templateUrl: 'cartoon1.html',
})
export class Cartoon1Page {

	storageDirectory: string = '';

	video: any = {
            url: 'https://www.youtube.com/embed/0PeUo95HZ2w',
        // url: 'https://www.youtube.com/watch?v=-2m7GleLsj0',
        title: 'Awesome video'

    };
    trustedVideoUrl: SafeResourceUrl;

  constructor(public navCtrl: NavController, public platform: Platform, private file: File, private fileTransfer: FileTransfer, public modalCtrl: ModalController, public navParams: NavParams, private domSanitizer: DomSanitizer, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cartoon1Page');
  }
    ionViewWillEnter(): void {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
}    


}
