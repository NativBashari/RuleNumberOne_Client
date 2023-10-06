import { BalanceSheet } from "./balance-sheet.model";
import { CashFlow } from "./cash-flow.model";
import { ProfitLoss } from "./profit-loss.model";
import { StockProfit } from "./stock-profit.model";
import { RuleNumberOneNumbers } from "./role-number-one-numbers.model";

export interface FinancialData_Final {
    balanceSheet: BalanceSheet[];
    cashFlow: CashFlow[];
    profitLoss: ProfitLoss[];
    stockProfit: StockProfit[];
    ruleNumberOneNumbers: RuleNumberOneNumbers;
}