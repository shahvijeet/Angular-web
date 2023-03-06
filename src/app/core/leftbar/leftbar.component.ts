import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftbarComponent implements OnInit {
  userData: any[] =[];
  constructor(private router: Router,private http: HttpClient) { }
  ngOnInit(): void {
      this.putTableData();
  }
  todashboard(){
    this.router.navigate(['admin/dashboard']);
  }
  touser(){
    this.router.navigate(['admin/user']);
  }
  tosession(){
    this.router.navigate(['admin/usersession']);
  }
  tologout(){
    this.router.navigate(['login']);
  }
   putTableData(): void {
    const getLocalData = this.http.get<any[]>('http://localhost:3000/signupadmin')
    this.userData = [];

     getLocalData.subscribe((data) => {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const user = data[key];

          this.userData.push({
            name: user.fullname
          });
        }
      }
    });
  }
}

