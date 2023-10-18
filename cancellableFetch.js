const controller = new AbortController();
const { signal } = controller;

fetch("http://localhost:18793/api/status", { signal }).then(response => {
    console.log(`Request 1 is complete!`);
}).catch(e => {
    console.warn(`Fetch 1 error: ${e.message}`);
});


// Wait 2 seconds to abort both requests
setTimeout(() => controller.abort(), 3000);