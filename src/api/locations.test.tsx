import { getForecastByCityName } from "./locations";
import { fiveDayForecastResponse } from "../fixtures";

describe("locations", () => {
  describe("getLocationsByName", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("should get data with correct location name", async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(fiveDayForecastResponse),
        } as Response)
      );
      const location = "London";
      const res = await getForecastByCityName(location);
      expect(res.fulfilled).toMatchObject(fiveDayForecastResponse);
      expect(res.rejected).toBeNull();
    });
    it("should rejected with empty location name", async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          statusText: "undefined location",
          json: () => Promise.resolve(fiveDayForecastResponse),
        } as Response)
      );
      const location = "";
      const res = await getForecastByCityName(location);
      expect(res.fulfilled).toBeNull();
      expect(res.rejected).toBe("undefined location");
    });
    it("should rejected with incorrect location name", async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          statusText: "Not Found",
          json: () => Promise.resolve(fiveDayForecastResponse),
        } as Response)
      );
      const location = "asdf";
      const res = await getForecastByCityName(location);
      expect(res.fulfilled).toBeNull();
      expect(res.rejected).toBe("Not Found");
    });
  });
});
