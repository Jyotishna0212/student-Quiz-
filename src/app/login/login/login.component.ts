import { Component, OnInit } from "@angular/core";
import { AllModulesService } from "src/app/all-modules/all-modules.service";
import { AuthService } from "src/app/auth.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  users: any;
  name: string;

  constructor(
    private router: Router,
    private allModuleService: AllModulesService,
    private Auth: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.localst();
  }

  localst() {
    var localdata = localStorage.getItem("LoginData");
    // var localdata1 = localStorage.getItem("rollNum");
    // var localdata2 = localStorage.getItem("stuClass");
    // var ldata2 = JSON.parse(localdata2);
    // console.log("ldata2", ldata2);
    // var ldata1 = JSON.parse(localdata1);
    // console.log("ldata1", ldata1);
    var ldata = JSON.parse(localdata);
    console.log("tested data", ldata);
    if (ldata != null) {
      this.router.navigate(["layout/dashboard/admin"]);
      console.log("yes");
    } else {
      console.log("no");
    }
  }

  stu_login(event) {
    event.preventDefault();
    const target = event.target;

    const roll_number = target.querySelector("#roll_number").value;
    const stu_class = target.querySelector("#stu_class").value;

    let body = {
      aksi: "loginpage",
      roll_number,
      stu_class,
    };

    // console.log ('this is  data body:',body)

    this.Auth.stu_login(body).subscribe((data) => {
      if (data.success) {
        // console.log(data)
        console.log("login success");

        this.users = data.result;
        //  console.log("data.result:",this.users);
        this.name = this.users.student_f_name;
        console.log("name is:", this.name);

        localStorage.setItem("LoginData", JSON.stringify(this.name));
        localStorage.setItem("rollNum", JSON.stringify(roll_number));
        localStorage.setItem("stuClass", JSON.stringify(stu_class));

        this.router.navigate(["layout/dashboard/admin"]);
      } else {
        console.log("login fail");
      }
    });
  }
}
