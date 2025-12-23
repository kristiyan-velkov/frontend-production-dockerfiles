import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf, NgClass, NgSwitch, NgSwitchCase } from '@angular/common';

// Import constants
import {
  PROFILE,
  BADGES,
  EXPERTISE_TAGS,
  SOCIAL_LINKS,
  BOOKS,
  PROMO,
  APP_INFO,
} from './constants';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, NgIf, NgClass, NgSwitch, NgSwitchCase],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // Profile
  readonly profile = PROFILE;
  readonly badges = BADGES;
  readonly expertiseTags = EXPERTISE_TAGS;

  // Social
  readonly socialLinks = SOCIAL_LINKS;

  // Books
  readonly books = BOOKS;
  readonly promo = PROMO;

  // App Info
  readonly appInfo = APP_INFO;
}
