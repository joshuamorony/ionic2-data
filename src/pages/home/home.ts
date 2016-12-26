import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	originalData: any;
	modifiedData: any;

	constructor(public navCtrl: NavController) {

		this.originalData = [
			{name: 'Joshua Morony', subscribers: 1700, avatar: 'http://placehold.it/100', channel_url: 'https://www.youtube.com/channel/UCbVZdLngJH6KOJvpAOO3qTw'},
			{name: 'Phillip DeFranco', subscribers: 4917409, avatar: 'http://placehold.it/100', channel_url: 'https://www.youtube.com/user/sxephil'},
			{name: 'Casey Neistat', subscribers: 5933358, avatar: 'http://placehold.it/100', channel_url: 'https://www.youtube.com/user/caseyneistat'},
			{name: 'CaptainSparklez', subscribers: 9753734, avatar: 'http://placehold.it/100', channel_url: 'https://www.youtube.com/channel/UCshoKvlZGZ20rVgazZp5vnQ'},
			{name: 'Hutch', subscribers: 925712, avatar: 'http://placehold.it/100', channel_url: 'https://www.youtube.com/channel/UCzRrheyUCB_qUrrfQ_sEG-Q'},
			{name: 'Ionic', subscribers: 17835, avatar: 'http://placehold.it/100', channel_url: 'https://www.youtube.com/channel/UChYheBnVeCfhCmqZfCUdJQw'},
			{name: 'vlogbrothers', subscribers: 2945256, avatar: 'http://placehold.it/100', channel_url: 'https://www.youtube.com/channel/UCGaVdbSav8xWuFWTadK6loA'}
		];

		// JSON parse and strigify are used so that a new array is created, rather than a reference to the original array
		this.modifiedData = JSON.parse(JSON.stringify(this.originalData));

	}

	resetData(){
		this.modifiedData = JSON.parse(JSON.stringify(this.originalData));
	}

	filterData(){

		this.modifiedData = this.modifiedData.filter((youtuber) => {
			return youtuber.subscribers > 1000000;
		});

	}

	mapData(){

		this.modifiedData = this.modifiedData.map((youtuber) => {

			youtuber.name = youtuber.name.toUpperCase();
			youtuber.subscribers = youtuber.subscribers * 10;

			return youtuber;

		});

	}

	reduceData(){

		//Sum
		let sum = this.modifiedData.reduce((previous, current) => {

			let prevResult = Number.isInteger(previous) ? previous : previous.subscribers;

			return prevResult + current.subscribers;
		});

		console.log("SUM: ", sum);

		//Most
		let most = this.modifiedData.reduce((previous, current) => {

			let prevResult = Number.isInteger(previous) ? previous : previous.subscribers;
			let max = Math.max(prevResult, current.subscribers);

			return max;

		});

		console.log("MOST SUBS: ", most);

	}

}
