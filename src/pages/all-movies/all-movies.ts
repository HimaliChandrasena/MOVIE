import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController} from 'ionic-angular';
import { MovieDetailsPage } from '../movie-details/movie-details';
import { Movie2Page } from '../movie2/movie2';
import { Movie3Page } from '../movie3/movie3';
import { Movie4Page } from '../movie4/movie4';
// import { YtProvider } from './../../providers/yt/yt';
// import { PlaylistPage } from '../playlist/playlist';
// import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the AllMoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-movies',
  templateUrl: 'all-movies.html',
})
export class AllMoviesPage {

  // channelId = 'UCFR6sruqEq52xEqjE84tq4A';
  // playlists$: Observable<any[]>;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  // searchPlaylist(){
  //   this.playlists$ = this.ytProvider.getPlayListForChannel(this.channelId);
  //   this.playlists$.subscribe(data => {
  //     console.log('data: ', data);
  //   }, err => {
  //     let alert = this.alertCtrl.create({
  //       title: 'Error',
  //       message: 'No Playlists found for that Chnnel ID',
  //       buttons: ['OK']
  //     });
  //     alert.present();
  //   });
  // }

  // openPlaylist(id) {
  //   this.navCtrl.push(PlaylistPage, {id: id});
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllMoviesPage');
  }

   public onButtonmovie1():void{
  let modal = this.modalCtrl.create(MovieDetailsPage);
  modal.present();
}
public onButtonmovie2():void{
  let modal = this.modalCtrl.create(Movie2Page);
  modal.present();
}
public onButtonmovie3():void{
  let modal = this.modalCtrl.create(Movie3Page);
  modal.present();
}
public onButtonmovie4():void{
  let modal = this.modalCtrl.create(Movie4Page);
  modal.present();
}

}
