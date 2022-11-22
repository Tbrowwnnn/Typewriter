const sentence = "I struggled wtih this exact exercise when I was making a video game as a hobby. This feels like I'm solving an old puzzle that I'd long accepted I couldn't do.";
let timer = 1000;
let finalTime = timer + 50;
nSentence = sentence + "\n";

for (const char of nSentence) {
  timer += 50;

  setTimeout(() => {
    process.stdout.write(char);
  }, timer);

} 




