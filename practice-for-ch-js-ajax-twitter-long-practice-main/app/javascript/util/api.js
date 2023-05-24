const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    "X-CSRF-Token": csrfToken,
    "Content-Type": "application/json", 
    "Accept": "application/json",
    ...options.headers
  };

  return await fetch(url, options);
}
