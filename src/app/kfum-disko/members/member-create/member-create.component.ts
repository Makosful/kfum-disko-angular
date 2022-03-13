import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.scss']
})
export class MemberCreateComponent implements OnInit {

  memberForm = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    address1: new FormControl(null, Validators.required),
    address2: new FormControl(''),
    zipCode: new FormControl(null, Validators.required),
    birthday: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl('', Validators.email),
    mobile: new FormControl(''),
    phone: new FormControl(''),
    group: new FormControl('', Validators.required),
    arrangement: new FormControl(''),
  });

  groups: any[] = [];
  arrangements: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.populateGroups();
    this.populateArrangement();
  }

  onSubmit() {
    if (this.memberForm.valid)
      console.debug(this.memberForm.controls);
    else
      console.debug("Form not valid")
  }

  populateGroups() {
    // TODO fetch groups from the backend
    this.groups = ['Foo', 'Bar'];
  }

  populateArrangement() {
    // TODO fetch arrangements from the backend
    this.arrangements = ['Foo', 'Bar'];
  }

}
