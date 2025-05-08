import { cleanup, render } from "@testing-library/react";
import { expect, test } from "vitest";
import Pizza from "../Pizza";

// afterEach(cleanup);

test("alt test renders on Pizza image", async () => {
  const name = "My Favorite Pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} description="Super cool pizza" image={src} />
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
  cleanup();
});

test("to have default image if none is provided", async () => {
  const screen = render(
    <Pizza name="something else" description="Super cool pizza" />
  );

  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
