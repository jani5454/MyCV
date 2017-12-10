import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName:string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'TabsPage';

  @ViewChild(Nav) nav: Nav;
  // This makes the list of the pages for the menu
  pages: PageInterface[] = [
    {title: 'Personal profile', pageName: 'TabsPage', tabComponent: 'ProfilePage', index: 0, icon: 'contact' },
    {title: 'Technical Skills', pageName: 'TabsPage', tabComponent: 'TechnicalPage', index: 1, icon: 'cog' },
    {title: 'Soft Skills', pageName: 'TabsPage', tabComponent: 'SoftPage', index: 2, icon: 'brush' },
    {title: 'Personal Project', pageName: 'TabsPage', tabComponent: 'PersonalPage', index: 3, icon: 'man' },
    {title: 'Team project', pageName: 'TabsPage', tabComponent: 'TeamPage', index: 4, icon: 'people' },
    {title: 'Extra Activities', pageName: 'TabsPage', tabComponent: 'ExtraPage', index: 5, icon: 'american-football' },
    {title: 'Contact', pageName: 'TabsPage', tabComponent: 'ContactPage', index: 6, icon: 'at' }
  ]
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


// this gives the selected color for the icon for each page in the menu
openPage(page: PageInterface) {
  let params = {};

  if (page.index) {
    params = { tabIndex: page.index };
  }

  if (this.nav.getActiveChildNav() && page.index != undefined) {
    this.nav.getActiveChildNav().select(page.index);
  }

  

}

isActive(page: PageInterface) {
  let childNav = this.nav.getActiveChildNav();

  if (childNav) {
    if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
      return 'primary';
    }
    return;
  }

}

}
// Jani Antoniou 1601110