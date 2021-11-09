var maxProfit = function(prices) {
    let answer = 0;
    
    for (let i = 0; i < prices.length - 1; ++i) {
        answer += prices[i+1] - prices[i] > 0 ? prices[i+1] - prices[i] : 0;
    }
    
    return answer;
};