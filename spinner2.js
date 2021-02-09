// process.stdout.write('hello from spinner1.js... \rheyyy\n');

/*
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

// ... fill in the rest yourself ...

setTimeout(() => {
  process.stdout.write('\r|    ');
}, 900);
*/

let slash = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let delay = 100;
for (let i = 0; i < slash.length; i++) {
  setTimeout(() => {
    process.stdout.write(slash[i]);
  }, delay);
  delay += 200;
}