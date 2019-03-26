import { Component, OnInit } from '@angular/core';
import { UserprofileService } from '../Services/userprofile.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private users=[];
  private username;
  private found;

constructor(private _userprofileService: UserprofileService) { }

//1- HTTP get the request from userprofile.service getUser()
//2- Receive the observable and cast into an users array
//3- Subscribe to the observable from users or any compnent need this data from the array 
//4- Assign the local data from the user array to local variable
//*RxJS: Reactive extesions for javascript and external library to work with observables
  
ngOnInit() {
     this._userprofileService.getUser()
      .subscribe(
          (data:any[]) => {
            if(data.length) {
              this.username = data[0].username;
              this.found = true;        
            }
            console.log(data);
            this.users=data;
     }   
     )
  }
    } 


