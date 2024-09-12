import { Component, Input } from '@angular/core';
import { FileOwner } from '../../models/file.item.model';

@Component({
  selector: 'app-ouners-avatar-list',
  standalone: true,
  imports: [],
  templateUrl: './ouners-avatar-list.component.html',
  styleUrl: './ouners-avatar-list.component.css'
})
export class OunersAvatarListComponent {
  @Input() owners: FileOwner[]=[];
  
}
