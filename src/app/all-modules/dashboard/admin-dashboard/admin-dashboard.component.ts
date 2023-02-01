import { Component, OnInit } from "@angular/core";
import { AllModulesService } from "../../all-modules.service";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/auth.service";
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
})
export class AdminDashboardComponent implements OnInit {
 
  constructor( 
    private srvModuleService: AllModulesService,
    private router: Router,
    private toastr: ToastrService,
    private  Auth: AuthService,
    private http: HttpClient

  ) { }

  ngOnInit() {

  }
  onClick()
{
  this.newtest()
}
newtest(){
  var stuName = localStorage.getItem("LoginData")
  var rollNum =localStorage.getItem("rollNum");
  var stuClass=localStorage.getItem("stuClass");
  let body={
    aksi:'submitexam ',
        stuName,
        stuClass,
        rollNum,
        
  }
  this.Auth.newtest(body).subscribe(data=>{
    if (data.success) {
      console.log(" success");
      this.router.navigate(["layout/submit/all-subject-test"]);

    }
  })

}

 
}

