window.promises = [];

// Array of promises with random delays
const promises = Array.from({ length: 5 }, () => {
  const delay = Math.floor(Math.random() * 5) + 1;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${delay} second(s)`);
    }, delay * 1000);
  });
});

// Using Promise.any() to wait for the first resolved promise
Promise.any(promises)
  .then((result) => {
    document.getElementById("output").textContent = result;
  })
  .catch((error) => {
    console.error(error);
  });

