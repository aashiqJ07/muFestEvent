function report(){
    let income = document.getElementById('income');
    let incomeValue = parseFloat(income.value); // Convert to float to ensure numerical operations
    console.log(incomeValue);
    
    let tax = document.getElementById('tax');
    let taxValue = parseFloat(tax.value);
    console.log(taxValue);
    
    let rent = document.getElementById('rent');
    let rentValue = parseFloat(rent.value);
    console.log(rentValue);
    
    let other = document.getElementById('other');
    let otherValue = parseFloat(other.value);
    console.log(otherValue);
    
    let saving = document.getElementById('saving');
    let savingValue = parseFloat(saving.value);
    console.log(savingValue);
    
    let investment = document.getElementById('investment');
    let investmentValue = parseFloat(investment.value);
    console.log(investmentValue);

    let taxPercent = (taxValue / incomeValue) * 100;
    let intTaxPer = Math.floor(taxPercent);
    console.log(intTaxPer);

    let rentPercent = (rentValue / incomeValue) * 100;
    let rentTaxPer = Math.floor(rentPercent);
    console.log(rentTaxPer);

    let otherPercent = (otherValue / incomeValue) * 100;
    let otherTaxPer = Math.floor(otherPercent);
    console.log(otherTaxPer);

    let savingPercent = (savingValue / incomeValue) * 100;
    let savingTaxPer = Math.floor(savingPercent);
    console.log(savingTaxPer);

    let investmentPercent = (investmentValue / incomeValue) * 100;
    let investmentTaxPer = Math.floor(investmentPercent);
    console.log(investmentTaxPer);

    let incomeSpent = intTaxPer + rentTaxPer + otherTaxPer + savingTaxPer + investmentTaxPer;
    let expenses = intTaxPer + rentTaxPer + otherTaxPer;

    if(income < tax || rent || other || saving || investment){
        console.log("There is some miss calculation!")
    }

    document.getElementById('taxvalue').innerHTML = `${intTaxPer}%`
    document.getElementById('rentvalue').innerHTML = `${rentTaxPer}%`
    document.getElementById('othervalue').innerHTML = `${otherTaxPer}%`
    document.getElementById('savingvalue').innerHTML = `${savingTaxPer}%`
    document.getElementById('investmentvalue').innerHTML = `${investmentTaxPer}%`
    document.getElementById('incomevalue').innerHTML = `${incomeSpent}%`

    document.getElementById('incomegraph').style.setProperty('--val',`${incomeSpent}`);
    document.getElementById('taxgraph').style.setProperty('--val',`${intTaxPer}`);
    document.getElementById('rentgraph').style.setProperty('--val',`${rentTaxPer}`);
    document.getElementById('othergraph').style.setProperty('--val',`${otherTaxPer}`);
    document.getElementById('savinggraph').style.setProperty('--val',`${savingTaxPer}`);
    document.getElementById('investmentgraph').style.setProperty('--val',`${investmentTaxPer}`);

    document.getElementById('text').innerHTML = `You spend ${incomeSpent}% money of this month, it was ${intTaxPer}% on Tax, ${rentTaxPer}% on rent,
    ${otherTaxPer}% on other, you saved ${savingTaxPer}% and invested ${investmentTaxPer}%.`;
    
    if(expenses > 70){
        document.getElementById('second-text').innerHTML = `You have spend more than 70% you must reduce your spendings!`
    }
    if(savingTaxPer > 20)
    {
        document.getElementById('second-text').innerHTML = `You have saved more than 20%, great job!`
    }
    if(investmentPercent > 20 )
    {
        document.getElementById('second-text').innerHTML = `You have invested more than 20%, well done!`
    }
    else{
        document.getElementById('second-text').innerHTML = `Try to save and invest more!`
    }
}

function futureValue(){
    let present = document.getElementById('present');
    let presentValue = parseFloat(present.value);
    console.log(presentValue);

    let pnum = document.getElementById('periodnum');
    let pnumValue = parseFloat(pnum.value);
    console.log(pnumValue);

    let rate = document.getElementById('rate');
    let ratevalue = parseFloat(rate.value);
    console.log(ratevalue);

    let fvalue = presentValue*((1 + ratevalue)*pnumValue);
    console.log(fvalue);

    let favalueper = fvalue/presentValue*100;
    console.log(favalueper);

    document.getElementById('taxvalue').style.setProperty('--val',`${favalueper}`);
    document.getElementById('text').innerHTML = `You could hav approx ${favalueper}% of return.`

}
function bussinessReport(){
    let revenue = document.getElementById('revenue');
    let revenueValue = parseFloat(revenue.value);
    console.log(revenueValue);

    let expenses = document.getElementById('expenses');
    let expensesValue = parseFloat(expenses.value);
    console.log(expensesValue);

    let liabilty = document.getElementById('liability');
    let liabiltyValue = parseFloat(liabilty.value);
    console.log(liabiltyValue);

    let equity = document.getElementById('equity');
    let equityValue = parseFloat(equity.value);
    console.log(equityValue);

    let bi = document.getElementById('bi');
    let biValue = parseFloat(bi.value);
    console.log(biValue);

    let inb = document.getElementById('inb');
    let inbValue = parseFloat(inb.value);
    console.log(inbValue);

    let ei = document.getElementById('ei');
    let eiValue = parseFloat(ei.value);
    console.log(eiValue);

    let netIncome = revenueValue - expensesValue;
    console.log(netIncome)
    let assets = liabiltyValue + equityValue;
    console.log(assets)
    let cogs = parseFloat(biValue + inbValue -eiValue);
    console.log(cogs)

    let netIncomePer = netIncome/revenueValue*100;
    console.log(netIncomePer);
    let equityPer = equityValue/assets*100;
    console.log(equityPer);
    let liabilityPer = liabiltyValue/assets*100;
    console.log(liabilityPer);
    let expensesPer = expensesValue/assets*100;
    console.log(expensesPer);
    let cogsPer = Math.floor(cogs/expensesValue*100);
    console.log(cogsPer);

    document.getElementById('incomgraph').style.setProperty('--val',`${netIncomePer}`);
    document.getElementById('taxgraph').style.setProperty('--val',`${cogsPer}`);
    document.getElementById('rentgraph').style.setProperty('--val',`${expensesPer}`);
    document.getElementById('othergraph').style.setProperty('--val',`${liabilityPer}`);
    document.getElementById('savinggpah').style.setProperty('--val',`${equityPer}`);
}