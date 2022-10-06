import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {GenericTableDto} from "../../models/auth/generic-table-dto";
import {HttpClient} from "@angular/common/http";
import {constants} from "../../shared/constants";

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

}
