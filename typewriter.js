const sentence = "I struggled wtih this exact exercise when I was making a video game as a hobby. This feels like I'm solving an old puzzle that I'd long accepted I couldn't do. \n";
let timer = 1000;

for (const char of sentence) {
  timer += 50;

  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
}

