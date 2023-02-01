import { Component, OnInit } from '@angular/core';
import { AllModulesService } from "../../all-modules.service";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/auth.service";
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-subject-test',
  templateUrl: './all-subject-test.component.html',
  styleUrls: ['./all-subject-test.component.css']
})
export class AllSubjectTestComponent implements OnInit {
  constructor(
    private srvModuleService: AllModulesService,
    private router: Router,
    private toastr: ToastrService,
    private  Auth: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // this.alltest();

  }
  alltest(event){
    event.preventDefault();
    const target =event.target;
    var subject = target.querySelector("#sub_id").value;
    var stuName = localStorage.getItem("LoginData")
    var rollNum =localStorage.getItem("rollNum");
    var stuClass=localStorage.getItem("stuClass");
 
if(true){

  // this.router.navigate(['layout/dashboard/subjecttest'])

}
          // this.router.navigate(["layout/dashboard/all-subject-test"]);
  
      
          
  
  }
  
}
