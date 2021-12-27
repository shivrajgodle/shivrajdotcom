import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menus : Menu[] = [];
  snav!:boolean;

  constructor(private router:Router) {
    this.menus = [];
    this.menus.push(new Menu("Client-Master","pi pi-users","/home"));
    this.menus.push(new Menu("User Management","pi pi-users","/about"));
    this.menus.push(new Menu("My Workspace","pi pi-briefcase","/knowmore" ));
   }

  ngOnInit(): void {
    this.onMenuClick(this.menus[0]);
  }

  onMenuClick(menu: Menu){
    this.router.navigate([menu.routeLink]);
  }

 

}
