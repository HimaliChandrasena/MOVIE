import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'; 
import { Http, Response } from '@angular/http';

/*
  Generated class for the YtProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YtProvider {
	apiKey = 'AIzaSyAuqgt2zb6oMdNUKK3R-Y0q7FaYI0S_IKU';

  constructor(public http: HttpClient) {
    console.log('Hello YtProvider Provider');
  }

  getPlayListForChannel(channel) {
  	return this.http.get ('https://www.googleapis.com/youtube/v3/playlists?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=20')
  		.map((res: Response) => {
  			return res.json()['items'];
  		})
  }

getListVideos(listId){
	return this.http.get('https://www.googleapis.com/youtube/v3/playlistsItems?key=' + this.apiKey + '&playlistlId=' + listId + '&part=snippet,id&maxResults=20')
	.map((res: Response) => {
		return res.json()['items'];
	})
}
  

}
