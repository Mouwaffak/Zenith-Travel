import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MatToolbar],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  GoToHome(): void {
    this.router.navigate(['home']);
  }
  GoToCircuits(): void {
    this.router.navigate(['circuits']);
  }
  GoToExcurisons(): void {
    this.router.navigate(['excursions']);
  }
  GoToAgence(): void {
    this.router.navigate(['notre-agence']);
  }
  GotToContact(): void {
    this.router.navigate(['contact']);
  }
}
