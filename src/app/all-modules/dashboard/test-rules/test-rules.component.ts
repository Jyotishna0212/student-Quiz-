import { Component, OnInit } from '@angular/core';
import { AllModulesService } from "../../all-modules.service";
import { ToastrService } from "ngx-toastr";
// import { AuthService } from "src/app/auth.service";
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-test-rules',
  templateUrl: './test-rules.component.html',
  styleUrls: ['./test-rules.component.css']
})
export class TestRulesComponent implements OnInit {
  public test_id
  constructor(
    private srvModuleService: AllModulesService,
    private router: Router,
    private toastr: ToastrService,
    // private  Auth: AuthService,
    private http: HttpClient
  )
  { 
    this.test_id = this.router.getCurrentNavigation().extras.state.testrule;
    console.log("test_id:",this.test_id)
  }
  ngOnInit(): void {
// this.rules();
// this.gettest();
// this.test_id = history.state.testrule;
this.startexam()
}
startexam(){


  this.router.navigate(['/layout/student-quetions/quetion-paper'], { state: {testrule: this.test_id } })
  console.log("get the previous value ",this.test_id)
  
  

}
}