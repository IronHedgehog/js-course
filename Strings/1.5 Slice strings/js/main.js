const message = prompt("Write you text here");
alert(message.slice(0, 240));
alert(
  "You have written " +
    message.length +
    " symbols,you have " +
    (240 - message.length) +
    " left"
);
