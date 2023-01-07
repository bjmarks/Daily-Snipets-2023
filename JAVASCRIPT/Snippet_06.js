const { format } =
    new Intl.NumberFormat('us-US', // location to user
    {
        style: 'currency',
        currency: 'USD', // currency to be formated to...
        maximumFractionDigits: 2
    });
    format(279); // converts to USD
    format(20); // converts to USD
    format(0.79); // converts to USD
const { format2 } =   
    new Intl.NumberFormat({ 
        style: 'currency', 
        currency: 'JPY',
        maximumFractionDigits: 0 
    });
    format2(279); // converts to Yen
    format2(20); // converts to Yen
    format2(0.79); // converts to Yen
const { format3 } =   
    new Intl.NumberFormat({ 
        style: 'currency', 
        currency: 'USD',
        maximumFractionDigits: 0 
    });
    format3(279); // converts to USD with no cents
    format3(20); // converts to USD with no cents
    format3(0.79); // converts to USD with no cents