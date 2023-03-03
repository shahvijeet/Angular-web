import { Component,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
          public signupForm !: FormGroup;
          constructor(private formBuider : FormBuilder, private http : HttpClient, private router:Router) { }
          ngOnInit(): void {
            this.signupForm = this.formBuider.group({
              fullname:[''],
              email:[''],
              password:[''],
              age:[''],
              mobile:['']
            })
          }
          signUp(){
            this.http.post<any>("http://localhost:3000/signupadmin",this.signupForm.value)
            .subscribe(res=>{
              alert("Signup Successfull");
               this.signupForm.reset();
               this.router.navigate(['login']);
               console.log('ifudhv')
  
        },err=>{
          alert("Something went wrong")
        })
  }
}
