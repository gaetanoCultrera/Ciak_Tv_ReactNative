import { validationSchemaSignUp } from "./ValidationSchema";

describe("ValidationSchema", () => {
  test("validates the schema with valid data", async () => {
    const objestSignUp = {
      username: "exampleuser",
      email: "example@example.com",
      password: "Password123!",
      confirmPassword: "Password123!",
    };

    // Validate the data against the schema
    await expect(
      validationSchemaSignUp.validate(objestSignUp)
    ).resolves.toBeTruthy();
  });
});
