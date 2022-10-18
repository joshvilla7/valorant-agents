import {trigger, animate, style, transition, query, group} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
        transition('* <=> *', [    
          query(':enter, :leave', style({ opacity: 1 })),
          group([ 
            query(':enter', [
              style({ opacity:0 }),
              animate('1900ms ease-in-out', style({ opacity:1 }))
            ]),
            query(':leave', [
              style({ opacity:1 }),
              animate('1900ms ease-in-out', style({ opacity:0 }))]),
          ])
        ])
      ]);