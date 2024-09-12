import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';

import { FilesComponent } from './files/files.component';
import { NewFileComponent } from "./new-file/new-file.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FilesComponent, NewFileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  files: FileItem[] = FILE_LIST;
  title = 'file-management';
}
