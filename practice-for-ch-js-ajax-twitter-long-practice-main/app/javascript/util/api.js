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

export const followUser = (userId) => {
  return customFetch(`http://localhost:3000/users/${userId}/follow`, {method: "POST"})
}

export const unfollowUser = (userId) => {
  console.log("userId", userId)
  return customFetch(`http://localhost:3000/users/${userId}/follow`, {method: "DELETE"})
}
