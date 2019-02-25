import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient  } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { DataService } from './data.service';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BananaService extends DataService{
  endPointUrl = environment.apiUrl;

  constructor(http: HttpClient, toast: ToastController) {
    super(http, toast);
   }

  postBananaBudget(body): Observable<any> {
    this.endPointUrl = environment.apiUrl + '/banana/budget'
    return this.postData(body);
  }
}
