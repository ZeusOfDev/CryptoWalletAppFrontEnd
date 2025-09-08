async function handleSubmitForm(e, interceptor) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    var route = "/";
    if (e.target.id === "login") {
        route = "/login";
    } else {
        route = route + e.target.id;
    }
    console.log(data);
    await fetch(`/api/${route}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
};
export { handleSubmitForm };