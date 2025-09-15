import axios from "axios";

const allowAnonymousPaths = ["/login", "/signup"];

// Create instance
const AxiosApi = axios.create({
  headers: { "Content-Type": "application/json" },
});

// ✅ Add response interceptor
AxiosApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      const currentPath = window.location.pathname;

      if (!allowAnonymousPaths.includes(currentPath)) {
        const redirectPath = error.response.data?.redirect || "/login";
        window.location.href = redirectPath;
      }
    }
    return Promise.reject(error);
  }
);

// ✅ Add request interceptor
AxiosApi.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    config.headers["Refresh-Token"] = "1";
    if (refreshToken) {
      config.headers["Refresh-Token"] = refreshToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AxiosApi;
