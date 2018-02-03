import {Component, OnInit} from '@angular/core';
import {Fileversion} from '../../_models/Fileversion';
import {OperationService} from '../../_services/operation.service';
import {FormControl, Validators} from '@angular/forms';
import {Version} from "../../_models/Version";

@Component({
  selector: 'app-filecreation',
  templateUrl: './filecreation.component.html',
  styleUrls: ['./filecreation.component.css']
})
export class FilecreationComponent implements OnInit {
  currentVersion: Version;
  model: any = {};
  processValidation = false;
  statusCode: number;
  requestProcessing = false;

  // Create Form
  fileForm = new FormControl({
    content: new FormControl('', Validators.nullValidator)
  })

  constructor(
    private operationService: OperationService
  ) {

  }

  ngOnInit() {
  }

  create() {
    this.processValidation = true;
    if (this.fileForm.invalid) {
      return;
    }
    this.preProcessConfigurations();
    let fileversion = new Fileversion(this.model.content);
    this.operationService.createFile(fileversion)
      .subscribe(successCode => {
              this.statusCode = successCode;
          this.currentVersion = JSON.parse( localStorage.getItem( 'currentVersion' ) );
      },
        errorCode => this.statusCode = errorCode);
  }


  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }

}
