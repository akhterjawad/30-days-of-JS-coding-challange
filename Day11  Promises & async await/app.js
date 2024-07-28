// Day 11: Promises and Async/Await
// Tasks/Activities:

// Activity 1: Understanding Promises
// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});
myPromise
  .then(message => {
    console.log(message);
  });

// • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

const mainPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Promise rejected after 2 seconds"));
  }, 2000);
});
mainPromise
  .catch(error => {
    console.error(error.message);
  });

// Activity 2: Chaining Promises

// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

// Simulate a fetch function that returns a promise
function fetchData(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// Chain promises to log messages in a specific order
fetchData("Fetching user data...", 1000)
  .then((message) => {
    console.log(message);
    return fetchData("Fetching posts data...", 1000);
  })
  .then((message) => {
    console.log(message);
    return fetchData("Fetching comments data...", 1000);
  })
  .then((message) => {
    console.log(message);
    console.log("All data fetched successfully.");
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Activity 3: Using Async/Await

// • Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

// Simulate a promise that resolves after a delay
function simulateAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 2000);
  });
}

// Define the async function
async function waitForPromise() {
  try {
    const result = await simulateAsyncOperation();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the async function
waitForPromise();

// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

async function fetchDataMain() {
  try {
    // Simulating an asynchronous operation that might throw an error
    await new Promise((resolve, reject) => {
      // Simulating an error condition
      setTimeout(() => {
        reject(new Error("Failed to fetch data"));
      }, 1000);
    });
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

// Calling the async function
fetchDataMain();

// Activity 4: Fetching Data from an API

// • Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

// Function to fetch data using promises
function fetchData() {
  fetch('https://api.spacexdata.com/v4/launches/latest')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Response Data:', data);
    })
    .catch(error => {
      console.error('Fetch Error:', error.message);
    });
}

// Calling the function to fetch data
fetchData();

// • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

// Async function to fetch data
async function fetchDataAPI() {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/launches/latest');

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    console.log('Response Data:', data);
  } catch (error) {
    console.error('Fetch Error:', error.message);
  }
}

// Calling the async function
fetchDataAPI();

// Activity 5: Concurrent Promises

// • Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from fetch 1");
    }, 1000);
  });
}

function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from fetch 2");
    }, 1500);
  });
}

function fetchData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from fetch 3");
    }, 2000);
  });
}

// Use Promise.all to wait for all promises to resolve
Promise.all([fetchData1(), fetchData2(), fetchData3()])
  .then((values) => {
    console.log('All promises resolved:', values);
  })
  .catch((error) => {
    console.error('Error in one of the promises:', error);
  });

// • Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

// Use Promise.race to log the value of the first resolved promise
Promise.race([fetchData1(), fetchData2(), fetchData3()])
  .then((value) => {
    console.log('First promise resolved:', value);
  })
  .catch((error) => {
    console.error('Error in the race of promises:', error);
  });

// Feature Request:
// 1. Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
// 2. Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.
// 3. Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.
// 4. API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.
// 5. Concurrent Promises Script: Write a script that uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results.

// Achievement:
// By the end of these activities, students will:
// • Understand and create promises, including handling resolved and rejected states.
// • Chain multiple promises to perform sequential asynchronous operations.
// • Use async/await to handle asynchronous code more readably.
// • Fetch data from public APIs using both promises and async/await.
// • Manage multiple concurrent promises using Promise.all and Promise.race.
/////////////////////////////////// Complete //////////////////////////////