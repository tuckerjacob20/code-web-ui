import { trigger, state, animate, style, transition } from '@angular/animations';

export function routerTransitionRight() {
    return slideToRight();
}

export function routerTransitionRightEnter() {
    return slideToRightEnter();
}

export function routerTransitionRightLeave() {
    return slideToRightLeave();
}

export function routerTransitionLeft() {
    return slideToLeft();
}

export function routerTransitionLeftEnter() {
    return slideToLeftEnter();
}

export function routerTransitionLeftLeave() {
    return slideToLeftLeave();
}

export function routerTransitionBottom() {
    return slideToBottom();
}

export function routerTransitionBottomEnter() {
    return slideToBottomEnter();
}

export function routerTransitionBottomLeave() {
    return slideToBottomLeave();
}

export function routerTransitionTop() {
    return slideToTop();
}

export function routerTransitionTopEnter() {
    return slideToTopEnter();
}

export function routerTransitionTopLeave() {
    return slideToTopLeave();
}

function slideToRight() {
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

function slideToRightEnter() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%' })),
        state('*', style({ position: 'fixed', width: '100%' })),
        transition(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
    ]);
}

function slideToRightLeave() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%' })),
        state('*', style({ position: 'fixed', width: '100%' })),
        transition(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateX(100%)' }))
        ])
    ]);
}

function slideToLeft() {
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

function slideToLeftEnter() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%' })),
        state('*', style({ position: 'fixed', width: '100%' })),
        transition(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
    ]);
}

function slideToLeftLeave() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%' })),
        state('*', style({ position: 'fixed', width: '100%' })),
        transition(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateX(-100%)' }))
        ])
    ]);
}

function slideToBottom() {
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

function slideToBottomEnter() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
        state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
        transition(':enter', [
            style({ transform: 'translateY(-100%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
    ]);
}

function slideToBottomLeave() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
        state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
        transition(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateY(100%)' }))
        ])
    ]);
}

function slideToTop() {
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

function slideToTopEnter() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
        state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
        transition(':enter', [
            style({ transform: 'translateY(100%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
    ]);
}

function slideToTopLeave() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
        state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
        transition(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('1000ms ease-in-out', style({ transform: 'translateY(-100%)' }))
        ])
    ]);
}