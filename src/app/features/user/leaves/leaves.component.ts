import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {
  leaveForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.leaveForm = this.formBuilder.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
    });
  }

  getCurrentDate(): string {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`; 
  }

  updateDate() {
    this.leaveForm.patchValue({
      toDate: ''
    });
  }

  submitLeave() {
    console.log('Before Reset', this.leaveForm.value);
    this.leaveForm.reset();
    console.log('After Reset', this.leaveForm.value);
  }
}
