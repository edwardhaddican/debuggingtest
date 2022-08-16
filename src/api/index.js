const BASE = "http://localhost:3001";

// USERS API CALLS BELOW

export async function registerPerson(
  username,
  password,
  email,
  first_name,
  last_name
) {
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
        admin_active: false,
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

export async function loginPerson(username, password) {
  try {
    const response = await fetch(`${BASE}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();
    console.log(result, "RESULT");
    if (result.error) {
      throw result;
    }
    const token = result.token;
    const id = result.id;
    const admin = result.user.admin_active;
    const email = result.user.email;
    const first_name = result.user.first_name;
    const last_name = result.user.last_name;

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      localStorage.setItem("id", id);
      localStorage.setItem("admin", admin);
      localStorage.setItem("email", email);
      localStorage.setItem("first_name", first_name);
      localStorage.setItem("last_name", last_name);
      return result;
    }
  } catch (error) {
    throw error;
  }
}

export async function updatePerson(
  token,
  newUsername,
  newPassword,
  newEmail,
  id
) {
  try {
    const response = await fetch(`${BASE}/api/users/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username: newUsername,
        password: newPassword,
        email: newEmail,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

// USERS API CALLS ABOVE

// PRODUCTS API CALLS BELOW

export async function getAllProducts() {
  try {
  const response = await fetch(`${BASE}/api/products`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
} catch (error) {
  next (error)
}
}

// API CALLS SPECIFICALLY FOR EACH TYPE OF PRODUCT WE ARE TRYING TO SEARCH FOR BASED ON CATEGORY

export async function apiGetProductsByCategory(category) {
  try {
  const response = await fetch(`${BASE}/api/products/admin/${category}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
} catch (error) {
  next (error)
}
}

// END OF API CALLS SPECIFICALLY FOR EACH TYPE OF PRODUCT WE ARE TRYING TO SEARCH FOR BASED ON CATEGORY

export async function createProduct(
  gender,
  category,
  product_name,
  description,
  size,
  price,
  quantity_instock
) {
  try {
    const response = await fetch(`${BASE}/api/products/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gender: gender,
        category: category,
        product_name: product_name,
        description: description,
        size: size,
        price: price,
        availability: true,
        quantity_instock: quantity_instock,
      }),
    });
    const result = await response.json();
    if (result.error) {
      throw result;
    }
    return result;
  } catch (error) {
    throw error;
  }
}

export async function updateProduct(
  productId,
  gender,
  category,
  product_name,
  description,
  size,
  price,
  availability,
  quantity_instock
) {
  try {
    const response = await fetch(`${BASE}/api/products/${productId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        gender: gender,
        category: category,
        product_name: product_name,
        description: description,
        size: size,
        price: price,
        availability: availability,
        quantity_instock: quantity_instock,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function deleteProduct(
  productId
) {
  try {
    const response = await fetch(`${BASE}/api/products/${productId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

// PRODUCTS API CALLS ABOVE
