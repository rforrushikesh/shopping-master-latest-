import {Component} from '@angular/core';
import {Router } from '@angular/router';
@Component({
    
    templateUrl:'app/signin/signin.html'
})
export class SignInComponent
{
email: string="rushikesh@gmail.com";
password: string="1234";
showProduct:boolean=false;
login: boolean=false;
userEmail: string="";
userPassword: string="";
loading: boolean=false;
currentUser:string = '';
constructor(private router: Router)
{}
checkCredentials(): void{
    this.loading = true;
    if (this.email == this.userEmail)
    {
        if(this.password == this.userPassword)
        {
           this.currentUser='Rushikesh';
           this.showProduct=true;
           console.log("signin");
           this.router.navigate(['/products']);
        }
    }
} 

}