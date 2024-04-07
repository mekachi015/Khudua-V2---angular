import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Khudua-Version-Two';

  form: FormGroup = this.fb.group({
    from_name: '',
    from_email: '',
    from_cellphone: '',
    question: ''
  });

  constructor(private fb: FormBuilder){}
  send(){
    emailjs.send("service_2nxlxm7","template_r33j7pf",{
      from_name: "hell",
      from_email: "jahjahdhjh@gmail.com",
      from_cellphone: "0614193439",
      question: "hello world",
      });
  }
}
