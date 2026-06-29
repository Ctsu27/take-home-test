export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

const drugUpdateBenefitMap = {
  "Doliprane": drug => {
    if (drug.benefit > 0) {
      drug.benefit -= 1;
    }
    drug.expiresIn -= 1;
    if (drug.expiresIn < 0 && drug.benefit > 0) {
      drug.benefit -= 1;
    }
    return drug;
  },
  "Herbal Tea": drug => {
    if (drug.benefit < 50) {
      drug.benefit += 1;
    }
    drug.expiresIn -= 1;
    if (drug.expiresIn < 0 && drug.benefit < 50) {
      drug.benefit += 1;
    }
    return drug;
  },
  "Fervex": drug => {
    if (drug.benefit < 50) {
      drug.benefit += 1;
    }
    if (drug.expiresIn < 11 && drug.benefit < 50) {
      drug.benefit += 1;
    }
    if (drug.expiresIn < 6 && drug.benefit < 50) {
      drug.benefit += 1;
    }
    drug.expiresIn -= 1;
    if (drug.expiresIn < 0) {
      drug.benefit = 0;
    }
    return drug;
  },
  "Magic Pill": drug => {
    return drug;
  },
  "Dafalgan" : drug => {
    if (drug.benefit > 0) {
      drug.benefit -= 2;
    }
    drug.expiresIn -= 1;
    if (drug.expiresIn < 0 && drug.benefit > 0) {
      drug.benefit -= 2;
    }
    if (drug.benefit < 0) {
      drug.benefit = 0;
    }
    return drug;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs = this.drugs.map(drug => {
      if (!drugUpdateBenefitMap[drug.name]) {
        throw new Error(`drug update not handled with name ${drug.name}`);
      }
      return drugUpdateBenefitMap[drug.name](drug);
    });
    return this.drugs;
  }
}
