import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { MenuItem } from 'src/app/modules/menu-item';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  /**
   *
   */
  menuItems: MenuItem[] = [];
  constructor(private service: BackendService) {
    
    
  }

  ngOnInit(){
    this.service.fetchMenuItems().then(items => {
      this.menuItems = items;
    }, error => {
      console.log(error);
    });
  }

}
