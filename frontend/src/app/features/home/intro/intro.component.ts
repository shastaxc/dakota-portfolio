import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'dport-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  isMobileDevice: boolean;

  constructor(private deviceService: DeviceDetectorService) {}

  ngOnInit(): void {
    this.isMobileDevice = this.deviceService.isMobile();
  }
}
