import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentQuetionsRoutingModule } from './student-quetions-routing.module';
import { QuetionPaperComponent } from './quetion-paper/quetion-paper.component';
import { StudentQuetionsComponent } from './student-quetions.component';


@NgModule({
  declarations: [
    QuetionPaperComponent,
    StudentQuetionsComponent
  ],
  imports: [
    CommonModule,
    StudentQuetionsRoutingModule
  ]
})
export class StudentQuetionsModule { }
