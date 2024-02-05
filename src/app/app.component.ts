import { SwitcherComponent } from './switcher/switcher/switcher.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SwitcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  receivedSwitcherState: boolean = false;

  handleSwitcherChange(state: boolean) {
    this.receivedSwitcherState = state;
  }
}
