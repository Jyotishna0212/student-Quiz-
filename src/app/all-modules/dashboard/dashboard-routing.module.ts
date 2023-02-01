import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { MarksSheetComponent } from "./marks-sheet/marks-sheet.component";
import { OldTestComponent } from "./old-test/old-test.component";
import { NewTestComponent } from "./new-test/new-test.component";
import { AllSubjectTestComponent } from "./all-subject-test/all-subject-test.component";
import { TestRulesComponent } from "./test-rules/test-rules.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { Subject } from "rxjs";
import { SubjectTestComponent } from "./subject-test/subject-test.component";
import { CorrectAnsComponent } from "./correct-ans/correct-ans.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "admin", component: AdminDashboardComponent },

      { path: "newtest", component: NewTestComponent },
      { path: "oldtest", component: OldTestComponent },
      { path: "markssheet", component: MarksSheetComponent },
      { path: "all-subject-test", component: AllSubjectTestComponent },
      {
        path: "testrules",
        component: TestRulesComponent,
      },
      {
        path: "subjecttest",
        component: SubjectTestComponent,
      },
      {
        path: "correctans",
        component: CorrectAnsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
