import { Component, OnInit } from '@angular/core';
import { AllModulesService } from "../../all-modules.service";
import { AuthService } from "src/app/auth.service";
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-correct-ans',
  templateUrl: './correct-ans.component.html',
  styleUrls: ['./correct-ans.component.css']
})
export class CorrectAnsComponent implements OnInit {

  constructor(
    private router: Router,
    private allModuleService: AllModulesService,
    private Auth: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.correct_ans()
  }

  correct_ans(){

    var stuName = localStorage.getItem("LoginData")
    var rollNum =localStorage.getItem("rollNum");
    var stuClass=localStorage.getItem("stuClass");
    var exam_id = 1;
    var correctans ;
  
    let body =
    {
      aksi:'next_quetions ',
      stuName,
      stuClass,
      rollNum,
      exam_id,
      correctans
    }
  
      this.Auth.previous_que(body).subscribe(data=>{
  
      })
  }
}
