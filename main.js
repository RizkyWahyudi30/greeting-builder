function formatName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function getGreeting(timeOfDay) {
  if (timeOfDay.includes("morning")) {
    return "Good Morning";
  }
  if (timeOfDay.includes("afternoon")) {
    return "Good Afternoon";
  }
  if (timeOfDay.includes("evening")) {
    return "Good Evening";
  }
}

function createGreeting(firstName, lastName, timeOfDay) {
  let func1 = formatName(firstName, lastName);
  let func2 = getGreeting(timeOfDay);
  return `${func2}, ${func1}`;
}

console.log(createGreeting("Ava", "Stone", "morning"));
console.log(createGreeting("Noah", "Kim", "evening"));
console.log(createGreeting("Mina", "Patel", "afternoon"));
