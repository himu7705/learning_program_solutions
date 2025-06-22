package code;

public class FinancialForecast {

    // Recursive method to calculate future value
    public static double forecast(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return forecast(presentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        double initialInvestment = 10000.0;  // Starting value
        double growthRate = 0.08;            // 8% annual growth
        int years = 5;

        double futureValue = forecast(initialInvestment, growthRate, years);

        System.out.printf("Future Value after %d years: %.2f\n", years, futureValue);
    }
}
