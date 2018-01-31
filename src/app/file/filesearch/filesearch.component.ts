import { Component, OnInit } from '@angular/core';
import {OperationService} from '../../_services/operation.service';
import {Version} from '../../_models/Version';

@Component({
  selector: 'app-filesearch',
  templateUrl: './filesearch.component.html',
  styleUrls: ['./filesearch.component.css']
})
export class FilesearchComponent implements OnInit {
  currentVersion: Version;
  model: any = {};
  statusCode: number;

  constructor(
    private operationService: OperationService
  ) {
    this.currentVersion = JSON.parse( localStorage.getItem( 'currentVersion' ) );
  }

  ngOnInit() {
  }

  search() {
    this.operationService.searchFile(this.model.url)
      .subscribe(successCode => {
          this.statusCode = successCode;
        },
        errorCode => this.statusCode = errorCode);
  }

}
