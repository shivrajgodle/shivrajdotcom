import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shivrajdotcom';
  constructor(private router: Router) {}

  know(){

    console.log("hello");
    
    this.router.navigateByUrl('/nav');

  }
}
