import { Component, OnInit } from '@angular/core';
import { faClipboardList,faHeadset } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faClipboardList = faClipboardList;
  faHeadset = faHeadset;

  constructor() { }

  ngOnInit(): void {
  }

}
