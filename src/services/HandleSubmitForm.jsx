import api from "../utils/Interceptor";
import { serverAddress } from "../utils/Reusevariable";
async function handleSubmitForm(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  // Build route
  let route = "/";
  route += e.target.id;
  
  try {
    const res = await api.post(serverAddress + route, data);
    console.log("✅ Final response in form handler:", res);
    return res; // already refined by interceptor
  } catch (err) {
    console.error("❌ Final error in form handler:", err);
    throw err;
  }
}

export default handleSubmitForm;
