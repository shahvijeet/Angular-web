import { Component,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
          public signupForm !: FormGroup;
          submitted =false;
          constructor(private formBuider : FormBuilder, private http : HttpClient, private router:Router) { }
          ngOnInit(): void {
            this.signupForm = this.formBuider.group({

              fullname:['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
              email:['',[Validators.required,Validators.email]],
              password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(8)]],
              age:['',[Validators.required,Validators.max(100)]],
              mobile:['',[Validators.required,Validators.pattern('[0-9]{10}')]]
            })
          }
          signUp(){

                this.submitted = true
                if(this.signupForm.invalid){
                      return
                }
                alert('success')
                 this.http.post<any>("http://localhost:3000/signupadmin",this.signupForm.value)
            .subscribe(res=>{
              alert("Signup Successfull");
               this.signupForm.reset();
               this.router.navigate(['login']);
  
        },err=>{
          alert("Something went wrong")
        })
  }
}
