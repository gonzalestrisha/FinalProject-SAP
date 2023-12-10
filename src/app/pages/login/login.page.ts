import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  // validationUserMessage = {
  //   username: [
  //     {type:"required", message:"Please enter your username."},
  //     {type:"string", message:"The username you entered is incorrect."}
  //   ],
  //   password: [
  //     {type:"required", message:"Please enter your password."},
  //     {type:"minlength", message:"The password must be at least 6 characters."}
  //   ]
  // }

  // validationFormUser!: FormGroup;

  constructor(private dataService: DataService) { 
    this.dataService.getMaintenanceReqs().subscribe(res => {
      console.log(res)
    })
  }

  // ngOnInit() {
  //   this.validationFormUser = this.formbuilder.group({
  //     password: new FormControl('', Validators.compose([
  //       Validators.required,
  //       Validators.minLength(6)
  //     ]))
  //   })
  // }

  // LoginUser(value:any) {
  //   console.log("Am logged in");
  // }

}
