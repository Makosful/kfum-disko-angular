import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-arrangement-create',
  templateUrl: './arrangement-create.component.html',
  styleUrls: ['./arrangement-create.component.scss']
})
export class ArrangementCreateComponent implements OnInit {

  arrangementType: any[] = [];
  groups: any[] = [];

  arrangementForm = new FormGroup({
    title: new FormControl('Foobar', Validators.required),
    date: new FormControl('2022-03-01', Validators.required),
    type: new FormControl('Disko', Validators.required),
    startHour: new FormControl(19, Validators.required),
    startMin: new FormControl(0, Validators.required),
    endHour: new FormControl(22, Validators.required),
    endMin: new FormControl(0, Validators.required),
    doorsOpenHour: new FormControl(18, Validators.required),
    doorsOpenMin: new FormControl(45, Validators.required),
    onlinePrice: new FormControl(0),
    firstPrice: new FormControl(45),
    normalPrice: new FormControl(35),
    priceNoCard: new FormControl(45),
    freeNoCard: new FormControl(10),
    birthdayPrice: new FormControl(35),
    capacity: new FormControl(0),
    onlineSale: new FormControl(false),
    location: new FormControl('KFUM og KFUK', Validators.required),
    address: new FormControl('Kirkegade 70, 6700 Esbjerg', Validators.required),
    description: new FormControl('Lorem ipsum'),
  });

  constructor() {
  }

  ngOnInit(): void {
    this.arrangementType = ["Disko", "Hjælper/Leder"]
    this.groups = [
      {id: 'qaz', title: 'Foo 01', isSelected: false},
      {id: 'wsx', title: 'Foo 02', isSelected: false},
      {id: 'edc', title: 'Foo 03', isSelected: false},
      {id: 'rfv', title: 'Foo 04', isSelected: false},
    ]
  }

  onSubmit() {
    console.debug(this.arrangementForm.controls);
    this.groups.forEach(value => {
      console.debug(`${value.title} ${value.isSelected}`);
    })
  }

}
