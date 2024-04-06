export const KEY_ACCESS_TOKEN = "access_token_untld";
export const KEY_USER_ID = "user_id";

export function getItem(key) {
  return localStorage.getItem(key);
}

export function setItem(key, value) {
  return localStorage.setItem(key, value);
}

export function removeItem(key) {
  return localStorage.removeItem(key);
}
