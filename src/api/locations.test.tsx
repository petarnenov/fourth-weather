import React from "react";
import { render, screen } from "@testing-library/react";
import { getLocationByCityName } from ".";

describe("getLocationsByName", () => {
  it("should get data with correct location name", async () => {
    const location = "London";
    const res = await getLocationByCityName(location);
    expect(res.rejected).toBeFalsy();
    expect(res.fulfilled).toBeTruthy();
  });
  it("should rejected with empty location name", async () => {
    const location = "";
    const res = await getLocationByCityName(location);
    expect(res.rejected).toBeTruthy();
    expect(res.fulfilled).toBeFalsy();
  });
  it("should rejected with incorrect location name", async () => {
    const location = "asdf";
    const res = await getLocationByCityName(location);
    expect(res.rejected).toBeTruthy();
    expect(res.fulfilled).toBeFalsy();
  });
});
