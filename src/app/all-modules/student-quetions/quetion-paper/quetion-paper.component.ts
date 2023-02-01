import { Component, OnInit } from "@angular/core";
import { AllModulesService } from "../../all-modules.service";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/auth.service";
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quetion-paper',
  templateUrl: './quetion-paper.component.html',
  styleUrls: ['./quetion-paper.component.css']
})
export class QuetionPaperComponent implements OnInit {
  constructor( 
        private srvModuleService: AllModulesService,
        private router: Router,
        private toastr: ToastrService,
        private  Auth: AuthService,
        private http: HttpClient
    ) { 
      
    this.test_id = this.router.getCurrentNavigation().extras.state.testrule;
    console.log("test_id: from test rule ",this.test_id)
    }
    public test_id;
    public studentName;
  ngOnInit() {
  //   this.save_Ans(event);
  //  setInterval(()=>{
  //     this.save_Ans(event);
  //   },60000);
  this.total_remaining_que();
  this.getdata();
  this.next_questions();
  this.previous_que();
  this.get_testid()
  }
ngClick(){
  this.submit()
}
  getdata(){
  this.studentName= localStorage.getItem("LoginData");
    }
  submit(){
      var stuName = localStorage.getItem("LoginData")
      var rollNum =localStorage.getItem("rollNum");
      var stuClass=localStorage.getItem("stuClass");
      var exam_id = 1;
    
      let body =
      {
        aksi:'submitexam ',
        stuName,
        stuClass,
        rollNum,
        exam_id
      }
    
        this.Auth.submit(body).subscribe(data=>{
          if (data.success) {
            console.log(" success");
            this.router.navigate(["layout/submit/all-subject-test"]);

          }
        })
    
    }
total_remaining_que(){

  var rollNum =localStorage.getItem("rollNum");
  var stuClass=localStorage.getItem("stuClass");
  var exam_id = 1;

  let body = {
  
    aksi:'remainig-q-total',
    exam_id,
    rollNum,
    stuClass

  }
  this.Auth.remaining_que(body).subscribe(data =>{

  })

}
next_questions(){
  var stuName = localStorage.getItem("LoginData")
  var rollNum =localStorage.getItem("rollNum");
  var stuClass=localStorage.getItem("stuClass");
  var exam_id = 1;

  let body =
  {
    aksi:'next_quetions ',
    stuName,
    stuClass,
    rollNum,
    exam_id
  }

    this.Auth.next_question(body).subscribe(data=>{

    })

}
previous_que(){
  var stuName = localStorage.getItem("LoginData")
  var rollNum =localStorage.getItem("rollNum");
  var stuClass=localStorage.getItem("stuClass");
  var exam_id = 1;

  let body =
  {
    aksi:'next_quetions ',
    stuName,
    stuClass,
    rollNum,
    exam_id
  }

    this.Auth.previous_que(body).subscribe(data=>{

    })

}

total_que(){
  var exam_id=1;
  let body ={
    exam_id
  }
  this.Auth.total_que(body).subscribe(data=>{

  })
}

  save_Ans(event)
  {
    event.preventDefault()
    const target = event.target
    const que= target.querySelector('#que_id').value
    const ans = target.querySelector('#ans').value   
    

    let body = {
      aksi: 'questionpaper',
      que,
      ans,
      examid:1,  
      }
      console.log ('this is  data body:',body)
      this.Auth.save_Ans(body).subscribe(data =>
        {
        if(data.success)
        {
          console.log(data)  
          window.alert(data.msg)

          let x= data.msg;
          console.log(x);
          if(x == 0)
          
          {
            console.log("Thank you ");

          }
            else {
              this.Auth.next_question(body).subscribe(data =>
                {
                if(data.success)
                {
                  console.log(data);  
                  window.alert(data.msg);
                  this.save_Ans(event)
                }
                else {
                  window.alert(data.msg)
                 }
              })
            }
        }
         else {
          console.log('quetion not submit')
         }
      })

}
get_testid()
{
  console.log("get testid", this.test_id)

}

}

