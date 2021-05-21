import { Component, OnInit } from '@angular/core';
import { DeletescreenService } from './deletescreen.service';

@Component({
  selector: 'app-deletescreen',
  templateUrl: './deletescreen.component.html',
  styleUrls: ['./deletescreen.component.scss'],
})

export class DeletescreenComponent implements OnInit {
    queryId: any;
    public studentinfo = {
        name: '',
        stud_email: '',
    }

    constructor (
        private deletescreenService: DeletescreenService,
    ) { }

    ngOnInit() {
    }
    GpDelete() {
        this.deletescreenService.GpDelete(this.queryId).subscribe(data => {
         // this.GpGetNounById();
          //this.GpDelete();
        },
        error => {
            console.log('Error', error);
        });
    }
    
}