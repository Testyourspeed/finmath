const questions = [
     // Round 1
    [
        {
            question: "What is the future value of $1000 invested for 3 years at an annual interest rate of 5% compounded annually?",
            options: ["$1157.63", "$1200", "$1250", "$1050"],
            correct: 0,
        },
        {
            question: "What is the present value of $1500 to be received in 5 years if the annual discount rate is 4%?",
            options: ["$1222.22", "$1250", "$1350", "$1500"],
            correct: 0,
        },
        {
            question: "If you invest $5000 today at 6% annual interest, compounded quarterly, what will the value of the investment be in 10 years?",
            options: ["$9015.79", "$9000", "$9500", "$10000"],
            correct: 0,
        },
        {
            question: "You want to accumulate $2000 in 4 years. What annual interest rate, compounded annually, is required?",
            options: ["8.56%", "6.5%", "7%", "10%"],
            correct: 0,
        },
        {
            question: "What is the formula for calculating compound interest?",
            options: ["A = P(1 + r/n)^(nt)", "A = P(1 + r)^t", "A = P(1 + n)^r", "A = P(1 + r)^(t+n)"],
            correct: 0,
        },
    ],

    // Round 2
    [
        {
            question: "What is the future value of an annuity of $200 per month for 5 years, assuming an interest rate of 6% compounded monthly?",
            options: ["$15582.12", "$12500", "$14000", "$15000"],
            correct: 0,
        },
        {
            question: "A loan of $10,000 is taken for 3 years at an interest rate of 5% per year, compounded quarterly. What is the total amount payable at the end of the loan?",
            options: ["$11,576.25", "$11,500", "$12,000", "$12,500"],
            correct: 0,
        },
        {
            question: "What is the present value of an annuity that pays $500 annually for 10 years with an annual interest rate of 8%?",
            options: ["$3,837.94", "$4,000", "$3,500", "$4,500"],
            correct: 0,
        },
        {
            question: "What is the effective annual rate (EAR) if the nominal interest rate is 6% compounded monthly?",
            options: ["6.1678%", "6.25%", "6.50%", "6.10%"],
            correct: 0,
        },
        {
            question: "How much will $3000 grow to in 4 years at an annual interest rate of 7%, compounded quarterly?",
            options: ["$3761.49", "$3800", "$3900", "$4000"],
            correct: 0,
        },
    ],

    // Round 3
    [
        {
            question: "What is the annual effective interest rate if the nominal interest rate is 10% compounded semi-annually?",
            options: ["10.25%", "10.50%", "10.00%", "10.15%"],
            correct: 0,
        },
        {
            question: "You invest $2000 today for 3 years at an interest rate of 8%, compounded annually. What is the future value?",
            options: ["$2515.06", "$2600", "$2700", "$2800"],
            correct: 0,
        },
        {
            question: "If a $1000 bond matures in 5 years with a 6% annual coupon rate, what is the annual coupon payment?",
            options: ["$60", "$50", "$100", "$70"],
            correct: 0,
        },
        {
            question: "What is the present value of $500 to be received in 7 years with an annual discount rate of 5%?",
            options: ["$355.70", "$400", "$450", "$500"],
            correct: 0,
        },
        {
            question: "A company is considering two projects. Project A promises $10,000 annually for 5 years at 10% interest rate. Project B promises $12,000 annually for 5 years at 8%. Which project is more valuable in terms of present value?",
            options: ["Project A", "Project B", "Both are equal", "Cannot be determined"],
            correct: 0,
        },
    ],

    // Round 4
    [
        {
            question: "How much will an initial investment of $5000 grow to in 3 years at an interest rate of 4% compounded monthly?",
            options: ["$5624.45", "$5500", "$5800", "$6000"],
            correct: 0,
        },
        {
            question: "What is the present value of an annuity that pays $2000 annually for 6 years at an interest rate of 5%?",
            options: ["$10,566.27", "$10,000", "$11,000", "$12,000"],
            correct: 0,
        },
        {
            question: "What is the future value of $2500 invested today at 7% interest compounded quarterly for 5 years?",
            options: ["$3511.11", "$3550", "$3400", "$3300"],
            correct: 0,
        },
        {
            question: "What is the value of a bond with a coupon rate of 5% and a face value of $1000, maturing in 8 years, if the market interest rate is 6%?",
            options: ["$900.29", "$850", "$950", "$1000"],
            correct: 0,
        },
        {
            question: "How long will it take for an investment to double at an annual interest rate of 5%, compounded annually?",
            options: ["14.4 years", "15 years", "16 years", "12 years"],
            correct: 0,
        },
    ],

    // Round 5
    [
        {
            question: "If you invest $8000 for 6 years at 9% annual interest compounded monthly, what will the investment be worth at the end of 6 years?",
            options: ["$14,639.25", "$14,500", "$15,000", "$16,000"],
            correct: 0,
        },
        {
            question: "What is the future value of an investment of $1500 made today for 4 years at an interest rate of 8% compounded semi-annually?",
            options: ["$2100.74", "$2200", "$2300", "$2400"],
            correct: 0,
        },
        {
            question: "What is the present value of receiving $2000 in 10 years at a discount rate of 3%?",
            options: ["$1498.57", "$1500", "$1450", "$1550"],
            correct: 0,
        },
        {
            question: "What is the effective annual interest rate (EAR) for an interest rate of 8% compounded quarterly?",
            options: ["8.24%", "8.30%", "8.50%", "8.00%"],
            correct: 0,
        },
        {
            question: "You are considering investing $10,000 for 5 years at 7% annual interest compounded monthly. What is the value at the end of the investment?",
            options: ["$14,025.50", "$13,500", "$12,000", "$15,000"],
            correct: 0,
        },
    ],
  // Round 6
    [
        {
            question: "What is the future value of an investment of $4000 after 10 years at an interest rate of 5%, compounded annually?",
            options: ["$6533.39", "$6000", "$7000", "$7500"],
            correct: 0,
        },
        {
            question: "A bond pays 6% annual coupon payments. If the bond price is $950, what is the yield to maturity (YTM)?",
            options: ["6.32%", "6.50%", "5.80%", "6.00%"],
            correct: 0,
        },
        {
            question: "What is the present value of an annuity that pays $4000 annually for 10 years with an interest rate of 5%?",
            options: ["$31,120.29", "$32,000", "$30,000", "$29,500"],
            correct: 0,
        },
        {
            question: "If you invest $2000 today at an interest rate of 8% compounded quarterly, what is the value in 3 years?",
            options: ["$2520.16", "$2600", "$2500", "$2550"],
            correct: 0,
        },
        {
            question: "What is the future value of an annuity that pays $3000 per month for 7 years at an interest rate of 6% compounded monthly?",
            options: ["$309,585.87", "$300,000", "$320,000", "$310,000"],
            correct: 0,
        },
    ],

    // Round 7
    [
        {
            question: "What is the effective interest rate for a nominal interest rate of 9% compounded monthly?",
            options: ["9.38%", "9.50%", "9.25%", "9.30%"],
            correct: 0,
        },
        {
            question: "You want to accumulate $15,000 in 5 years. What interest rate compounded annually is required?",
            options: ["12.7%", "13%", "14%", "15%"],
            correct: 0,
        },
        {
            question: "A loan of $1000 is taken for 4 years at an interest rate of 6% per year, compounded quarterly. What is the total amount to be paid at the end of the loan?",
            options: ["$1277.47", "$1300", "$1250", "$1200"],
            correct: 0,
        },
        {
            question: "What is the future value of $5000 invested today for 10 years at 7% interest compounded annually?",
            options: ["$9835.44", "$9800", "$9900", "$9500"],
            correct: 0,
        },
        {
            question: "If a bond with a face value of $1000 matures in 5 years and has a coupon rate of 8%, what is the annual coupon payment?",
            options: ["$80", "$70", "$100", "$90"],
            correct: 0,
        },
    ],

    // Round 8
    [
        {
            question: "What is the present value of receiving $500 annually for 8 years with a 6% annual discount rate?",
            options: ["$3338.21", "$3000", "$3500", "$3400"],
            correct: 0,
        },
        {
            question: "How much will an initial investment of $6000 grow to in 3 years at an annual interest rate of 6% compounded quarterly?",
            options: ["$7145.36", "$7100", "$7050", "$7200"],
            correct: 0,
        },
        {
            question: "What is the present value of $1000 to be received in 7 years, with a 4% annual interest rate?",
            options: ["$758.37", "$800", "$850", "$900"],
            correct: 0,
        },
        {
            question: "If you invest $2500 for 5 years at 9% annual interest compounded semi-annually, what is the value at the end of the investment?",
            options: ["$3917.64", "$4000", "$3900", "$3950"],
            correct: 0,
        },
        {
            question: "You plan to withdraw $2000 annually for the next 4 years. What is the present value of these withdrawals at an interest rate of 5%?",
            options: ["$7273.03", "$7300", "$7200", "$7500"],
            correct: 0,
        },
    ],

    // Round 9
    [
        {
            question: "What is the future value of an annuity that pays $300 monthly for 5 years at an interest rate of 7% compounded monthly?",
            options: ["$20,255.88", "$21,000", "$22,000", "$23,000"],
            correct: 0,
        },
        {
            question: "How long will it take for $4000 to grow to $8000 at 5% annual interest compounded quarterly?",
            options: ["14.4 years", "13 years", "12 years", "15 years"],
            correct: 0,
        },
        {
            question: "If you deposit $1000 today in an account earning 5% compounded annually, what will the value of the deposit be in 15 years?",
            options: ["$2078.93", "$2100", "$2150", "$2200"],
            correct: 0,
        },
        {
            question: "What is the present value of receiving $10000 in 6 years at a 7% annual discount rate?",
            options: ["$6660.14", "$6500", "$7000", "$6800"],
            correct: 0,
        },
        {
            question: "A bond has a coupon rate of 5% and matures in 7 years. If the market rate is 6%, what is the price of the bond?",
            options: ["$950.46", "$1000", "$1050", "$1100"],
            correct: 0,
        },
    ],

    // Round 10
    [
        {
            question: "What is the future value of $2500 invested for 8 years at 4% annual interest compounded monthly?",
            options: ["$3388.68", "$3400", "$3300", "$3500"],
            correct: 0,
        },
        {
            question: "How much will you have in 6 years if you invest $10000 today at 6% interest compounded semi-annually?",
            options: ["$14,194.59", "$14000", "$13500", "$13000"],
            correct: 0,
        },
        {
            question: "What is the future value of an investment of $3000 for 5 years at an interest rate of 7% compounded quarterly?",
            options: ["$4212.94", "$4300", "$4200", "$4000"],
            correct: 0,
        },
        {
            question: "What is the present value of $5000 to be received in 10 years at a 4% annual discount rate?",
            options: ["$3378.77", "$3400", "$3300", "$3250"],
            correct: 0,
        },
        {
            question: "How long will it take for $2500 to double at an annual interest rate of 8%, compounded monthly?",
            options: ["9.01 years", "8.5 years", "10 years", "9.5 years"],
            correct: 0,
        },
    ],
  // Round 11
    [
        {
            question: "What is the future value of $1500 invested for 7 years at an interest rate of 6% compounded quarterly?",
            options: ["$2243.55", "$2200", "$2300", "$2400"],
            correct: 0,
        },
        {
            question: "If a $5000 loan is to be repaid in 10 equal annual payments at an interest rate of 5%, what is the annual payment?",
            options: ["$644.67", "$600", "$700", "$650"],
            correct: 0,
        },
        {
            question: "How much would you need to invest today to receive $2000 annually for 4 years at an interest rate of 7%?",
            options: ["$7150.73", "$7200", "$7000", "$7100"],
            correct: 0,
        },
        {
            question: "What is the effective interest rate for a nominal interest rate of 8% compounded semi-annually?",
            options: ["8.16%", "8.5%", "8.25%", "8.30%"],
            correct: 0,
        },
        {
            question: "How much will an investment of $1200 grow to in 4 years if the interest rate is 9% compounded monthly?",
            options: ["$1636.45", "$1600", "$1650", "$1620"],
            correct: 0,
        },
    ],

    // Round 12
    [
        {
            question: "What is the present value of an annuity that pays $2500 annually for 8 years at an interest rate of 5%?",
            options: ["$16409.17", "$16000", "$16500", "$15500"],
            correct: 0,
        },
        {
            question: "If you want to receive $3000 annually for 6 years at an interest rate of 5%, what is the present value?",
            options: ["$16043.23", "$15000", "$15500", "$17000"],
            correct: 0,
        },
        {
            question: "What is the future value of $3500 invested for 3 years at an annual interest rate of 6%, compounded annually?",
            options: ["$4167.62", "$4200", "$4300", "$4400"],
            correct: 0,
        },
        {
            question: "If you invest $5000 for 5 years at 8% annual interest compounded quarterly, what is the value at the end of the investment?",
            options: ["$7346.64", "$7400", "$7300", "$7250"],
            correct: 0,
        },
        {
            question: "What is the present value of $5000 to be received in 5 years at a 9% annual interest rate?",
            options: ["$3236.69", "$3300", "$3250", "$3400"],
            correct: 0,
        },
    ],

    // Round 13
    [
        {
            question: "What is the future value of $2000 invested for 10 years at an interest rate of 5%, compounded annually?",
            options: ["$3257.79", "$3200", "$3100", "$3300"],
            correct: 0,
        },
        {
            question: "If you want to accumulate $10000 in 6 years, how much should you invest today at an interest rate of 7% compounded annually?",
            options: ["$6720.97", "$6800", "$6700", "$6600"],
            correct: 0,
        },
        {
            question: "A $5000 loan is taken for 7 years at an interest rate of 6% compounded semi-annually. What is the total amount to be repaid?",
            options: ["$7067.66", "$7000", "$7100", "$7200"],
            correct: 0,
        },
        {
            question: "What is the future value of an annuity that pays $1500 per month for 5 years at 6% annual interest compounded monthly?",
            options: ["$101,419.10", "$100,000", "$102,000", "$105,000"],
            correct: 0,
        },
        {
            question: "What is the present value of an investment that will pay $4000 annually for 7 years at a 5% annual interest rate?",
            options: ["$24,661.51", "$25,000", "$24,500", "$23,500"],
            correct: 0,
        },
    ],

    // Round 14
    [
        {
            question: "What is the present value of $8000 to be received in 6 years at a 10% annual discount rate?",
            options: ["$4371.74", "$4500", "$4400", "$4300"],
            correct: 0,
        },
        {
            question: "How long will it take for $2500 to grow to $4000 at 9% annual interest compounded quarterly?",
            options: ["8.37 years", "8 years", "9 years", "7.5 years"],
            correct: 0,
        },
        {
            question: "You have invested $5000 today at an interest rate of 8% compounded monthly. What is the future value of the investment after 6 years?",
            options: ["$7964.67", "$7900", "$8000", "$7800"],
            correct: 0,
        },
        {
            question: "What is the effective interest rate for a nominal rate of 10% compounded weekly?",
            options: ["10.52%", "10.45%", "10.5%", "10.47%"],
            correct: 0,
        },
        {
            question: "If a bond pays an annual coupon of 7% and has a price of $1050, what is the current yield?",
            options: ["6.67%", "6.5%", "7%", "6%"],
            correct: 0,
        },
    ],

    // Round 15
    [
        {
            question: "What is the future value of an annuity that pays $2000 per year for 10 years at 8% interest compounded annually?",
            options: ["$28,396.61", "$30,000", "$27,000", "$25,000"],
            correct: 0,
        },
        {
            question: "If you invest $3000 today at 6% compounded annually, what will the investment be worth after 12 years?",
            options: ["$6404.22", "$6300", "$6200", "$6400"],
            correct: 0,
        },
        {
            question: "What is the present value of $4000 to be received in 8 years at a 5% annual discount rate?",
            options: ["$2953.38", "$3000", "$3100", "$2900"],
            correct: 0,
        },
        {
            question: "What is the future value of an investment of $7500 after 5 years at 4% compounded semi-annually?",
            options: ["$9128.88", "$9100", "$9200", "$9300"],
            correct: 0,
        },
        {
            question: "What is the present value of an annuity that pays $1000 monthly for 6 years at an interest rate of 9% compounded monthly?",
            options: ["$55,505.38", "$55000", "$54000", "$56000"],
            correct: 0,
        },
    ],
  // Round 16
    [
        {
            question: "What is the future value of $2000 invested for 8 years at an annual interest rate of 7%, compounded annually?",
            options: ["$3535.87", "$3500", "$3400", "$3300"],
            correct: 0,
        },
        {
            question: "How much should you invest today to receive $10,000 in 5 years at an interest rate of 6% compounded quarterly?",
            options: ["$7462.20", "$7500", "$7400", "$7300"],
            correct: 0,
        },
        {
            question: "What is the present value of a bond that pays $1200 annually for 4 years at an interest rate of 5%?",
            options: ["$4327.10", "$4200", "$4300", "$4400"],
            correct: 0,
        },
        {
            question: "What is the future value of $3500 invested for 6 years at an interest rate of 4% compounded monthly?",
            options: ["$4514.68", "$4500", "$4400", "$4600"],
            correct: 0,
        },
        {
            question: "You invest $1500 today at 8% annual interest compounded quarterly. How much will your investment be worth after 4 years?",
            options: ["$2112.03", "$2100", "$2200", "$2150"],
            correct: 0,
        },
    ],

    // Round 17
    [
        {
            question: "What is the future value of an annuity that pays $2000 annually for 5 years at an interest rate of 6% compounded annually?",
            options: ["$11,328.38", "$12,000", "$10,000", "$11,500"],
            correct: 0,
        },
        {
            question: "You take out a loan of $8000 at 10% interest to be repaid in 3 equal annual payments. What is the annual payment?",
            options: ["$3094.52", "$3000", "$3100", "$3200"],
            correct: 0,
        },
        {
            question: "How long will it take for $3000 to double at an interest rate of 5% compounded monthly?",
            options: ["14.4 years", "15 years", "16 years", "13.5 years"],
            correct: 0,
        },
        {
            question: "What is the present value of an investment that will pay $8000 annually for 6 years at an interest rate of 7%?",
            options: ["$39,928.50", "$40000", "$38000", "$37000"],
            correct: 0,
        },
        {
            question: "What is the future value of $5000 invested for 7 years at an interest rate of 9% compounded monthly?",
            options: ["$9413.89", "$9500", "$9200", "$9600"],
            correct: 0,
        },
    ],

    // Round 18
    [
        {
            question: "What is the present value of an annuity that pays $1500 per year for 10 years at an interest rate of 8%?",
            options: ["$9277.55", "$9000", "$9200", "$9400"],
            correct: 0,
        },
        {
            question: "If you invest $2000 today at an interest rate of 7% compounded quarterly, what is the value of the investment after 4 years?",
            options: ["$2640.93", "$2700", "$2600", "$2500"],
            correct: 0,
        },
        {
            question: "What is the future value of an investment of $4500 after 6 years at 5% compounded quarterly?",
            options: ["$6046.76", "$6000", "$5900", "$6100"],
            correct: 0,
        },
        {
            question: "What is the future value of an annuity that pays $3000 annually for 4 years at 10% interest compounded annually?",
            options: ["$14,640", "$15000", "$14500", "$14000"],
            correct: 0,
        },
        {
            question: "If you invest $1000 today at an annual interest rate of 5% compounded semi-annually, how much will the investment be worth after 7 years?",
            options: ["$1407.23", "$1450", "$1350", "$1300"],
            correct: 0,
        },
    ],

    // Round 19
    [
        {
            question: "How much would you need to invest today to accumulate $15,000 in 10 years at an interest rate of 6% compounded monthly?",
            options: ["$8381.75", "$8500", "$8400", "$8300"],
            correct: 0,
        },
        {
            question: "What is the future value of $3000 invested for 5 years at an interest rate of 7%, compounded annually?",
            options: ["$4209.77", "$4000", "$4100", "$4300"],
            correct: 0,
        },
        {
            question: "You take out a loan of $6000 at an interest rate of 8% compounded quarterly. What is the total amount to be repaid after 4 years?",
            options: ["$7894.70", "$7800", "$8000", "$7900"],
            correct: 0,
        },
        {
            question: "What is the present value of $2000 to be received in 5 years at a 5% discount rate?",
            options: ["$1564.16", "$1600", "$1500", "$1400"],
            correct: 0,
        },
        {
            question: "What is the future value of $4000 invested for 8 years at 9% compounded annually?",
            options: ["$8342.20", "$8300", "$8200", "$8100"],
            correct: 0,
        },
    ],

    // Round 20
    [
        {
            question: "What is the future value of an annuity that pays $1000 annually for 10 years at an interest rate of 7% compounded annually?",
            options: ["$13,017.75", "$13000", "$14000", "$12000"],
            correct: 0,
        },
        {
            question: "If you invest $2000 at 5% interest compounded annually, what will the investment grow to in 9 years?",
            options: ["$3147.29", "$3100", "$3200", "$3000"],
            correct: 0,
        },
        {
            question: "What is the present value of a $3000 payment to be received in 5 years at a 6% discount rate?",
            options: ["$2243.98", "$2300", "$2200", "$2100"],
            correct: 0,
        },
        {
            question: "If you invest $1500 today at 6% interest compounded semi-annually, how much will you have in 4 years?",
            options: ["$1907.58", "$1800", "$2000", "$1850"],
            correct: 0,
        },
        {
            question: "What is the present value of an annuity that pays $1200 per year for 6 years at an interest rate of 7%?",
            options: ["$6289.62", "$6200", "$6000", "$6400"],
            correct: 0,
        },
    ],
  // Round 21
    [
        {
            question: "What is the future value of $2000 invested for 10 years at an interest rate of 5% compounded annually?",
            options: ["$3257.79", "$3300", "$3400", "$3200"],
            correct: 0,
        },
        {
            question: "How much should you invest today to receive $8000 in 5 years at an interest rate of 6% compounded annually?",
            options: ["$5963.21", "$5900", "$6000", "$6100"],
            correct: 0,
        },
        {
            question: "If you invest $5000 today at 3% annual interest compounded quarterly, how much will the investment be worth after 4 years?",
            options: ["$5627.49", "$5600", "$5500", "$5400"],
            correct: 0,
        },
        {
            question: "You plan to receive $4000 every year for the next 10 years. What is the present value of these payments at an interest rate of 8%?",
            options: ["$28,098.13", "$28000", "$27000", "$26000"],
            correct: 0,
        },
        {
            question: "What is the future value of $3500 invested for 5 years at an interest rate of 9% compounded quarterly?",
            options: ["$5425.69", "$5500", "$5400", "$5300"],
            correct: 0,
        },
    ],

    // Round 22
    [
        {
            question: "What is the present value of $8000 to be received in 5 years at a discount rate of 7%?",
            options: ["$5689.74", "$5700", "$5800", "$5900"],
            correct: 0,
        },
        {
            question: "You invest $2500 today at 6% interest compounded monthly. What will your investment be worth after 3 years?",
            options: ["$2970.80", "$3000", "$2900", "$2800"],
            correct: 0,
        },
        {
            question: "What is the future value of an annuity that pays $2000 per year for 5 years at 4% interest compounded annually?",
            options: ["$10,975.92", "$10000", "$11000", "$12000"],
            correct: 0,
        },
        {
            question: "How much should you invest today to receive $15,000 in 8 years at an interest rate of 6% compounded quarterly?",
            options: ["$9484.74", "$9600", "$9500", "$9400"],
            correct: 0,
        },
        {
            question: "What is the present value of an investment that pays $1000 per year for 7 years at an interest rate of 10%?",
            options: ["$4641.68", "$4500", "$4700", "$4600"],
            correct: 0,
        },
    ],

    // Round 23
    [
        {
            question: "If you invest $3500 today at 8% annual interest compounded semi-annually, how much will you have in 6 years?",
            options: ["$5581.11", "$5600", "$5500", "$5400"],
            correct: 0,
        },
        {
            question: "How long will it take for $5000 to grow to $9000 at an interest rate of 5% compounded quarterly?",
            options: ["13.8 years", "14 years", "12 years", "15 years"],
            correct: 0,
        },
        {
            question: "What is the future value of $6000 invested for 4 years at 10% compounded annually?",
            options: ["$8840", "$8900", "$9000", "$8800"],
            correct: 0,
        },
        {
            question: "How much should you invest today to receive $3000 in 3 years at an interest rate of 5% compounded quarterly?",
            options: ["$2593.35", "$2600", "$2500", "$2700"],
            correct: 0,
        },
        {
            question: "You receive a payment of $5000 every year for 7 years. What is the present value of these payments at an interest rate of 6%?",
            options: ["$30,896.51", "$31000", "$32000", "$30000"],
            correct: 0,
        },
    ],

    // Round 24
    [
        {
            question: "What is the present value of an annuity that pays $2000 per year for 8 years at an interest rate of 5%?",
            options: ["$14,636.94", "$15000", "$14000", "$16000"],
            correct: 0,
        },
        {
            question: "How much would you need to invest today to accumulate $12,000 in 10 years at an interest rate of 7% compounded quarterly?",
            options: ["$6142.52", "$6000", "$6200", "$6300"],
            correct: 0,
        },
        {
            question: "What is the future value of an annuity that pays $2500 annually for 6 years at an interest rate of 5% compounded annually?",
            options: ["$17,282.98", "$17000", "$18000", "$19000"],
            correct: 0,
        },
        {
            question: "How much should you invest today to receive $25,000 in 5 years at an interest rate of 4% compounded annually?",
            options: ["$21,710.42", "$22000", "$21000", "$23000"],
            correct: 0,
        },
        {
            question: "What is the future value of $1500 invested for 6 years at an interest rate of 6% compounded monthly?",
            options: ["$2032.71", "$2000", "$2100", "$2200"],
            correct: 0,
        },
    ],

    // Round 25
    [
        {
            question: "What is the present value of a bond that pays $2000 annually for 8 years at an interest rate of 7%?",
            options: ["$11,694.21", "$12000", "$11500", "$13000"],
            correct: 0,
        },
        {
            question: "If you invest $5000 at an interest rate of 5% compounded annually, what will the investment grow to in 4 years?",
            options: ["$6080.25", "$6000", "$6100", "$6200"],
            correct: 0,
        },
        {
            question: "You invest $8000 today at an interest rate of 4% compounded semi-annually. What will the investment be worth after 6 years?",
            options: ["$10,165.43", "$10000", "$10500", "$9500"],
            correct: 0,
        },
        {
            question: "How much will you need to invest today to receive $10,000 in 7 years at an interest rate of 6% compounded annually?",
            options: ["$7049.33", "$7000", "$7100", "$7200"],
            correct: 0,
        },
        {
            question: "What is the future value of $2000 invested for 3 years at 5% compounded quarterly?",
            options: ["$2315.25", "$2300", "$2400", "$2200"],
            correct: 0,
        },
    ],
   // Round 26
    [
        {
            question: "What is the present value of $10,000 to be received in 5 years at a discount rate of 6%?",
            options: ["$7472.25", "$7500", "$7600", "$7400"],
            correct: 0,
        },
        {
            question: "If you invest $4500 at 8% interest compounded quarterly, how much will you have in 7 years?",
            options: ["$7625.96", "$7500", "$7700", "$7600"],
            correct: 0,
        },
        {
            question: "What is the future value of an annuity that pays $1500 per year for 6 years at an interest rate of 4% compounded annually?",
            options: ["$9309.78", "$9200", "$9400", "$9500"],
            correct: 0,
        },
        {
            question: "How much should you invest today to receive $5000 in 3 years at an interest rate of 9% compounded annually?",
            options: ["$3963.30", "$3900", "$4000", "$4100"],
            correct: 0,
        },
        {
            question: "What is the present value of an annuity that pays $2000 annually for 4 years at an interest rate of 5%?",
            options: ["$7261.22", "$7300", "$7100", "$7000"],
            correct: 0,
        },
    ],

    // Round 27
    [
        {
            question: "How much would you need to invest today to accumulate $20,000 in 10 years at an interest rate of 6% compounded quarterly?",
            options: ["$11,246.91", "$11000", "$12000", "$11500"],
            correct: 0,
        },
        {
            question: "You plan to receive $1000 every year for 5 years. What is the present value of these payments at an interest rate of 8%?",
            options: ["$4101.50", "$4000", "$4200", "$4300"],
            correct: 0,
        },
        {
            question: "What is the future value of an annuity that pays $2000 per year for 3 years at 10% interest compounded annually?",
            options: ["$6666.20", "$6500", "$6800", "$6900"],
            correct: 0,
        },
        {
            question: "What is the present value of $8000 to be received in 6 years at a discount rate of 7%?",
            options: ["$5151.49", "$5100", "$5200", "$5300"],
            correct: 0,
        },
        {
            question: "How much will you need to invest today to receive $8000 in 4 years at an interest rate of 4% compounded quarterly?",
            options: ["$6883.18", "$6800", "$7000", "$6900"],
            correct: 0,
        },
    ],

    // Round 28
    [
        {
            question: "What is the future value of $4000 invested for 8 years at an interest rate of 9% compounded monthly?",
            options: ["$8996.58", "$9000", "$8800", "$9100"],
            correct: 0,
        },
        {
            question: "What is the present value of a bond that pays $500 annually for 5 years at an interest rate of 5%?",
            options: ["$2237.93", "$2200", "$2400", "$2300"],
            correct: 0,
        },
        {
            question: "If you invest $3000 today at an interest rate of 3% compounded quarterly, what will the investment be worth in 6 years?",
            options: ["$3807.23", "$3800", "$3900", "$3700"],
            correct: 0,
        },
        {
            question: "What is the future value of $1200 invested for 10 years at an interest rate of 5% compounded annually?",
            options: ["$1957.53", "$1900", "$2000", "$2100"],
            correct: 0,
        },
        {
            question: "What is the present value of an annuity that pays $4000 per year for 7 years at an interest rate of 6%?",
            options: ["$24,413.88", "$24000", "$25000", "$26000"],
            correct: 0,
        },
    ],

    // Round 29
    [
        {
            question: "How much would you need to invest today to receive $1500 annually for 10 years at an interest rate of 5% compounded annually?",
            options: ["$12,544.19", "$13000", "$12000", "$12500"],
            correct: 0,
        },
        {
            question: "If you invest $2500 today at 6% annual interest compounded monthly, how much will you have in 6 years?",
            options: ["$4436.47", "$4400", "$4500", "$4600"],
            correct: 0,
        },
        {
            question: "What is the future value of $5000 invested for 9 years at an interest rate of 8% compounded quarterly?",
            options: ["$9995.12", "$10000", "$9500", "$9800"],
            correct: 0,
        },
        {
            question: "How much should you invest today to receive $10,000 in 4 years at an interest rate of 9% compounded annually?",
            options: ["$7372.96", "$7300", "$7500", "$7400"],
            correct: 0,
        },
        {
            question: "What is the present value of $7000 to be received in 7 years at a discount rate of 5%?",
            options: ["$4931.97", "$4900", "$4800", "$5000"],
            correct: 0,
        },
    ],

    // Round 30
    [
        {
            question: "What is the future value of an annuity that pays $1000 per year for 5 years at an interest rate of 5% compounded annually?",
            options: ["$5525.63", "$5400", "$5500", "$5600"],
            correct: 0,
        },
        {
            question: "How much would you need to invest today to receive $15,000 in 10 years at an interest rate of 7% compounded quarterly?",
            options: ["$7746.23", "$7600", "$7800", "$7900"],
            correct: 0,
        },
        {
            question: "What is the future value of $6000 invested for 7 years at an interest rate of 4% compounded monthly?",
            options: ["$7973.34", "$8000", "$7900", "$8100"],
            correct: 0,
        },
        {
            question: "How much will you need to invest today to receive $5000 in 6 years at an interest rate of 3% compounded quarterly?",
            options: ["$4239.73", "$4200", "$4300", "$4400"],
            correct: 0,
        },
        {
            question: "What is the present value of an annuity that pays $2500 annually for 8 years at an interest rate of 9%?",
            options: ["$15,898.91", "$16000", "$17000", "$18000"],
            correct: 0,
        },
    ],
  // Round 31
    [
        {
            question: "If you invest $15,000 for 5 years at an interest rate of 7%, compounded quarterly, what will the future value be?",
            options: ["$21,053.43", "$20,000", "$19,500", "$22,000"],
            correct: 0,
        },
        {
            question: "How much should you invest today to receive $18,000 in 3 years at an interest rate of 10% compounded annually?",
            options: ["$13,452.83", "$13,000", "$14,000", "$12,000"],
            correct: 0,
        },
        {
            question: "You want to receive $25,000 in 8 years. How much should you invest today at an interest rate of 5% compounded annually?",
            options: ["$18,528.53", "$19,000", "$20,000", "$21,000"],
            correct: 0,
        },
        {
            question: "What is the future value of an annuity paying $2,500 annually for 6 years at an interest rate of 4% compounded annually?",
            options: ["$16,291.53", "$15,000", "$17,000", "$18,000"],
            correct: 0,
        },
        {
            question: "What is the present value of an annuity that pays $3,000 annually for 10 years at an interest rate of 6% compounded annually?",
            options: ["$24,091.17", "$23,000", "$25,000", "$26,000"],
            correct: 0,
        },
    ],

    // Round 32
    [
        {
            question: "If you invest $10,000 for 7 years at an interest rate of 9% compounded quarterly, what will the future value be?",
            options: ["$19,154.46", "$19,000", "$18,500", "$20,000"],
            correct: 0,
        },
        {
            question: "How much would you need to invest today to receive $10,000 in 5 years at an interest rate of 5% compounded monthly?",
            options: ["$7,835.26", "$7,500", "$8,000", "$8,200"],
            correct: 0,
        },
        {
            question: "What is the present value of $12,000 to be received in 10 years at a discount rate of 8% compounded annually?",
            options: ["$5,563.44", "$5,500", "$5,700", "$5,800"],
            correct: 0,
        },
        {
            question: "How much will you need to invest today to receive $15,000 in 4 years at an interest rate of 6% compounded annually?",
            options: ["$11,877.18", "$12,000", "$13,000", "$14,000"],
            correct: 0,
        },
        {
            question: "What is the future value of an annuity that pays $1,500 annually for 5 years at an interest rate of 7% compounded annually?",
            options: ["$8,466.74", "$8,500", "$9,000", "$9,500"],
            correct: 0,
        },
    ],

    // Round 33
    [
        {
            question: "If you invest $4,000 for 3 years at 5% annual interest compounded quarterly, what will the future value be?",
            options: ["$4,641.38", "$4,600", "$4,700", "$4,800"],
            correct: 0,
        },
        {
            question: "What is the present value of an annuity that pays $1,200 annually for 6 years at an interest rate of 5%?",
            options: ["$6,357.61", "$6,000", "$6,200", "$6,400"],
            correct: 0,
        },
        {
            question: "How much would you need to invest today to receive $8,000 in 2 years at an interest rate of 8% compounded semi-annually?",
            options: ["$6,917.35", "$6,800", "$7,000", "$7,200"],
            correct: 0,
        },
        {
            question: "What is the future value of $3,500 invested for 4 years at an interest rate of 6% compounded quarterly?",
            options: ["$4,493.13", "$4,400", "$4,500", "$4,600"],
            correct: 0,
        },
        {
            question: "How much should you invest today to receive $40,000 in 15 years at an interest rate of 4% compounded annually?",
            options: ["$20,715.87", "$20,000", "$22,000", "$21,000"],
            correct: 0,
        },
    ],

    // Round 34
    [
        {
            question: "What is the present value of $15,000 to be received in 8 years at a discount rate of 5% compounded annually?",
            options: ["$10,040.75", "$10,200", "$10,000", "$9,800"],
            correct: 0,
        },
        {
            question: "If you invest $6,000 today at an interest rate of 5% compounded quarterly, how much will you have in 6 years?",
            options: ["$8,107.21", "$8,100", "$8,200", "$8,300"],
            correct: 0,
        },
        {
            question: "What is the future value of an annuity that pays $1,000 annually for 12 years at an interest rate of 6% compounded annually?",
            options: ["$15,255.52", "$15,000", "$16,000", "$14,000"],
            correct: 0,
        },
        {
            question: "You plan to invest $7,000 for 10 years at an interest rate of 8% compounded monthly. How much will you have at the end of the period?",
            options: ["$15,300.12", "$15,000", "$14,500", "$16,000"],
            correct: 0,
        },
        {
            question: "What is the present value of an annuity that pays $1,800 annually for 8 years at an interest rate of 4% compounded annually?",
            options: ["$12,317.64", "$12,000", "$13,000", "$11,500"],
            correct: 0,
        },
    ],

    // Round 35
    [
        {
            question: "What is the future value of $5,000 invested for 5 years at an interest rate of 6% compounded monthly?",
            options: ["$6,743.39", "$6,500", "$6,600", "$6,700"],
            correct: 0,
        },
        {
            question: "How much would you need to invest today to receive $12,000 in 3 years at an interest rate of 9% compounded annually?",
            options: ["$9,147.85", "$9,000", "$9,500", "$9,800"],
            correct: 0,
        },
        {
            question: "What is the present value of $25,000 to be received in 9 years at a discount rate of 7%?",
            options: ["$14,288.65", "$14,000", "$15,000", "$13,000"],
            correct: 0,
        },
        {
            question: "If you invest $3,500 for 6 years at 8% annual interest compounded quarterly, what will the future value be?",
            options: ["$5,453.25", "$5,500", "$5,600", "$5,700"],
            correct: 0,
        },
        {
            question: "What is the future value of an annuity that pays $2,000 annually for 4 years at an interest rate of 6% compounded annually?",
            options: ["$8,640.00", "$8,500", "$9,000", "$9,500"],
            correct: 0,
        },
    ],
   // Round 36
    [
        {
            question: "What is the present value of an annuity paying $2,500 annually for 7 years at an interest rate of 4% compounded annually?",
            options: ["$14,359.53", "$14,000", "$13,000", "$15,000"],
            correct: 0,
        },
        {
            question: "You invest $8,000 for 4 years at an interest rate of 5%, compounded quarterly. What will the future value be?",
            options: ["$9,755.88", "$9,500", "$9,000", "$10,000"],
            correct: 0,
        },
        {
            question: "What is the future value of $4,000 invested for 5 years at an interest rate of 6% compounded monthly?",
            options: ["$5,376.59", "$5,500", "$5,200", "$5,000"],
            correct: 0,
        },
        {
            question: "How much should you invest today to receive $10,000 in 6 years at an interest rate of 8% compounded semi-annually?",
            options: ["$6,734.06", "$6,500", "$7,000", "$7,500"],
            correct: 0,
        },
        {
            question: "What is the present value of $12,000 to be received in 7 years at a discount rate of 6% compounded annually?",
            options: ["$8,441.17", "$8,500", "$9,000", "$8,000"],
            correct: 0,
        },
    ],

    // Round 37
    [
        {
            question: "You invest $5,000 for 3 years at an interest rate of 7%, compounded annually. What will the future value be?",
            options: ["$6,125.00", "$6,000", "$6,500", "$6,200"],
            correct: 0,
        },
        {
            question: "How much should you invest today to receive $50,000 in 15 years at an interest rate of 9% compounded monthly?",
            options: ["$18,518.47", "$19,000", "$20,000", "$21,000"],
            correct: 0,
        },
        {
            question: "What is the future value of an annuity paying $1,500 annually for 6 years at an interest rate of 5% compounded annually?",
            options: ["$10,447.68", "$10,500", "$11,000", "$12,000"],
            correct: 0,
        },
        {
            question: "What is the present value of $18,000 to be received in 10 years at a discount rate of 6% compounded annually?",
            options: ["$10,078.13", "$10,500", "$11,000", "$9,500"],
            correct: 0,
        },
        {
            question: "How much would you need to invest today to receive $8,000 in 4 years at an interest rate of 6% compounded quarterly?",
            options: ["$6,337.60", "$6,200", "$6,500", "$6,800"],
            correct: 0,
        },
    ],

    // Round 38
    [
        {
            question: "What is the future value of $7,000 invested for 9 years at an interest rate of 3% compounded monthly?",
            options: ["$9,106.54", "$9,200", "$9,000", "$9,500"],
            correct: 0,
        },
        {
            question: "How much would you need to invest today to receive $20,000 in 7 years at an interest rate of 4% compounded annually?",
            options: ["$15,837.49", "$16,000", "$17,000", "$18,000"],
            correct: 0,
        },
        {
            question: "What is the present value of $8,000 to be received in 5 years at a discount rate of 10% compounded semi-annually?",
            options: ["$4,963.07", "$5,000", "$5,500", "$6,000"],
            correct: 0,
        },
        {
            question: "What is the future value of $3,000 invested for 8 years at an interest rate of 8% compounded annually?",
            options: ["$6,985.75", "$7,000", "$6,500", "$6,200"],
            correct: 0,
        },
        {
            question: "You invest $15,000 today at an interest rate of 6% compounded annually for 12 years. What will the future value be?",
            options: ["$30,244.06", "$30,000", "$31,000", "$32,000"],
            correct: 0,
        },
    ],

    // Round 39
    [
        {
            question: "If you invest $12,000 for 10 years at 5% annual interest compounded quarterly, what will the future value be?",
            options: ["$19,530.22", "$19,000", "$20,000", "$18,500"],
            correct: 0,
        },
        {
            question: "What is the present value of an annuity paying $4,000 annually for 8 years at an interest rate of 7% compounded annually?",
            options: ["$25,141.70", "$25,000", "$26,000", "$27,000"],
            correct: 0,
        },
        {
            question: "You want to receive $10,000 in 4 years. How much should you invest today at an interest rate of 8% compounded annually?",
            options: ["$7,337.22", "$7,500", "$8,000", "$8,200"],
            correct: 0,
        },
        {
            question: "What is the future value of $9,000 invested for 3 years at an interest rate of 10%, compounded semi-annually?",
            options: ["$12,102.50", "$12,000", "$11,500", "$13,000"],
            correct: 0,
        },
        {
            question: "What is the present value of $10,000 to be received in 6 years at a discount rate of 6% compounded quarterly?",
            options: ["$7,022.48", "$7,000", "$8,000", "$7,500"],
            correct: 0,
        },
    ],

    // Round 40
    [
        {
            question: "What is the present value of $30,000 to be received in 5 years at a discount rate of 8% compounded annually?",
            options: ["$20,568.48", "$20,000", "$21,000", "$22,000"],
            correct: 0,
        },
        {
            question: "You invest $2,500 today at an interest rate of 5% compounded monthly for 4 years. What will the future value be?",
            options: ["$3,037.55", "$3,000", "$3,100", "$3,200"],
            correct: 0,
        },
        {
            question: "How much should you invest today to receive $50,000 in 10 years at an interest rate of 12% compounded quarterly?",
            options: ["$17,907.23", "$18,000", "$17,500", "$16,000"],
            correct: 0,
        },
        {
            question: "What is the future value of an annuity that pays $3,000 annually for 4 years at an interest rate of 6% compounded annually?",
            options: ["$12,758.64", "$12,500", "$13,000", "$13,500"],
            correct: 0,
        },
        {
            question: "What is the present value of an annuity paying $1,000 annually for 5 years at an interest rate of 5% compounded annually?",
            options: ["$4,329.48", "$4,500", "$4,000", "$4,200"],
            correct: 0,
        },
    ]
];
  



// Game State
let currentRound = 0;
let currentQuestion = 0;
let timer;
let timeLeft;
let isQuizActive = false;
let timeScore = 0;
let roundScore = 0;

// DOM Elements
const timerBar = document.querySelector('.timer-bar');
const timerDisplay = document.querySelector('.timer-display');
const questionElement = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');
const startButton = document.querySelector('.start-quiz');
const nextRoundButton = document.querySelector('.next-round');
const progressDots = document.querySelectorAll('.progress-dot');
const roundDisplay = document.querySelector('#currentRound');
const timeScoreDisplay = document.querySelector('#timeScore');
const roundScoreDisplay = document.querySelector('#roundScore');
const feedbackElement = document.querySelector('.feedback');
const finalScoresElement = document.querySelector('.final-scores');

// Timer Function
function startTimer() {
    timeLeft = 60;
    timerBar.style.width = '100%';
    
    timer = setInterval(() => {
        timeLeft -= 0.1;
        timerDisplay.textContent = Math.ceil(timeLeft);
        timerBar.style.width = `${(timeLeft / 60) * 100}%`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            showFeedback(false);
            setTimeout(() => nextQuestion(), 1000);
        }
    }, 100);
}

// Display Question Function
function displayQuestion() {
    const currentQuestionData = questions[currentRound][currentQuestion];
    questionElement.textContent = currentQuestionData.question;
    feedbackElement.classList.remove('show', 'correct', 'wrong');
    finalScoresElement.innerHTML = '';
    
    optionsContainer.innerHTML = '';
    currentQuestionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option fade-in';
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    updateProgressDots();
}

// Check Answer Function
function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const currentQuestionData = questions[currentRound][currentQuestion];
    const isCorrect = selectedIndex === currentQuestionData.correct;
    
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.style.pointerEvents = 'none');
    
    options[selectedIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    options[currentQuestionData.correct].classList.add('correct');

    if (isCorrect) {
        roundScore++;
        timeScore += Math.ceil(timeLeft);
        roundScoreDisplay.textContent = roundScore;
        timeScoreDisplay.textContent = timeScore;
    }

    showFeedback(isCorrect);
    progressDots[currentQuestion].classList.add(isCorrect ? 'correct' : 'wrong');

    setTimeout(() => nextQuestion(), 1000);
}

// Show Feedback Function
function showFeedback(isCorrect) {
    feedbackElement.textContent = isCorrect ? 'Correct! 🎉' : 'Wrong! 😞';
    feedbackElement.className = `feedback show ${isCorrect ? 'correct' : 'wrong'}`;
}

// Next Question Function
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions[currentRound].length) {
        endRound();
    } else {
        displayQuestion();
        startTimer();
    }
}

// Update Progress Dots Function
function updateProgressDots() {
    progressDots.forEach((dot, index) => {
        if (index === currentQuestion) {
            dot.classList.add('active');
        } else if (index < currentQuestion) {
            dot.classList.remove('active');
        }
    });
}

// End Round Function
function endRound() {
    isQuizActive = false;
    timerDisplay.textContent = '60';
    timerBar.style.width = '100%';
    questionElement.textContent = 'Round Complete! 🎯';
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    
    finalScoresElement.innerHTML = `
        <div>Round Score: ${roundScore}/5 correct answers</div>
        <div>Time Bonus Points: ${timeScore}</div>
        <div>Great job! 🎉</div>
    `;
    
    nextRoundButton.style.display = 'block';
    startButton.style.display = 'none';
}

// Start New Round Function
function startNewRound() {
    currentQuestion = 0;
    currentRound++;
    roundScore = 0;
    roundDisplay.textContent = currentRound + 1;
    roundScoreDisplay.textContent = '0';
    nextRoundButton.style.display = 'none';
    startButton.style.display = 'block';
    questionElement.textContent = `Ready for Round ${currentRound + 1}? 🤩`;
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    finalScoresElement.innerHTML = '';
    
    // Reset progress dots
    progressDots.forEach(dot => {
        dot.className = 'progress-dot';
    });
    progressDots[0].classList.add('active');
}

// Event Listeners
startButton.addEventListener('click', () => {
    if (!isQuizActive) {
        isQuizActive = true;
        startButton.style.display = 'none';
        displayQuestion();
        startTimer();
    }
});

nextRoundButton.addEventListener('click', () => {
    if (currentRound < questions.length - 1) {
        startNewRound();
    } else {
        // End of all rounds
        questionElement.textContent = 'Quiz Complete! 🎉';
        finalScoresElement.innerHTML = `
            <div>Final Score: ${timeScore} points</div>
            <div>Thank you for playing! 🌟</div>
        `;
        nextRoundButton.style.display = 'none';
    }
});

// Initialize first round
questionElement.textContent = 'Ready for Round 1? 🏁';
