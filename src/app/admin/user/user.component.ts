import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { UserModel } from './user.model'; 
import { ApiService } from 'src/app/shared/api.service'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  formValue !: FormGroup;
  userModelObj : UserModel = new UserModel();
  userData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder,private api : ApiService) { }
  ngOnInit(): void {
     this.formValue = this.formbuilder.group({
      name :[''],
      email:[''],
      password:[''],
      birthdate:['']
     }) 
     this.getUserDetails();
  }
  clickAddUser(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postUserDetails(){
    this.userModelObj.name = this.formValue.value.name;
    this.userModelObj.email = this.formValue.value.email;
    this.userModelObj.password = this.formValue.value.password;
    this.userModelObj.birthdate = this.formValue.value.birthdate;

    this.api.postUser(this.userModelObj).subscribe(res=>{
      alert('User Added Successfully')
      let ref = document.getElementById('cancel')
      ref ?.click();
      this.formValue.reset();
      this.getUserDetails();
    },err=>{
      alert('Something Went Wrong');
    })
  }
  getUserDetails(){
      this.api.getUser().subscribe(res=>{
        this.userData = res;
      })
  }
  deletUserDetails(row : any){
      this.api.deleteUser(row.id).subscribe(res=>{
        alert("User Deleted");
        this.getUserDetails();
      })
  }
  editUserDetails(row : any){
    this.showAdd = false;
    this.showUpdate = true;
    this.userModelObj.id = row.id;
      this.formValue.controls['name'].setValue(row.name);
      this.formValue.controls['email'].setValue(row.email);
      this.formValue.controls['password'].setValue(row.password);
      this.formValue.controls['birthdate'].setValue(row.birthdate);
  }
  updateUserDetails(){
    this.userModelObj.name = this.formValue.value.name;
    this.userModelObj.email = this.formValue.value.email;
    this.userModelObj.password = this.formValue.value.password;
    this.userModelObj.birthdate = this.formValue.value.birthdate;

    this.api.updateUser(this.userModelObj,this.userModelObj.id)
    .subscribe(res=>{
      console.log(res);
      alert("Update Successfully");
      let ref = document.getElementById('cancel')
      ref ?.click();
      this.formValue.reset();
      this.getUserDetails();
    })
  }
}
