const firstName = prompt("Введіть імʼя");
const capitalizeFirstLetter = firstName.slice(0, 1).toUpperCase();
const correctName = firstName.slice(1, firstName.length);
alert("Hello " + capitalizeFirstLetter + correctName);
