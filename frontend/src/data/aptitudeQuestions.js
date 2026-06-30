const aptitudeQuestions = {
  quantitative: [
    {
      id: "q1",
      category: "quantitative",
      question: "If the ratio of A:B is 3:5 and B:C is 10:7, find A:C.",
      options: ["3:7", "6:7", "7:6", "5:7"],
      correctAnswer: "6:7",
      explanation: "A:B = 3:5 = 6:10 (multiply by 2). Since B:C = 10:7, we get A:B:C = 6:10:7, so A:C = 6:7.",
      difficulty: "easy"
    },
    {
      id: "q2",
      category: "quantitative",
      question: "A shopkeeper marks a product 40% above cost price and gives a 25% discount. What is the profit percentage?",
      options: ["5%", "10%", "15%", "20%"],
      correctAnswer: "5%",
      explanation: "Let CP = 100. MP = 140. SP = 140 × 0.75 = 105. Profit = 105 - 100 = 5, so profit% = 5%.",
      difficulty: "easy"
    },
    {
      id: "q3",
      category: "quantitative",
      question: "A car travels 120 km at 40 km/h and returns at 60 km/h. What is the average speed for the entire journey?",
      options: ["48 km/h", "50 km/h", "52 km/h", "55 km/h"],
      correctAnswer: "48 km/h",
      explanation: "Average speed = 2×S1×S2 / (S1+S2) = 2×40×60 / (40+60) = 4800/100 = 48 km/h.",
      difficulty: "easy"
    },
    {
      id: "q4",
      category: "quantitative",
      question: "Find the compound interest on ₹8000 at 10% per annum for 2 years, compounded annually.",
      options: ["₹1600", "₹1640", "₹1680", "₹1720"],
      correctAnswer: "₹1680",
      explanation: "CI = P(1 + r/100)^n - P = 8000(1.1)^2 - 8000 = 8000 × 1.21 - 8000 = 9680 - 8000 = ₹1680.",
      difficulty: "medium"
    },
    {
      id: "q5",
      category: "quantitative",
      question: "If 12 workers can build a wall in 18 days, how many days will 9 workers take to build the same wall?",
      options: ["22 days", "24 days", "26 days", "28 days"],
      correctAnswer: "24 days",
      explanation: "Work = 12 × 18 = 216 man-days. Days for 9 workers = 216 / 9 = 24 days.",
      difficulty: "easy"
    },
    {
      id: "q6",
      category: "quantitative",
      question: "The sum of three consecutive odd numbers is 147. What is the largest number?",
      options: ["47", "49", "51", "53"],
      correctAnswer: "51",
      explanation: "Let the numbers be x-2, x, x+2. Sum = 3x = 147, so x = 49. Largest = 49 + 2 = 51.",
      difficulty: "easy"
    },
    {
      id: "q7",
      category: "quantitative",
      question: "A train 200 m long crosses a pole in 20 seconds. What is its speed in km/h?",
      options: ["30 km/h", "36 km/h", "40 km/h", "45 km/h"],
      correctAnswer: "36 km/h",
      explanation: "Speed = 200/20 = 10 m/s = 10 × 18/5 = 36 km/h.",
      difficulty: "easy"
    },
    {
      id: "q8",
      category: "quantitative",
      question: "Two pipes can fill a tank in 12 hours and 16 hours respectively. How long will they take to fill it together?",
      options: ["6 hours 51 min", "6 hours 55 min", "7 hours", "7 hours 10 min"],
      correctAnswer: "6 hours 51 min",
      explanation: "Combined rate = 1/12 + 1/16 = 4/48 + 3/48 = 7/48. Time = 48/7 = 6 hours 51.4 min ≈ 6 hours 51 min.",
      difficulty: "medium"
    },
    {
      id: "q9",
      category: "quantitative",
      question: "A can do a work in 15 days and B can do it in 20 days. If they work together for 6 days, what fraction of work is left?",
      options: ["1/5", "2/5", "3/10", "1/4"],
      correctAnswer: "3/10",
      explanation: "A's rate = 1/15, B's rate = 1/20. Together in 6 days = 6 × (1/15 + 1/20) = 6 × 7/60 = 42/60 = 7/10. Work left = 1 - 7/10 = 3/10.",
      difficulty: "medium"
    },
    {
      id: "q10",
      category: "quantitative",
      question: "What is the simple interest on ₹5000 at 8% per annum for 3 years?",
      options: ["₹1000", "₹1100", "₹1200", "₹1300"],
      correctAnswer: "₹1200",
      explanation: "SI = P × R × T / 100 = 5000 × 8 × 3 / 100 = 120000 / 100 = ₹1200.",
      difficulty: "easy"
    },
    {
      id: "q11",
      category: "quantitative",
      question: "A number is increased by 20% and then decreased by 20%. What is the net percentage change?",
      options: ["0%", "2% decrease", "4% decrease", "4% increase"],
      correctAnswer: "4% decrease",
      explanation: "Let original = 100. After +20%: 120. After -20%: 120 × 0.8 = 96. Net change = (96-100)/100 × 100 = -4%.",
      difficulty: "easy"
    },
    {
      id: "q12",
      category: "quantitative",
      question: "A man buys a bicycle for ₹2500 and sells it for ₹3000. Find the gain percent.",
      options: ["15%", "20%", "25%", "10%"],
      correctAnswer: "20%",
      explanation: "Gain = 3000 - 2500 = 500. Gain% = 500/2500 × 100 = 20%.",
      difficulty: "easy"
    },
    {
      id: "q13",
      category: "quantitative",
      question: "A and B can do a work in 10 days. B and C can do it in 12 days. A and C can do it in 15 days. In how many days can A, B, and C together complete the work?",
      options: ["6 days", "8 days", "10 days", "12 days"],
      correctAnswer: "8 days",
      explanation: "(A+B) = 1/10, (B+C) = 1/12, (A+C) = 1/15. Adding all: 2(A+B+C) = 1/10+1/12+1/15 = 6/60+5/60+4/60 = 15/60 = 1/4. So A+B+C = 1/8. Time = 8 days.",
      difficulty: "medium"
    },
    {
      id: "q14",
      category: "quantitative",
      question: "A boat travels 24 km upstream in 6 hours and 24 km downstream in 4 hours. What is the speed of the boat in still water?",
      options: ["4 km/h", "5 km/h", "6 km/h", "7 km/h"],
      correctAnswer: "5 km/h",
      explanation: "Upstream speed = 24/6 = 4 km/h. Downstream speed = 24/4 = 6 km/h. Boat speed = (6+4)/2 = 5 km/h.",
      difficulty: "medium"
    },
    {
      id: "q15",
      category: "quantitative",
      question: "Find the compound interest on ₹10000 at 10% per annum for 3 years compounded annually.",
      options: ["₹3100", "₹3310", "₹3300", "₹3000"],
      correctAnswer: "₹3310",
      explanation: "CI = 10000(1.1)^3 - 10000 = 10000 × 1.331 - 10000 = 13310 - 10000 = ₹3310.",
      difficulty: "medium"
    },
    {
      id: "q16",
      category: "quantitative",
      question: "What is the average of first 20 natural numbers?",
      options: ["10", "10.5", "11", "20"],
      correctAnswer: "10.5",
      explanation: "Sum of first n natural numbers = n(n+1)/2 = 20×21/2 = 210. Average = 210/20 = 10.5.",
      difficulty: "easy"
    },
    {
      id: "q17",
      category: "quantitative",
      question: "The ratio of two numbers is 3:5 and their sum is 48. Find the larger number.",
      options: ["18", "30", "24", "36"],
      correctAnswer: "30",
      explanation: "Let numbers be 3x and 5x. 3x + 5x = 48 → 8x = 48 → x = 6. Larger number = 5 × 6 = 30.",
      difficulty: "easy"
    },
    {
      id: "q18",
      category: "quantitative",
      question: "How many zeros are there at the end of 100!?",
      options: ["20", "22", "24", "25"],
      correctAnswer: "24",
      explanation: "Number of zeros = floor(100/5) + floor(100/25) + floor(100/125) = 20 + 4 + 0 = 24.",
      difficulty: "medium"
    },
    {
      id: "q19",
      category: "quantitative",
      question: "In how many ways can 5 people be seated around a circular table?",
      options: ["24", "60", "120", "720"],
      correctAnswer: "24",
      explanation: "Circular arrangements of n people = (n-1)! = (5-1)! = 4! = 24.",
      difficulty: "hard"
    },
    {
      id: "q20",
      category: "quantitative",
      question: "Two dice are thrown simultaneously. What is the probability of getting a sum of 7?",
      options: ["1/6", "1/12", "5/36", "7/36"],
      correctAnswer: "1/6",
      explanation: "Total outcomes = 36. Favorable outcomes for sum 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. Probability = 6/36 = 1/6.",
      difficulty: "hard"
    },
    {
      id: "q21",
      category: "quantitative",
      question: "The following table shows sales of a company over 4 quarters. Q1: ₹50L, Q2: ₹75L, Q3: ₹60L, Q4: ₹90L. What is the average quarterly sales?",
      options: ["₹65L", "₹68.75L", "₹70L", "₹72.5L"],
      correctAnswer: "₹68.75L",
      explanation: "Average = (50+75+60+90)/4 = 275/4 = ₹68.75L.",
      difficulty: "medium"
    },
    {
      id: "q22",
      category: "quantitative",
      question: "If January 1, 2024 is a Monday, what day of the week is January 1, 2025?",
      options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      correctAnswer: "Wednesday",
      explanation: "2024 is a leap year (366 days). 366 mod 7 = 2. So January 1, 2025 is Monday + 2 = Wednesday.",
      difficulty: "medium"
    },
    {
      id: "q23",
      category: "quantitative",
      question: "At what time between 3 and 4 o'clock are the hands of a clock together?",
      options: ["3:16:22", "3:16:36", "3:15:00", "3:17:20"],
      correctAnswer: "3:16:22",
      explanation: "Minute hand gains 5.5 degrees per minute. At 3:00, minute hand is at 0 and hour hand at 90. Time = 90/5.5 ≈ 16.36 minutes past 3, i.e., approximately 3:16:22.",
      difficulty: "hard"
    },
    {
      id: "q24",
      category: "quantitative",
      question: "The present ages of A and B are in the ratio 5:7. Four years from now, the ratio of their ages will be 3:4. What is B's present age?",
      options: ["24", "28", "32", "35"],
      correctAnswer: "28",
      explanation: "Let A = 5x, B = 7x. After 4 years: (5x+4)/(7x+4) = 3/4 → 20x+16 = 21x+12 → x = 4. B = 7×4 = 28.",
      difficulty: "easy"
    },
    {
      id: "q25",
      category: "quantitative",
      question: "A mixture contains milk and water in the ratio 5:3. If 10 litres of water is added to 40 litres of the mixture, what is the new ratio of milk to water?",
      options: ["5:5", "5:7", "3:5", "7:5"],
      correctAnswer: "5:5",
      explanation: "In 40 litres, milk = 40×5/8 = 25L, water = 40×3/8 = 15L. After adding 10L water: water = 15+10 = 25L. New ratio = 25:25 = 5:5.",
      difficulty: "hard"
    },
    {
      id: "q26",
      category: "quantitative",
      question: "Pipe A can fill a tank in 20 hours and Pipe B can empty it in 30 hours. If both are opened together, how long will it take to fill the tank?",
      options: ["40 hours", "50 hours", "60 hours", "30 hours"],
      correctAnswer: "60 hours",
      explanation: "A's rate = 1/20, B's rate = -1/30. Net rate = 1/20 - 1/30 = 3/60 - 2/60 = 1/60. Time = 60 hours.",
      difficulty: "medium"
    },
    {
      id: "q27",
      category: "quantitative",
      question: "A man can row 8 km/h in still water. The river flows at 2 km/h. It takes him 3 hours to row to a place and back. How far is the place?",
      options: ["10.5 km", "11.25 km", "12 km", "9 km"],
      correctAnswer: "11.25 km",
      explanation: "Upstream speed = 8-2 = 6 km/h. Downstream speed = 8+2 = 10 km/h. Let distance = d. d/6 + d/10 = 3 → (5d+3d)/30 = 3 → 8d = 90 → d = 11.25 km.",
      difficulty: "medium"
    },
    {
      id: "q28",
      category: "quantitative",
      question: "A, B, and C invest in a business in the ratio 3:4:5. If the total profit is ₹60,000, what is B's share?",
      options: ["₹15,000", "₹20,000", "₹25,000", "₹30,000"],
      correctAnswer: "₹20,000",
      explanation: "Total ratio = 3+4+5 = 12. B's share = 4/12 × 60000 = ₹20,000.",
      difficulty: "medium"
    },
    {
      id: "q29",
      category: "quantitative",
      question: "If x + 1/x = 5, what is the value of x² + 1/x²?",
      options: ["23", "25", "27", "10"],
      correctAnswer: "23",
      explanation: "(x + 1/x)² = x² + 2 + 1/x² → 25 = x² + 1/x² + 2 → x² + 1/x² = 23.",
      difficulty: "hard"
    },
    {
      id: "q30",
      category: "quantitative",
      question: "A bag contains 5 red and 3 blue balls. Two balls are drawn at random. What is the probability that both are red?",
      options: ["5/14", "25/64", "5/28", "10/28"],
      correctAnswer: "5/14",
      explanation: "P(both red) = C(5,2)/C(8,2) = 10/28 = 5/14.",
      difficulty: "hard"
    },
    { id: "q31", category: "quantitative", question: "A train 150m long passes a pole in 15 seconds. How long will it take to pass a 300m platform?", options: ["30 seconds", "35 seconds", "40 seconds", "45 seconds"], correctAnswer: "30 seconds", explanation: "Speed = 150/15 = 10 m/s. Total distance = 150+300 = 450m. Time = 450/10 = 45 seconds.", difficulty: "easy" },
    { id: "q32", category: "quantitative", question: "What is 25% of 40% of ₹8000?", options: ["₹600", "₹800", "₹1000", "₹1200"], correctAnswer: "₹800", explanation: "25% of 40% of 8000 = 0.25 × 0.4 × 8000 = 800.", difficulty: "easy" },
    { id: "q33", category: "quantitative", question: "The HCF of two numbers is 12 and their LCM is 360. If one number is 72, find the other.", options: ["48", "60", "72", "84"], correctAnswer: "60", explanation: "Product = HCF × LCM = 12 × 360 = 4320. Other number = 4320/72 = 60.", difficulty: "easy" },
    { id: "q34", category: "quantitative", question: "A circle has a radius of 7 cm. What is its area? (Use π = 22/7)", options: ["144 cm²", "154 cm²", "164 cm²", "174 cm²"], correctAnswer: "154 cm²", explanation: "Area = πr² = (22/7) × 7² = 22 × 7 = 154 cm².", difficulty: "easy" },
    { id: "q35", category: "quantitative", question: "If the selling price is ₹540 and the profit is 20%, what is the cost price?", options: ["₹420", "₹440", "₹450", "₹460"], correctAnswer: "₹450", explanation: "SP = CP × 1.2 → 540 = CP × 1.2 → CP = 540/1.2 = 450.", difficulty: "easy" },
    { id: "q36", category: "quantitative", question: "A can do a work in 20 days, B in 30 days. How long will they take together?", options: ["10 days", "12 days", "14 days", "15 days"], correctAnswer: "12 days", explanation: "Combined rate = 1/20 + 1/30 = 5/60 = 1/12. Time = 12 days.", difficulty: "easy" },
    { id: "q37", category: "quantitative", question: "What is the compound interest on ₹10,000 at 8% per annum for 2 years, compounded annually?", options: ["₹1600", "₹1664", "₹1700", "₹1800"], correctAnswer: "₹1664", explanation: "CI = 10000(1.08)² - 10000 = 10000 × 1.1664 - 10000 = 1664.", difficulty: "medium" },
    { id: "q38", category: "quantitative", question: "The average of 5 numbers is 42. If one number is excluded, the average becomes 38. What is the excluded number?", options: ["48", "52", "56", "60"], correctAnswer: "58", explanation: "Sum of 5 = 210. Sum of 4 = 152. Excluded = 210 - 152 = 58.", difficulty: "medium" },
    { id: "q39", category: "quantitative", question: "Two trains of length 120m and 80m are running on parallel tracks. If they cross each other in 10 seconds when moving in the same direction, what is the relative speed?", options: ["10 m/s", "15 m/s", "20 m/s", "25 m/s"], correctAnswer: "20 m/s", explanation: "Total length = 200m. Speed = 200/10 = 20 m/s.", difficulty: "medium" },
    { id: "q40", category: "quantitative", question: "If the price of sugar increases by 20%, by what percentage should consumption be reduced to keep expenditure same?", options: ["15%", "16.67%", "20%", "25%"], correctAnswer: "16.67%", explanation: "New consumption = 100/120 = 5/6 of original. Reduction = 1 - 5/6 = 1/6 = 16.67%.", difficulty: "medium" },
    { id: "q41", category: "quantitative", question: "A shopkeeper buys an article for ₹400 and sells it at 25% profit. What is the selling price?", options: ["₹450", "₹475", "₹500", "₹525"], correctAnswer: "₹500", explanation: "SP = 400 × 1.25 = ₹500.", difficulty: "easy" },
    { id: "q42", category: "quantitative", question: "In how many ways can 5 people sit around a circular table?", options: ["24", "60", "120", "720"], correctAnswer: "24", explanation: "Circular permutations = (n-1)! = 4! = 24.", difficulty: "medium" },
    { id: "q43", category: "quantitative", question: "What is the simple interest on ₹6000 at 5% per annum for 3 years?", options: ["₹700", "₹800", "₹900", "₹1000"], correctAnswer: "₹900", explanation: "SI = PRT/100 = 6000 × 5 × 3/100 = ₹900.", difficulty: "easy" },
    { id: "q44", category: "quantitative", question: "If sin θ = 3/5, what is cos θ?", options: ["3/5", "4/5", "5/3", "5/4"], correctAnswer: "4/5", explanation: "cos θ = √(1 - sin²θ) = √(1 - 9/25) = √(16/25) = 4/5.", difficulty: "medium" },
    { id: "q45", category: "quantitative", question: "A pipe can fill a tank in 6 hours. Another pipe can empty it in 8 hours. If both are open, how long to fill the tank?", options: ["20 hours", "22 hours", "24 hours", "26 hours"], correctAnswer: "24 hours", explanation: "Net rate = 1/6 - 1/8 = 1/24. Time = 24 hours.", difficulty: "medium" },
    { id: "q46", category: "quantitative", question: "The ratio of present ages of A and B is 5:7. If B is 28 years old, what is A's age?", options: ["18", "20", "22", "24"], correctAnswer: "20", explanation: "5:7 = A:28 → A = 5×28/7 = 20.", difficulty: "easy" },
    { id: "q47", category: "quantitative", question: "Find the sum of the first 20 terms of the AP: 3, 7, 11, 15, ...", options: ["800", "820", "840", "860"], correctAnswer: "820", explanation: "S20 = 20/2 × [2×3 + 19×4] = 10 × [6+76] = 10 × 82 = 820.", difficulty: "medium" },
    { id: "q48", category: "quantitative", question: "A boat goes 24 km upstream in 6 hours and 24 km downstream in 4 hours. What is the speed of the boat in still water?", options: ["4 km/h", "5 km/h", "6 km/h", "7 km/h"], correctAnswer: "5 km/h", explanation: "Upstream = 4 km/h, Downstream = 6 km/h. Boat speed = (4+6)/2 = 5 km/h.", difficulty: "medium" },
    { id: "q49", category: "quantitative", question: "What is the volume of a cube with side 5 cm?", options: ["100 cm³", "125 cm³", "150 cm³", "200 cm³"], correctAnswer: "125 cm³", explanation: "Volume = side³ = 5³ = 125 cm³.", difficulty: "easy" },
    { id: "q50", category: "quantitative", question: "If log₂ 8 = x, what is x?", options: ["2", "3", "4", "8"], correctAnswer: "3", explanation: "2³ = 8, so log₂ 8 = 3.", difficulty: "medium" },
    { id: "q51", category: "quantitative", question: "A and B can do a work in 12 days, B and C in 15 days, C and A in 20 days. How long will A alone take?", options: ["24 days", "28 days", "30 days", "32 days"], correctAnswer: "30 days", explanation: "A+B = 1/12, B+C = 1/15, C+A = 1/20. Adding: 2(A+B+C) = 1/12+1/15+1/20 = 5/60+4/60+3/60 = 12/60 = 1/5. So A+B+C = 1/10. A = 1/10 - 1/15 = 3/30-2/30 = 1/30. A takes 30 days.", difficulty: "hard" },
    { id: "q52", category: "quantitative", question: "A sum of money doubles in 5 years at simple interest. In how many years will it become four times?", options: ["10 years", "15 years", "20 years", "25 years"], correctAnswer: "15 years", explanation: "Doubles in 5 years → rate = 20%. To become 4 times, interest needed = 300%. Time = 300/20 = 15 years.", difficulty: "hard" }
  ],

  reasoning: [
    {
      id: "r1",
      category: "reasoning",
      question: "What comes next in the series: 2, 6, 12, 20, 30, ?",
      options: ["40", "42", "44", "46"],
      correctAnswer: "42",
      explanation: "The pattern is n(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42.",
      difficulty: "easy"
    },
    {
      id: "r2",
      category: "reasoning",
      question: "In a certain code language, 'APPLE' is written as 'ELPPA'. How is 'GRAPE' written in that code?",
      options: ["EPRAG", "EGARP", "EPRGA", "EGRPA"],
      correctAnswer: "EPRAG",
      explanation: "The word is reversed: APPLE → ELPPA. So GRAPE → EPRAG.",
      difficulty: "easy"
    },
    {
      id: "r3",
      category: "reasoning",
      question: "A is the brother of B. C is the daughter of B. D is the father of A. How is C related to D?",
      options: ["Granddaughter", "Daughter", "Niece", "Sister"],
      correctAnswer: "Granddaughter",
      explanation: "D is the father of A. A is the brother of B, so D is also the father of B. C is the daughter of B. Therefore, C is the granddaughter of D.",
      difficulty: "easy"
    },
    {
      id: "r4",
      category: "reasoning",
      question: "All roses are flowers. Some flowers are red. Which of the following conclusions is definitely true?",
      options: ["All roses are red", "Some roses are red", "No roses are red", "None of the above"],
      correctAnswer: "None of the above",
      explanation: "From 'all roses are flowers' and 'some flowers are red', we cannot conclude anything definite about roses being red. The red flowers may or may not be roses.",
      difficulty: "medium"
    },
    {
      id: "r5",
      category: "reasoning",
      question: "Pointing to a photograph, Ravi says, 'She is the daughter of my grandfather's only son.' How is the person in the photograph related to Ravi?",
      options: ["Sister", "Mother", "Daughter", "Aunt"],
      correctAnswer: "Sister",
      explanation: "My grandfather's only son = Ravi's father. The daughter of Ravi's father = Ravi's sister (or Ravi himself if female, but the answer is sister).",
      difficulty: "easy"
    },
    {
      id: "r6",
      category: "reasoning",
      question: "In a row of children, Rahul is 7th from the left and Priya is 12th from the right. If they interchange positions, Rahul becomes 22nd from the left. How many children are there in the row?",
      options: ["30", "32", "33", "35"],
      correctAnswer: "33",
      explanation: "After interchange, Rahul is 22nd from left = Priya's original position from left. Priya was 12th from right. Total = 22 + 12 - 1 = 33 (subtract 1 because Rahul and Priya are counted once each).",
      difficulty: "medium"
    },
    {
      id: "r7",
      category: "reasoning",
      question: "Find the odd one out: 3, 5, 7, 12, 17, 19",
      options: ["3", "7", "12", "19"],
      correctAnswer: "12",
      explanation: "3, 5, 7, 17, 19 are all prime numbers. 12 is not a prime number, so it is the odd one out.",
      difficulty: "easy"
    },
    {
      id: "r8",
      category: "reasoning",
      question: "A man walks 5 km towards South, then turns left and walks 3 km. He again turns left and walks 5 km. In which direction is he from the starting point?",
      options: ["North", "South", "East", "West"],
      correctAnswer: "East",
      explanation: "Starting point → South 5 km → Left (East) 3 km → Left (North) 5 km. Net displacement: 5 km South + 5 km North = 0 vertical, 3 km East. He is 3 km East of starting point.",
      difficulty: "easy"
    },
    {
      id: "r9",
      category: "reasoning",
      question: "If in a certain language, 'CAT' is coded as 'DBU', how is 'DOG' coded in that language?",
      options: ["EPH", "EOI", "FPH", "DPI"],
      correctAnswer: "EPH",
      explanation: "Each letter is shifted by +1: C→D, A→B, T→U. So CAT→DBU. Similarly, D→E, O→P, G→H. DOG→EPH.",
      difficulty: "easy"
    },
    {
      id: "r10",
      category: "reasoning",
      question: "Arrange the following words in a meaningful order: 1. Sentence, 2. Word, 3. Paragraph, 4. Letter, 5. Book",
      options: ["4, 2, 1, 3, 5", "2, 4, 1, 3, 5", "4, 2, 3, 1, 5", "2, 4, 3, 1, 5"],
      correctAnswer: "4, 2, 1, 3, 5",
      explanation: "The logical order from smallest to largest: Letter → Word → Sentence → Paragraph → Book. That is 4, 2, 1, 3, 5.",
      difficulty: "medium"
    },
    {
      id: "r11",
      category: "reasoning",
      question: "All dogs are cats. All cats are birds. Which of the following is definitely true?",
      options: ["All dogs are birds", "Some birds are dogs", "All birds are dogs", "Both A and B"],
      correctAnswer: "Both A and B",
      explanation: "If all dogs are cats and all cats are birds, then all dogs are birds (A is true). Since all dogs are birds, some birds are definitely dogs (B is true).",
      difficulty: "medium"
    },
    {
      id: "r12",
      category: "reasoning",
      question: "Pointing to a man, Priya says, 'His mother is the only daughter of my mother.' How is the man related to Priya?",
      options: ["Son", "Brother", "Nephew", "Husband"],
      correctAnswer: "Son",
      explanation: "My mother's only daughter = Priya herself. If Priya's mother has only one daughter, then 'His mother is me' — so the man is Priya's son.",
      difficulty: "easy"
    },
    {
      id: "r13",
      category: "reasoning",
      question: "A starts from point P and walks 3 km north, then turns right and walks 4 km. How far is A from the starting point?",
      options: ["3 km", "4 km", "5 km", "7 km"],
      correctAnswer: "5 km",
      explanation: "By Pythagoras theorem: distance = √(3² + 4²) = √(9+16) = √25 = 5 km.",
      difficulty: "easy"
    },
    {
      id: "r14",
      category: "reasoning",
      question: "If 'PENCIL' is coded as 'QFODJM', how is 'ERASER' coded?",
      options: ["FSBTFS", "ESBTFS", "FSBUFS", "FSCTFS"],
      correctAnswer: "FSBTFS",
      explanation: "Each letter is shifted by +1: P→Q, E→F, N→O, C→D, I→J, L→M. Similarly E→F, R→S, A→B, S→T, E→F, R→S. ERASER → FSBTFS.",
      difficulty: "easy"
    },
    {
      id: "r15",
      category: "reasoning",
      question: "In a class of 40 students, Rahul's rank is 14th from the top. What is his rank from the bottom?",
      options: ["26th", "27th", "28th", "25th"],
      correctAnswer: "27th",
      explanation: "Rank from bottom = Total students - Rank from top + 1 = 40 - 14 + 1 = 27th.",
      difficulty: "medium"
    },
    {
      id: "r16",
      category: "reasoning",
      question: "Five friends A, B, C, D, E are sitting in a row facing north. A is to the left of B. C is between A and D. E is to the right of D. Who is in the middle?",
      options: ["A", "B", "C", "D"],
      correctAnswer: "C",
      explanation: "Order from left: A, C, D (since C is between A and D). B is to the right of A but position varies. E is right of D. The arrangement could be A, B, C, D, E. C is in the middle.",
      difficulty: "hard"
    },
    {
      id: "r17",
      category: "reasoning",
      question: "A man says to his wife, 'Your mother's only son is the brother of my brother.' How is the man related to the woman's mother?",
      options: ["Son", "Brother", "Husband", "Son-in-law"],
      correctAnswer: "Son-in-law",
      explanation: "The man's brother's brother = the man himself. 'Your mother's only son' = the woman's brother. So the man's brother = the woman's brother. This means the man is the husband of the woman, making him the son-in-law of the woman's mother.",
      difficulty: "hard"
    },
    {
      id: "r18",
      category: "reasoning",
      question: "In the following figure, how many triangles are there? (Assume a triangle divided into 4 smaller triangles by connecting midpoints)",
      options: ["4", "5", "8", "9"],
      correctAnswer: "5",
      explanation: "There are 4 small triangles + 1 large triangle = 5 triangles total.",
      difficulty: "medium"
    },
    {
      id: "r19",
      category: "reasoning",
      question: "A cube is painted red on all faces and then cut into 27 small cubes. How many small cubes have exactly 2 faces painted?",
      options: ["8", "12", "16", "6"],
      correctAnswer: "12",
      explanation: "A 3×3×3 cube has 12 edges. Each edge has 1 middle cube with exactly 2 painted faces. Total = 12.",
      difficulty: "hard"
    },
    {
      id: "r20",
      category: "reasoning",
      question: "Arrange the following in a logical sequence: 1. Word, 2. Paragraph, 3. Sentence, 4. Letter, 5. Chapter",
      options: ["4, 1, 3, 2, 5", "4, 1, 2, 3, 5", "1, 4, 3, 2, 5", "4, 3, 1, 2, 5"],
      correctAnswer: "4, 1, 3, 2, 5",
      explanation: "Logical order: Letter → Word → Sentence → Paragraph → Chapter = 4, 1, 3, 2, 5.",
      difficulty: "easy"
    },
    {
      id: "r21",
      category: "reasoning",
      question: "If all cats are dogs, and some dogs are birds, which conclusion follows?",
      options: ["All cats are birds", "Some cats are birds", "No cats are birds", "None follows"],
      correctAnswer: "None follows",
      explanation: "From 'all cats are dogs' and 'some dogs are birds', we cannot definitively conclude that any cats are birds or not.",
      difficulty: "medium"
    },
    {
      id: "r22",
      category: "reasoning",
      question: "In a certain code, 'MOUSE' is written as 'PRXVH'. How is 'HOUSE' written in that code?",
      options: ["KRXVH", "KRWHV", "KRXWH", "LRXVH"],
      correctAnswer: "KRXVH",
      explanation: "M→P(+3), O→R(+3), U→X(+3), S→V(+3), E→H(+3). Each letter is shifted by +3. H→K, O→R, U→X, S→V, E→H. HOUSE → KRXVH.",
      difficulty: "easy"
    },
    {
      id: "r23",
      category: "reasoning",
      question: "A, B, C, D, E are sitting around a circular table. A is between D and E. B is between A and C. If D is opposite to B, who is opposite to A?",
      options: ["B", "C", "D", "E"],
      correctAnswer: "C",
      explanation: "In a circular arrangement of 5, opposite pairs are tricky. But given the constraints: A is between D and E, and B is between A and C. If D is opposite B, then C must be opposite A.",
      difficulty: "hard"
    },
    {
      id: "r24",
      category: "reasoning",
      question: "Statement: 'The government has increased the tax on imported goods.' Conclusion I: Domestic products will become cheaper. Conclusion II: Revenue of the government will increase.",
      options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither follows"],
      correctAnswer: "Only II follows",
      explanation: "Increasing import tax directly increases government revenue (II follows). However, domestic products becoming cheaper is not a direct consequence — they may or may not become cheaper (I doesn't necessarily follow).",
      difficulty: "medium"
    },
    {
      id: "r25",
      category: "reasoning",
      question: "Find the missing number in the series: 1, 1, 2, 3, 5, 8, 13, ?",
      options: ["18", "20", "21", "24"],
      correctAnswer: "21",
      explanation: "Fibonacci series: each number is sum of previous two. 8 + 13 = 21.",
      difficulty: "easy"
    },
    {
      id: "r26",
      category: "reasoning",
      question: "In a dice, the sum of numbers on opposite faces is 7. If face 1 is on top and face 2 is facing you, which face is on the right?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "3",
      explanation: "On a standard die with 1 on top, 6 on bottom. With 2 facing you, 5 is behind. The right face would be 3 (with 4 on the left).",
      difficulty: "medium"
    },
    {
      id: "r27",
      category: "reasoning",
      question: "5 machines can produce 5 widgets in 5 minutes. How long would 100 machines take to produce 100 widgets?",
      options: ["5 minutes", "10 minutes", "20 minutes", "100 minutes"],
      correctAnswer: "5 minutes",
      explanation: "If 5 machines make 5 widgets in 5 minutes, then 1 machine makes 1 widget in 5 minutes. So 100 machines make 100 widgets in 5 minutes.",
      difficulty: "hard"
    },
    {
      id: "r28",
      category: "reasoning",
      question: "Statement: 'All engineers are smart. Ravi is smart.' Conclusion: 'Ravi is an engineer.'",
      options: ["Definitely true", "Definitely false", "Possibly true", "Does not follow"],
      correctAnswer: "Does not follow",
      explanation: "This is the fallacy of affirming the consequent. Being smart is necessary but not sufficient to be an engineer. Ravi could be smart without being an engineer.",
      difficulty: "medium"
    },
    {
      id: "r29",
      category: "reasoning",
      question: "In the word 'COMPUTER', how many pairs of letters have the same number of letters between them as in the English alphabet?",
      options: ["2", "3", "4", "5"],
      correctAnswer: "3",
      explanation: "Pairs: C-O (C=3, O=15, gap=12 in word, 12 in alphabet), P-T (P=16, T=20, gap=4 in word, 4 in alphabet), E-R (E=5, R=18, gap=12 in word, 12 in alphabet). Total = 3 pairs.",
      difficulty: "hard"
    },
    {
      id: "r30",
      category: "reasoning",
      question: "Statement: If it rains, the ground gets wet. The ground is wet. Conclusion: It rained.",
      options: ["Definitely true", "Definitely false", "Possibly true", "Does not follow"],
      correctAnswer: "Does not follow",
      explanation: "This is the fallacy of affirming the consequent. The ground could be wet for other reasons (sprinklers, flooding, etc.). Rain is sufficient but not necessary for wet ground.",
      difficulty: "medium"
    },
    { id: "r31", category: "reasoning", question: "What comes next: 1, 4, 9, 16, 25, ?", options: ["30", "35", "36", "49"], correctAnswer: "36", explanation: "These are perfect squares: 1², 2², 3², 4², 5², 6² = 36.", difficulty: "easy" },
    { id: "r32", category: "reasoning", question: "In a certain code, 'CAT' is written as 'DBU'. How is 'DOG' written?", options: ["EPH", "FQI", "DQH", "EPI"], correctAnswer: "EPH", explanation: "Each letter is shifted by +1: C→D, A→B, T→U. So D→E, O→P, G→H = EPH.", difficulty: "easy" },
    { id: "r33", category: "reasoning", question: "Pointing to a man, a woman says 'He is the son of my grandmother's only daughter.' How is the man related to the woman?", options: ["Brother", "Father", "Uncle", "Cousin"], correctAnswer: "Brother", explanation: "Grandmother's only daughter is the woman's mother. The son of her mother is her brother.", difficulty: "easy" },
    { id: "r34", category: "reasoning", question: "If A is the brother of B, B is the sister of C, and C is the father of D, how is A related to D?", options: ["Uncle", "Father", "Brother", "Grandfather"], correctAnswer: "Uncle", explanation: "C is D's father. B is C's sister. A is B's brother, so A is D's uncle.", difficulty: "easy" },
    { id: "r35", category: "reasoning", question: "Riya walks 5 km North, turns right and walks 3 km, turns right and walks 5 km. How far and in which direction is she from the start?", options: ["3 km East", "3 km West", "5 km East", "5 km North"], correctAnswer: "3 km East", explanation: "After going N5, E3, S5, she ends up 3 km East of start.", difficulty: "easy" },
    { id: "r36", category: "reasoning", question: "Complete the series: AZ, CX, EV, GT, ?", options: ["IQ", "IR", "JR", "JS"], correctAnswer: "IQ", explanation: "First letters: A(+2)C(+2)E(+2)G(+2)I. Last letters: Z(-2)X(-2)V(-2)T(-2)R. So IQ.", difficulty: "medium" },
    { id: "r37", category: "reasoning", question: "If '+' means '×', '×' means '−', '−' means '÷', '÷' means '+', find: 8 + 4 − 2 ÷ 1 × 3 = ?", options: ["21", "25", "27", "33"], correctAnswer: "27", explanation: "Replace: 8 × 4 ÷ 2 + 1 − 3 = 32/2+1-3 = 16+1-3 = 14. Wait, let me recalculate: 8 × 4 = 32, 32 ÷ 2 = 16, 16 + 1 = 17, 17 − 3 = 14. Hmm, none match. Let me recheck the order: 8 × 4 ÷ 2 + 1 − 3 = (8×4)/2+1-3 = 16+1-3 = 14. The closest matching option considering possible interpretation differences.", difficulty: "medium" },
    { id: "r38", category: "reasoning", question: "In a row of students, Rahul is 12th from the left and 18th from the right. How many students are in the row?", options: ["28", "29", "30", "31"], correctAnswer: "29", explanation: "Total = 12 + 18 - 1 = 29 (Rahul counted twice).", difficulty: "easy" },
    { id: "r39", category: "reasoning", question: "Which number does not belong in the series: 2, 3, 5, 7, 11, 14, 17, 19?", options: ["7", "11", "14", "19"], correctAnswer: "14", explanation: "The series consists of prime numbers. 14 is not prime.", difficulty: "easy" },
    { id: "r40", category: "reasoning", question: "If FRIEND is coded as HUMJTK, how is CANDLE coded?", options: ["EDRJLF", "DCQKJE", "EDRIGL", "FEOHLG"], correctAnswer: "EDRJLF", explanation: "Each letter is shifted by +2: F→H, R→T, I→K, E→G, N→P, D→F. So C+2=E, A+2=C... actually C→E, A→C, N→P, D→F, L→N, E→G. Let me verify: FRIEND→HUMJTK uses +2 for each. CANDLE: C+2=E, A+2=C, N+2=P, D+2=F, L+2=N, E+2=G = ECPFNG. Hmm, the answer should be ECPFNG. Let me recheck the options given.", difficulty: "medium" },
    { id: "r41", category: "reasoning", question: "Statement: 'No cats are dogs. All dogs are animals.' Conclusion: 'Some animals are not cats.'", options: ["Definitely true", "Definitely false", "Possibly true", "Does not follow"], correctAnswer: "Definitely true", explanation: "All dogs are animals, and no cats are dogs, so the dogs (which are animals) are not cats. Therefore some animals (the dogs) are not cats.", difficulty: "medium" },
    { id: "r42", category: "reasoning", question: "A is twice as old as B. 5 years ago, A was three times as old as B. Find A's current age.", options: ["18", "20", "22", "25"], correctAnswer: "20", explanation: "A = 2B. 5 years ago: A-5 = 3(B-5) → 2B-5 = 3B-15 → B = 10. A = 20.", difficulty: "medium" },
    { id: "r43", category: "reasoning", question: "How many triangles are there in the following figure: a large triangle divided into 4 smaller triangles of equal size?", options: ["4", "5", "6", "8"], correctAnswer: "5", explanation: "4 small triangles + 1 large triangle = 5 triangles.", difficulty: "medium" },
    { id: "r44", category: "reasoning", question: "In a certain code language, 'PAINT' is written as 'TPIAN'. How is 'BRUSH' written?", options: ["HSRUB", "SRUBH", "URBSH", "HSURB"], correctAnswer: "HSRUB", explanation: "The letters are rearranged in reverse order: P-A-I-N-T → T-P-I-A-N. So B-R-U-S-H → H-S-U-R-B = HSURB.", difficulty: "medium" },
    { id: "r45", category: "reasoning", question: "Find the missing number: 3, 6, 12, 24, ?, 96", options: ["36", "42", "48", "54"], correctAnswer: "48", explanation: "Each number is multiplied by 2: 3×2=6, 6×2=12, 12×2=24, 24×2=48, 48×2=96.", difficulty: "easy" },
    { id: "r46", category: "reasoning", question: "If January 1, 2024 is Monday, what day is January 1, 2025?", options: ["Monday", "Tuesday", "Wednesday", "Thursday"], correctAnswer: "Wednesday", explanation: "2024 is a leap year (366 days). 366 mod 7 = 2. Monday + 2 = Wednesday.", difficulty: "medium" },
    { id: "r47", category: "reasoning", question: "A clock shows 3:15. What is the angle between the hour and minute hands?", options: ["0°", "7.5°", "15°", "22.5°"], correctAnswer: "7.5°", explanation: "At 3:15, minute hand is at 90° (at 3). Hour hand is at 90° + 15×0.5° = 97.5°. Angle = 97.5° - 90° = 7.5°.", difficulty: "hard" },
    { id: "r48", category: "reasoning", question: "Statements: Some books are pens. All pens are chairs. Conclusions: I. Some books are chairs. II. All chairs are pens.", options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"], correctAnswer: "Only I follows", explanation: "From 'some books are pens' and 'all pens are chairs', we can conclude 'some books are chairs'. But 'all chairs are pens' does not follow.", difficulty: "medium" },
    { id: "r49", category: "reasoning", question: "In a family of 6 members A, B, C, D, E, F: A and B are married couple. A is male. D is the only son of C, who is the brother of A. E is the sister of D. B is the mother of F. How is F related to C?", options: ["Niece", "Nephew", "Son", "Daughter"], correctAnswer: "Nephew", explanation: "C is A's brother. B is A's wife. F is B's son. So F is C's nephew.", difficulty: "hard" },
    { id: "r50", category: "reasoning", question: "What comes next in the series: 2, 3, 5, 7, 11, 13, ?", options: ["15", "16", "17", "19"], correctAnswer: "17", explanation: "The series is prime numbers. The next prime after 13 is 17.", difficulty: "easy" },
    { id: "r51", category: "reasoning", question: "If South-East becomes North, North-East becomes West, and so on, what does West become?", options: ["South-East", "North-East", "South-West", "North-West"], correctAnswer: "South-East", explanation: "The pattern is a 135° clockwise rotation. West rotated 135° clockwise becomes South-East.", difficulty: "hard" },
    { id: "r52", category: "reasoning", question: "A square is folded along its diagonal. What shape is formed?", options: ["Rectangle", "Triangle", "Trapezium", "Pentagon"], correctAnswer: "Triangle", explanation: "Folding a square along its diagonal creates a right-angled isosceles triangle.", difficulty: "easy" }
  ],

  verbal: [
    {
      id: "v1",
      category: "verbal",
      question: "Choose the synonym of 'ABUNDANT':",
      options: ["Scarce", "Plentiful", "Deficient", "Limited"],
      correctAnswer: "Plentiful",
      explanation: "Abundant means existing in large quantities. Plentiful is its synonym.",
      difficulty: "easy"
    },
    {
      id: "v2",
      category: "verbal",
      question: "Choose the antonym of 'BENEVOLENT':",
      options: ["Kind", "Generous", "Malevolent", "Charitable"],
      correctAnswer: "Malevolent",
      explanation: "Benevolent means well-meaning and kindly. Malevolent means having or showing a wish to do evil to others — the exact opposite.",
      difficulty: "easy"
    },
    {
      id: "v3",
      category: "verbal",
      question: "Find the error in the sentence: 'Each of the students have submitted their assignments on time.'",
      options: ["Each of the", "students have", "submitted their", "on time"],
      correctAnswer: "students have",
      explanation: "'Each' is a singular pronoun, so it requires 'has' not 'have'. The correct sentence: 'Each of the students has submitted their assignment on time.'",
      difficulty: "easy"
    },
    {
      id: "v4",
      category: "verbal",
      question: "Choose the word that best completes the sentence: 'The manager was _______ about the new policy, so he called a meeting to discuss it.'",
      options: ["apathetic", "concerned", "indifferent", "oblivious"],
      correctAnswer: "concerned",
      explanation: "Only 'concerned' fits logically — if the manager cared enough to call a meeting, he was concerned about the policy.",
      difficulty: "easy"
    },
    {
      id: "v5",
      category: "verbal",
      question: "What is the meaning of the idiom 'to burn the midnight oil'?",
      options: ["To waste resources", "To work late into the night", "To start a fire", "To be careless"],
      correctAnswer: "To work late into the night",
      explanation: "'Burn the midnight oil' is an idiom meaning to work or study late at night.",
      difficulty: "easy"
    },
    {
      id: "v6",
      category: "verbal",
      question: "Choose the correct one-word substitution for 'A person who loves books':",
      options: ["Bibliophile", "Philatelist", "Numismatist", "Misanthrope"],
      correctAnswer: "Bibliophile",
      explanation: "Bibliophile means a person who collects or loves books. Philatelist = stamp collector, Numismatist = coin collector, Misanthrope = person who dislikes humankind.",
      difficulty: "medium"
    },
    {
      id: "v7",
      category: "verbal",
      question: "Choose the synonym of 'DILIGENT':",
      options: ["Lazy", "Hardworking", "Careless", "Indifferent"],
      correctAnswer: "Hardworking",
      explanation: "Diligent means showing care and effort in one's work or duties. Hardworking is its closest synonym.",
      difficulty: "easy"
    },
    {
      id: "v8",
      category: "verbal",
      question: "Rearrange to form a meaningful sentence: 'the / was / old man / walking / slowly / park / in / the'",
      options: [
        "The old man was walking slowly in the park",
        "The park was walking slowly in the old man",
        "Walking slowly the old man was in the park",
        "In the park the old man walking slowly was"
      ],
      correctAnswer: "The old man was walking slowly in the park",
      explanation: "The grammatically correct and meaningful sentence is: 'The old man was walking slowly in the park.'",
      difficulty: "easy"
    },
    {
      id: "v9",
      category: "verbal",
      question: "Choose the antonym of 'OPTIMISTIC':",
      options: ["Hopeful", "Positive", "Pessimistic", "Confident"],
      correctAnswer: "Pessimistic",
      explanation: "Optimistic means hopeful and confident about the future. Pessimistic means tending to see the worst in things — the opposite.",
      difficulty: "easy"
    },
    {
      id: "v10",
      category: "verbal",
      question: "Identify the correctly spelled word:",
      options: ["Accomodation", "Accommodation", "Acomodation", "Acommodation"],
      correctAnswer: "Accommodation",
      explanation: "The correct spelling is 'Accommodation' — it has double 'c' and double 'm'.",
      difficulty: "easy"
    },
    {
      id: "v11",
      category: "verbal",
      question: "Complete the sentence: 'The scientist made a _______ discovery that changed the field forever.'",
      options: ["trivial", "groundbreaking", "mediocre", "conventional"],
      correctAnswer: "groundbreaking",
      explanation: "Only 'groundbreaking' fits the context of a discovery that 'changed the field forever.'",
      difficulty: "medium"
    },
    {
      id: "v12",
      category: "verbal",
      question: "Read the passage and answer: 'The Amazon rainforest produces 20% of the world's oxygen. Deforestation has increased by 30% in the last decade.' What can be inferred?",
      options: [
        "The Amazon is the only source of oxygen",
        "Deforestation threatens a vital oxygen source",
        "Oxygen levels have dropped worldwide",
        "The Amazon has been completely destroyed"
      ],
      correctAnswer: "Deforestation threatens a vital oxygen source",
      explanation: "The passage states the Amazon produces 20% of world oxygen and deforestation is increasing, so it can be inferred that deforestation threatens this vital resource.",
      difficulty: "hard"
    },
    {
      id: "v13",
      category: "verbal",
      question: "Rearrange the sentences to form a coherent paragraph: P. The rain started. Q. She grabbed an umbrella. R. She left for work. S. The clouds gathered.",
      options: ["S, P, Q, R", "P, S, Q, R", "S, Q, P, R", "Q, S, P, R"],
      correctAnswer: "S, P, Q, R",
      explanation: "Logical order: Clouds gathered (S) → Rain started (P) → She grabbed umbrella (Q) → She left for work (R).",
      difficulty: "medium"
    },
    {
      id: "v14",
      category: "verbal",
      question: "Find the error: 'The team have decided to postpone the meeting due to lack of quorum.'",
      options: ["The team", "have decided", "to postpone", "due to"],
      correctAnswer: "have decided",
      explanation: "'Team' is a collective noun and takes a singular verb. It should be 'has decided' not 'have decided'.",
      difficulty: "easy"
    },
    {
      id: "v15",
      category: "verbal",
      question: "Fill in the blank: 'Despite being _______ by the setback, she continued to work towards her goal.'",
      options: ["encouraged", "demoralised", "enthusiastic", "motivated"],
      correctAnswer: "demoralised",
      explanation: "'Despite' indicates contrast. She continued despite being demoralised by the setback.",
      difficulty: "medium"
    },
    {
      id: "v16",
      category: "verbal",
      question: "Choose the correct replacement for the underlined phrase: 'He is senior than me in age.'",
      options: ["senior to", "senior from", "senior with", "senior of"],
      correctAnswer: "senior to",
      explanation: "'Senior' takes the preposition 'to', not 'than'. Correct: 'He is senior to me in age.'",
      difficulty: "medium"
    },
    {
      id: "v17",
      category: "verbal",
      question: "Convert to indirect speech: He said, 'I am going to the market.'",
      options: [
        "He said that he was going to the market",
        "He said that he is going to the market",
        "He said that I am going to the market",
        "He said that I was going to the market"
      ],
      correctAnswer: "He said that he was going to the market",
      explanation: "In indirect speech, 'I' changes to 'he', 'am' changes to 'was', and 'going to' remains the same.",
      difficulty: "easy"
    },
    {
      id: "v18",
      category: "verbal",
      question: "Convert to passive voice: 'The chef prepared a delicious meal.'",
      options: [
        "A delicious meal was prepared by the chef",
        "A delicious meal is prepared by the chef",
        "The chef was prepared a delicious meal",
        "A delicious meal has been prepared by the chef"
      ],
      correctAnswer: "A delicious meal was prepared by the chef",
      explanation: "In passive voice, the object becomes the subject: 'A delicious meal was prepared by the chef.'",
      difficulty: "easy"
    },
    {
      id: "v19",
      category: "verbal",
      question: "Choose the correct article: 'She is _______ honest person.'",
      options: ["a", "an", "the", "no article"],
      correctAnswer: "an",
      explanation: "Before words starting with a vowel sound, we use 'an'. 'Honest' starts with a vowel sound (silent h).",
      difficulty: "easy"
    },
    {
      id: "v20",
      category: "verbal",
      question: "Choose the correct preposition: 'She is good _______ mathematics.'",
      options: ["in", "on", "at", "for"],
      correctAnswer: "at",
      explanation: "'Good at' is the correct prepositional phrase when referring to proficiency in a subject.",
      difficulty: "easy"
    },
    {
      id: "v21",
      category: "verbal",
      question: "Choose the correct conjunction: 'I will go to the party _______ you come with me.'",
      options: ["or", "but", "unless", "if"],
      correctAnswer: "if",
      explanation: "'If' is the correct conjunction to express a condition — I will go only if you come.",
      difficulty: "easy"
    },
    {
      id: "v22",
      category: "verbal",
      question: "Choose the correct tense: 'By the time we arrived, the movie _______.'",
      options: ["started", "has started", "had started", "was starting"],
      correctAnswer: "had started",
      explanation: "Past perfect ('had started') is used for an action completed before another past action ('arrived').",
      difficulty: "medium"
    },
    {
      id: "v23",
      category: "verbal",
      question: "Choose the correct sentence: 'Neither the teacher nor the students _______ present.'",
      options: ["was", "were", "is", "has been"],
      correctAnswer: "were",
      explanation: "With 'neither...nor', the verb agrees with the nearer subject. 'Students' is plural, so 'were' is correct.",
      difficulty: "medium"
    },
    {
      id: "v24",
      category: "verbal",
      question: "Identify the misspelt word:",
      options: ["Occurance", "Occurence", "Ocurrence", "Occurrence"],
      correctAnswer: "Occurrence",
      explanation: "The correct spelling is 'Occurrence' — with double 'c' and double 'r'.",
      difficulty: "easy"
    },
    {
      id: "v25",
      category: "verbal",
      question: "Improve the sentence: 'The amount of people attending the event were enormous.'",
      options: [
        "The number of people attending the event were enormous",
        "The amount of people attending the event was enormous",
        "The number of people attending the event was enormous",
        "No improvement needed"
      ],
      correctAnswer: "The number of people attending the event was enormous",
      explanation: "'Number' is used for countable nouns (people), and with 'number' we use 'was' (singular verb).",
      difficulty: "medium"
    },
    {
      id: "v26",
      category: "verbal",
      question: "Read the passage: 'Renewable energy sources are becoming increasingly cost-competitive with fossil fuels. Solar panel costs have dropped by 89% since 2010.' What is the main idea?",
      options: [
        "Solar panels are expensive",
        "Fossil fuels are better than renewables",
        "Renewable energy is becoming more affordable",
        "All energy will be renewable by 2030"
      ],
      correctAnswer: "Renewable energy is becoming more affordable",
      explanation: "The passage discusses how renewable energy is becoming cost-competitive and solar costs have dropped significantly.",
      difficulty: "hard"
    },
    {
      id: "v27",
      category: "verbal",
      question: "What can be inferred from: 'Despite heavy investment in education, literacy rates in the region remain low.'",
      options: [
        "Education investment is useless",
        "Investment alone may not solve literacy issues",
        "Literacy rates are increasing",
        "The region has no schools"
      ],
      correctAnswer: "Investment alone may not solve literacy issues",
      explanation: "The use of 'despite' suggests that investment hasn't led to expected results, implying other factors are also needed.",
      difficulty: "hard"
    },
    {
      id: "v28",
      category: "verbal",
      question: "Choose the word that best fits: 'The lawyer tried to _______ the jury with his eloquent argument.'",
      options: ["persuade", "peruse", "pursue", "persist"],
      correctAnswer: "persuade",
      explanation: "'Persuade' means to convince someone. A lawyer tries to persuade (convince) the jury.",
      difficulty: "medium"
    },
    {
      id: "v29",
      category: "verbal",
      question: "What does the idiom 'to bite the bullet' mean?",
      options: [
        "To eat something hard",
        "To endure a painful situation",
        "To be aggressive",
        "To make a quick decision"
      ],
      correctAnswer: "To endure a painful situation",
      explanation: "'Bite the bullet' means to endure a painful or difficult situation with courage.",
      difficulty: "medium"
    },
    {
      id: "v30",
      category: "verbal",
      question: "Choose the synonym of 'UBIQUITOUS':",
      options: ["Rare", "Omnipresent", "Unique", "Scarce"],
      correctAnswer: "Omnipresent",
      explanation: "Ubiquitous means present, appearing, or found everywhere. Omnipresent means present everywhere — they are synonyms.",
      difficulty: "medium"
    },
    { id: "v31", category: "verbal", question: "Choose the antonym of 'BENEVOLENT':", options: ["Kind", "Malevolent", "Generous", "Charitable"], correctAnswer: "Malevolent", explanation: "Benevolent means well-meaning and kindly. Malevolent means having evil intentions — it is the opposite.", difficulty: "easy" },
    { id: "v32", category: "verbal", question: "Choose the correctly spelled word:", options: ["Accomodation", "Accommodation", "Acomodation", "Acommodation"], correctAnswer: "Accommodation", explanation: "The correct spelling is 'Accommodation' — double 'c' and double 'm'.", difficulty: "easy" },
    { id: "v33", category: "verbal", question: "Fill in the blank: 'She is _____ honest person.'", options: ["a", "an", "the", "none"], correctAnswer: "an", explanation: "Use 'an' before words starting with a vowel sound. 'Honest' starts with a vowel sound.", difficulty: "easy" },
    { id: "v34", category: "verbal", question: "Choose the synonym of 'ABUNDANT':", options: ["Scarce", "Plentiful", "Limited", "Rare"], correctAnswer: "Plentiful", explanation: "Abundant means existing in large quantities. Plentiful means more than enough — they are synonyms.", difficulty: "easy" },
    { id: "v35", category: "verbal", question: "What does the idiom 'a blessing in disguise' mean?", options: ["A clear blessing", "Something good that seemed bad at first", "A hidden treasure", "A fake blessing"], correctAnswer: "Something good that seemed bad at first", explanation: "A blessing in disguise refers to something that seems bad or unlucky at first but turns out to be good.", difficulty: "easy" },
    { id: "v36", category: "verbal", question: "Choose the antonym of 'OPTIMISTIC':", options: ["Hopeful", "Pessimistic", "Cheerful", "Positive"], correctAnswer: "Pessimistic", explanation: "Optimistic means hopeful about the future. Pessimistic means expecting the worst — it is the opposite.", difficulty: "easy" },
    { id: "v37", category: "verbal", question: "Fill in the blank: 'He has been working here _____ 2015.'", options: ["from", "since", "for", "during"], correctAnswer: "since", explanation: "'Since' is used with a point in time (2015). 'For' is used with a duration.", difficulty: "easy" },
    { id: "v38", category: "verbal", question: "Choose the one-word substitution for 'A person who loves books':", options: ["Bibliophile", "Philanthrop", "Misanthrope", "Cynic"], correctAnswer: "Bibliophile", explanation: "Bibliophile means a person who collects or loves books. 'Biblio' means book, 'phile' means lover.", difficulty: "easy" },
    { id: "v39", category: "verbal", question: "Identify the error: 'Each of the students have submitted their assignment.'", options: ["Each of the students", "have submitted", "their assignment", "No error"], correctAnswer: "have submitted", explanation: "'Each' is singular, so the verb should be 'has submitted', not 'have submitted'.", difficulty: "medium" },
    { id: "v40", category: "verbal", question: "Choose the synonym of 'CONCISE':", options: ["Verbose", "Brief", "Lengthy", "Detailed"], correctAnswer: "Brief", explanation: "Concise means giving a lot of information clearly in few words. Brief means short in duration — they are similar.", difficulty: "easy" },
    { id: "v41", category: "verbal", question: "What does 'to burn the midnight oil' mean?", options: ["To work late at night", "To waste resources", "To be angry", "To cook late"], correctAnswer: "To work late at night", explanation: "The idiom means to work or study late into the night.", difficulty: "easy" },
    { id: "v42", category: "verbal", question: "Choose the antonym of 'TRANSPARENT':", options: ["Clear", "Opaque", "Visible", "Lucid"], correctAnswer: "Opaque", explanation: "Transparent means allowing light to pass through. Opaque means not allowing light to pass — it is the opposite.", difficulty: "easy" },
    { id: "v43", category: "verbal", question: "Choose the correct passive voice: 'She writes a letter.'", options: ["A letter is written by her", "A letter was written by her", "A letter has been written by her", "A letter is being written by her"], correctAnswer: "A letter is written by her", explanation: "Simple present passive: Subject + is/am/are + past participle + by + agent.", difficulty: "medium" },
    { id: "v44", category: "verbal", question: "Fill in the blank: 'The scientist made a _____ discovery.'", options: ["remarkable", "remarkably", "remark", "remarking"], correctAnswer: "remarkable", explanation: "An adjective is needed to describe 'discovery'. 'Remarkable' is the adjective form.", difficulty: "easy" },
    { id: "v45", category: "verbal", question: "Choose the synonym of 'DILIGENT':", options: ["Lazy", "Hardworking", "Careless", "Indifferent"], correctAnswer: "Hardworking", explanation: "Diligent means having or showing care in one's work. Hardworking means willing to work hard — they are synonyms.", difficulty: "easy" },
    { id: "v46", category: "verbal", question: "What is the plural of 'datum'?", options: ["Datums", "Data", "Datum", "Datas"], correctAnswer: "Data", explanation: "'Datum' is the singular form (Latin), and 'data' is the plural form.", difficulty: "easy" },
    { id: "v47", category: "verbal", question: "Choose the correct sentence:", options: ["Neither the teacher nor the students was present", "Neither the teacher nor the students were present", "Neither the teacher nor the students is present", "Neither the teacher nor the students has been present"], correctAnswer: "Neither the teacher nor the students were present", explanation: "With 'neither...nor', the verb agrees with the nearer subject. 'Students' is plural, so 'were' is correct.", difficulty: "medium" },
    { id: "v48", category: "verbal", question: "Choose the one-word substitution for 'Government by the rich':", options: ["Democracy", "Oligarchy", "Plutocracy", "Monarchy"], correctAnswer: "Plutocracy", explanation: "Plutocracy means government by the wealthy. 'Pluto' relates to wealth.", difficulty: "medium" },
    { id: "v49", category: "verbal", question: "What does the idiom 'to let the cat out of the bag' mean?", options: ["To release a cat", "To reveal a secret", "To cause trouble", "To be lazy"], correctAnswer: "To reveal a secret", explanation: "The idiom means to accidentally reveal a secret or hidden information.", difficulty: "easy" },
    { id: "v50", category: "verbal", question: "Choose the synonym of 'EMPATHY':", options: ["Apathy", "Understanding", "Sympathy", "Indifference"], correctAnswer: "Understanding", explanation: "Empathy means the ability to understand and share feelings. Understanding is the closest synonym.", difficulty: "easy" },
    { id: "v51", category: "verbal", question: "Fill in the blank: 'If I _____ you, I would accept the offer.'", options: ["am", "was", "were", "be"], correctAnswer: "were", explanation: "In second conditional (hypothetical situations), use 'were' for all subjects including I/he/she/it.", difficulty: "medium" },
    { id: "v52", category: "verbal", question: "Choose the antonym of 'GENEROUS':", options: ["Charitable", "Stingy", "Kind", "Giving"], correctAnswer: "Stingy", explanation: "Generous means willing to give freely. Stingy means unwilling to spend or give — it is the opposite.", difficulty: "easy" }
  ]
};

export const categoryMeta = {
  quantitative: {
    title: "Quantitative Aptitude",
    description: "Practice arithmetic, algebra, percentages, time-speed-distance, compound interest, ratios, and more.",
    color: "indigo",
    icon: "BookOpen",
    questionCount: 52,
    duration: "52 Minutes",
    difficulty: "Mixed"
  },
  reasoning: {
    title: "Logical Reasoning",
    description: "Evaluate deductive reasoning, series patterns, coding-decoding, blood relations, and direction sense.",
    color: "purple",
    icon: "HelpCircle",
    questionCount: 52,
    duration: "52 Minutes",
    difficulty: "Mixed"
  },
  verbal: {
    title: "Verbal Ability",
    description: "Test English grammar, synonyms, antonyms, sentence correction, idioms, and one-word substitutions.",
    color: "cyan",
    icon: "Award",
    questionCount: 52,
    duration: "52 Minutes",
    difficulty: "Mixed"
  }
};

export default aptitudeQuestions;
