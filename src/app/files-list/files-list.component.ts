import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FileItem, FileForRow } from '../../models/file.item.model';
import { CommonModule } from '@angular/common';
import { OunersAvatarListComponent } from '../ouners-avatar-list/ouners-avatar-list.component';

@Component({
  selector: 'app-files-list',
  standalone: true,
  imports: [CommonModule, OunersAvatarListComponent],
  templateUrl: './files-list.component.html',
  styleUrl: './files-list.component.css',
})
export class FilesListComponent {
  @Input() files: FileForRow[] = [];
  @Input() allChecked: boolean = false;
  @Output() checkUnckeckAll = new EventEmitter();
  FileType: any;

  checkAll() {
    this.checkUnckeckAll.emit();
  }
  checkFile(file: FileForRow) {
    file.checked = !file.checked;
  }
}
