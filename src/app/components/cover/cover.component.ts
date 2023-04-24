import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
})
export class CoverComponent implements OnInit{
  /**
   *
   */
  menus:unknown = [];
  constructor(private backendService: BackendService) {
    
  }
  ngOnInit(): void {
    this.backendService.fetchMenuItems().then(items =>{
      this.menus = items

    })
  }
}
