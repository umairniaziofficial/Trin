import { Component, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-video-banner',
  standalone: true,
  templateUrl: './video-banner.component.html',
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class VideoBannerComponent implements AfterViewInit {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const video = this.videoElement.nativeElement;
    console.log(video);
    video.muted = true;

    this.ensureVideoPlays(video);

    this.renderer.listen(video, 'pause', () => {
      console.warn('Video paused unexpectedly. Attempting to resume playback...');
      this.ensureVideoPlays(video);
    });
  }


  private ensureVideoPlays(video: HTMLVideoElement) {
    if (video.paused || video.readyState < 4) {
      video.play().catch(err => console.error('Error ensuring autoplay:', err));
    }
  }

  onVideoError(event: Event) {
    console.error('Video loading error:', event);

    const video = this.videoElement.nativeElement;
    video.style.display = 'none';
  }
}
