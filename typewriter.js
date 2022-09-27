const sentence = "hello there from lighthouse labs";
let startingDelay = 1000;
for (const char of sentence) {
  setTimeout(() => { process.stdout.write(char );
 }, startingDelay);
 startingDelay += 50;
}

setTimeout(() => {process.stdout.write("\n");
}, startingDelay);