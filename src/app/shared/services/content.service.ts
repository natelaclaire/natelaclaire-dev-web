// app/shared/services/content.service.ts

import { Injectable } from '@angular/core';
import { Page } from '../page';

@Injectable()
export class ContentService {
  pages: Object = {
    'home': new Page('Home', 'Welcome Home!', 'Some home content.', 'assets/robby-mccullough-1343350-unsplash.jpg'),
    'about': new Page('About', 'A Little About Me...', 'My passion is to use Web and Extended Reality technologies to improve lives. An entrepreneur, software engineer, church pianist, and aspiring data scientist, I utilize my skills serving college students and faculty by day, and small businesses and Christian ministries needing websites and web applications by night. When not sitting in front of a computer, I enjoy spending time with my family and friends, reading, hiking, traveling, and watching movies. I, with my two sisters, was homeschooled from birth to graduation from high school. I believe that the best education is that received while living life – not in a class room.', 'assets/robby-mccullough-1343350-unsplash.jpg'),
    'contact': new Page('Contact', 'Contact Us', 'Contact me by emailing ', 'assets/robby-mccullough-1343350-unsplash.jpg')
  };
}