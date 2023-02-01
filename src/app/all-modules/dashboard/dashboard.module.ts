import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { MorrisJsModule } from 'angular-morris-js';
import { MarksSheetComponent } from './marks-sheet/marks-sheet.component';
import { OldTestComponent } from './old-test/old-test.component';
import { NewTestComponent } from './new-test/new-test.component';
import { AllSubjectTestComponent } from './all-subject-test/all-subject-test.component';
import { TestRulesComponent } from './test-rules/test-rules.component';
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { SubjectTestComponent } from './subject-test/subject-test.component';
import { CorrectAnsComponent } from './correct-ans/correct-ans.component';


@NgModule({
  declarations: [DashboardComponent,TestRulesComponent ,AllSubjectTestComponent,NewTestComponent,OldTestComponent,MarksSheetComponent
    ,AdminDashboardComponent, SubjectTestComponent, CorrectAnsComponent
  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MorrisJsModule,
    // NewTestModule,
    // OldTestsModule,
    

  ]
})
export class DashboardModule { }
