import { Injectable } from '@angular/core';
import { catchError, timeout } from "rxjs/operators";;
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  endPointUrl;
  error: Object = { message: "API Error. Please make sure API is running." };
  constructor(private http: HttpClient,private toast: ToastController) { }

  getData() {
    return this.http.get(this.endPointUrl).pipe(
      catchError((e) => {
        return this.toast.create(this.error);
      }),
      timeout(environment.timeout)
    );
  }

  postData(req?){
    return this.http.post(this.endPointUrl, req).pipe(
      catchError((e) => {
        return this.toast.create(this.error);
      }),
      timeout(environment.timeout)
    );
  }
}
