import { Component } from '@angular/core';
import { FilesListComponent } from '../files-list/files-list.component';
import { NewFileComponent } from '../new-file/new-file.component';
import { FileItem, FileForRow } from '../../models/file.item.model';
import { FILE_LIST } from '../../data/file.storage';
import { ActionsButtonComponent } from '../actions-button/actions-button.component';

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [FilesListComponent, NewFileComponent, ActionsButtonComponent],
  templateUrl: './files.component.html',
  styleUrl: './files.component.css',
})
export class FilesComponent {
  isModalOpen: boolean = false;
  filesFromFile: FileItem[] = FILE_LIST;
  filesForRows: FileForRow[] = [];
  allFilesChecked: boolean = false;

  ngOnInit() {
    this.filesFromFile.forEach((file) => {
      this.filesForRows.push({ ...file, checked: false });
    });
  }

  openModal() {
    this.isModalOpen = true;
  }
  checkUncheckAllFiles() {
    this.allFilesChecked = !this.allFilesChecked;

    this.filesForRows.forEach((file) => {
      file.checked = this.allFilesChecked;
    });
  }

  deleteFiles() {
    console.log('Entro a deleted files');
    // this.filesForRows = this.filesForRows.filter((file) => {
    //   file.checked == false;
    // });

    for (let index = 0; index < this.filesForRows.length; index++) {
      if (this.filesForRows[index].checked) {
        console.log(this.filesForRows[index]);
        delete this.filesForRows[index];
      }
    }

    console.log(this.filesForRows);
  }
}
