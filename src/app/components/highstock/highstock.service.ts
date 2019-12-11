import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { sampleData } from './../../../assets/mocks/two-pane';

@Injectable({
	providedIn: 'root'
})
export class HighstockService {

	constructor(
		private http: HttpClient
	) { }

	public getPriceData() {
		return sampleData;
	}
}
