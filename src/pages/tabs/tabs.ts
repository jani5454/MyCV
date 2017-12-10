import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = 'ProfilePage';
  tab2Root = 'TechnicalPage';
  tab3Root = 'SoftPage';
  tab4Root = 'PersonalPage';
  tab5Root = 'TeamPage';
  tab6Root = 'ExtraPage';
  tab7Root = 'ContactPage';
  myIndex: number;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
