// app/shared/services/content.service.ts

import { Injectable } from '@angular/core';
import { Page } from '../page';

@Injectable()
export class ContentService {
  pages: Object = {
    'home': new Page('Home', 'Welcome Home!', 'Some home content.', 'assets/robby-mccullough-1343350-unsplash.jpg'),
    'about': new Page('About', 'About Us', 'Some content about us. <cv></cv>', 'assets/robby-mccullough-1343350-unsplash.jpg'),
    'contact': new Page('Contact', 'Contact Us', 'How to contact us.', 'assets/robby-mccullough-1343350-unsplash.jpg')
  };
}