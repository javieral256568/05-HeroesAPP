import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interfaces';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
            `
            .cointainer{
              margin: 10px;
            }
            
            `
    
  ]
})
export class HomeComponent implements OnInit {

  _AuthUser!: Auth; 
  
  get getAuthHomeComp():Auth{
    return this.authService.getAuthUser;  
  }



  constructor(private router: Router,
              private authService: AuthService) { }

  logout(){
    this.router.navigate(['./auth']);
  }
  


  ngOnInit(): void {
  }

}
