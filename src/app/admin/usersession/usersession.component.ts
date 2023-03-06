import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usersession',
  templateUrl: './usersession.component.html',
  styleUrls: ['./usersession.component.css']
})
export class UsersessionComponent implements OnInit {
        userData: any[] =[];
        constructor(private http: HttpClient) { }
        ngOnInit(): void {
          this.putTableData();
        }
        
  putTableData(): void {
    const getLocalData = this.http.get<any[]>('http://localhost:3000/userInfo')
    this.userData = [];

    getLocalData.subscribe((data) => {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const user = data[key];
          const loginTime = user.loginTime ? user.loginTime : 'Not Login';
          const logoutTime = user.logoutTime ? user.logoutTime : 'Not Logout';
  
          this.userData.push({
            name: user.name,
            loginTime,
            logoutTime
          });
        }
      }
    });
  }
}
