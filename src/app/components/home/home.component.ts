import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; 
import { NgsRevealConfig } from 'ngx-scrollreveal';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgsRevealConfig]
})
export class HomeComponent { }
