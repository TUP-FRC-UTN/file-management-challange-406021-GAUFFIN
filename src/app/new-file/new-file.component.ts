import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-file',
  standalone: true,
  imports: [],
  templateUrl: './new-file.component.html',
  styleUrl: './new-file.component.css',
})
export class NewFileComponent {
  @Input() isModalOpen: boolean = false;
  modalElement: HTMLElement | null | undefined;

  closeModal() {
    this.isModalOpen = false;
  }
}
