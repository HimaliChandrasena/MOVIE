import { Component } from '@angular/core';
import { IonicPage, Platform, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
//import { Loading, LoadingController,  ModalController} from 'ionic-angular';
import { ModalController } from 'ionic-angular';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { AlertController } from 'ionic-angular';
// import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 //declare let cordova: any;
 

@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
  providers: [File]

})
export class MovieDetailsPage {

  storageDirectory: string = '';

  // message:string =null;
  // file: string = null;
  // link: string = null;
  // subject:string = null;

	video: any = {
            url: 'https://www.youtube.com/embed/1MjC30zo1KA',
        // url: 'https://www.youtube.com/watch?v=-2m7GleLsj0',
        title: 'Awesome video'

    };

trustedVideoUrl: SafeResourceUrl;

  constructor(public navCtrl: NavController, public platform: Platform, public modalCtrl: ModalController, private fileTransfer: FileTransfer,  public navParams: NavParams, private domSanitizer: DomSanitizer, private file: File, public alertCtrl: AlertController) {
     

  }

  // share(){
  //   this.socialSharing.share(this.message, this.subject, this.file, this.link)
  //   .then(()=>{

  //   })
  // }
 download() {

    let path = null;

    if(this.platform.is('ios')) {
      path = this.file.documentsDirectory;
      console.log('fine');
    } 
    else {
      path = this.file.dataDirectory;

    }

    const transfer = this.fileTransfer.create();
    transfer.download('https://www.youtube.com/embed/1MjC30zo1KA', path + 'mulk.mp4').then(entry => {
      let url = entry.toURL();

    });
    
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailsPage');
  }
  ionViewWillEnter(): void {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
}    

 public onButtondownload():void{
  let modal = this.modalCtrl.create(MovieDetailsPage);
  modal.present();
}        
// video: any = {
//         url: 'https://www.youtube.com/embed/MLleDRkSuvk',
//         title: 'Awesome video'
//     };

//     trustedVideoUrl: SafeResourceUrl;
//     loading: Loading;

//     constructor(public navCtrl: NavController,
//                 public loadingCtrl: LoadingController,
//                 private domSanitizer: DomSanitizer) {}

//     ionViewWillEnter(): void {
//         this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);

//         this.loading = this.loadingCtrl.create({
//             content: 'Please wait...'
//         });

//         this.loading.present();
//     }

//     handleIFrameLoadEvent(): void {
//         this.loading.dismiss();
//     }


}
