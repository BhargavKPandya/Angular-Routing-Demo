import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <h3>You have selected department with ID : {{departmentId}}</h3>

    <router-outlet></router-outlet>
    <p>
        <button (click)="showOverview()">Overview</button>
        <button (click)="showContact()">Contact</button>
    </p>
    <button (click)="getPreviousID()">Previous</button>
    <button (click)="getNextID()">Next</button>
    <div>
      <button (click)="gotoDepartmentList()">Go to Department List</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  getPreviousID(){
    let prevID = this.departmentId - 1;
    this.router.navigate(['/departments', prevID]);
  }

  getNextID(){
    let nextID = this.departmentId + 1;
    this.router.navigate(['/departments', nextID]);
  }

  gotoDepartmentList(){
    let selectedID = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {id: selectedID}]);
  }

  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }
}
