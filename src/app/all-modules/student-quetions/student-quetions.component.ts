import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-student-quetions',
  templateUrl: './student-quetions.component.html',
  styleUrls: ['./student-quetions.component.css']
})
export class StudentQuetionsComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    this.router.navigateByUrl("/layout/student-quetions/quetion-paper");

  }

}
