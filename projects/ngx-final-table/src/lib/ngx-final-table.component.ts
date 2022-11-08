import { Component, Input, OnInit } from '@angular/core';
import { FinalTableConfig } from '../public-api';

@Component({
  selector: 'lib-ngx-final-table',
  templateUrl: './ngx-final-table.component.html',
  styles: [
  ]
})
export class NgxFinalTableComponent implements OnInit {

  @Input()
  public elements: any[];

  @Input()
  public config: FinalTableConfig;

  constructor() { }

  ngOnInit(): void {
  }

  public getFieldValue(element: any, key: string): any {
    return element[key];
  }

  public onClickActionButton(action: string): void {
    console.log("onClickActionButton => " + action)
  }
  public onClickRowAction(action: string, elementId: number): void {
    console.log("onClickRowAction => " + action)
  }

}
