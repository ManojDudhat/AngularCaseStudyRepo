import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit, AfterContentChecked {

  addName : string;
  addEnumber : string;
  addLocation : string;

  editName : string;
  editENum : string;
  editLocation: string;
  editIndex : number;

  showAddRow : boolean = false;
  showEditPanel : boolean = false;

  employees: Employee[] = [];

  submitted = false;
  empForm: FormGroup;

  addEmpForm: FormGroup;


  constructor(private employeeService: EmployeeServiceService, private formBuilder: FormBuilder,private cdref: ChangeDetectorRef) { }

  ngAfterContentChecked() {

    this.cdref.detectChanges();

  }
  get f() { return this.empForm.controls; }

  get addf() { return this.addEmpForm.controls; }

  ngOnInit() {

    this.empForm = this.formBuilder.group({
      editName: new FormControl('', Validators.required),
      editENum: new FormControl('',Validators.required),
      editLocation: new FormControl('',Validators.required),
    });

    this.addEmpForm = this.formBuilder.group({
      addName: new FormControl('', Validators.required),
      addEnumber: new FormControl('',Validators.required),
      addLocation: new FormControl('',Validators.required),
    });

    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.retrieveEmployees().subscribe(response => {
      this.employees = response;
    }
    , (error) => {
      console.log(error);
      console.log(error.status);
      alert(error.message);
      });
  }
  isShowAddRow(){

    this.showAddRow = true;
  }
  AddEmployee(){

    if (this.addEmpForm.invalid) {
      return;
  }


    let addEmp = {
      name: this.addName, enumber: this.addEnumber, location: this.addLocation
    }

    this.employees.push(addEmp);
    this.showAddRow = false;
    this.addName = '';
    this.addEnumber = '';
    this.addLocation = '';
  }

  EditEmployee(index: number){
    this.showEditPanel = true;
    this.editName = this.employees[index].name;
    this.editENum = this.employees[index].enumber;
    this.editLocation = this.employees[index].location;
    this.editIndex = index;
  }

  saveEmployee (){
    this.submitted = true;
    if (this.empForm.invalid) {
      return;
  }
    this.employees[this.editIndex].name = this.editName;
    this.employees[this.editIndex].enumber = this.editENum;
    this.employees[this.editIndex].location = this.editLocation;

    this.showEditPanel = false;

  }

  deleteEmployee(index: number){
     this.employees.splice(index, 1);
    //delete this.employees[index];
  }
}
