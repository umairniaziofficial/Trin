import { NgClass, NgFor } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { BannerModel } from '../../models/banner.type';
import { BANNER_ITEMS } from '../../constants/data';

@Component({
  selector: 'app-main-banner-section',
  imports: [NgFor, NgClass],
  templateUrl: './main-banner-section.component.html',
  styleUrl: './main-banner-section.component.scss'
})
export class MainBannerSectionComponent {
  bannerItems: BannerModel[] = BANNER_ITEMS;
  activeIndex: number = 0;
  interval: any;
  autoplayTimeout: any;
  readonly SLIDE_INTERVAL = 5000;
  readonly INTERACTION_TIMEOUT = 10000;

  isDragging = false;
  startX = 0;
  currentTranslate = 0;
  dragThreshold = 50;

  ngOnInit(): void {
    this.startSlideshow();
  }

  ngOnDestroy(): void {
    this.clearTimers();
  }

  // Touch events
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.startDrag(event.touches[0].clientX);
    this.stopSlideshow();
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (this.isDragging) {
      const currentX = event.touches[0].clientX;
      this.drag(currentX);
    }

  }

  @HostListener('touchend')
  onTouchEnd() {
    this.endDrag();
  }

  // Mouse events
  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    event.preventDefault();
    this.startDrag(event.clientX);
    this.stopSlideshow();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      event.preventDefault();
      this.drag(event.clientX);
    }
  }

  @HostListener('mouseup')
  @HostListener('mouseleave')
  onMouseUp() {
    this.endDrag();
  }

  private startDrag(clientX: number) {
    this.isDragging = true;
    this.startX = clientX;
  }

  private drag(currentX: number) {
    if (!this.isDragging) return;
    this.currentTranslate = currentX - this.startX;
  }

  private endDrag() {
    if (!this.isDragging) return;

    if (Math.abs(this.currentTranslate) > this.dragThreshold) {
      if (this.currentTranslate > 0) {
        this.previousSlide();
      } else {
        this.nextSlide();
      }
    }

    // Reset drag values
    this.isDragging = false;
    this.startX = 0;
    this.currentTranslate = 0;
    this.restartSlideshowAfterDelay();
  }

  private clearTimers(): void {
    clearInterval(this.interval);
    clearTimeout(this.autoplayTimeout);
  }

  startSlideshow(): void {
    this.clearTimers();
    this.interval = setInterval(() => {
      this.nextSlide();
    }, this.SLIDE_INTERVAL);
  }

  stopSlideshow(): void {
    this.clearTimers();
  }

  restartSlideshowAfterDelay(): void {
    this.clearTimers();
    this.autoplayTimeout = setTimeout(() => {
      this.startSlideshow();
    }, this.INTERACTION_TIMEOUT);
  }

  nextSlide(): void {
    this.activeIndex = (this.activeIndex + 1) % this.bannerItems.length;
  }

  previousSlide(): void {
    this.activeIndex = (this.activeIndex - 1 + this.bannerItems.length) % this.bannerItems.length;
  }

  setActiveSlide(index: number): void {
    this.activeIndex = index;
    this.restartSlideshowAfterDelay();
  }
}
