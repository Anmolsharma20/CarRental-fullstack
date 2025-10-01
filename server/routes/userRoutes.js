// Fetch all cars (GET request)
fetch(`${import.meta.env.VITE_BASE_URL}/api/user/cars`)
  .then(res => {
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error(err));
