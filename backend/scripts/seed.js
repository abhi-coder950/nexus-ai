const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const AptitudeQuestion = require('../models/AptitudeQuestion');
const CodingQuestion = require('../models/CodingQuestion');
const InterviewQuestion = require('../models/InterviewQuestion');
const Result = require('../models/Result');
const ResumeAnalysis = require('../models/ResumeAnalysis');
const dotenv = require('dotenv');

dotenv.config();

const seedData = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/placement_portal');
    console.log('Connected to MongoDB for seeding...');

    // Clear existing data
    await User.deleteMany();
    await AptitudeQuestion.deleteMany();
    await CodingQuestion.deleteMany();
    await InterviewQuestion.deleteMany();
    await Result.deleteMany();
    await ResumeAnalysis.deleteMany();

    console.log('Cleared existing database collections.');

    // Seed Users
    const salt = await bcrypt.genSalt(10);
    const hashedAdminPassword = await bcrypt.hash('admin123', salt);
    const hashedStudentPassword = await bcrypt.hash('student123', salt);

    const admin = new User({
      name: 'Portal Administrator',
      email: 'admin@placement.com',
      password: hashedAdminPassword,
      role: 'admin',
      academicDetails: { course: 'BCA', branch: 'Computer Applications', cgpa: 9.8, graduationYear: 2026 },
      skills: ['Express', 'MongoDB', 'React', 'Node.js']
    });

    const student = new User({
      name: 'Aarav Sharma',
      email: 'student@placement.com',
      password: hashedStudentPassword,
      role: 'student',
      academicDetails: { course: 'BCA', branch: 'Information Technology', cgpa: 8.5, graduationYear: 2026 },
      skills: ['HTML', 'CSS', 'JavaScript', 'Python']
    });

    await admin.save();
    await student.save();
    console.log('Seed users created (admin@placement.com / admin123, student@placement.com / student123).');

    // Seed Aptitude Questions
    const aptitudeQuestions = [
      {
        category: 'quantitative',
        question: 'A train 120 m long passes a telegraph post in 6 seconds. Find the speed of the train in km/hr.',
        options: ['60 km/hr', '72 km/hr', '80 km/hr', '90 km/hr'],
        correctOption: 1,
        explanation: 'Speed = Distance / Time = 120 / 6 = 20 m/s. Convert m/s to km/hr: 20 * (18 / 5) = 72 km/hr.',
        difficulty: 'easy'
      },
      {
        category: 'quantitative',
        question: 'If 20% of a = b, then b% of 20 is the same as:',
        options: ['4% of a', '8% of a', '20% of a', 'None of these'],
        correctOption: 0,
        explanation: '20% of a = b => 0.2a = b. Then b% of 20 = (b/100) * 20 = 0.2b. Substitute b = 0.2a: 0.2 * 0.2a = 0.04a = 4% of a.',
        difficulty: 'medium'
      },
      {
        category: 'quantitative',
        question: 'A sum of money at compound interest amounts to Rs. 650 in one year and Rs. 676 in two years. Find the sum.',
        options: ['Rs. 600', 'Rs. 625', 'Rs. 630', 'Rs. 640'],
        correctOption: 1,
        explanation: 'Let Principal be P. A1 = P(1+R/100) = 650. A2 = P(1+R/100)^2 = 676. A2/A1 = (1+R/100) = 676/650 = 1.04. P = 650 / 1.04 = Rs. 625.',
        difficulty: 'hard'
      },
      {
        category: 'reasoning',
        question: 'Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?',
        options: ['7', '10', '12', '13'],
        correctOption: 1,
        explanation: 'This is an alternating addition and subtraction series. First, 3 is added, then 2 is subtracted, then 3 is added, and so on. (7+3=10, 10-2=8, 8+3=11, 11-2=9, 9+3=12, 12-2=10).',
        difficulty: 'easy'
      },
      {
        category: 'reasoning',
        question: 'Pointing to a photograph, Vipul said, "She is the daughter of my grandfather\'s only son." How is Vipul related to the girl in the photograph?',
        options: ['Father', 'Brother', 'Uncle', 'Cousin'],
        correctOption: 1,
        explanation: 'Grandfather\'s only son means Vipul\'s father. The girl in the photo is the daughter of Vipul\'s father, which makes Vipul her brother.',
        difficulty: 'medium'
      },
      {
        category: 'verbal',
        question: 'Choose the word that is most nearly opposite in meaning to: EPHEMERAL',
        options: ['Transient', 'Permanent', 'Short-lived', 'Mystical'],
        correctOption: 1,
        explanation: 'Ephemeral means short-lived or lasting for a very short time. Its opposite is permanent.',
        difficulty: 'medium'
      },
      {
        category: 'verbal',
        question: 'Identify the synonym of the word: PRUDENT',
        options: ['Careless', 'Wise', 'Hasty', 'Foolish'],
        correctOption: 1,
        explanation: 'Prudent means showing care and thought for the future; wise or cautious. Therefore, Wise is the synonym.',
        difficulty: 'easy'
      }
    ];

    await AptitudeQuestion.insertMany(aptitudeQuestions);
    console.log('Aptitude questions seeded successfully.');

    // Seed Coding Questions
    const codingQuestions = [
      {
        title: 'Two Sum',
        description: 'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.',
        difficulty: 'easy',
        category: 'Arrays',
        constraints: '2 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9\n-10^9 <= target <= 10^9',
        inputFormat: 'The first line contains the array of integers, and the second line contains the target.',
        outputFormat: 'Return indices as an array of two integers.',
        sampleInput: 'nums = [2,7,11,15], target = 9',
        sampleOutput: '[0, 1]',
        testCases: [
          { input: '[2,7,11,15]\n9', expectedOutput: '[0,1]', isHidden: false },
          { input: '[3,2,4]\n6', expectedOutput: '[1,2]', isHidden: false },
          { input: '[3,3]\n6', expectedOutput: '[0,1]', isHidden: true }
        ],
        starterCode: [
          {
            language: 'javascript',
            template: `function twoSum(nums, target) {
  // Write your code here
  
}`
          },
          {
            language: 'python',
            template: `def twoSum(nums, target):
    # Write your code here
    pass`
          },
          {
            language: 'cpp',
            template: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your code here
        
    }
};`
          }
        ]
      },
      {
        title: 'Reverse String',
        description: 'Write a function that reverses a string. The input string is given as an array of characters `s`.\nYou must do this by modifying the input array in-place with O(1) extra memory.',
        difficulty: 'easy',
        category: 'Strings',
        constraints: '1 <= s.length <= 10^5\ns[i] is a printable ascii character.',
        inputFormat: 'An array of characters.',
        outputFormat: 'No return value. Modify the array in-place.',
        sampleInput: 's = ["h","e","l","l","o"]',
        sampleOutput: '["o","l","l","e","h"]',
        testCases: [
          { input: '["h","e","l","l","o"]', expectedOutput: '["o","l","l","e","h"]', isHidden: false },
          { input: '["H","a","n","n","a","h"]', expectedOutput: '["h","a","n","n","a","H"]', isHidden: true }
        ],
        starterCode: [
          {
            language: 'javascript',
            template: `function reverseString(s) {
  // Write your code here
  
}`
          },
          {
            language: 'python',
            template: `def reverseString(s):
    # Write your code here
    pass`
          }
        ]
      },
      {
        title: 'Longest Substring Without Repeating Characters',
        description: 'Given a string `s`, find the length of the longest substring without repeating characters.',
        difficulty: 'medium',
        category: 'Strings',
        constraints: '0 <= s.length <= 5 * 10^4\ns consists of English letters, digits, symbols and spaces.',
        inputFormat: 'A string.',
        outputFormat: 'An integer.',
        sampleInput: 's = "abcabcbb"',
        sampleOutput: '3',
        testCases: [
          { input: '"abcabcbb"', expectedOutput: '3', isHidden: false },
          { input: '"bbbbb"', expectedOutput: '1', isHidden: false },
          { input: '"pwwkew"', expectedOutput: '3', isHidden: true }
        ],
        starterCode: [
          {
            language: 'javascript',
            template: `function lengthOfLongestSubstring(s) {
  // Write your code here
  
}`
          },
          {
            language: 'python',
            template: `def lengthOfLongestSubstring(s):
    # Write your code here
    pass`
          }
        ]
      }
    ];

    await CodingQuestion.insertMany(codingQuestions);
    console.log('Coding questions seeded successfully.');

    // Seed Interview Questions
    const interviewQuestions = [
      {
        type: 'hr',
        category: 'Behavioral',
        question: 'Tell me about yourself.',
        suggestedAnswer: 'Start with a brief professional summary (your major, skills, and projects). Mention 1-2 accomplishments that show your value, and explain how your academic background and interests align with the target job profile.',
        difficulty: 'easy'
      },
      {
        type: 'hr',
        category: 'Behavioral',
        question: 'What are your strengths and weaknesses?',
        suggestedAnswer: 'For strengths, highlight professional skills like fast learning, problem-solving, or team collaboration with a brief example. For weaknesses, state a genuine area of improvement that isn\'t core to the job (e.g., public speaking, delegation), and immediately explain the active steps you are taking to overcome it.',
        difficulty: 'easy'
      },
      {
        type: 'technical',
        category: 'OOPs',
        question: 'Explain the four pillars of Object-Oriented Programming.',
        suggestedAnswer: 'The four pillars are:\n1. Encapsulation: Binding data and methods that operate on them together within a class, hiding internal details.\n2. Abstraction: Hiding implementation details and showing only the essential features.\n3. Inheritance: Reusing code by allowing a child class to inherit fields and methods of a parent class.\n4. Polymorphism: Performing a single action in different ways (e.g., method overloading and method overriding).',
        difficulty: 'medium'
      },
      {
        type: 'technical',
        category: 'DBMS',
        question: 'What is Database Normalization and why is it used?',
        suggestedAnswer: 'Normalization is the process of organizing data in a database to reduce data redundancy and eliminate anomalies (insert, update, delete). It involves dividing database tables into smaller tables and defining relationships between them, ensuring data dependencies make logical sense (1NF, 2NF, 3NF, BCNF).',
        difficulty: 'medium'
      },
      {
        type: 'technical',
        category: 'OS',
        question: 'What is the difference between a process and a thread?',
        suggestedAnswer: 'A process is an executing program with its own dedicated memory space allocated by the OS. A thread is the smallest unit of execution within a process. Multiple threads within the same process share the process\'s memory, code, and resources, which makes thread context-switching much lighter than process context-switching.',
        difficulty: 'easy'
      }
    ];

    await InterviewQuestion.insertMany(interviewQuestions);
    console.log('Interview questions seeded successfully.');

    // Seed mock result history for Aarav
    const mockResultHistory = [
      {
        user: student._id,
        type: 'aptitude',
        score: 80,
        totalQuestions: 5,
        correctAnswers: 4,
        category: 'Quantitative Aptitude',
        date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) // 3 days ago
      },
      {
        user: student._id,
        type: 'aptitude',
        score: 60,
        totalQuestions: 5,
        correctAnswers: 3,
        category: 'Logical Reasoning',
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
      },
      {
        user: student._id,
        type: 'coding',
        score: 100,
        totalQuestions: 3,
        correctAnswers: 3,
        category: 'Two Sum',
        date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) // 1 day ago
      }
    ];

    await Result.insertMany(mockResultHistory);

    // Seed resume analysis history for Aarav
    const mockResumeAnalysis = new ResumeAnalysis({
      user: student._id,
      fileName: 'Aarav_Sharma_Resume.pdf',
      score: 78,
      keyStrengths: ['Good foundational skills in JavaScript', 'Lists academic history', 'Includes projects section'],
      improvements: ['Add links to GitHub/LinkedIn profiles', 'Quantify project impact with metrics', 'Include certifications'],
      missingSkills: ['REACT', 'MONGODB', 'DOCKER'],
      rawFeedback: 'The resume shows a solid foundation in core technologies. To improve, the candidate should highlight modern framework experience, add interactive links, and refine descriptions using the STAR framework.'
    });

    await mockResumeAnalysis.save();
    console.log('Seeded Aarav\'s historical prep data.');

    console.log('Database seeded successfully!');
    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    mongoose.connection.close();
    process.exit(1);
  }
};

seedData();
