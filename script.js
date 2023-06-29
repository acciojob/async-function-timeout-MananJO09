//your JS code here. If required.
async function greetUser() {
  const user = await fetchUser();
  console.log(`Hello, ${user}!`); // Output after 2 seconds: Hello, John Doe!
}

greetUser();
