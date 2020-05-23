import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'dport-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  private isDesktopDevice;

  get zoom(): string {
    return this.isDesktopDevice ? '100%' : '150%';
  }

  constructor(private deviceService: DeviceDetectorService) {}

  ngOnInit(): void {
    this.isDesktopDevice = this.deviceService.isDesktop();
  }
}
