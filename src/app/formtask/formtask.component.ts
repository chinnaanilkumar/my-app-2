import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formtask',
  templateUrl: './formtask.component.html',
  styleUrls: ['./formtask.component.css']
})
export class FormtaskComponent {

  public employeeform: FormGroup = new FormGroup(
    {
      name:new FormControl(),
      experience:new FormControl(),
      eperience:new FormGroup(
        {
          company:new FormControl(),
          experience:new FormControl(),
          package:new FormControl()

        }
      ),
      skills:new FormArray([])

    }
  )
  get skillsFormArry(){
    return this.employeeform.get('skills')as FormArray;
  }
  add(){
    this.skillsFormArry.push(
      new FormGroup(
        {
          name: new FormControl(),
          rating: new FormControl(),
          experience: new FormControl()
        }
      )
    )
  }
  delete(i:number){
    this.skillsFormArry.removeAt(i);
  }

  submit(){
    console.log(this.employeeform.value);
  }

}
