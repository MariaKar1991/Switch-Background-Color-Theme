import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switcher.component.html',
  styleUrl: './switcher.component.css',
})
export class SwitcherComponent {
  switcherState: boolean = false;
  @Output() sendSwitcherState = new EventEmitter<boolean>();

  toggleSwitcherState() {
    this.switcherState = !this.switcherState;
    console.log(this.switcherState);
    this.sendSwitcherState.emit(this.switcherState);
  }
}
