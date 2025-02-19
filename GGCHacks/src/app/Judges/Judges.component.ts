import {Component} from '@angular/core';
@Component({
    selector: 'app-judges',
    templateUrl: './Judges.component.html',
    styleUrls: ['./Judges.component.css']
})
export class JudgesComponent {
    judges = [
        {name: 'Judge 1'}
        {name: 'Judge 2'}
    ];

    newJudge = '';
    addJudge() {
        if (this.newJudge.trim() !== '') {
            this.judges.push({ name: this.newJudge });
            this.newJudge = '';
        }

        }
    }

