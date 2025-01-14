function cityTaxes(city, population, treasury) {
  const cityReport = {
    name: city,
    population,
    treasury,
    taxRate: 10,
    // - Increase treasury by population * taxRate
    collectTaxes() {
      this.treasury += Math.floor(this.population * this.taxRate);
    },

    //- Increase population by given percentage
    applyGrowth(percentage) {
      this.population += Math.floor(this.population * (percentage / 100));
    },

    // - Decrease treasury by given percentage
    applyRecession(percentage) {
      this.treasury -= Math.floor(this.treasury * (percentage / 100));
    },
  };

  return cityReport;
}
const city = cityTaxes(
  "Tortuga",

  7000,

  15000
);

city.collectTaxes();

console.log(city.treasury);

city.applyGrowth(5);

console.log(city.population);
