
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  success: boolean,
  msg: number,
  result:string,
  // total: number,
 
}

@Injectable(
  
)

export class AuthService {

  webapiurl:string = "http://workpanel.in/wunder/webservices/test_student_exam";
  // private loggedInStatus = JSON.parse(localStorage.getItem('LoggedIn')||'false')
  constructor(private http: HttpClient) { }



stu_login(body){
  // post these details to API server return user info is correct
return this.http.post<myData>(this.webapiurl+'/api/auth.php',body);

}
save_Ans(body){
  // post these details to API server return user info is correct
return this.http.post<myData>(this.webapiurl+'/put_data/save_Ans_json.php',body);

}
next_question(body){
  // post these details to API server return user info is correct
return this.http.post<myData>(this.webapiurl+'/get_data/next_quetion_json.php',body);

}
remaining_que(body)
{
  return this.http.post<myData>(this.webapiurl+'/api/remaining_que.php',body);
}
total_que(body){
  return this.http.post<myData>(this.webapiurl+'/api/total_que.php',body);
}
next_questions(body){
  return this.http.post<myData>(this.webapiurl+'/api/total_que.php',body)
}
previous_que(body){
  return this.http.post<myData>(this.webapiurl+'/api/total_que.php',body)
}
submit(body){
  return this.http.post<myData>(this.webapiurl+'/api/total_que.php',body)
}
alltest(body){
  return this.http.post<myData>(this.webapiurl+'/api/total_que.php',body)
}
remaining_test(body){
  return this.http.post<myData>(this.webapiurl+'/api/total_que.php',body)

}
oldtest(body){
  return this.http.post<myData>(this.webapiurl+'/api/total_que.php',body)

}
newtest(body){
  return this.http.post<myData>(this.webapiurl+'/api/total_que.php',body)

}
}