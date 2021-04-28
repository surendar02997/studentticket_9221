import { Component, OnInit } from '@angular/core';
import { SearchscreenService } from './searchscreen.service';

@Component({
  selector: 'app-searchscreen',
  templateUrl: './searchscreen.component.html',
  styleUrls: ['./searchscreen.component.scss'],
})

export class SearchscreenComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Email', field: 'stud_email'  },];
    public studentinfo = {
        name: '',
        stud_email: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private searchscreenService: SearchscreenService,
    ) { }

    ngOnInit() {
    }
    GpSearch() {
        this.searchscreenService.GpSearch(this.studentinfo).subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}