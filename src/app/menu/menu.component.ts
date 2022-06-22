import { Component, Inject, ViewChild } from '@angular/core';
import {
  NodeSelectEventArgs,
  TreeViewComponent,
} from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor() {}
  // defined the array of data
  public hierarchicalData: Object[] = [
    {
      id: '01',
      name: 'Marketing',
      expanded: true,
      subChild: [
        {
          id: '01-01',
          name: 'Program Files',
          subChild: [
            { id: '01-01-01', name: '7-Zip' },
            { id: '01-01-02', name: 'Git' },
            { id: '01-01-03', name: 'IIS Express' },
          ],
        },
        {
          id: '01-02',
          name: 'Users',
          expanded: true,
          subChild: [
            { id: '01-02-01', name: 'Smith' },
            { id: '01-02-02', name: 'Public' },
            { id: '01-02-03', name: 'Admin' },
          ],
        },
        {
          id: '01-03',
          name: 'Windows',
          subChild: [
            { id: '01-03-01', name: 'Boot' },
            { id: '01-03-02', name: 'FileManager' },
            { id: '01-03-03', name: 'System32' },
          ],
        },
      ],
    },
    {
      id: '02',
      name: 'Appraisal',
    },
    {
      id: '03',
      name: 'Analisa Credit',
    },
    {
      id: '04',
      name: 'Approval',
    },
    {
      id: '05',
      name: 'Offering Letter',
    },
    {
      id: '06',
      name: 'Legal',
    },
    {
      id: '07',
      name: 'Disbursment',
    },
    {
      id: '08',
      name: 'MIS Report',
    },
    {
      id: '09',
      name: 'Inquiry',
    },
  ];
  // maps the appropriate column to fields property
  public field: Object = {
    dataSource: this.hierarchicalData,
    id: 'id',
    text: 'name',
    child: 'subChild',
  };
  // set the Multi Selection option to TreeView
  public cssClass: string = 'custom';
}
