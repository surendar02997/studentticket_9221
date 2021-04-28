import { Component, OnInit } from '@angular/core';
import { CreatescreenService } from './createscreen.service';

@Component({
  selector: 'app-createscreen',
  templateUrl: './createscreen.component.html',
  styleUrls: ['./createscreen.component.scss'],
})

export class CreatescreenComponent implements OnInit {
    public studentinfo = {
        name: '',
        stud_email: '',
    }

    constructor (
        private createscreenService: CreatescreenService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createscreenService.GpCreate(this.studentinfo).subscribe(data => {
            this.studentinfo.name = ''
 	 	this.studentinfo.stud_email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}