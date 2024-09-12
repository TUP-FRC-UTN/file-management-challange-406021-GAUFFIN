import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-actions-button',
  standalone: true,
  imports: [],
  templateUrl: './actions-button.component.html',
  styleUrl: './actions-button.component.css',
})
export class ActionsButtonComponent {
  @Output() deleteFilesEvent = new EventEmitter();
  @Output() newFileEvent = new EventEmitter();
  deletFiles() {
    this.deleteFilesEvent.emit();
  }
  newFile() {
    this.newFileEvent.emit();
  }
}
