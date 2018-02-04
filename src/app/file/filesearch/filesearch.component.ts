import { Component, OnInit } from '@angular/core';
import {OperationService} from '../../_services/operation.service';
import {Version} from '../../_models/Version';
import {AlertService} from '../../_services/alert.service';
import {Fileversion} from '../../_models/Fileversion';

@Component({
  selector: 'app-filesearch',
  templateUrl: './filesearch.component.html',
  styleUrls: ['./filesearch.component.css']
})
export class FilesearchComponent implements OnInit {
  currentVersion: Version;
  version: Version;
  model: any = {};
  statusCode: number;

  constructor(
    private operationService: OperationService
  ) {

  }

  ngOnInit() {
  }

  search() {
    if (this.model.url == null) {
      this.currentVersion = null;
    } else {
      this.operationService.searchFile( this.model.url )
        .subscribe( successCode => {
            this.statusCode = successCode;
            this.currentVersion = JSON.parse( localStorage.getItem( 'currentVersion' ) );
          },
          errorCode => this.statusCode = errorCode );
    }
  }

  edit(value: string) {
      this.version = this.currentVersion;
      this.version.content = value;
      console.log(value);
      this.operationService.editFile(this.version)
      .subscribe(successCode => {
          this.statusCode = successCode;
          this.currentVersion = JSON.parse( localStorage.getItem( 'currentVersion' ) );
        },
        errorCode => this.statusCode = errorCode);
  }

}
