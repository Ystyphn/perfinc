import { test, expect, vi } from "vitest";
import { fireEvent } from "@testing-library/react";
import { render, cleanup, screen } from "@testing-library/react";
import OAuthButton from "@/components/utils/oauth_button";


test.afterEach(cleanup)

test("Test OAuth button can call authentication function", () => {
  const mockCallback = vi.fn();
  render(
  <OAuthButton 
    name="Sign up with Google"
    callback={mockCallback}
  />
  );
  const authButton: HTMLElement = screen.getByRole("button");
  fireEvent.click(authButton);

  expect(mockCallback).toHaveBeenCalled();
});