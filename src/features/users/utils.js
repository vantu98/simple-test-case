import { EMAIL_REGEX } from "./consts";

/**
 * Check email format
 * @param {string} email email
 * @return {boolean}
 */
export const checkEmailFormat = (email) => {
  if (typeof email !== "string" || !email.match(EMAIL_REGEX)) return false;
  return true;
};
