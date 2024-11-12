import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent  implements OnInit {


  form = new FormGroup({
    name: new FormControl('Kitty123'),
    color: new FormControl('#a85c32'),
    type: new FormControl('cat')
  });


  constructor() { }

  ngOnInit() {
  }

  save() {
    
  }


}
