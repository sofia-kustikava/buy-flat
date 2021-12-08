import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {LogoutService} from "./services/logout.service";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(
    private router: Router,
    private logoutService: LogoutService,
    private authService: AuthService
  ) {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.autoLogin(event.url);
        }
      });
  }

  autoLogin(url: string): void {
    const lsToken = localStorage.getItem('token');
    if (lsToken != null) {
      this.authService.validate().subscribe(user => {
        localStorage.setItem('userType', user.type.toString())
      })
      console.log(localStorage.getItem('userType'));
      if (url === '/' || url === '/auth') {
        this.router.navigate(['/orders']);
      } else {
        this.router.navigate([url]);
      }
    } else {
      this.router.navigate(['/auth']);
    }
  }

  logout() {
    this.logoutService.logout();
  }
}

