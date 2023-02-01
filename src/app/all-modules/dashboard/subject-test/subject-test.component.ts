import { Component, OnInit } from "@angular/core";
import { AllModulesService } from "src/app/all-modules/all-modules.service";
import { AuthService } from "src/app/auth.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-subject-test',
  templateUrl: './subject-test.component.html',
  styleUrls: ['./subject-test.component.css']
})
export class SubjectTestComponent implements OnInit {
  constructor( private router: Router,
    private allModuleService: AllModulesService,
    private Auth: AuthService,
    private http: HttpClient
    ) {
      
     }
// public subjectid: string;
  ngOnInit(): void {
    this.remaining_test();
  }
  remaining_test(){
    // event.preventDefault();
    // const target = event.target;
    //const test_id=  target.querySelector("#test_id").value;
    const test_id='1';
  // let body ={
  //   asksi: "subjecttests",
  //   test_id,
  // };
  // this.Auth.remaining_test(body).subscribe((data=>{
    this.router.navigate(['/layout/dashboard/testrules'], { state: {testrule: test_id } })
console.log("subject test ",test_id);
    // this.router.navigate(["layout/dashboard/testrules"]);
  // })

  // )
  }

}
