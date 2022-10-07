import {Component, OnInit} from '@angular/core';
import {SelectService} from "../../../services/select.service";
import {Field, Table} from "../../../models/table";
import {QueriesService} from "../../../services/queries/queries.service";
import {GenericTableDto} from "../../../models/auth/generic-table-dto";

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent {
}
