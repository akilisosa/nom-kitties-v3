import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent  implements OnInit {


  form = new FormGroup({
    id: new FormControl(''),
    owner: new FormControl(''),
    name: new FormControl('Kitty123'),
    color: new FormControl('#a85c32'),
    type: new FormControl('cat')
  });


  subscription = new Subscription();

  loading = false;

  constructor(private userService: UserService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.subcribeToUser();
    this.getUser();
  }

  async getUser() {
    this.loading = true;
    const user = this.userService.user.getValue()
    if(!user) {
    await this.userService.getUser();
    }
    this.loading = false;
  }

  subcribeToUser() {
    this.subscription.add(
      this.userService.userShared().subscribe((user) => {
        if (user) {
          console.log('user', user)
          this.form.patchValue(user);
          this.cdr.detectChanges();
        }
      })
    );
  }

  async save() {
    this.loading = true;
   await this.userService.save(this.form.value);
   this.form.markAsPristine();
   this.loading = false;
  }


}
