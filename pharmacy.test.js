import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Doliprane", 20, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Doliprane", 19, 29)],
    );
  });
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Doliprane", -1, 15)]).updateBenefitValue()).toEqual(
      [new Drug("Doliprane", -2, 13)],
    );
  });
  it("should increase the benefit and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 10, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 9, 6)],
    );
  });
  it("should increase the benefit and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -3, 37)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -4, 39)],
    );
  });
  it("should increase the benefit and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Fervex", 13, 23)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 12, 24)],
    );
  });
  it("should increase the benefit and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Fervex", 8, 37)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 7, 39)],
    );
  });
  it("should not change the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 13, 23)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 13, 23)],
    );
  });
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 20, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 19, 28)],
    );
  });
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Dafalgan", -1, 15)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -2, 11)],
    );
  });
});
