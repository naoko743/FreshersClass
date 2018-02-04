import {Component, OnInit} from '@angular/core';
import {Fileversion} from '../../_models/Fileversion';
import {OperationService} from '../../_services/operation.service';
import {FormControl, Validators} from '@angular/forms';
import {Version} from "../../_models/Version";
import {AlertService} from "../../_services/alert.service";
import {User} from "../../_models/user";

@Component({
  selector: 'app-filecreation',
  templateUrl: './filecreation.component.html',
  styleUrls: ['./filecreation.component.css']
})
export class FilecreationComponent implements OnInit {
  currentVersion: Version;
  currentUser: User;
  model: any = {};
  statusCode: number;

  constructor(
    private operationService: OperationService,
    private alertService: AlertService
  ) {
   // this.currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) );
  }

  ngOnInit() {
  }

  create() {
    let fileversion = new Fileversion(this.model.content);
    this.operationService.createFile(fileversion)
      .subscribe(successCode => {
          this.statusCode = successCode;
          this.currentVersion = JSON.parse( localStorage.getItem( 'currentVersion' ) );

      },
        errorCode => this.statusCode = errorCode);
  }

}
