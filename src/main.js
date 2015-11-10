import 'core-js';

export function configure(aurelia) {
  aurelia.use
    .defaultBindingLanguage()
    .defaultResources()
    .developmentLogging()
    .globalResources("custom-table")
  aurelia.start().then(() => aurelia.enhance(document.querySelector('custom-table')));
}
