import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {GenericTableDto} from "../models/generic-table-dto";
import {HttpClient} from "@angular/common/http";
import {constants} from "../shared/constants";
import { PgSettings } from "../models/settings";

@Injectable({
  providedIn: "root"
})
export class QueriesService {

  constructor(private http: HttpClient) {
  }

  executeQuery(q: string): Observable<any> {
    return this.http.post<any>(constants.MAIN_API_URL + 'queries/execute', {
     "query": q
    });
  }

  getSettings(): Observable<any> {
    return this.http.post<any>(constants.MAIN_API_URL + 'queries/settings', {});
  }

  getSettingsResult(): PgSettings[] {
    let settings: PgSettings[] = []
    let response = this.getSettings().subscribe((res) => {
      for (let h of res.result) {
        settings.push({title: h.title, id: h.id, settings: h.settings, children: h.children, visible: false})
      }
    })
    return settings;
  }
}
