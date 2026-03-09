import { expect, test, vi } from 'vitest';
import { fireEvent } from '@testing-library/react';
import { render, cleanup, screen } from '@testing-library/react';
import SignupForm from '@/components/signup/SignupForm';
import OAuthButton from '@/components/utils/oauth_button';


render(<SignupForm />);

test("Test if email input in the form", () => {
  const emailLabel: HTMLElement = screen.getByLabelText("Email");
  const emailInput: HTMLElement = screen.getByTestId('email-field');

  expect(emailInput).toBeDefined();
  expect(emailLabel).toBeDefined();
});


test("Test if username input in the form", () => {
  const usernameLabel: HTMLElement = screen.getByLabelText("Username");
  const usernameInput: HTMLElement = screen.getByTestId('username-field');

  expect(usernameInput).toBeDefined();
  expect(usernameLabel).toBeDefined();
});


test("Test if password input in the form", () => {
  const passwordLabel: HTMLElement = screen.getByLabelText("Password");
  const passwordInput: HTMLElement = screen.getByTestId('pass-field');

  expect(passwordInput).toBeDefined();
  expect(passwordLabel).toBeDefined();
});


test("Test if sign up button in the form", () => {
  const signUpButton: HTMLElement = screen.getByRole("button", {name: "Sign Up"});

  expect(signUpButton).toBeDefined();
});


test("Test if sign up form can accept children", () => {
  cleanup();

  const mockFunction = vi.fn();
  render(
  <div>
    <SignupForm>
      <OAuthButton 
        name="Sign in with Google"
        callback={mockFunction}
      />
    </SignupForm>
  </div>
  );

  const oauthButton: HTMLElement = screen.getByRole("button", {name: "Sign in with Google"});
  expect(oauthButton).toBeDefined();
});


test("Test if sign up form can submit", () => {
  cleanup();
  
  const mockFunction = vi.fn()
  render(<SignupForm onSubmit={mockFunction} />);

  const signUpButton: HTMLElement = screen.getByRole("button", {name: "Sign Up"});

  fireEvent.click(signUpButton);

  expect(mockFunction).toHaveBeenCalled();
});
