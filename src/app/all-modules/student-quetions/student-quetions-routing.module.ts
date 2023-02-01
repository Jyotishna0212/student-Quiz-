import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuetionPaperComponent } from './quetion-paper/quetion-paper.component';
import { StudentQuetionsComponent } from './student-quetions.component';

const routes: Routes = [

  {
    path: "",
    component: StudentQuetionsComponent ,
    children: [
      { path: "quetion-paper", component: QuetionPaperComponent },
      

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentQuetionsRoutingModule { }
