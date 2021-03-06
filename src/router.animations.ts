import { trigger, state, animate, style, transition } from '@angular/animations';

export function slideToRight() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%' })),
        state('*', style({ position: 'fixed', width: '100%' })),
        transition(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateX(100%)' }))
        ])
    ]);
}

export function slideToRightEnter() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%' })),
        state('*', style({ position: 'fixed', width: '100%' })),
        transition(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
    ]);
}

export function slideToRightLeave() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%' })),
        state('*', style({ position: 'fixed', width: '100%' })),
        transition(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateX(100%)' }))
        ])
    ]);
}

export function slideToLeft() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%' })),
        state('*', style({ position: 'fixed', width: '100%' })),
        transition(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateX(-100%)' }))
        ])
    ]);
}

export function slideToLeftEnter() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%' })),
        state('*', style({ position: 'fixed', width: '100%' })),
        transition(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
    ]);
}

export function slideToLeftLeave() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%' })),
        state('*', style({ position: 'fixed', width: '100%' })),
        transition(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateX(-100%)' }))
        ])
    ]);
}

export function slideToBottom() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
        state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
        transition(':enter', [
            style({ transform: 'translateY(-100%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateY(100%)' }))
        ])
    ]);
}

export function slideToBottomEnter() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
        state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
        transition(':enter', [
            style({ transform: 'translateY(-100%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
    ]);
}

export function slideToBottomLeave() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
        state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
        transition(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateY(100%)' }))
        ])
    ]);
}

export function slideToTop() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
        state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
        transition(':enter', [
            style({ transform: 'translateY(100%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateY(-100%)' }))
        ])
    ]);
}

export function slideToTopEnter() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
        state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
        transition(':enter', [
            style({ transform: 'translateY(100%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
    ]);
}

export function slideToTopLeave() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
        state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
        transition(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
