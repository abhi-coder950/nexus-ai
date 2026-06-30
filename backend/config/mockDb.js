// In-memory Mock Database for Placement Preparation Portal
const bcrypt = require('bcryptjs');

const mockDb = {
  users: [
    {
      _id: 'mock-admin-id',
      name: 'Portal Administrator (Mock)',
      email: 'admin@placement.com',
      passwordHash: '', // Will hash in init
      role: 'admin',
      authProvider: 'local',
      avatar: '',
      academicDetails: { course: 'BCA', branch: 'Computer Applications', cgpa: 9.8, graduationYear: 2026 },
      skills: ['Express', 'MongoDB', 'React', 'Node.js'],
      createdAt: new Date()
    },
    {
      _id: 'mock-student-id',
      name: 'Aarav Sharma (Mock)',
      email: 'student@placement.com',
      passwordHash: '', // Will hash in init
      role: 'student',
      authProvider: 'local',
      avatar: '',
      academicDetails: { course: 'BCA', branch: 'Information Technology', cgpa: 8.5, graduationYear: 2026 },
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      createdAt: new Date()
    }
  ],
  
  aptitudeQuestions: [
    {
      _id: 'mock-apt-1',
      category: 'quantitative',
      question: 'A train 120 m long passes a telegraph post in 6 seconds. Find the speed of the train in km/hr.',
      options: ['60 km/hr', '72 km/hr', '80 km/hr', '90 km/hr'],
      correctOption: 1,
      explanation: 'Speed = Distance / Time = 120 / 6 = 20 m/s. Convert m/s to km/hr: 20 * (18 / 5) = 72 km/hr.',
      difficulty: 'easy'
    },
    {
      _id: 'mock-apt-2',
      category: 'quantitative',
      question: 'If 20% of a = b, then b% of 20 is the same as:',
      options: ['4% of a', '8% of a', '20% of a', 'None of these'],
      correctOption: 0,
      explanation: '20% of a = b => 0.2a = b. Then b% of 20 = (b/100) * 20 = 0.2b. Substitute b = 0.2a: 0.2 * 0.2a = 0.04a = 4% of a.',
      difficulty: 'medium'
    },
    {
      _id: 'mock-apt-3',
      category: 'quantitative',
      question: 'A sum of money at compound interest amounts to Rs. 650 in one year and Rs. 676 in two years. Find the sum.',
      options: ['Rs. 600', 'Rs. 625', 'Rs. 630', 'Rs. 640'],
      correctOption: 1,
      explanation: 'Let Principal be P. A1 = P(1+R/100) = 650. A2 = P(1+R/100)^2 = 676. A2/A1 = (1+R/100) = 676/650 = 1.04. P = 650 / 1.04 = Rs. 625.',
      difficulty: 'hard'
    },
    {
      _id: 'mock-apt-4',
      category: 'reasoning',
      question: 'Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?',
      options: ['7', '10', '12', '13'],
      correctOption: 1,
      explanation: 'This is an alternating addition and subtraction series. First, 3 is added, then 2 is subtracted, then 3 is added, and so on. (7+3=10, 10-2=8, 8+3=11, 11-2=9, 9+3=12, 12-2=10).',
      difficulty: 'easy'
    },
    {
      _id: 'mock-apt-5',
      category: 'reasoning',
      question: 'Pointing to a photograph, Vipul said, "She is the daughter of my grandfather\'s only son." How is Vipul related to the girl in the photograph?',
      options: ['Father', 'Brother', 'Uncle', 'Cousin'],
      correctOption: 1,
      explanation: 'Grandfather\'s only son means Vipul\'s father. The girl in the photo is the daughter of Vipul\'s father, which makes Vipul her brother.',
      difficulty: 'medium'
    },
    {
      _id: 'mock-apt-6',
      category: 'verbal',
      question: 'Choose the word that is most nearly opposite in meaning to: EPHEMERAL',
      options: ['Transient', 'Permanent', 'Short-lived', 'Mystical'],
      correctOption: 1,
      explanation: 'Ephemeral means short-lived or lasting for a very short time. Its opposite is permanent.',
      difficulty: 'medium'
    },
    {
      _id: 'mock-apt-7',
      category: 'verbal',
      question: 'Identify the synonym of the word: PRUDENT',
      options: ['Careless', 'Wise', 'Hasty', 'Foolish'],
      correctOption: 1,
      explanation: 'Prudent means showing care and thought for the future; wise or cautious. Therefore, Wise is the synonym.',
      difficulty: 'easy'
    }
  ],

  codingQuestions: [
    {
      _id: 'mock-code-1',
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
          template: `function twoSum(nums, target) {\n  // Write your code here\n  \n}`
        },
        {
          language: 'python',
          template: `def twoSum(nums, target):\n    # Write your code here\n    pass`
        }
      ]
    },
    {
      _id: 'mock-code-2',
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
          template: `function reverseString(s) {\n  // Write your code here\n  \n}`
        },
        {
          language: 'python',
          template: `def reverseString(s):\n    # Write your code here\n    pass`
        }
      ]
    }
  ],

  interviewQuestions: [
    {
      _id: 'mock-int-1',
      type: 'hr',
      category: 'Behavioral',
      question: 'Tell me about yourself.',
      suggestedAnswer: 'Start with a brief professional summary of your key skills and projects. Mention 1-2 accomplishments that show your value, and explain why your interests align with the target job profile.',
      difficulty: 'easy'
    },
    {
      _id: 'mock-int-2',
      type: 'hr',
      category: 'Behavioral',
      question: 'What are your strengths and weaknesses?',
      suggestedAnswer: 'Highlight professional strengths like fast learning or team collaboration. For weaknesses, state a genuine improvement area (e.g., delegation) and explain the active steps you are taking to overcome it.',
      difficulty: 'easy'
    },
    {
      _id: 'mock-int-3',
      type: 'technical',
      category: 'OOPs',
      question: 'Explain the four pillars of Object-Oriented Programming.',
      suggestedAnswer: '1. Encapsulation: Binding data and methods within a class.\n2. Abstraction: Hiding implementation details.\n3. Inheritance: Reusing code by extending classes.\n4. Polymorphism: Performing a single action in different ways.',
      difficulty: 'medium'
    },
    {
      _id: 'mock-int-4',
      type: 'technical',
      category: 'DBMS',
      question: 'What is Database Normalization and why is it used?',
      suggestedAnswer: 'Normalization is the process of organizing database tables to reduce redundancy and eliminate update/delete anomalies (1NF, 2NF, 3NF, BCNF).',
      difficulty: 'medium'
    }
  ],

  results: [
    {
      _id: 'mock-res-1',
      user: 'mock-student-id',
      type: 'aptitude',
      score: 80,
      totalQuestions: 5,
      correctAnswers: 4,
      category: 'Quantitative Aptitude',
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    },
    {
      _id: 'mock-res-2',
      user: 'mock-student-id',
      type: 'aptitude',
      score: 60,
      totalQuestions: 5,
      correctAnswers: 3,
      category: 'Logical Reasoning',
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    },
    {
      _id: 'mock-res-3',
      user: 'mock-student-id',
      type: 'coding',
      score: 100,
      totalQuestions: 3,
      correctAnswers: 3,
      category: 'Two Sum',
      date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
    }
  ],

  resumeAnalyses: [
    {
      _id: 'mock-resume-1',
      user: 'mock-student-id',
      fileName: 'Aarav_Sharma_Resume.pdf',
      score: 78,
      keyStrengths: ['Good foundational skills in JavaScript', 'Lists academic history', 'Includes projects section'],
      improvements: ['Add links to GitHub/LinkedIn profiles', 'Quantify project impact with metrics', 'Include certifications'],
      missingSkills: ['REACT', 'MONGODB', 'DOCKER'],
      rawFeedback: 'The resume shows a solid foundation in core technologies. To improve, the candidate should highlight modern framework experience, add interactive links, and refine descriptions.',
      analyzedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
    }
  ]
};

// Sync password hashing for mock users
const initMockDb = async () => {
  const salt = await bcrypt.genSalt(10);
  const hashAdmin = await bcrypt.hash('admin123', salt);
  const hashStudent = await bcrypt.hash('student123', salt);
  mockDb.users[0].passwordHash = hashAdmin;
  mockDb.users[1].passwordHash = hashStudent;
};

initMockDb();

module.exports = mockDb;
