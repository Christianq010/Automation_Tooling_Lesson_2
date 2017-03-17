## Dependencies Used
* Node.js
* gulp
* scss - sass
 * watcher - converts when change detected
 * auto-prefixer - determine browser support from gulpfile
* Live edits - browsersync detects and makes live changes by observing css [<https://browsersync.io/>]
 * To run BrowserSync on a static HTML site - `browser-sync start --server --files "css/*.css"`
 * To run BrowserSync on local host - `browser-sync start --proxy "myproject.dev" --files "css/*.css"`