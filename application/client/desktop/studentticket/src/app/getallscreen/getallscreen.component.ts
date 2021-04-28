import { Component, OnInit } from '@angular/core';
import { GetallscreenService } from './getallscreen.service';

@Component({
  selector: 'app-getallscreen',
  templateUrl: './getallscreen.component.html',
  styleUrls: ['./getallscreen.component.scss'],
})

export class GetallscreenComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Email', field: 'stud_email'  },];
    public studentinfo = {
        name: '',
        stud_email: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private getallscreenService: GetallscreenService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.getallscreenService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}