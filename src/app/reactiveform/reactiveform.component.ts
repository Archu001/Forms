import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  signupForm=new FormGroup({
    frname:new FormControl('',Validators.required),
    lname:new FormControl('',[Validators.required,Validators.maxLength(4)]),
    number:new FormControl('',[Validators.required,Validators.minLength(6)])
  })
  get frname(){
    return this.signupForm.controls;
  }
  get lname(){
    return this.signupForm.controls;
  }
  get number(){
    return this.signupForm.controls;
  }


} 


