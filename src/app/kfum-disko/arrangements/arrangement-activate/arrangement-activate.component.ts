import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-arrangement-activate',
  templateUrl: './arrangement-activate.component.html',
  styleUrls: ['./arrangement-activate.component.scss']
})
export class ArrangementActivateComponent implements OnInit {

  arrangements: any[] = [];

  form = new FormGroup({
    control: new FormControl(null, Validators.required)
  });

  constructor() {
  }

  ngOnInit(): void {
    this.populateArrangements();
  }

  onSubmit() {
    console.debug(this.form.value);
  }

  private populateArrangements() {
    this.arrangements = [
      {id: 'qaz', title: 'Foo', isActive: true},
      {id: 'wsx', title: 'Bar', isActive: true},
      {id: 'edc', title: 'Yar', isActive: true},
    ]
  }

}
