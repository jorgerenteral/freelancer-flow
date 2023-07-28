import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Freelancer } from './app/app.component';

bootstrapApplication(Freelancer, appConfig)
  .catch((err) => console.error(err));
