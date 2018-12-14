import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { SocialSharing } from '@ionic-native/social-sharing';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AllMoviesPage } from '../pages/all-movies/all-movies';
import { MovieDetailsPage } from '../pages/movie-details/movie-details';
import { Movie2Page } from '../pages/movie2/movie2';
import { Movie3Page } from '../pages/movie3/movie3';
import { Movie4Page } from '../pages/movie4/movie4';
import { Movie5Page } from '../pages/movie5/movie5';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { Hollywood1Page } from '../pages/hollywood1/hollywood1';
import { Hollywood2Page } from '../pages/hollywood2/hollywood2';
import { Hollywood3Page } from '../pages/hollywood3/hollywood3';
import { Hollywood4Page } from '../pages/hollywood4/hollywood4';
import { Hollywood5Page } from '../pages/hollywood5/hollywood5';
import { HollywoodPage } from '../pages/hollywood/hollywood';
import { KollywoodPage } from '../pages/kollywood/kollywood';
import { MalayalamPage } from '../pages/malayalam/malayalam';
import { Malayalam1Page } from '../pages/malayalam1/malayalam1';
import { Malayalam2Page } from '../pages/malayalam2/malayalam2';
import { Malayalam3Page } from '../pages/malayalam3/malayalam3';
import { Malayalam4Page } from '../pages/malayalam4/malayalam4';
import { Malayalam5Page } from '../pages/malayalam5/malayalam5';
import { CartoonPage } from '../pages/cartoon/cartoon';
import { Cartoon1Page } from '../pages/cartoon1/cartoon1';
import { Cartoon2Page } from '../pages/cartoon2/cartoon2';
import { Cartoon3Page } from '../pages/cartoon3/cartoon3';
import { Cartoon4Page } from '../pages/cartoon4/cartoon4';
import { Cartoon5Page } from '../pages/cartoon5/cartoon5';
import { Kolly1Page } from '../pages/kolly1/kolly1';
import { Kolly2Page } from '../pages/kolly2/kolly2';
import { Kolly3Page } from '../pages/kolly3/kolly3';
import { Kolly4Page } from '../pages/kolly4/kolly4';
import { Kolly5Page } from '../pages/kolly5/kolly5';
// import { PlaylistPage } from '../pages/playlist/playlist';


import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GooglePlus} from '@ionic-native/google-plus';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { AngularFireModule } from 'angularfire2';
// import { YtProvider } from '../providers/yt/yt';
import { YoutubeVideoPlayer} from '@ionic-native/youtube-video-player';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';

import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { AuthProvider } from '../providers/auth/auth';
//import { HttpIntercept,AuthIntercept,AuthenticationService,GlobalVarsService,LogIn,User } from 'angular-authentication-service';
var firebaseconfig =  {
    apiKey: "AIzaSyBbamhd-dm36fZ7PeufrpoSoLbsF6YdIAM",
    authDomain: "movie-8522a.firebaseapp.com",
    databaseURL: "https://movie-8522a.firebaseio.com",
    projectId: "movie-8522a",
    storageBucket: "movie-8522a.appspot.com",
    messagingSenderId: "924541815858"
  }
firebase.initializeApp(firebaseconfig); 




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AllMoviesPage,
    MovieDetailsPage,
    WelcomePage,
    LoginPage,
    Movie2Page,
    Movie3Page,
    Movie4Page,
    Movie5Page,
    MalayalamPage,Malayalam1Page,Malayalam2Page,Malayalam3Page,Malayalam4Page,Malayalam5Page,
    HollywoodPage,Hollywood1Page,Hollywood2Page, Hollywood3Page,Hollywood4Page,Hollywood5Page,
    CartoonPage,Cartoon1Page,Cartoon2Page,Cartoon3Page,Cartoon4Page,Cartoon5Page,
    KollywoodPage,Kolly1Page,Kolly2Page,Kolly3Page,Kolly4Page,Kolly5Page,
    // PlaylistPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    // FileTransfer,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseconfig)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AllMoviesPage,
    MovieDetailsPage,
    WelcomePage,
    LoginPage,
    Movie2Page,
    Movie3Page,
    Movie4Page,
    Movie5Page,
    MalayalamPage,Malayalam1Page,Malayalam2Page,Malayalam3Page,Malayalam4Page,Malayalam5Page,
    HollywoodPage,Hollywood1Page,Hollywood2Page,Hollywood3Page,Hollywood4Page, Hollywood5Page,
    CartoonPage,Cartoon1Page,Cartoon2Page,Cartoon3Page,Cartoon4Page,Cartoon5Page,
    KollywoodPage,Kolly1Page,Kolly2Page,Kolly3Page,Kolly4Page,Kolly5Page,
    // PlaylistPage,
    ListPage
  ],
  providers: [
    StatusBar,
    YoutubeVideoPlayer,
    FileTransfer,
    Facebook,
    File,
   // AuthenticationService,
    // YtProvider,
    SplashScreen,
    // AngularFirestore,
    // SocialSharing ,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider,
    GooglePlus,
    Facebook,
    AuthProvider
    
  ]
})
export class AppModule {}
