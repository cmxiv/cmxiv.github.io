import 'jest-preset-angular/setup-jest';
Object.defineProperty(window, 'CSS', {value: null});
Object.defineProperty(document, 'doctype', {value: '<!DOCTYPE html>'});
Object.defineProperty(document.body.style, 'transform', {value: () => {return {enumerable: true,configurable: true};}});
Object.defineProperty(window, 'getComputedStyle', {value: () => {return {display: 'none', appearance: ['-webkit-appearance']};}});

