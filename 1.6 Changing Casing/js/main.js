const firstName = prompt("Введіть імʼя");
const capitalizeFirstLetter = firstName.slice(0, 1).toUpperCase();
const restName = firstName.slice(1, firstName.length).toLowerCase();
alert("Hello " + capitalizeFirstLetter + correctName);
