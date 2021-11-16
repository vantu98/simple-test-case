import { checkEmailFormat } from "../utils";

/**
 * 2 field name and email
 * Both is required
 * empty: 'Field is requried'
 * incorrect email 'Incorrect Email Format'
 */

/**
 * 2 input text email
 * function checkEmailFormat
 */

/**
 * Test function checkEmailFormat
 */
/**
 * case: aaaa
 * case: asdasdas@asdasd
 * case: 123345
 * case: test@email.com
 * case: {a:true}
 */
/**
 * @case test case return true
 * @case test case return false
 */
describe("Test checkEmailFormat", () => {
  test("Return false when email is aaa", () => {
    expect(checkEmailFormat("aaa")).toBe(false);
  });

  test("Return false when email is asasd@asdasd", () => {
    expect(checkEmailFormat("asasd@asdasd")).toBe(false);
  });

  test("Return false when email is 12345", () => {
    expect(checkEmailFormat("aaa")).toBe(false);
  });

  test("Return true when email is test@email.com", () => {
    expect(checkEmailFormat("test@email.com")).toBe(true);
  });
  test("Return false when email is {a: true}", () =>
    expect(checkEmailFormat({ a: true })).toBe(false));
});

// Test Component
// JSX
// input => span show error message
