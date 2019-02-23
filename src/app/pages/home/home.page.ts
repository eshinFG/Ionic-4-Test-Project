import { Component } from '@angular/core';
import { BananaService } from 'src/app/service/banana.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  budget: Number;
  numberOfDays: Number;
  date: Date;
  message: string;
  error: string
  constructor(public bananaService: BananaService, public toast:ToastController) {}

  budgetDays() {
    const body = { 
      numberOfDays: this.numberOfDays, 
      startDate: this.date 
    };
    console.log(body)
    this.bananaService.postBananaBudget(body)
      .subscribe((result)=>{
        console.log(result);
        if(result.success) {
          this.budget = result.data;
          this.message = result.message;
        } else {
          this.presentToast(result.message);
        }
      });
    
  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 1000,
      position: "middle",
      color: "danger"
    });
    toast.present();
  }
}
