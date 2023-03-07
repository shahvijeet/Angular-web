import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

        public loginForm !: FormGroup
        constructor(private formBuilder : FormBuilder,private http : HttpClient,private router:Router) { }
        ngOnInit(): void {
          this.loginForm = this.formBuilder.group({
            email:['',Validators.required],
            password:['',Validators.required]
          })
        }

        Adminlogin(){
          this.http.get<any>("http://localhost:3000/signupadmin").subscribe(res=>{
            const user = res.find((a:any)=>{
                return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
            });console.log(user)
            if(user){
              alert('login success !!');
              this.loginForm.reset();
              localStorage.setItem("adminRegisteredData",JSON.stringify(user)) ;
              this.router.navigate(['admin/dashboard']);
              
            }else{
          const d = new Date();
          let hours: any = d.getHours();
          let minutes: any = d.getMinutes();
          const ampm = hours >= 12 ? 'PM' : 'AM';
          hours = hours % 12;
          hours = hours ? hours : 12; 
          minutes = minutes < 10 ? '0'+minutes : minutes;
          const strTime = hours + ':' + minutes + ' ' + ampm;
          const userLoginDataTime = ((d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear() + "  " + strTime)

          this.http.get<any>("http://localhost:3000/userInfo")
          .subscribe((data: any[]) => {

            const userToUpdate = data.find(element => element.email === this.loginForm.value.email);
            if (userToUpdate) {
              userToUpdate.loginTime = userLoginDataTime;
              this.http.patch(`http://localhost:3000/userInfo/${userToUpdate.id}`, userToUpdate)
                .subscribe(() => {
                  console.log('User login time updated successfully');
                });
            }
          });

              this.http.get<any>("http://localhost:3000/userInfo").subscribe(res=>{
                const users = res.find((b:any)=>{
                    return b.email === this.loginForm.value.email && b.password === this.loginForm.value.password
                });
                
                if (users) {
                  const birthdate = users.birthdate;
                  const mail = users.email;
                  console.log(birthdate);
                  const today = new Date();
                  const birthday = new Date(birthdate);
                  console.log(birthday);
                  if (today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth()) {
                    localStorage.setItem('email',mail);
                    this.router.navigate(['subuser/subuserdashboard']);
                    localStorage.setItem("userRegisteredData",JSON.stringify(users)) ;
 
                   
                  } else {
                    this.router.navigate(['subuser/subuser2dashboard']);
                    localStorage.setItem('email',mail);   
                    localStorage.setItem("userRegisteredData",JSON.stringify(users)) ;

                  }
                }
              })
            }
          })
        }
}
    
