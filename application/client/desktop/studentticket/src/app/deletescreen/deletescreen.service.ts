import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class DeletescreenService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpDelete(studentinfoId): Observable<any> {
        return this.http.delete(this.sharedService.DESKTOP_API + '/studentinfo/' + studentinfoId);
    }
}