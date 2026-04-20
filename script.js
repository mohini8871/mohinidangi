async function loadUser() {
  const res = await fetch("https://api.github.com/users/octocat");
  const data = await res.json();

  document.getElementById("card").innerHTML = `
    <img src="${data.avatar_url}" width="100">
    <h2>${data.login}</h2>
    <p>${data.bio || "No bio available"}</p>
  `;
}