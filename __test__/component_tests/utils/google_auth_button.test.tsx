import { test, expect, vi } from "vitest";
import { fireEvent } from "@testing-library/react";
import { render, cleanup, screen } from "@testing-library/react";
import GoogleAuthButton from "@/components/utils/google_auth_button";

test.afterEach(cleanup);

test("Test if Google Auth Button can call the supplied callback function", ()=>{
  const mockFn = vi.fn();
  render(<GoogleAuthButton callback={mockFn}/>)

  const button: HTMLElement = screen.getByRole("button");
  fireEvent.click(button);
  expect(mockFn).toBeCalled()
})