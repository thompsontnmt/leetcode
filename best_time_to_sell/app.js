var maxProfit = (prices) => {
    if (prices.length < 2) return 0;

    let min_Profit = prices[0];
    let max_Profit = prices[1] - prices[0];

    for (day in prices) {
        let current_price = prices[day];

        let tentative_max_profit = current_price - min_Profit;

        max_Profit = Math.max(max_Profit, tentative_max_profit);

        min_Profit = Math.min(min_Profit, current_price);
    }
    if (max_Profit > 0) return max_Profit;
    return 0;
}