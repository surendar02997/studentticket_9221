import { Component, OnInit } from '@angular/core';
import { UpdatescreenService } from './updatescreen.service';

@Component({
  selector: 'app-updatescreen',
  templateUrl: './updatescreen.component.html',
  styleUrls: ['./updatescreen.component.scss'],
})

export class UpdatescreenComponent implements OnInit {
    public studentinfo = {
        name: '',
        stud_email: '',
    }

    constructor (
        private updatescreenService: UpdatescreenService,
    ) { }

    ngOnInit() {
    }
    GpUpdate() {
        this.updatescreenService.GpUpdate(this.studentinfo).subscribe(data => {
            this.studentinfo.name = ''
 	 	this.studentinfo.stud_email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}