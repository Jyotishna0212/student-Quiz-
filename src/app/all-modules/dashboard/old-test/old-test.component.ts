import { Component, OnInit } from '@angular/core';
import { AllModulesService } from "../../all-modules.service";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/auth.service";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-old-test',
  templateUrl: './old-test.component.html',
  styleUrls: ['./old-test.component.css']
})
export class OldTestComponent implements OnInit {

  constructor(
    private srvModuleService: AllModulesService,
    private router: Router,
    private toastr: ToastrService,
    private Auth: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  oldtest(event) {
    event.preventDefault();
    const target = event.target;
    var subject = target.querySelector("#sub_id").value;

    var rollNum = localStorage.getItem("rollNum");
    var stuClass = localStorage.getItem("stuClass");
    let body = {
      subject,
      rollNum,
      stuClass
    }

    this.Auth.previous_que(body).subscribe(data => { })

  }

}

