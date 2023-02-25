function quote(carValue, riskRating) {
  const yearlyPremium = (carValue * riskRating) / 100;
  const monthlyPremium = yearlyPremium / 12;

  if (carValue === null) {
    return "Missing car value, please enter the numbers";
  } else if (carValue < 0 || riskRating < 0) {
    return "The value cannot be a negative number";
  } else if (riskRating === 0 || riskRating >= 5) {
    return "Risk rating needs to be between 1 to 5";
  } else
    return {
      "yearly_premium": yearlyPremium,
      "monthly_premium": monthlyPremium,
    };
}


module.exports = quote;
