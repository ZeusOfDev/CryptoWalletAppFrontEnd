const token = window.localStorage.getItem("access_token");
const refreshToken = window.localStorage.getItem("refresh_token");
await fetch(`/api/login`, {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
     },
    body: JSON.stringify(new {
        refreshToken: refreshToken
    }),
});