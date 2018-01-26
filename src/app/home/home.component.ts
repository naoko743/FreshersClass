import {Component, OnInit} from '@angular/core';

import {User} from '../_models/index';
import {UserService} from '../_services/index';
import {AlertService} from '../_services/alert.service';


@Component( {
  moduleId: module.id,
  templateUrl: 'home.component.html'
} )

export class HomeComponent implements OnInit {
  currentUser: User;
  loading = false;
  model: any = {};

  constructor(private userService: UserService,
              //  private operationService: OperationService,
              private alertService: AlertService) {
    this.currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) );
  }

  ngOnInit() {

  }

  generateUrl() {
    //this.operationService.generateUrl();
  }

  editText() {
    //this.operationService.generateUrl();
  }

  openUrl() {
    //this.operationService.generateUrl();
  }

}
