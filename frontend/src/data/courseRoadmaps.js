const courseRoadmaps = [
  // ==================== ENGINEERING ====================
  {
    id: 'btech',
    name: 'B.Tech',
    category: 'Engineering',
    icon: 'GraduationCap',
    color: 'indigo',
    description: 'Comprehensive placement preparation for B.Tech graduates covering aptitude, DSA, core engineering subjects, coding skills, and interview readiness.',
    topics: [
      {
        id: 'aptitude',
        name: 'Aptitude',
        description: 'Quantitative aptitude, logical reasoning, and verbal ability preparation for campus recruitment drives.',
        difficulty: 'easy-medium',
        estimatedHours: 40,
        resources: [
          { title: 'Quantitative Aptitude Complete Guide', type: 'article', url: '#' },
          { title: 'Practice 500+ Aptitude Questions', type: 'practice', url: '#' },
          { title: 'Reasoning and Verbal Ability Mock Tests', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'dsa',
        name: 'DSA',
        description: 'Data Structures and Algorithms covering arrays, linked lists, trees, graphs, dynamic programming, and problem-solving techniques.',
        difficulty: 'medium-hard',
        estimatedHours: 120,
        resources: [
          { title: 'LeetCode Patterns and Strategies', type: 'article', url: '#' },
          { title: 'Solve 300+ DSA Problems', type: 'practice', url: '#' },
          { title: 'DSA Interview Questions Compilation', type: 'article', url: '#' }
        ]
      },
      {
        id: 'core-subjects',
        name: 'Core Subjects',
        description: 'Technical subjects specific to your engineering branch including theory and practical concepts.',
        difficulty: 'medium',
        estimatedHours: 60,
        resources: [
          { title: 'Important Concepts Quick Reference', type: 'article', url: '#' },
          { title: 'Previous Year Placement Papers', type: 'practice', url: '#' },
          { title: 'Subject-wise MCQ Practice', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'coding',
        name: 'Coding',
        description: 'Programming proficiency in languages like C, C++, Java, Python with emphasis on coding test patterns.',
        difficulty: 'medium-hard',
        estimatedHours: 80,
        resources: [
          { title: 'Top 100 Coding Interview Questions', type: 'article', url: '#' },
          { title: 'Daily Coding Challenge Practice', type: 'practice', url: '#' },
          { title: 'Online Coding Assessment Preparation', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'technical-interview',
        name: 'Technical Interview',
        description: 'System design, project discussions, technical concepts, and problem-solving approach for technical rounds.',
        difficulty: 'medium-hard',
        estimatedHours: 50,
        resources: [
          { title: 'How to Present Your Projects', type: 'article', url: '#' },
          { title: 'Mock Technical Interview Sessions', type: 'practice', url: '#' },
          { title: 'System Design Basics for Freshers', type: 'article', url: '#' }
        ]
      },
      {
        id: 'hr-interview',
        name: 'HR Interview',
        description: 'Behavioral questions, HR round preparation, salary negotiation, communication skills, and company research.',
        difficulty: 'easy-medium',
        estimatedHours: 20,
        resources: [
          { title: 'Common HR Questions Guide', type: 'article', url: '#' },
          { title: 'Mock HR Interview Practice', type: 'practice', url: '#' },
          { title: 'Salary Negotiation Tips for Freshers', type: 'article', url: '#' }
        ]
      }
    ]
  },
  {
    id: 'be',
    name: 'BE',
    category: 'Engineering',
    icon: 'Wrench',
    color: 'purple',
    description: 'Bachelor of Engineering placement preparation with focus on technical skills, problem-solving, and industry-ready competencies.',
    topics: [
      {
        id: 'aptitude',
        name: 'Aptitude',
        description: 'Quantitative aptitude, logical reasoning, and verbal ability for engineering placement drives.',
        difficulty: 'easy-medium',
        estimatedHours: 40,
        resources: [
          { title: 'Quantitative Aptitude shortcuts', type: 'article', url: '#' },
          { title: 'Placement Aptitude Practice Set', type: 'practice', url: '#' },
          { title: 'Verbal Ability for Engineers', type: 'article', url: '#' }
        ]
      },
      {
        id: 'dsa',
        name: 'DSA',
        description: 'Core data structures and algorithm concepts essential for coding interviews and technical assessments.',
        difficulty: 'medium-hard',
        estimatedHours: 120,
        resources: [
          { title: 'Algorithm Design Manual', type: 'article', url: '#' },
          { title: 'Problem Solving Practice Hub', type: 'practice', url: '#' },
          { title: 'Coding Patterns and Templates', type: 'article', url: '#' }
        ]
      },
      {
        id: 'core-subjects',
        name: 'Core Subjects',
        description: 'Branch-specific technical knowledge including CAD, embedded systems, VLSI, or other specialized topics.',
        difficulty: 'medium',
        estimatedHours: 60,
        resources: [
          { title: 'Branch-wise Important Topics', type: 'article', url: '#' },
          { title: 'Technical MCQs for BE', type: 'practice', url: '#' },
          { title: 'Lab Viva and Practical Questions', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'coding',
        name: 'Coding',
        description: 'Programming fundamentals and advanced coding skills with focus on engineering applications.',
        difficulty: 'medium-hard',
        estimatedHours: 80,
        resources: [
          { title: 'Code Optimization Techniques', type: 'article', url: '#' },
          { title: 'Coding Test Preparation Kit', type: 'practice', url: '#' },
          { title: 'Project-based Coding Practice', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'technical-interview',
        name: 'Technical Interview',
        description: 'In-depth technical discussion preparation including projects, internships, and core engineering concepts.',
        difficulty: 'medium-hard',
        estimatedHours: 50,
        resources: [
          { title: 'Project Discussion Tips', type: 'article', url: '#' },
          { title: 'Mock Technical Rounds', type: 'practice', url: '#' },
          { title: 'Industry-specific Technical Questions', type: 'article', url: '#' }
        ]
      },
      {
        id: 'hr-interview',
        name: 'HR Interview',
        description: 'Soft skills development, behavioral interview preparation, and professional communication training.',
        difficulty: 'easy-medium',
        estimatedHours: 20,
        resources: [
          { title: 'Behavioral Interview STAR Method', type: 'article', url: '#' },
          { title: 'HR Mock Interview Sessions', type: 'practice', url: '#' },
          { title: 'Professional Communication Skills', type: 'article', url: '#' }
        ]
      }
    ]
  },
  {
    id: 'diploma-engineering',
    name: 'Diploma Engineering',
    category: 'Engineering',
    icon: 'Settings',
    color: 'cyan',
    description: 'Diploma engineering placement preparation focusing on practical technical skills, aptitude, and industry readiness.',
    topics: [
      {
        id: 'core-technical',
        name: 'Core Technical',
        description: 'Branch-specific practical and theoretical knowledge essential for diploma-level technical roles.',
        difficulty: 'medium',
        estimatedHours: 60,
        resources: [
          { title: 'Practical Guide for Diploma Students', type: 'article', url: '#' },
          { title: 'Technical MCQ Practice Set', type: 'practice', url: '#' },
          { title: 'Workshop and Lab Practice Questions', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'aptitude',
        name: 'Aptitude',
        description: 'Quantitative and logical reasoning aptitude tailored for diploma engineering placement exams.',
        difficulty: 'easy-medium',
        estimatedHours: 35,
        resources: [
          { title: 'Quick Aptitude Tricks', type: 'article', url: '#' },
          { title: 'Daily Aptitude Practice', type: 'practice', url: '#' },
          { title: 'Aptitude Mock Test Series', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'reasoning',
        name: 'Reasoning',
        description: 'Logical and analytical reasoning skills including pattern recognition, series, coding-decoding, and puzzles.',
        difficulty: 'medium',
        estimatedHours: 30,
        resources: [
          { title: 'Reasoning Tricks and Shortcuts', type: 'article', url: '#' },
          { title: 'Puzzle and Reasoning Practice', type: 'practice', url: '#' },
          { title: 'Reasoning Mock Tests', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'interview',
        name: 'Interview',
        description: 'Combined technical and HR interview preparation with focus on practical skills and communication.',
        difficulty: 'medium',
        estimatedHours: 25,
        resources: [
          { title: 'Interview Tips for Diploma Holders', type: 'article', url: '#' },
          { title: 'Mock Interview Practice', type: 'practice', url: '#' },
          { title: 'Common Interview Questions for Diploma', type: 'article', url: '#' }
        ]
      }
    ]
  },
  {
    id: 'polytechnic',
    name: 'Polytechnic',
    category: 'Engineering',
    icon: 'Cog',
    color: 'teal',
    description: 'Polytechnic diploma placement preparation covering technical fundamentals, aptitude, reasoning, and interview skills.',
    topics: [
      {
        id: 'core-technical',
        name: 'Core Technical',
        description: 'Practical and theoretical technical knowledge specific to polytechnic branches and trades.',
        difficulty: 'easy-medium',
        estimatedHours: 50,
        resources: [
          { title: 'Trade-specific Study Materials', type: 'article', url: '#' },
          { title: 'Technical Practice Questions', type: 'practice', url: '#' },
          { title: 'Practical Exam Preparation', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'aptitude',
        name: 'Aptitude',
        description: 'Basic quantitative aptitude and problem-solving skills for polytechnic placement tests.',
        difficulty: 'easy',
        estimatedHours: 30,
        resources: [
          { title: 'Simple Aptitude Formulas', type: 'article', url: '#' },
          { title: 'Aptitude Practice Worksheets', type: 'practice', url: '#' },
          { title: 'Placement Test Prep', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'reasoning',
        name: 'Reasoning',
        description: 'Basic logical reasoning and mental ability for polytechnic recruitment examinations.',
        difficulty: 'easy-medium',
        estimatedHours: 25,
        resources: [
          { title: 'Easy Reasoning Tricks', type: 'article', url: '#' },
          { title: 'Reasoning Practice Sets', type: 'practice', url: '#' },
          { title: 'Mental Ability Test Prep', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'interview',
        name: 'Interview',
        description: 'Basic interview skills, communication, and confidence building for polytechnic campus placements.',
        difficulty: 'easy',
        estimatedHours: 20,
        resources: [
          { title: 'How to Face Your First Interview', type: 'article', url: '#' },
          { title: 'Mock Interview Sessions', type: 'practice', url: '#' },
          { title: 'Common Interview Questions', type: 'article', url: '#' }
        ]
      }
    ]
  },

  // ==================== COMPUTER ====================
  {
    id: 'bca',
    name: 'BCA',
    category: 'Computer',
    icon: 'Monitor',
    color: 'emerald',
    description: 'Bachelor of Computer Applications placement preparation covering programming languages, web technologies, databases, and computer science fundamentals.',
    topics: [
      {
        id: 'c-programming',
        name: 'C Programming',
        description: 'C language fundamentals including variables, loops, functions, pointers, memory management, and file handling.',
        difficulty: 'easy-medium',
        estimatedHours: 40,
        resources: [
          { title: 'C Language Quick Reference Guide', type: 'article', url: '#' },
          { title: 'Practice 100+ C Programs', type: 'practice', url: '#' },
          { title: 'C Programming Interview Questions', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'cpp',
        name: 'C++',
        description: 'C++ programming including OOP concepts, STL, templates, exception handling, and advanced features.',
        difficulty: 'medium',
        estimatedHours: 45,
        resources: [
          { title: 'C++ STL Complete Guide', type: 'article', url: '#' },
          { title: 'C++ Problem Solving Practice', type: 'practice', url: '#' },
          { title: 'C++ OOP Concepts Simplified', type: 'article', url: '#' }
        ]
      },
      {
        id: 'java',
        name: 'Java',
        description: 'Java programming covering OOP, collections, multithreading, JDBC, servlets, and enterprise concepts.',
        difficulty: 'medium-hard',
        estimatedHours: 60,
        resources: [
          { title: 'Java Collections Framework Guide', type: 'article', url: '#' },
          { title: 'Java Coding Practice Problems', type: 'practice', url: '#' },
          { title: 'Java Interview Preparation Kit', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'python',
        name: 'Python',
        description: 'Python programming including data types, OOP, file handling, libraries, and automation concepts.',
        difficulty: 'easy-medium',
        estimatedHours: 50,
        resources: [
          { title: 'Python Libraries Cheat Sheet', type: 'article', url: '#' },
          { title: 'Python Practice Projects', type: 'practice', url: '#' },
          { title: 'Python Interview Questions', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'html',
        name: 'HTML',
        description: 'HTML5 fundamentals including semantic elements, forms, multimedia, accessibility, and web standards.',
        difficulty: 'easy',
        estimatedHours: 20,
        resources: [
          { title: 'HTML Elements Reference', type: 'article', url: '#' },
          { title: 'Build 20 HTML Pages', type: 'practice', url: '#' },
          { title: 'HTML5 Interview Questions', type: 'article', url: '#' }
        ]
      },
      {
        id: 'css',
        name: 'CSS',
        description: 'CSS3 styling including selectors, box model, flexbox, grid, animations, and responsive design.',
        difficulty: 'easy-medium',
        estimatedHours: 30,
        resources: [
          { title: 'CSS Grid and Flexbox Guide', type: 'article', url: '#' },
          { title: 'CSS Layout Practice Projects', type: 'practice', url: '#' },
        ]
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        description: 'JavaScript fundamentals including DOM manipulation, ES6+, async programming, and browser APIs.',
        difficulty: 'medium',
        estimatedHours: 50,
        resources: [
          { title: 'JavaScript ES6+ Features Guide', type: 'article', url: '#' },
          { title: 'JavaScript Coding Challenges', type: 'practice', url: '#' },
          { title: 'JavaScript Interview Questions', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'react',
        name: 'React',
        description: 'React.js library including components, hooks, state management, routing, and modern web development patterns.',
        difficulty: 'medium-hard',
        estimatedHours: 50,
        resources: [
          { title: 'React Hooks Deep Dive', type: 'article', url: '#' },
          { title: 'Build React Projects', type: 'practice', url: '#' },
          { title: 'React Interview Preparation', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'nodejs',
        name: 'Node.js',
        description: 'Node.js runtime including modules, file system, streams, event-driven programming, and npm ecosystem.',
        difficulty: 'medium',
        estimatedHours: 40,
        resources: [
          { title: 'Node.js API Reference Guide', type: 'article', url: '#' },
          { title: 'Node.js Project Ideas', type: 'practice', url: '#' },
          { title: 'Node.js Interview Questions', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'express',
        name: 'Express',
        description: 'Express.js framework including routing, middleware, template engines, error handling, and REST API development.',
        difficulty: 'medium',
        estimatedHours: 35,
        resources: [
          { title: 'Express Middleware Guide', type: 'article', url: '#' },
          { title: 'Build REST APIs with Express', type: 'practice', url: '#' },
          { title: 'Express.js Best Practices', type: 'article', url: '#' }
        ]
      },
      {
        id: 'mongodb',
        name: 'MongoDB',
        description: 'MongoDB NoSQL database including CRUD operations, aggregation, indexing, schema design, and Mongoose ODM.',
        difficulty: 'medium',
        estimatedHours: 35,
        resources: [
          { title: 'MongoDB Schema Design Guide', type: 'article', url: '#' },
          { title: 'MongoDB Practice Exercises', type: 'practice', url: '#' },
          { title: 'MongoDB Aggregation Framework', type: 'article', url: '#' }
        ]
      },
      {
        id: 'sql',
        name: 'SQL',
        description: 'SQL database querying including joins, subqueries, indexing, stored procedures, and query optimization.',
        difficulty: 'medium',
        estimatedHours: 40,
        resources: [
          { title: 'SQL Cheat Sheet', type: 'article', url: '#' },
          { title: 'SQL Practice Problems', type: 'practice', url: '#' },
          { title: 'SQL Interview Questions', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'dbms',
        name: 'DBMS',
        description: 'Database Management System concepts including normalization, transactions, ACID properties, and ER models.',
        difficulty: 'medium',
        estimatedHours: 30,
        resources: [
          { title: 'DBMS Concepts Explained', type: 'article', url: '#' },
          { title: 'DBMS Practice Questions', type: 'practice', url: '#' },
          { title: 'DBMS Interview Preparation', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'operating-system',
        name: 'Operating System',
        description: 'OS concepts including process management, memory management, file systems, threading, and deadlocks.',
        difficulty: 'medium',
        estimatedHours: 35,
        resources: [
          { title: 'OS Concepts Quick Reference', type: 'article', url: '#' },
          { title: 'OS Practice Problems', type: 'practice', url: '#' },
          { title: 'OS Interview Questions', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'computer-networks',
        name: 'Computer Networks',
        description: 'Networking fundamentals including OSI model, TCP/IP, protocols, routing, and network security.',
        difficulty: 'medium',
        estimatedHours: 35,
        resources: [
          { title: 'OSI Model Explained', type: 'article', url: '#' },
          { title: 'Network Configuration Practice', type: 'practice', url: '#' },
          { title: 'Computer Networks Interview Questions', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'oop',
        name: 'OOP',
        description: 'Object-Oriented Programming concepts including inheritance, polymorphism, encapsulation, and abstraction.',
        difficulty: 'easy-medium',
        estimatedHours: 25,
        resources: [
          { title: 'OOP Design Principles Guide', type: 'article', url: '#' },
          { title: 'OOP Practice Problems', type: 'practice', url: '#' },
          { title: 'OOP Interview Questions', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'dsa',
        name: 'DSA',
        description: 'Data Structures and Algorithms covering linear structures, trees, graphs, sorting, searching, and dynamic programming.',
        difficulty: 'medium-hard',
        estimatedHours: 100,
        resources: [
          { title: 'DSA Problem Solving Patterns', type: 'article', url: '#' },
          { title: 'Solve 200+ DSA Problems', type: 'practice', url: '#' },
        ]
      },
      {
        id: 'aptitude',
        name: 'Aptitude',
        description: 'Quantitative aptitude, logical reasoning, and verbal ability for placement exams and competitive tests.',
        difficulty: 'easy-medium',
        estimatedHours: 35,
        resources: [
          { title: 'Aptitude Formulas and Tricks', type: 'article', url: '#' },
          { title: 'Daily Aptitude Practice', type: 'practice', url: '#' },
          { title: 'Placement Aptitude Mock Tests', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'reasoning',
        name: 'Reasoning',
        description: 'Logical and analytical reasoning including series, coding-decoding, blood relations, and puzzles.',
        difficulty: 'easy-medium',
        estimatedHours: 25,
        resources: [
          { title: 'Reasoning Shortcuts and Tricks', type: 'article', url: '#' },
          { title: 'Reasoning Practice Sets', type: 'practice', url: '#' },
          { title: 'Reasoning Mock Tests', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'english',
        name: 'English',
        description: 'English language skills including grammar, vocabulary, comprehension, and business communication.',
        difficulty: 'easy',
        estimatedHours: 20,
        resources: [
          { title: 'English Grammar Complete Guide', type: 'article', url: '#' },
          { title: 'English Comprehension Practice', type: 'practice', url: '#' },
          { title: 'Business English Communication', type: 'article', url: '#' }
        ]
      },
      {
        id: 'hr-interview',
        name: 'HR Interview',
        description: 'Behavioral interview preparation, self-introduction, career goals, and professional conduct.',
        difficulty: 'easy-medium',
        estimatedHours: 15,
        resources: [
          { title: 'Top 50 HR Interview Questions', type: 'article', url: '#' },
          { title: 'Mock HR Interview Practice', type: 'practice', url: '#' },
          { title: 'Personal Branding for Placement', type: 'article', url: '#' }
        ]
      },
      {
        id: 'technical-interview',
        name: 'Technical Interview',
        description: 'Technical round preparation including coding, CS fundamentals, project discussion, and problem-solving.',
        difficulty: 'medium-hard',
        estimatedHours: 40,
        resources: [
          { title: 'Technical Interview Tips', type: 'article', url: '#' },
          { title: 'Mock Technical Interviews', type: 'practice', url: '#' },
          { title: 'CS Fundamentals Revision', type: 'practice', url: '#' }
        ]
      }
    ]
  },
  {
    id: 'mca',
    name: 'MCA',
    category: 'Computer',
    icon: 'Code2',
    color: 'violet',
    description: 'Master of Computer Applications placement preparation with advanced programming, web technologies, and industry-ready skills.',
    topics: [
      {
        id: 'c-programming',
        name: 'C Programming',
        description: 'Advanced C programming concepts including data structures implementation, memory optimization, and system-level programming.',
        difficulty: 'medium',
        estimatedHours: 35,
        resources: [
          { title: 'C Programming Advanced Concepts', type: 'article', url: '#' },
          { title: 'C Programming Challenge Problems', type: 'practice', url: '#' },
        ]
      },
      {
        id: 'cpp',
        name: 'C++',
        description: 'C++ with emphasis on STL, template metaprogramming, modern C++ features, and competitive programming.',
        difficulty: 'medium-hard',
        estimatedHours: 50,
        resources: [
          { title: 'Modern C++ Features Guide', type: 'article', url: '#' },
          { title: 'C++ Competitive Programming', type: 'practice', url: '#' },
        ]
      },
      {
        id: 'java',
        name: 'Java',
        description: 'Enterprise Java including Spring Boot, microservices, JPA, and advanced design patterns for MCA graduates.',
        difficulty: 'hard',
        estimatedHours: 70,
        resources: [
          { title: 'Spring Boot Complete Guide', type: 'article', url: '#' },
          { title: 'Java Project Development Practice', type: 'practice', url: '#' },
          { title: 'Java Design Patterns', type: 'article', url: '#' }
        ]
      },
      {
        id: 'python',
        name: 'Python',
        description: 'Python with advanced libraries, frameworks, data analysis, automation, and machine learning basics.',
        difficulty: 'medium',
        estimatedHours: 55,
        resources: [
          { title: 'Python for Data Science Guide', type: 'article', url: '#' },
          { title: 'Python Project Portfolio', type: 'practice', url: '#' },
          { title: 'Python Automation Scripts', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'html',
        name: 'HTML',
        description: 'HTML5 semantic markup, accessibility standards, SEO basics, and modern web standards.',
        difficulty: 'easy',
        estimatedHours: 15,
        resources: [
          { title: 'HTML5 Semantic Elements', type: 'article', url: '#' },
          { title: 'HTML Practice Projects', type: 'practice', url: '#' },
          { title: 'Web Accessibility with HTML', type: 'article', url: '#' }
        ]
      },
      {
        id: 'css',
        name: 'CSS',
        description: 'Advanced CSS including preprocessors, frameworks, responsive design, and modern layout systems.',
        difficulty: 'medium',
        estimatedHours: 30,
        resources: [
          { title: 'CSS Frameworks Comparison', type: 'article', url: '#' },
          { title: 'Responsive Design Projects', type: 'practice', url: '#' },
        ]
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        description: 'Advanced JavaScript including closures, prototypal inheritance, async patterns, and functional programming.',
        difficulty: 'medium-hard',
        estimatedHours: 55,
        resources: [
          { title: 'JavaScript Design Patterns', type: 'article', url: '#' },
          { title: 'JavaScript Advanced Challenges', type: 'practice', url: '#' },
        ]
      },
      {
        id: 'react',
        name: 'React',
        description: 'React with advanced patterns, performance optimization, state management with Redux, and testing.',
        difficulty: 'hard',
        estimatedHours: 55,
        resources: [
          { title: 'React Performance Optimization', type: 'article', url: '#' },
          { title: 'React Full Stack Projects', type: 'practice', url: '#' },
          { title: 'React Testing Complete Guide', type: 'article', url: '#' }
        ]
      },
      {
        id: 'nodejs',
        name: 'Node.js',
        description: 'Node.js with advanced concepts including clustering, worker threads, performance tuning, and production deployment.',
        difficulty: 'medium-hard',
        estimatedHours: 45,
        resources: [
          { title: 'Node.js Production Best Practices', type: 'article', url: '#' },
          { title: 'Node.js Enterprise Projects', type: 'practice', url: '#' },
          { title: 'Node.js Scalability Guide', type: 'article', url: '#' }
        ]
      },
      {
        id: 'express',
        name: 'Express',
        description: 'Express.js with advanced middleware, security practices, API versioning, and microservices architecture.',
        difficulty: 'medium',
        estimatedHours: 35,
        resources: [
          { title: 'Express Security Best Practices', type: 'article', url: '#' },
          { title: 'RESTful API Development', type: 'practice', url: '#' },
          { title: 'Express.js Microservices Guide', type: 'article', url: '#' }
        ]
      },
      {
        id: 'mongodb',
        name: 'MongoDB',
        description: 'Advanced MongoDB including replica sets, sharding, aggregation pipeline, and performance optimization.',
        difficulty: 'medium-hard',
        estimatedHours: 40,
        resources: [
          { title: 'MongoDB Performance Tuning', type: 'article', url: '#' },
          { title: 'MongoDB Advanced Queries', type: 'practice', url: '#' },
          { title: 'MongoDB Production Best Practices', type: 'article', url: '#' }
        ]
      },
      {
        id: 'sql',
        name: 'SQL',
        description: 'Advanced SQL including query optimization, indexing strategies, window functions, and database administration.',
        difficulty: 'medium-hard',
        estimatedHours: 40,
        resources: [
          { title: 'SQL Query Optimization Guide', type: 'article', url: '#' },
          { title: 'SQL Advanced Practice', type: 'practice', url: '#' },
          { title: 'Database Administration Basics', type: 'article', url: '#' }
        ]
      },
      {
        id: 'dbms',
        name: 'DBMS',
        description: 'Advanced DBMS concepts including distributed databases, NoSQL vs SQL, data warehousing, and cloud databases.',
        difficulty: 'medium-hard',
        estimatedHours: 35,
        resources: [
          { title: 'Distributed Database Systems', type: 'article', url: '#' },
          { title: 'DBMS Advanced Problems', type: 'practice', url: '#' },
          { title: 'Cloud Database Solutions', type: 'article', url: '#' }
        ]
      },
      {
        id: 'operating-system',
        name: 'Operating System',
        description: 'Advanced OS concepts including virtualization, containerization, distributed systems, and OS security.',
        difficulty: 'medium',
        estimatedHours: 35,
        resources: [
          { title: 'OS Security Concepts', type: 'article', url: '#' },
          { title: 'Linux Administration Practice', type: 'practice', url: '#' },
          { title: 'Containerization with Docker', type: 'article', url: '#' }
        ]
      },
      {
        id: 'computer-networks',
        name: 'Computer Networks',
        description: 'Advanced networking including network security, cloud networking, SDN, and wireless protocols.',
        difficulty: 'medium',
        estimatedHours: 35,
        resources: [
          { title: 'Network Security Fundamentals', type: 'article', url: '#' },
          { title: 'Network Configuration Practice', type: 'practice', url: '#' },
          { title: 'Cloud Networking Basics', type: 'article', url: '#' }
        ]
      },
      {
        id: 'oop',
        name: 'OOP',
        description: 'Advanced OOP including SOLID principles, design patterns, architectural patterns, and clean code practices.',
        difficulty: 'medium',
        estimatedHours: 25,
        resources: [
          { title: 'SOLID Principles Explained', type: 'article', url: '#' },
          { title: 'Design Patterns Practice', type: 'practice', url: '#' },
          { title: 'Clean Code Principles', type: 'article', url: '#' }
        ]
      },
      {
        id: 'dsa',
        name: 'DSA',
        description: 'Advanced DSA including graph algorithms, advanced DP, string algorithms, and competitive programming techniques.',
        difficulty: 'hard',
        estimatedHours: 120,
        resources: [
          { title: 'Competitive Programming Guide', type: 'article', url: '#' },
          { title: 'Solve 300+ Advanced Problems', type: 'practice', url: '#' },
        ]
      },
      {
        id: 'aptitude',
        name: 'Aptitude',
        description: 'Advanced quantitative aptitude and data interpretation for MCA placement and competitive exams.',
        difficulty: 'medium',
        estimatedHours: 35,
        resources: [
          { title: 'Data Interpretation Guide', type: 'article', url: '#' },
          { title: 'Aptitude Practice Advanced', type: 'practice', url: '#' },
          { title: 'MCA Placement Aptitude', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'reasoning',
        name: 'Reasoning',
        description: 'Advanced logical reasoning with complex puzzles, analytical reasoning, and critical thinking exercises.',
        difficulty: 'medium',
        estimatedHours: 25,
        resources: [
          { title: 'Complex Puzzles Guide', type: 'article', url: '#' },
          { title: 'Advanced Reasoning Practice', type: 'practice', url: '#' },
          { title: 'Critical Thinking Exercises', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'english',
        name: 'English',
        description: 'Advanced English communication including technical writing, presentation skills, and corporate communication.',
        difficulty: 'easy-medium',
        estimatedHours: 20,
        resources: [
          { title: 'Technical Writing Guide', type: 'article', url: '#' },
          { title: 'Presentation Skills Practice', type: 'practice', url: '#' },
          { title: 'Corporate English Communication', type: 'article', url: '#' }
        ]
      },
      {
        id: 'hr-interview',
        name: 'HR Interview',
        description: 'Advanced HR round preparation including leadership scenarios, conflict resolution, and salary negotiation.',
        difficulty: 'easy-medium',
        estimatedHours: 15,
        resources: [
          { title: 'Leadership Interview Questions', type: 'article', url: '#' },
          { title: 'Advanced Mock HR Interviews', type: 'practice', url: '#' },
          { title: 'Salary Negotiation Masterclass', type: 'article', url: '#' }
        ]
      },
      {
        id: 'technical-interview',
        name: 'Technical Interview',
        description: 'Advanced technical interview preparation including system design, architecture discussions, and deep technical concepts.',
        difficulty: 'hard',
        estimatedHours: 50,
        resources: [
          { title: 'System Design for MCA', type: 'article', url: '#' },
          { title: 'Advanced Mock Technical Rounds', type: 'practice', url: '#' },
          { title: 'Architecture Discussion Preparation', type: 'article', url: '#' }
        ]
      }
    ]
  },

  // ==================== COMMERCE ====================
  {
    id: 'bcom',
    name: 'B.Com',
    category: 'Commerce',
    icon: 'TrendingUp',
    color: 'amber',
    description: 'Bachelor of Commerce placement preparation covering accounting, finance, banking, GST, and commerce fundamentals.',
    topics: [
      {
        id: 'aptitude',
        name: 'Aptitude',
        description: 'Quantitative aptitude with emphasis on financial calculations, percentages, ratios, and data interpretation.',
        difficulty: 'easy-medium',
        estimatedHours: 35,
        resources: [
          { title: 'Financial Aptitude Guide', type: 'article', url: '#' },
          { title: 'Aptitude Practice for B.Com', type: 'practice', url: '#' },
          { title: 'Data Interpretation for Commerce', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'accounting',
        name: 'Accounting',
        description: 'Financial accounting, cost accounting, management accounting, and accounting standards for placement.',
        difficulty: 'medium',
        estimatedHours: 60,
        resources: [
          { title: 'Accounting Standards Guide', type: 'article', url: '#' },
          { title: 'Accounting Practice Problems', type: 'practice', url: '#' },
          { title: 'Tally and Accounting Software', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'finance',
        name: 'Finance',
        description: 'Financial management, corporate finance, investment analysis, and financial planning concepts.',
        difficulty: 'medium',
        estimatedHours: 45,
        resources: [
          { title: 'Financial Planning Guide', type: 'article', url: '#' },
          { title: 'Finance Case Studies', type: 'practice', url: '#' },
          { title: 'Financial Analysis Practice', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'banking',
        name: 'Banking',
        description: 'Banking operations, financial instruments, RBI regulations, and banking technology for placement.',
        difficulty: 'medium',
        estimatedHours: 35,
        resources: [
          { title: 'Banking Products and Services', type: 'article', url: '#' },
          { title: 'Banking Exam Preparation', type: 'practice', url: '#' },
          { title: 'Financial Instruments Overview', type: 'article', url: '#' }
        ]
      },
      {
        id: 'gst',
        name: 'GST',
        description: 'Goods and Services Tax including registration, returns, input tax credit, and GST compliance.',
        difficulty: 'medium',
        estimatedHours: 30,
        resources: [
          { title: 'GST Compliance Guide', type: 'article', url: '#' },
          { title: 'GST Return Filing Practice', type: 'practice', url: '#' },
          { title: 'GST Interview Questions', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'english',
        name: 'English',
        description: 'Business English, professional communication, report writing, and presentation skills for commerce roles.',
        difficulty: 'easy-medium',
        estimatedHours: 20,
        resources: [
          { title: 'Professional Communication Guide', type: 'article', url: '#' },
          { title: 'Report Writing Practice', type: 'practice', url: '#' },
          { title: 'English for Banking and Finance', type: 'article', url: '#' }
        ]
      },
      {
        id: 'interview',
        name: 'Interview',
        description: 'Complete interview preparation including commerce-specific questions, resume building, and soft skills.',
        difficulty: 'easy-medium',
        estimatedHours: 20,
        resources: [
          { title: 'Resume Writing for Commerce', type: 'article', url: '#' },
          { title: 'Mock Interview Practice', type: 'practice', url: '#' },
          { title: 'Commerce Placement Tips', type: 'article', url: '#' }
        ]
      }
    ]
  },
  {
    id: 'mcom',
    name: 'M.Com',
    category: 'Commerce',
    icon: 'BarChart3',
    color: 'orange',
    description: 'Master of Commerce placement preparation with advanced accounting, finance, taxation, and commerce research skills.',
    topics: [
      {
        id: 'aptitude',
        name: 'Aptitude',
        description: 'Advanced quantitative aptitude including financial modeling, statistical analysis, and data interpretation.',
        difficulty: 'medium',
        estimatedHours: 35,
        resources: [
          { title: 'Financial Modeling Guide', type: 'article', url: '#' },
          { title: 'Advanced Aptitude Practice', type: 'practice', url: '#' },
          { title: 'Statistical Analysis for Commerce', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'accounting',
        name: 'Accounting',
        description: 'Advanced accounting including international accounting standards, forensic accounting, and audit practices.',
        difficulty: 'hard',
        estimatedHours: 60,
        resources: [
          { title: 'International Accounting Standards', type: 'article', url: '#' },
          { title: 'Advanced Accounting Problems', type: 'practice', url: '#' },
          { title: 'Audit and Assurance Guide', type: 'article', url: '#' }
        ]
      },
      {
        id: 'finance',
        name: 'Finance',
        description: 'Advanced financial management, portfolio management, derivatives, and financial risk management.',
        difficulty: 'hard',
        estimatedHours: 55,
        resources: [
          { title: 'Portfolio Management Guide', type: 'article', url: '#' },
          { title: 'Financial Derivatives Practice', type: 'practice', url: '#' },
          { title: 'Risk Management in Finance', type: 'article', url: '#' }
        ]
      },
      {
        id: 'banking',
        name: 'Banking',
        description: 'Advanced banking including digital banking, fintech, risk management, and regulatory compliance.',
        difficulty: 'medium-hard',
        estimatedHours: 40,
        resources: [
          { title: 'Digital Banking Technologies', type: 'article', url: '#' },
          { title: 'Banking Risk Management', type: 'practice', url: '#' },
          { title: 'Fintech in Banking', type: 'article', url: '#' }
        ]
      },
      {
        id: 'gst',
        name: 'GST',
        description: 'Advanced GST including anti-profiteering, audit under GST, e-invoicing, and international trade taxation.',
        difficulty: 'medium-hard',
        estimatedHours: 35,
        resources: [
          { title: 'GST Audit Guide', type: 'article', url: '#' },
          { title: 'GST Advanced Practice', type: 'practice', url: '#' },
          { title: 'E-invoicing Complete Guide', type: 'article', url: '#' }
        ]
      },
      {
        id: 'english',
        name: 'English',
        description: 'Advanced business communication, research paper writing, and corporate presentation skills.',
        difficulty: 'medium',
        estimatedHours: 20,
        resources: [
          { title: 'Research Writing Guide', type: 'article', url: '#' },
          { title: 'Presentation Skills Advanced', type: 'practice', url: '#' },
          { title: 'Corporate Communication', type: 'article', url: '#' }
        ]
      },
      {
        id: 'interview',
        name: 'Interview',
        description: 'Advanced interview preparation for senior roles including leadership questions and industry-specific topics.',
        difficulty: 'medium',
        estimatedHours: 25,
        resources: [
          { title: 'Senior Level Interview Guide', type: 'article', url: '#' },
          { title: 'Advanced Mock Interviews', type: 'practice', url: '#' },
          { title: 'Industry-specific Interview Prep', type: 'article', url: '#' }
        ]
      }
    ]
  },

  // ==================== MANAGEMENT ====================
  {
    id: 'bba',
    name: 'BBA',
    category: 'Management',
    icon: 'Briefcase',
    color: 'pink',
    description: 'Bachelor of Business Administration placement preparation covering quantitative aptitude, reasoning, business fundamentals, and interview skills.',
    topics: [
      {
        id: 'quantitative-aptitude',
        name: 'Quantitative Aptitude',
        description: 'Quantitative aptitude with emphasis on business calculations, statistics, and management-related numerical problems.',
        difficulty: 'easy-medium',
        estimatedHours: 40,
        resources: [
          { title: 'Business Mathematics Guide', type: 'article', url: '#' },
          { title: 'Quantitative Practice Sets', type: 'practice', url: '#' },
          { title: 'Statistics for Management', type: 'article', url: '#' }
        ]
      },
      {
        id: 'logical-reasoning',
        name: 'Logical Reasoning',
        description: 'Logical and analytical reasoning including data interpretation, critical thinking, and problem-solving.',
        difficulty: 'medium',
        estimatedHours: 30,
        resources: [
          { title: 'Critical Thinking Guide', type: 'article', url: '#' },
          { title: 'Reasoning Practice for BBA', type: 'practice', url: '#' },
          { title: 'Data Interpretation Practice', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'english',
        name: 'English',
        description: 'Business English, professional communication, email etiquette, and corporate presentation skills.',
        difficulty: 'easy-medium',
        estimatedHours: 25,
        resources: [
          { title: 'Email Writing Guide', type: 'article', url: '#' },
          { title: 'Communication Skills Practice', type: 'practice', url: '#' },
        ]
      },
      {
        id: 'business-aptitude',
        name: 'Business Aptitude',
        description: 'Business awareness, current affairs in business, entrepreneurship basics, and management principles.',
        difficulty: 'medium',
        estimatedHours: 30,
        resources: [
          { title: 'Current Business Affairs', type: 'article', url: '#' },
          { title: 'Business Case Studies', type: 'practice', url: '#' },
          { title: 'Management Principles Overview', type: 'article', url: '#' }
        ]
      },
      {
        id: 'marketing',
        name: 'Marketing',
        description: 'Marketing fundamentals, digital marketing basics, consumer behavior, and brand management concepts.',
        difficulty: 'medium',
        estimatedHours: 35,
        resources: [
          { title: 'Digital Marketing Basics', type: 'article', url: '#' },
          { title: 'Marketing Case Studies', type: 'practice', url: '#' },
          { title: 'Consumer Behavior Guide', type: 'article', url: '#' }
        ]
      },
      {
        id: 'hr',
        name: 'HR',
        description: 'Human Resource Management basics, recruitment processes, organizational behavior, and talent management.',
        difficulty: 'medium',
        estimatedHours: 30,
        resources: [
          { title: 'Recruitment Process Guide', type: 'article', url: '#' },
          { title: 'HR Case Studies', type: 'practice', url: '#' },
          { title: 'Organizational Behavior Basics', type: 'article', url: '#' }
        ]
      },
      {
        id: 'gd-preparation',
        name: 'GD Preparation',
        description: 'Group discussion skills including topic analysis, communication, leadership, and team coordination.',
        difficulty: 'easy-medium',
        estimatedHours: 20,
        resources: [
          { title: 'Group Discussion Tips', type: 'article', url: '#' },
          { title: 'GD Topic Practice Sessions', type: 'practice', url: '#' },
          { title: 'Leadership in Group Discussion', type: 'article', url: '#' }
        ]
      },
      {
        id: 'hr-interview',
        name: 'HR Interview',
        description: 'HR round preparation including self-introduction, career goals, behavioral questions, and professional etiquette.',
        difficulty: 'easy-medium',
        estimatedHours: 15,
        resources: [
          { title: 'HR Interview Questions and Answers', type: 'article', url: '#' },
          { title: 'Mock HR Interview Practice', type: 'practice', url: '#' },
          { title: 'Professional Etiquette Guide', type: 'article', url: '#' }
        ]
      }
    ]
  },
  {
    id: 'mba',
    name: 'MBA',
    category: 'Management',
    icon: 'Building2',
    color: 'rose',
    description: 'Master of Business Administration placement preparation covering business aptitude, management concepts, case studies, and group discussions.',
    topics: [
      {
        id: 'business-aptitude',
        name: 'Business Aptitude',
        description: 'Advanced business awareness, market analysis, strategic thinking, and business acumen for management roles.',
        difficulty: 'medium',
        estimatedHours: 40,
        resources: [
          { title: 'Business Strategy Guide', type: 'article', url: '#' },
          { title: 'Market Analysis Practice', type: 'practice', url: '#' },
          { title: 'MBA Business Awareness', type: 'article', url: '#' }
        ]
      },
      {
        id: 'management',
        name: 'Management',
        description: 'Core management principles, strategic management, operations, and leadership concepts for placement.',
        difficulty: 'medium-hard',
        estimatedHours: 50,
        resources: [
          { title: 'Strategic Management Guide', type: 'article', url: '#' },
          { title: 'Management Case Studies', type: 'practice', url: '#' },
          { title: 'Leadership and Team Management', type: 'article', url: '#' }
        ]
      },
      {
        id: 'hr',
        name: 'HR',
        description: 'Advanced HR management including talent acquisition, performance management, compensation, and organizational development.',
        difficulty: 'medium',
        estimatedHours: 35,
        resources: [
          { title: 'Talent Management Guide', type: 'article', url: '#' },
          { title: 'HR Analytics Practice', type: 'practice', url: '#' },
          { title: 'Organizational Development', type: 'article', url: '#' }
        ]
      },
      {
        id: 'case-study',
        name: 'Case Study',
        description: 'Case study analysis methodology, business problem solving, framework application, and presentation.',
        difficulty: 'hard',
        estimatedHours: 45,
        resources: [
          { title: 'Case Study Frameworks Guide', type: 'article', url: '#' },
          { title: 'Practice 50+ Case Studies', type: 'practice', url: '#' },
          { title: 'McKinsey Case Method', type: 'article', url: '#' }
        ]
      },
      {
        id: 'group-discussion',
        name: 'Group Discussion',
        description: 'Advanced group discussion techniques including topic analysis, negotiation, persuasion, and conflict resolution.',
        difficulty: 'medium',
        estimatedHours: 20,
        resources: [
          { title: 'GD Topic Analysis Guide', type: 'article', url: '#' },
          { title: 'GD Practice Sessions', type: 'practice', url: '#' },
          { title: 'Negotiation Skills in GD', type: 'article', url: '#' }
        ]
      },
      {
        id: 'interview',
        name: 'Interview',
        description: 'MBA interview preparation including leadership scenarios, business case discussions, and executive presence.',
        difficulty: 'medium',
        estimatedHours: 30,
        resources: [
          { title: 'Executive Interview Guide', type: 'article', url: '#' },
          { title: 'Advanced Mock Interviews', type: 'practice', url: '#' },
          { title: 'Business Case Interview Prep', type: 'practice', url: '#' }
        ]
      }
    ]
  },

  // ==================== SCIENCE ====================
  {
    id: 'bsc',
    name: 'B.Sc',
    category: 'Science',
    icon: 'Atom',
    color: 'teal',
    description: 'Bachelor of Science placement preparation covering aptitude, reasoning, core science concepts, and interview skills.',
    topics: [
      {
        id: 'aptitude',
        name: 'Aptitude',
        description: 'Quantitative aptitude with emphasis on scientific calculations, statistics, and analytical problem-solving.',
        difficulty: 'easy-medium',
        estimatedHours: 35,
        resources: [
          { title: 'Scientific Aptitude Guide', type: 'article', url: '#' },
          { title: 'Aptitude Practice for B.Sc', type: 'practice', url: '#' },
          { title: 'Data Analysis for Science Students', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'reasoning',
        name: 'Reasoning',
        description: 'Logical reasoning, scientific reasoning, analytical thinking, and problem-solving methodology.',
        difficulty: 'medium',
        estimatedHours: 30,
        resources: [
          { title: 'Analytical Reasoning Guide', type: 'article', url: '#' },
          { title: 'Reasoning Practice Sets', type: 'practice', url: '#' },
          { title: 'Scientific Problem Solving', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'english',
        name: 'English',
        description: 'English language skills including scientific writing, technical communication, and professional correspondence.',
        difficulty: 'easy',
        estimatedHours: 20,
        resources: [
          { title: 'Scientific Writing Guide', type: 'article', url: '#' },
          { title: 'English Communication Practice', type: 'practice', url: '#' },
          { title: 'Technical Report Writing', type: 'article', url: '#' }
        ]
      },
      {
        id: 'core-science',
        name: 'Core Science',
        description: 'Branch-specific science concepts including Physics, Chemistry, Biology, Mathematics, and applied sciences.',
        difficulty: 'medium-hard',
        estimatedHours: 60,
        resources: [
          { title: 'Science Concepts Quick Reference', type: 'article', url: '#' },
          { title: 'Science Practice Problems', type: 'practice', url: '#' },
          { title: 'Lab and Practical Questions', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'computer-basics',
        name: 'Computer Basics',
        description: 'Computer fundamentals, MS Office, internet basics, data entry, and basic programming concepts.',
        difficulty: 'easy',
        estimatedHours: 25,
        resources: [
          { title: 'MS Office Tutorial', type: 'article', url: '#' },
          { title: 'Computer Practice Exercises', type: 'practice', url: '#' },
          { title: 'Internet and Email Basics', type: 'article', url: '#' }
        ]
      },
      {
        id: 'interview',
        name: 'Interview',
        description: 'Interview preparation including science-specific questions, lab experience discussion, and career goals.',
        difficulty: 'easy-medium',
        estimatedHours: 20,
        resources: [
          { title: 'Interview Tips for Science Graduates', type: 'article', url: '#' },
          { title: 'Mock Interview Practice', type: 'practice', url: '#' },
          { title: 'Resume Building for Science', type: 'article', url: '#' }
        ]
      }
    ]
  },
  {
    id: 'msc',
    name: 'M.Sc',
    category: 'Science',
    icon: 'FlaskConical',
    color: 'emerald',
    description: 'Master of Science placement preparation with advanced scientific knowledge, research skills, and professional competencies.',
    topics: [
      {
        id: 'aptitude',
        name: 'Aptitude',
        description: 'Advanced quantitative aptitude including research methodology, statistical analysis, and scientific data interpretation.',
        difficulty: 'medium',
        estimatedHours: 35,
        resources: [
          { title: 'Research Aptitude Guide', type: 'article', url: '#' },
          { title: 'Advanced Aptitude Practice', type: 'practice', url: '#' },
          { title: 'Statistical Analysis for M.Sc', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'reasoning',
        name: 'Reasoning',
        description: 'Advanced logical reasoning, research-oriented thinking, and scientific methodology for placement.',
        difficulty: 'medium',
        estimatedHours: 30,
        resources: [
          { title: 'Research Methodology Guide', type: 'article', url: '#' },
          { title: 'Advanced Reasoning Practice', type: 'practice', url: '#' },
          { title: 'Critical Analysis Skills', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'english',
        name: 'English',
        description: 'Advanced scientific English including research paper writing, conference presentation, and academic communication.',
        difficulty: 'medium',
        estimatedHours: 20,
        resources: [
          { title: 'Research Paper Writing Guide', type: 'article', url: '#' },
          { title: 'Academic Presentation Skills', type: 'practice', url: '#' },
          { title: 'Scientific Communication', type: 'article', url: '#' }
        ]
      },
      {
        id: 'core-science',
        name: 'Core Science',
        description: 'Advanced branch-specific science concepts with research applications and industry-oriented knowledge.',
        difficulty: 'hard',
        estimatedHours: 70,
        resources: [
          { title: 'Industry Applications Guide', type: 'article', url: '#' },
          { title: 'Advanced Science Problems', type: 'practice', url: '#' },
          { title: 'Research-based Questions', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'computer-basics',
        name: 'Computer Basics',
        description: 'Advanced computing skills including data analysis software, programming for science, and computational tools.',
        difficulty: 'easy-medium',
        estimatedHours: 30,
        resources: [
          { title: 'Data Analysis Software Guide', type: 'article', url: '#' },
          { title: 'Scientific Computing Practice', type: 'practice', url: '#' },
          { title: 'Programming for Science', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'interview',
        name: 'Interview',
        description: 'Advanced interview preparation including research discussion, publications, and industry research roles.',
        difficulty: 'medium',
        estimatedHours: 25,
        resources: [
          { title: 'Research Interview Guide', type: 'article', url: '#' },
          { title: 'Advanced Mock Interviews', type: 'practice', url: '#' },
          { title: 'Industry Research Roles Guide', type: 'article', url: '#' }
        ]
      }
    ]
  },

  // ==================== ARTS ====================
  {
    id: 'ba',
    name: 'BA',
    category: 'Arts',
    icon: 'BookOpen',
    color: 'amber',
    description: 'Bachelor of Arts placement preparation covering aptitude, reasoning, English, general knowledge, and interview skills.',
    topics: [
      {
        id: 'aptitude',
        name: 'Aptitude',
        description: 'Quantitative aptitude with emphasis on general reasoning, numerical ability, and data interpretation.',
        difficulty: 'easy',
        estimatedHours: 30,
        resources: [
          { title: 'Basic Quantitative Guide', type: 'article', url: '#' },
          { title: 'Aptitude Practice for BA', type: 'practice', url: '#' },
          { title: 'Numerical Ability Basics', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'reasoning',
        name: 'Reasoning',
        description: 'Logical reasoning, verbal reasoning, analytical ability, and general intelligence for placement.',
        difficulty: 'easy-medium',
        estimatedHours: 30,
        resources: [
          { title: 'Verbal Reasoning Guide', type: 'article', url: '#' },
          { title: 'Reasoning Practice Sets', type: 'practice', url: '#' },
          { title: 'Analytical Ability Practice', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'english',
        name: 'English',
        description: 'English language proficiency including grammar, vocabulary, comprehension, and communication skills.',
        difficulty: 'easy',
        estimatedHours: 25,
        resources: [
          { title: 'English Grammar Complete Guide', type: 'article', url: '#' },
          { title: 'English Comprehension Practice', type: 'practice', url: '#' },
          { title: 'Communication Skills Development', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'general-knowledge',
        name: 'General Knowledge',
        description: 'Current affairs, static GK, Indian history, geography, polity, and competitive exam preparation.',
        difficulty: 'easy-medium',
        estimatedHours: 35,
        resources: [
          { title: 'Current Affairs Monthly Digest', type: 'article', url: '#' },
          { title: 'GK Practice Questions', type: 'practice', url: '#' },
          { title: 'Indian History and Culture', type: 'article', url: '#' }
        ]
      },
      {
        id: 'interview',
        name: 'Interview',
        description: 'Interview preparation including communication skills, personality development, and career orientation.',
        difficulty: 'easy',
        estimatedHours: 20,
        resources: [
          { title: 'Personality Development Tips', type: 'article', url: '#' },
          { title: 'Mock Interview Practice', type: 'practice', url: '#' },
          { title: 'Career Options for BA Graduates', type: 'article', url: '#' }
        ]
      }
    ]
  },
  {
    id: 'ma',
    name: 'MA',
    category: 'Arts',
    icon: 'ScrollText',
    color: 'pink',
    description: 'Master of Arts placement preparation with advanced reasoning, English proficiency, general knowledge, and professional skills.',
    topics: [
      {
        id: 'aptitude',
        name: 'Aptitude',
        description: 'Advanced quantitative aptitude with research methodology, statistical reasoning, and analytical skills.',
        difficulty: 'easy-medium',
        estimatedHours: 30,
        resources: [
          { title: 'Analytical Reasoning Guide', type: 'article', url: '#' },
          { title: 'Advanced Aptitude Practice', type: 'practice', url: '#' },
          { title: 'Research Methodology Basics', type: 'article', url: '#' }
        ]
      },
      {
        id: 'reasoning',
        name: 'Reasoning',
        description: 'Advanced logical reasoning, critical thinking, analytical writing, and problem-solving for placement.',
        difficulty: 'medium',
        estimatedHours: 30,
        resources: [
          { title: 'Critical Thinking Guide', type: 'article', url: '#' },
          { title: 'Advanced Reasoning Practice', type: 'practice', url: '#' },
          { title: 'Analytical Writing Practice', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'english',
        name: 'English',
        description: 'Advanced English communication, academic writing, research presentation, and professional correspondence.',
        difficulty: 'medium',
        estimatedHours: 25,
        resources: [
          { title: 'Academic Writing Guide', type: 'article', url: '#' },
          { title: 'Presentation Skills Practice', type: 'practice', url: '#' },
          { title: 'Professional Correspondence', type: 'article', url: '#' }
        ]
      },
      {
        id: 'general-knowledge',
        name: 'General Knowledge',
        description: 'Advanced current affairs, world affairs, specialized domain knowledge, and competitive exam preparation.',
        difficulty: 'medium',
        estimatedHours: 35,
        resources: [
          { title: 'World Affairs and Current Events', type: 'article', url: '#' },
          { title: 'Advanced GK Practice', type: 'practice', url: '#' },
          { title: 'Domain-specific Knowledge', type: 'article', url: '#' }
        ]
      },
      {
        id: 'interview',
        name: 'Interview',
        description: 'Advanced interview preparation for academic, research, and corporate roles with subject expertise focus.',
        difficulty: 'easy-medium',
        estimatedHours: 20,
        resources: [
          { title: 'Academic Interview Guide', type: 'article', url: '#' },
          { title: 'Advanced Mock Interviews', type: 'practice', url: '#' },
          { title: 'Career Paths for MA Graduates', type: 'article', url: '#' }
        ]
      }
    ]
  },

  // ==================== ITI ====================
  {
    id: 'iti',
    name: 'ITI',
    category: 'ITI',
    icon: 'Hammer',
    color: 'orange',
    description: 'Industrial Training Institute placement preparation covering trade-specific technical skills, aptitude, reasoning, and interview readiness.',
    topics: [
      {
        id: 'core-technical',
        name: 'Core Technical',
        description: 'Trade-specific technical skills including practical knowledge, tool handling, safety procedures, and trade theory.',
        difficulty: 'easy-medium',
        estimatedHours: 60,
        resources: [
          { title: 'Trade Theory and Practical', type: 'article', url: '#' },
          { title: 'Technical Practice Questions', type: 'practice', url: '#' },
          { title: 'Safety and Workshop Practice', type: 'article', url: '#' }
        ]
      },
      {
        id: 'aptitude',
        name: 'Aptitude',
        description: 'Basic quantitative aptitude and numerical ability for ITI trade placement exams.',
        difficulty: 'easy',
        estimatedHours: 25,
        resources: [
          { title: 'Basic Aptitude Guide', type: 'article', url: '#' },
          { title: 'Aptitude Practice for ITI', type: 'practice', url: '#' },
          { title: 'Numerical Ability Basics', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'reasoning',
        name: 'Reasoning',
        description: 'Basic logical reasoning, mental ability, and trade-related problem-solving for ITI students.',
        difficulty: 'easy',
        estimatedHours: 20,
        resources: [
          { title: 'Basic Reasoning Guide', type: 'article', url: '#' },
          { title: 'Reasoning Practice Sets', type: 'practice', url: '#' },
          { title: 'Mental Ability Test Prep', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'interview',
        name: 'Interview',
        description: 'Interview skills, trade demonstration, confidence building, and job readiness for ITI graduates.',
        difficulty: 'easy',
        estimatedHours: 15,
        resources: [
          { title: 'Interview Tips for ITI Graduates', type: 'article', url: '#' },
          { title: 'Mock Interview Practice', type: 'practice', url: '#' },
          { title: 'Job Readiness Guide', type: 'article', url: '#' }
        ]
      }
    ]
  },

  // ==================== OTHER PROFESSIONAL COURSES ====================
  {
    id: 'other-professional',
    name: 'Other Professional Courses',
    category: 'Other',
    icon: 'Layers',
    color: 'slate',
    description: 'Placement preparation for various professional courses including law, pharmacy, design, and other specialized fields.',
    topics: [
      {
        id: 'aptitude',
        name: 'Aptitude',
        description: 'Quantitative aptitude and logical reasoning tailored for professional course placement requirements.',
        difficulty: 'easy-medium',
        estimatedHours: 35,
        resources: [
          { title: 'Aptitude Guide for Professionals', type: 'article', url: '#' },
          { title: 'Aptitude Practice Sets', type: 'practice', url: '#' },
          { title: 'Reasoning and Verbal Ability', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'reasoning',
        name: 'Reasoning',
        description: 'Logical reasoning, analytical thinking, and domain-specific problem-solving for professional roles.',
        difficulty: 'easy-medium',
        estimatedHours: 25,
        resources: [
          { title: 'Analytical Reasoning Guide', type: 'article', url: '#' },
          { title: 'Reasoning Practice for Placement', type: 'practice', url: '#' },
          { title: 'Domain-specific Reasoning', type: 'practice', url: '#' }
        ]
      },
      {
        id: 'english',
        name: 'English',
        description: 'Professional English communication, industry-specific terminology, and workplace communication skills.',
        difficulty: 'easy-medium',
        estimatedHours: 20,
        resources: [
          { title: 'Industry English Terminology', type: 'article', url: '#' },
          { title: 'Communication Skills Practice', type: 'practice', url: '#' },
          { title: 'Workplace Communication Guide', type: 'article', url: '#' }
        ]
      },
      {
        id: 'domain-knowledge',
        name: 'Domain Knowledge',
        description: 'Specialized domain knowledge specific to your professional course including industry trends and applications.',
        difficulty: 'medium',
        estimatedHours: 50,
        resources: [
          { title: 'Industry Trends and Applications', type: 'article', url: '#' },
          { title: 'Domain Practice Questions', type: 'practice', url: '#' },
          { title: 'Professional Certification Guide', type: 'article', url: '#' }
        ]
      },
      {
        id: 'interview',
        name: 'Interview',
        description: 'Professional interview preparation including industry-specific questions and career development.',
        difficulty: 'easy-medium',
        estimatedHours: 20,
        resources: [
          { title: 'Industry Interview Tips', type: 'article', url: '#' },
          { title: 'Mock Interview Sessions', type: 'practice', url: '#' },
          { title: 'Career Development Planning', type: 'article', url: '#' }
        ]
      }
    ]
  }
];

export const courseCategories = {
  Engineering: courseRoadmaps.filter(c => c.category === 'Engineering'),
  Computer: courseRoadmaps.filter(c => c.category === 'Computer'),
  Commerce: courseRoadmaps.filter(c => c.category === 'Commerce'),
  Management: courseRoadmaps.filter(c => c.category === 'Management'),
  Science: courseRoadmaps.filter(c => c.category === 'Science'),
  Arts: courseRoadmaps.filter(c => c.category === 'Arts'),
  ITI: courseRoadmaps.filter(c => c.category === 'ITI'),
  Other: courseRoadmaps.filter(c => c.category === 'Other')
};

export default courseRoadmaps;
