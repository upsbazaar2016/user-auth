import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  leaveForm: FormGroup;
  fromType: string;
  toType: string;
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.fromType = 'text';
    this.toType = 'text';
    this.leaveForm = this.formBuilder.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
    });
  }

  getCurrentDate(minDate?: string): string {
      const date = new Date();
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`; 
  }

  updateDate() {
    this.leaveForm.patchValue({
      toDate: ''
    });
  }

  submitLeave() {
    console.log(this.leaveForm.value);
    this.leaveForm.reset();
  }
}
