import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/index';
import {AlertService} from '../_services/alert.service';
import {User} from '../_models/user';
import {Version} from "../_models/Version";


@Component( {
  selector: 'app-home',
  templateUrl: 'home.component.html'
} )

export class HomeComponent implements OnInit {
  currentUser: User;
  model: any = {};

  constructor(private userService: UserService,
              private alertService: AlertService) {
    this.currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) );
  }

  ngOnInit() {

  }

}
