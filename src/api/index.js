const BASE = 'http://localhost:3001'

export async function registerPerson(username, password, email, first_name, last_name) {
    try {
      const response = await fetch(`${BASE}/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          email: email,
          first_name: first_name,
          last_name: last_name,
          user_active: true,
          admin_active: false
        }),
      });
      const result = await response.json();
      if (result.error) {
        throw result;
      }
      const token = result.token;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      return result;
    } catch (error) {
      throw error;
    }
  }