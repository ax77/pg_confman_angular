import { Component, OnInit } from '@angular/core';
import {SelectService} from "../../services/select.service";

@Component({
  selector: 'app-selected-fields',
  templateUrl: './selected-fields.component.html',
  styleUrls: ['./selected-fields.component.scss']
})
export class SelectedFieldsComponent implements OnInit {

  constructor(public selectService: SelectService) { }

  ngOnInit(): void {
  }

}
