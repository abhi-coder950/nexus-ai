const localCodingQuestions = [
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // C
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-c-1',
    title: 'Hello World in C',
    description: `Write a C program that prints "Hello, World!" to the console followed by a newline character.`,
    difficulty: 'easy',
    category: 'C',
    constraints: 'No input constraints.',
    inputFormat: 'No input.',
    outputFormat: 'Print "Hello, World!"',
    sampleInput: '',
    sampleOutput: 'Hello, World!',
    testCases: [
      { input: '', expectedOutput: 'Hello, World!', isHidden: false },
      { input: '', expectedOutput: 'Hello, World!', isHidden: true }
    ],
    starterCode: [
      { language: 'cpp', template: '#include <stdio.h>\n\nint main() {\n    // Print Hello, World!\n    return 0;\n}' }
    ]
  },
  {
    _id: 'local-c-2',
    title: 'Sum of Two Numbers in C',
    description: `Write a C program that reads two integers from the user and prints their sum.`,
    difficulty: 'easy',
    category: 'C',
    constraints: '-1000 <= a, b <= 1000',
    inputFormat: 'Two integers a and b separated by space.',
    outputFormat: 'Print a + b.',
    sampleInput: '3 5',
    sampleOutput: '8',
    testCases: [
      { input: '3 5', expectedOutput: '8', isHidden: false },
      { input: '-1 1', expectedOutput: '0', isHidden: false },
      { input: '100 200', expectedOutput: '300', isHidden: true }
    ],
    starterCode: [
      { language: 'cpp', template: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    // Print the sum\n    return 0;\n}' }
    ]
  },
  {
    _id: 'local-c-3',
    title: 'Even or Odd in C',
    description: `Write a C program that reads an integer and prints "Even" if it is even, or "Odd" if it is odd.`,
    difficulty: 'easy',
    category: 'C',
    constraints: '-10^6 <= n <= 10^6',
    inputFormat: 'A single integer n.',
    outputFormat: 'Print "Even" or "Odd".',
    sampleInput: '4',
    sampleOutput: 'Even',
    testCases: [
      { input: '4', expectedOutput: 'Even', isHidden: false },
      { input: '7', expectedOutput: 'Odd', isHidden: false },
      { input: '0', expectedOutput: 'Even', isHidden: true }
    ],
    starterCode: [
      { language: 'cpp', template: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Print Even or Odd\n    return 0;\n}' }
    ]
  },
  {
    _id: 'local-c-4',
    title: 'Factorial in C',
    description: `Write a C program that computes the factorial of a non-negative integer n.`,
    difficulty: 'easy',
    category: 'C',
    constraints: '0 <= n <= 12',
    inputFormat: 'A single integer n.',
    outputFormat: 'Print n!',
    sampleInput: '5',
    sampleOutput: '120',
    testCases: [
      { input: '5', expectedOutput: '120', isHidden: false },
      { input: '0', expectedOutput: '1', isHidden: false },
      { input: '10', expectedOutput: '3628800', isHidden: true }
    ],
    starterCode: [
      { language: 'cpp', template: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Compute and print factorial\n    return 0;\n}' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // C++
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-cpp-1',
    title: 'Two Sum',
    description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    difficulty: 'easy',
    category: 'C++',
    constraints: '2 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9\n-10^9 <= target <= 10^9\nExactly one valid answer exists.',
    inputFormat: 'First line: array of integers\nSecond line: target integer',
    outputFormat: 'Return indices of the two numbers as an array.',
    sampleInput: 'nums = [2,7,11,15], target = 9',
    sampleOutput: '[0, 1]',
    testCases: [
      { input: '[2,7,11,15]\n9', expectedOutput: '[0,1]', isHidden: false },
      { input: '[3,2,4]\n6', expectedOutput: '[1,2]', isHidden: false },
      { input: '[3,3]\n6', expectedOutput: '[0,1]', isHidden: true }
    ],
    starterCode: [
      { language: 'cpp', template: '#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Write your solution here\n        \n    }\n};' },
      { language: 'javascript', template: 'function twoSum(nums, target) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def twoSum(nums, target):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-cpp-2',
    title: 'Reverse a String in C++',
    description: `Write a function that reverses a string. The input string is given as a character array \`s\`.

You must do this by modifying the input array in-place with O(1) extra memory.`,
    difficulty: 'easy',
    category: 'C++',
    constraints: '1 <= s.length <= 10^5\ns[i] is a printable ascii character.',
    inputFormat: 'A string s.',
    outputFormat: 'The reversed string.',
    sampleInput: 'hello',
    sampleOutput: 'olleh',
    testCases: [
      { input: 'hello', expectedOutput: 'olleh', isHidden: false },
      { input: 'Hannah', expectedOutput: 'hannaH', isHidden: false },
      { input: 'a', expectedOutput: 'a', isHidden: true }
    ],
    starterCode: [
      { language: 'cpp', template: '#include <string>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n    void reverseString(string& s) {\n        // Write your solution here\n        \n    }\n};' },
      { language: 'javascript', template: 'function reverseString(s) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def reverseString(s):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-cpp-3',
    title: 'Palindrome Number',
    description: `Given an integer x, return true if x is a palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is a palindrome while 123 is not.`,
    difficulty: 'easy',
    category: 'C++',
    constraints: '-2^31 <= x <= 2^31 - 1',
    inputFormat: 'A single integer x.',
    outputFormat: 'Return true or false.',
    sampleInput: '121',
    sampleOutput: 'true',
    testCases: [
      { input: '121', expectedOutput: 'true', isHidden: false },
      { input: '-121', expectedOutput: 'false', isHidden: false },
      { input: '10', expectedOutput: 'false', isHidden: false },
      { input: '0', expectedOutput: 'true', isHidden: true }
    ],
    starterCode: [
      { language: 'cpp', template: 'class Solution {\npublic:\n    bool isPalindrome(int x) {\n        // Write your solution here\n        \n    }\n};' },
      { language: 'javascript', template: 'function isPalindrome(x) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def isPalindrome(x):\n    # Write your solution here\n    pass' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // Java
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-java-1',
    title: 'Two Sum (Java)',
    description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
    difficulty: 'easy',
    category: 'Java',
    constraints: '2 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9\n-10^9 <= target <= 10^9',
    inputFormat: 'First line: array of integers\nSecond line: target',
    outputFormat: 'Return indices as an array [i, j].',
    sampleInput: 'nums = [2,7,11,15], target = 9',
    sampleOutput: '[0, 1]',
    testCases: [
      { input: '[2,7,11,15]\n9', expectedOutput: '[0,1]', isHidden: false },
      { input: '[3,2,4]\n6', expectedOutput: '[1,2]', isHidden: false },
      { input: '[3,3]\n6', expectedOutput: '[0,1]', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your solution here\n        \n    }\n}' },
      { language: 'python', template: 'def twoSum(nums, target):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-java-2',
    title: 'FizzBuzz',
    description: `Given an integer n, return a string array answer (1-indexed) where:

- answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
- answer[i] == "Fizz" if i is divisible by 3.
- answer[i] == "Buzz" if i is divisible by 5.
- answer[i] == i (as a string) if none of the above conditions are true.`,
    difficulty: 'easy',
    category: 'Java',
    constraints: '1 <= n <= 10^4',
    inputFormat: 'A single integer n.',
    outputFormat: 'Return the FizzBuzz array as a comma-separated string.',
    sampleInput: '5',
    sampleOutput: '1,2,Fizz,4,Buzz',
    testCases: [
      { input: '5', expectedOutput: '1,2,Fizz,4,Buzz', isHidden: false },
      { input: '15', expectedOutput: '1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function fizzBuzz(n) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def fizzBuzz(n):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-java-3',
    title: 'Bubble Sort',
    description: `Implement bubble sort to sort an array of integers in ascending order.

Bubble sort works by repeatedly swapping adjacent elements if they are in the wrong order.`,
    difficulty: 'easy',
    category: 'Java',
    constraints: '1 <= nums.length <= 10^3\n-10^4 <= nums[i] <= 10^4',
    inputFormat: 'An array of integers.',
    outputFormat: 'Return the sorted array.',
    sampleInput: '[5,3,8,1,2]',
    sampleOutput: '[1,2,3,5,8]',
    testCases: [
      { input: '[5,3,8,1,2]', expectedOutput: '[1,2,3,5,8]', isHidden: false },
      { input: '[1]', expectedOutput: '[1]', isHidden: false },
      { input: '[4,3,2,1]', expectedOutput: '[1,2,3,4]', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function bubbleSort(nums) {\n  // Write your solution here\n  return nums;\n}' },
      { language: 'python', template: 'def bubbleSort(nums):\n    # Write your solution here\n    return nums' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // Python
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-py-1',
    title: 'Reverse String (Python)',
    description: `Write a function that reverses a string.`,
    difficulty: 'easy',
    category: 'Python',
    constraints: '1 <= s.length <= 10^5\ns consists of printable ASCII characters.',
    inputFormat: 'A string s.',
    outputFormat: 'The reversed string.',
    sampleInput: 'hello',
    sampleOutput: 'olleh',
    testCases: [
      { input: 'hello', expectedOutput: 'olleh', isHidden: false },
      { input: 'Python', expectedOutput: 'nohtyP', isHidden: false },
      { input: 'a', expectedOutput: 'a', isHidden: true }
    ],
    starterCode: [
      { language: 'python', template: 'def reverseString(s):\n    # Write your solution here\n    pass' },
      { language: 'javascript', template: 'function reverseString(s) {\n  // Write your solution here\n  \n}' }
    ]
  },
  {
    _id: 'local-py-2',
    title: 'Palindrome Check (Python)',
    description: `Given a string s, return true if it is a palindrome, or false otherwise.

A palindrome reads the same forward and backward. Consider only alphanumeric characters and ignore cases.`,
    difficulty: 'easy',
    category: 'Python',
    constraints: '1 <= s.length <= 2 * 10^5',
    inputFormat: 'A string s.',
    outputFormat: 'Return True or False.',
    sampleInput: 'A man, a plan, a canal: Panama',
    sampleOutput: 'true',
    testCases: [
      { input: 'A man, a plan, a canal: Panama', expectedOutput: 'true', isHidden: false },
      { input: 'race a car', expectedOutput: 'false', isHidden: false },
      { input: ' ', expectedOutput: 'true', isHidden: true }
    ],
    starterCode: [
      { language: 'python', template: 'def isPalindrome(s):\n    # Write your solution here\n    pass' },
      { language: 'javascript', template: 'function isPalindrome(s) {\n  // Write your solution here\n  \n}' }
    ]
  },
  {
    _id: 'local-py-3',
    title: 'Fibonacci Sequence',
    description: `Write a function that returns the first n numbers of the Fibonacci sequence.

The Fibonacci sequence starts with 0 and 1. Each subsequent number is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8, 13, ...`,
    difficulty: 'easy',
    category: 'Python',
    constraints: '0 <= n <= 30',
    inputFormat: 'A single integer n.',
    outputFormat: 'Return the first n Fibonacci numbers as a comma-separated list.',
    sampleInput: '7',
    sampleOutput: '0,1,1,2,3,5,8',
    testCases: [
      { input: '7', expectedOutput: '0,1,1,2,3,5,8', isHidden: false },
      { input: '1', expectedOutput: '0', isHidden: false },
      { input: '0', expectedOutput: '', isHidden: false },
      { input: '10', expectedOutput: '0,1,1,2,3,5,8,13,21,34', isHidden: true }
    ],
    starterCode: [
      { language: 'python', template: 'def fibonacci(n):\n    # Write your solution here\n    pass' },
      { language: 'javascript', template: 'function fibonacci(n) {\n  // Write your solution here\n  \n}' }
    ]
  },
  {
    _id: 'local-py-4',
    title: 'Armstrong Number',
    description: `Write a function that checks if a given number is an Armstrong number.

An Armstrong number (narcissistic number) of n digits is a number where the sum of each digit raised to the power n equals the number itself.

For example: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153`,
    difficulty: 'easy',
    category: 'Python',
    constraints: '0 <= n <= 10^6',
    inputFormat: 'A single integer n.',
    outputFormat: 'Return True if Armstrong number, False otherwise.',
    sampleInput: '153',
    sampleOutput: 'true',
    testCases: [
      { input: '153', expectedOutput: 'true', isHidden: false },
      { input: '370', expectedOutput: 'true', isHidden: false },
      { input: '123', expectedOutput: 'false', isHidden: false },
      { input: '1', expectedOutput: 'true', isHidden: true }
    ],
    starterCode: [
      { language: 'python', template: 'def isArmstrong(n):\n    # Write your solution here\n    pass' },
      { language: 'javascript', template: 'function isArmstrong(n) {\n  // Write your solution here\n  \n}' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // JavaScript
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-js-1',
    title: 'Palindrome String',
    description: `Write a function that checks if a given string is a palindrome.

A palindrome string reads the same backward as forward. Ignore non-alphanumeric characters and consider case-insensitive comparison.`,
    difficulty: 'easy',
    category: 'JavaScript',
    constraints: '1 <= s.length <= 2 * 10^5\ns consists only of printable ASCII characters.',
    inputFormat: 'A string s.',
    outputFormat: 'Return true or false.',
    sampleInput: 'racecar',
    sampleOutput: 'true',
    testCases: [
      { input: 'racecar', expectedOutput: 'true', isHidden: false },
      { input: 'hello', expectedOutput: 'false', isHidden: false },
      { input: 'A Santa at NASA', expectedOutput: 'true', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function isPalindrome(s) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def isPalindrome(s):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-js-2',
    title: 'FizzBuzz (JavaScript)',
    description: `Write a function that returns an array of strings from 1 to n where:

- For multiples of 3, return "Fizz"
- For multiples of 5, return "Buzz"
- For multiples of both 3 and 5, return "FizzBuzz"
- Otherwise, return the number as a string`,
    difficulty: 'easy',
    category: 'JavaScript',
    constraints: '1 <= n <= 10^4',
    inputFormat: 'A single integer n.',
    outputFormat: 'Return a comma-separated string of the array.',
    sampleInput: '5',
    sampleOutput: '1,2,Fizz,4,Buzz',
    testCases: [
      { input: '5', expectedOutput: '1,2,Fizz,4,Buzz', isHidden: false },
      { input: '15', expectedOutput: '1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function fizzBuzz(n) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def fizzBuzz(n):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-js-3',
    title: 'Find Maximum in Array',
    description: `Write a function that finds and returns the maximum value in an array of integers.`,
    difficulty: 'easy',
    category: 'JavaScript',
    constraints: '1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4',
    inputFormat: 'An array of integers.',
    outputFormat: 'Return the maximum value.',
    sampleInput: '[3,7,2,9,1]',
    sampleOutput: '9',
    testCases: [
      { input: '[3,7,2,9,1]', expectedOutput: '9', isHidden: false },
      { input: '[-1,-5,-3]', expectedOutput: '-1', isHidden: false },
      { input: '[42]', expectedOutput: '42', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function findMax(nums) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def findMax(nums):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-js-4',
    title: 'Count Vowels',
    description: `Write a function that counts the number of vowels (a, e, i, o, u) in a given string. The comparison should be case-insensitive.`,
    difficulty: 'easy',
    category: 'JavaScript',
    constraints: '1 <= s.length <= 10^5\ns consists of lowercase and uppercase English letters.',
    inputFormat: 'A string s.',
    outputFormat: 'Return the count of vowels.',
    sampleInput: 'hello world',
    sampleOutput: '3',
    testCases: [
      { input: 'hello world', expectedOutput: '3', isHidden: false },
      { input: 'AEIOU', expectedOutput: '5', isHidden: false },
      { input: 'bcdfg', expectedOutput: '0', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function countVowels(s) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def countVowels(s):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-js-5',
    title: 'Flatten Nested Array',
    description: `Write a function that flattens a nested array into a single-level array.

For example: flatten([1, [2, [3, 4], 5], 6]) should return [1, 2, 3, 4, 5, 6].`,
    difficulty: 'medium',
    category: 'JavaScript',
    constraints: '0 <= nested array length <= 10^4\nDepth of nesting <= 10',
    inputFormat: 'A nested array.',
    outputFormat: 'Return a flat array.',
    sampleInput: '[1,[2,[3,4],5],6]',
    sampleOutput: '[1,2,3,4,5,6]',
    testCases: [
      { input: '[1,[2,[3,4],5],6]', expectedOutput: '[1,2,3,4,5,6]', isHidden: false },
      { input: '[]', expectedOutput: '[]', isHidden: false },
      { input: '[1,[2],[3,[4,[5]]]]', expectedOutput: '[1,2,3,4,5]', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function flatten(arr) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def flatten(arr):\n    # Write your solution here\n    pass' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // HTML
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-html-1',
    title: 'Create a Basic HTML Page',
    description: `Write the basic HTML5 boilerplate structure including:
- DOCTYPE declaration
- html, head, and body tags
- A title tag with "My Page"
- A heading tag (h1) with "Hello World"
- A paragraph tag with "This is my first page."`,
    difficulty: 'easy',
    category: 'HTML',
    constraints: 'Must be valid HTML5.',
    inputFormat: 'No input.',
    outputFormat: 'Return the complete HTML string.',
    sampleInput: '',
    sampleOutput: '<!DOCTYPE html><html><head><title>My Page</title></head><body><h1>Hello World</h1><p>This is my first page.</p></body></html>',
    testCases: [
      { input: '', expectedOutput: 'Valid HTML5 with title, h1, and p tags', isHidden: false },
      { input: '', expectedOutput: 'HTML5 boilerplate', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: '// Write the complete HTML5 boilerplate here\nconst html = `\n\n`;' }
    ]
  },
  {
    _id: 'local-html-2',
    title: 'Create an Ordered List',
    description: `Write HTML for an ordered list of three programming languages:
1. Python
2. JavaScript
3. Java`,
    difficulty: 'easy',
    category: 'HTML',
    constraints: 'Must use <ol> and <li> tags.',
    inputFormat: 'No input.',
    outputFormat: 'Return the HTML string.',
    sampleInput: '',
    sampleOutput: '<ol><li>Python</li><li>JavaScript</li><li>Java</li></ol>',
    testCases: [
      { input: '', expectedOutput: 'Ordered list with 3 items', isHidden: false },
      { input: '', expectedOutput: 'Uses <ol> and <li> tags', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: '// Write the HTML for the ordered list\nconst list = `\n\n`;' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // HTML â€” Additional
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-html-3',
    title: 'Create a Table',
    description: `Write HTML for a table with 3 columns (Name, Age, City) and 3 rows of data:\n1. Alice, 28, New York\n2. Bob, 34, London\n3. Charlie, 22, Tokyo\n\nInclude a header row with column names.`,
    difficulty: 'easy',
    category: 'HTML',
    constraints: 'Must use <table>, <tr>, <th>, and <td> tags.',
    inputFormat: 'No input.',
    outputFormat: 'Return the HTML string.',
    sampleInput: '',
    sampleOutput: '<table><tr><th>Name</th><th>Age</th><th>City</th></tr><tr><td>Alice</td><td>28</td><td>New York</td></tr><tr><td>Bob</td><td>34</td><td>London</td></tr><tr><td>Charlie</td><td>22</td><td>Tokyo</td></tr></table>',
    testCases: [
      { input: '', expectedOutput: 'Table with header and 3 data rows', isHidden: false },
      { input: '', expectedOutput: 'Uses <table>, <tr>, <th>, <td> tags', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: '// Write the HTML for the table\nconst table = `\n\n`;' }
    ]
  },
  {
    _id: 'local-html-4',
    title: 'Form with Validation Attributes',
    description: `Create an HTML form with the following fields and validation attributes:\n1. Name: text input, required, minlength=2\n2. Email: email input, required\n3. Age: number input, min=18, max=120\n4. Password: password input, required, minlength=8\n5. Website: URL input (optional)\n6. A submit button`,
    difficulty: 'easy',
    category: 'HTML',
    constraints: 'Must use HTML5 validation attributes.',
    inputFormat: 'No input.',
    outputFormat: 'Return the HTML form string.',
    sampleInput: '',
    sampleOutput: 'Form with validated inputs',
    testCases: [
      { input: '', expectedOutput: 'Form with 5 inputs and submit button', isHidden: false },
      { input: '', expectedOutput: 'Uses required, min, max, minlength attributes', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: '// Write the HTML form with validation\nconst form = `\n\n`;' }
    ]
  },
  {
    _id: 'local-html-5',
    title: 'Semantic HTML Layout',
    description: `Create a semantic HTML5 page layout with:\n1. A <header> containing an <h1> site title\n2. A <nav> with links to Home, About, Contact\n3. A <main> section containing:\n   - An <article> with an <h2> title and a <p> paragraph\n   - An <aside> with a sidebar note\n4. A <footer> with copyright text`,
    difficulty: 'medium',
    category: 'HTML',
    constraints: 'Use only semantic HTML5 elements.',
    inputFormat: 'No input.',
    outputFormat: 'Return the semantic HTML string.',
    sampleInput: '',
    sampleOutput: 'Semantic HTML5 layout with header, nav, main, article, aside, footer',
    testCases: [
      { input: '', expectedOutput: 'Uses header, nav, main, article, aside, footer', isHidden: false },
      { input: '', expectedOutput: 'Proper nesting of semantic elements', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: '// Write the semantic HTML layout\nconst layout = `\n\n`;' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // CSS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-css-1',
    title: 'Flexbox Centering',
    description: `Write CSS to center a div both horizontally and vertically inside its parent using Flexbox.

The parent should be a flex container and the child should be centered in both axes.`,
    difficulty: 'easy',
    category: 'CSS',
    constraints: 'Use flexbox properties only.',
    inputFormat: 'No input.',
    outputFormat: 'Return CSS rules.',
    sampleInput: '',
    sampleOutput: 'display:flex;justify-content:center;align-items:center;',
    testCases: [
      { input: '', expectedOutput: 'Flexbox centering CSS', isHidden: false },
      { input: '', expectedOutput: 'Uses display:flex, justify-content, align-items', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: '// Write the CSS rules for flexbox centering\nconst styles = `\n\n`;' }
    ]
  },
  {
    _id: 'local-css-2',
    title: 'CSS Grid Layout',
    description: `Write CSS to create a 3-column grid layout where:
- Each column has equal width
- There is a 20px gap between items
- The container has padding of 10px`,
    difficulty: 'easy',
    category: 'CSS',
    constraints: 'Use CSS Grid properties.',
    inputFormat: 'No input.',
    outputFormat: 'Return CSS rules.',
    sampleInput: '',
    sampleOutput: 'display:grid;grid-template-columns:repeat(3,1fr);gap:20px;padding:10px;',
    testCases: [
      { input: '', expectedOutput: 'CSS Grid with 3 columns', isHidden: false },
      { input: '', expectedOutput: 'Uses grid-template-columns and gap', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: '// Write the CSS grid rules\nconst gridStyles = `\n\n`;' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // CSS â€” Additional
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-css-3',
    title: 'Responsive Navbar',
    description: `Write CSS for a responsive navigation bar that:\n1. Has a horizontal layout on desktop (flexbox)\n2. Stacks vertically on mobile (max-width: 768px)\n3. Each nav link has padding, hover effect (color change)\n4. The navbar has a dark background with white text\n5. Uses a media query for responsive behavior`,
    difficulty: 'medium',
    category: 'CSS',
    constraints: 'Use flexbox and media queries.',
    inputFormat: 'No input.',
    outputFormat: 'Return CSS rules.',
    sampleInput: '',
    sampleOutput: 'CSS with flexbox, media query, and hover effects',
    testCases: [
      { input: '', expectedOutput: 'Uses display:flex and @media query', isHidden: false },
      { input: '', expectedOutput: 'Has hover effect on links', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: '// Write the responsive navbar CSS\nconst navStyles = `\n\n`;' }
    ]
  },
  {
    _id: 'local-css-4',
    title: 'Animation Keyframes',
    description: `Write CSS to create a fade-in and slide-up animation:\n1. Define a @keyframes fadeInUp that:\n   - Starts at opacity: 0, transform: translateY(20px)\n   - Ends at opacity: 1, transform: translateY(0)\n2. Apply the animation to a .box class with:\n   - Duration: 0.5s\n   - Timing function: ease-out\n   - Fill mode: forwards`,
    difficulty: 'medium',
    category: 'CSS',
    constraints: 'Use CSS @keyframes and animation properties.',
    inputFormat: 'No input.',
    outputFormat: 'Return CSS rules.',
    sampleInput: '',
    sampleOutput: '@keyframes and animation CSS',
    testCases: [
      { input: '', expectedOutput: 'Has @keyframes fadeInUp', isHidden: false },
      { input: '', expectedOutput: 'Uses animation property with duration', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: '// Write the animation CSS\nconst animationStyles = `\n\n`;' }
    ]
  },
  {
    _id: 'local-css-5',
    title: 'CSS Variables Theme',
    description: `Use CSS custom properties (variables) to create a theme system:\n1. Define :root variables: --primary-color, --bg-color, --text-color, --font-size\n2. Apply them to body, h1, p, and .button classes\n3. Create a .dark-theme class that overrides the variables\n\nDefault theme: primary=#3498db, bg=#ffffff, text=#333333\nDark theme: primary=#e74c3c, bg=#1a1a2e, text=#ffffff`,
    difficulty: 'easy',
    category: 'CSS',
    constraints: 'Use CSS custom properties (var()).',
    inputFormat: 'No input.',
    outputFormat: 'Return CSS rules.',
    sampleInput: '',
    sampleOutput: 'CSS with custom properties and dark theme override',
    testCases: [
      { input: '', expectedOutput: 'Uses CSS custom properties', isHidden: false },
      { input: '', expectedOutput: 'Has :root and .dark-theme definitions', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: '// Write the CSS variables theme\nconst themeStyles = `\n\n`;' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // React
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-react-1',
    title: 'Counter Component',
    description: `Create a React functional component called Counter that:

1. Maintains a count state starting at 0
2. Displays the current count
3. Has an "Increment" button that increases count by 1
4. Has a "Decrement" button that decreases count by 1
5. Has a "Reset" button that resets count to 0

Use useState hook for state management.`,
    difficulty: 'easy',
    category: 'React',
    constraints: 'Use functional component with hooks.',
    inputFormat: 'No input.',
    outputFormat: 'Return JSX string.',
    sampleInput: '',
    sampleOutput: 'Component with useState and three buttons',
    testCases: [
      { input: '', expectedOutput: 'Functional component with useState', isHidden: false },
      { input: '', expectedOutput: 'Has Increment, Decrement, Reset buttons', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "import React, { useState } from 'react';\n\nconst Counter = () => {\n  // Implement counter logic\n  \n  return (\n    <div>\n      {/* Display count and buttons */}\n    </div>\n  );\n};\n\nexport default Counter;" }
    ]
  },
  {
    _id: 'local-react-2',
    title: 'Todo List Component',
    description: `Create a React Todo List component that:

1. Has an input field to add new todos
2. Displays a list of all todos
3. Each todo has a checkbox to mark as complete (with strikethrough style)
4. Each todo has a delete button
5. Uses useState for managing the todo list

Each todo should be an object with { id, text, completed } properties.`,
    difficulty: 'medium',
    category: 'React',
    constraints: 'Use functional component with hooks.',
    inputFormat: 'No input.',
    outputFormat: 'Return JSX string.',
    sampleInput: '',
    sampleOutput: 'Todo component with add, toggle, delete functionality',
    testCases: [
      { input: '', expectedOutput: 'Functional component with useState', isHidden: false },
      { input: '', expectedOutput: 'Has add, complete, delete functionality', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "import React, { useState } from 'react';\n\nconst TodoList = () => {\n  const [todos, setTodos] = useState([]);\n  const [input, setInput] = useState('');\n\n  // Implement todo logic\n  \n  return (\n    <div>\n      {/* Input field and todo list */}\n    </div>\n  );\n};\n\nexport default TodoList;" }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // React â€” Additional
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-react-3',
    title: 'useEffect Cleanup',
    description: `Create a React component that demonstrates useEffect cleanup:\n\n1. Creates a timer that updates a counter every second\n2. The cleanup function should clear the interval when the component unmounts\n3. Add a "Start" and "Stop" button to control the timer\n4. Display the elapsed seconds`,
    difficulty: 'medium',
    category: 'React',
    constraints: 'Use functional component with useEffect and cleanup.',
    inputFormat: 'No input.',
    outputFormat: 'Return JSX string.',
    sampleInput: '',
    sampleOutput: 'Component with timer, start/stop buttons, and cleanup',
    testCases: [
      { input: '', expectedOutput: 'Uses useEffect with cleanup return', isHidden: false },
      { input: '', expectedOutput: 'Has Start and Stop buttons', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "import React, { useState, useEffect } from 'react';\n\nconst Timer = () => {\n  const [seconds, setSeconds] = useState(0);\n  const [running, setRunning] = useState(false);\n\n  useEffect(() => {\n    // Implement timer with cleanup\n  }, [running]);\n\n  return (\n    <div>\n      {/* Display seconds and buttons */}\n    </div>\n  );\n};\n\nexport default Timer;" }
    ]
  },
  {
    _id: 'local-react-4',
    title: 'useContext Theme Toggle',
    description: `Create a React theme system using useContext:\n\n1. Create a ThemeContext with light theme as default\n2. Create a ThemeProvider component that wraps children and manages theme state\n3. Create a ThemeToggle component that switches between light and dark themes\n4. Create a ThemedCard component that uses the theme to style itself\n\nLight theme: white background, black text\nDark theme: #333 background, white text`,
    difficulty: 'medium',
    category: 'React',
    constraints: 'Use React Context API with useContext.',
    inputFormat: 'No input.',
    outputFormat: 'Return JSX string.',
    sampleInput: '',
    sampleOutput: 'ThemeProvider, ThemeToggle, and ThemedCard components',
    testCases: [
      { input: '', expectedOutput: 'Uses createContext and useContext', isHidden: false },
      { input: '', expectedOutput: 'Has ThemeProvider, ThemeToggle, ThemedCard', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "import React, { createContext, useContext, useState } from 'react';\n\nconst ThemeContext = createContext();\n\nconst ThemeProvider = ({ children }) => {\n  // Implement theme state and provider\n};\n\nconst ThemeToggle = () => {\n  // Implement toggle button\n};\n\nconst ThemedCard = ({ children }) => {\n  // Implement themed card using context\n};\n\nexport { ThemeProvider, ThemeToggle, ThemedCard };" }
    ]
  },
  {
    _id: 'local-react-5',
    title: 'Custom useLocalStorage Hook',
    description: `Create a custom React hook called useLocalStorage that:\n\n1. Works exactly like useState but persists the value in localStorage\n2. Takes a key and initial value as arguments\n3. Returns [value, setValue] like useState\n4. On mount, reads from localStorage (falls back to initial value if not found)\n5. On value change, writes to localStorage\n6. Handles JSON parse errors gracefully`,
    difficulty: 'hard',
    category: 'React',
    constraints: 'Use custom hook pattern with useState and useEffect.',
    inputFormat: 'No input.',
    outputFormat: 'Return the custom hook implementation.',
    sampleInput: '',
    sampleOutput: 'useLocalStorage hook that syncs with localStorage',
    testCases: [
      { input: '', expectedOutput: 'Custom hook with useState and useEffect', isHidden: false },
      { input: '', expectedOutput: 'Reads from and writes to localStorage', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "import { useState, useEffect } from 'react';\n\nfunction useLocalStorage(key, initialValue) {\n  // Implement custom hook\n  \n}\n\nexport default useLocalStorage;" }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // Node.js
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-node-1',
    title: 'Basic HTTP Server',
    description: `Write a Node.js code snippet using the built-in 'http' module to create a basic HTTP server that:

1. Listens on port 3000
2. Responds with "Hello, World!" for all routes
3. Logs "Server running on port 3000" when started`,
    difficulty: 'easy',
    category: 'Node.js',
    constraints: 'Use only built-in Node.js modules.',
    inputFormat: 'No input.',
    outputFormat: 'Return the server code.',
    sampleInput: '',
    sampleOutput: 'http.createServer listening on port 3000',
    testCases: [
      { input: '', expectedOutput: 'Uses http module', isHidden: false },
      { input: '', expectedOutput: 'Listens on port 3000', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "const http = require('http');\n\n// Create HTTP server\n// Listen on port 3000" }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // Node.js â€” Additional
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-node-2',
    title: 'File System Operations',
    description: `Write Node.js code using the 'fs' module to:\n1. Read a file called 'data.txt' asynchronously\n2. Write content to a file called 'output.txt'\n3. Append a line to 'log.txt'\n4. Check if a file exists using fs.access\n5. Delete a file called 'temp.txt'\n\nUse async/await with fs.promises.`,
    difficulty: 'easy',
    category: 'Node.js',
    constraints: 'Use only built-in Node.js modules.',
    inputFormat: 'No input.',
    outputFormat: 'Return the file system operations code.',
    sampleInput: '',
    sampleOutput: 'fs.promises based file operations',
    testCases: [
      { input: '', expectedOutput: 'Uses fs.promises with async/await', isHidden: false },
      { input: '', expectedOutput: 'Has read, write, append, access, delete operations', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "const fs = require('fs').promises;\n\nasync function fileOperations() {\n  // Read data.txt\n  \n  // Write to output.txt\n  \n  // Append to log.txt\n  \n  // Check if file exists\n  \n  // Delete temp.txt\n}" }
    ]
  },
  {
    _id: 'local-node-3',
    title: 'Stream Processing',
    description: `Write Node.js code using streams to:\n1. Create a readable stream from a file 'input.txt'\n2. Create a writable stream to 'output.txt'\n3. Pipe the readable stream to the writable stream\n4. Handle 'data', 'end', and 'error' events\n5. Implement a transform stream that converts text to uppercase`,
    difficulty: 'medium',
    category: 'Node.js',
    constraints: 'Use Node.js stream modules.',
    inputFormat: 'No input.',
    outputFormat: 'Return the stream processing code.',
    sampleInput: '',
    sampleOutput: 'Stream pipeline with transform',
    testCases: [
      { input: '', expectedOutput: 'Uses stream modules (Readable, Writable, Transform)', isHidden: false },
      { input: '', expectedOutput: 'Handles data, end, error events', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "const fs = require('fs');\nconst { Transform } = require('stream');\n\n// Create a transform stream for uppercase\nconst toUpperCase = new Transform({\n  transform(chunk, encoding, callback) {\n    // Transform to uppercase\n  }\n});\n\n// Create readable and writable streams\n// Pipe streams together" }
    ]
  },
  {
    _id: 'local-node-4',
    title: 'Worker Threads',
    description: `Write Node.js code using the 'worker_threads' module to:\n1. Create a Worker that performs a CPU-intensive calculation (e.g., sum of squares from 1 to n)\n2. Send a number n to the worker via postMessage\n3. Receive the result in the main thread via onmessage\n4. Handle worker errors and termination\n\nThe worker should compute sum = 1^2 + 2^2 + ... + n^2.`,
    difficulty: 'hard',
    category: 'Node.js',
    constraints: 'Use worker_threads module.',
    inputFormat: 'No input.',
    outputFormat: 'Return the worker threads code.',
    sampleInput: '',
    sampleOutput: 'Worker thread computing sum of squares',
    testCases: [
      { input: '', expectedOutput: 'Uses Worker and parentPort', isHidden: false },
      { input: '', expectedOutput: 'Sends data via postMessage and receives result', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "// main.js\nconst { Worker } = require('worker_threads');\n\nfunction runWorker(n) {\n  return new Promise((resolve, reject) => {\n    const worker = new Worker('./worker.js', { workerData: n });\n    worker.on('message', resolve);\n    worker.on('error', reject);\n  });\n}\n\n// worker.js\nconst { parentPort, workerData } = require('worker_threads');\n// Compute sum of squares from 1 to workerData\n// Send result back via parentPort" }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // Express.js
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-express-1',
    title: 'Express REST API',
    description: `Create a basic Express.js server with the following routes:

1. GET / - Returns "Welcome to the API"
2. GET /users - Returns a JSON array of users
3. POST /users - Accepts JSON body with { name, email } and adds to users array
4. GET /users/:id - Returns a single user by ID

The server should listen on port 3000 and use JSON middleware.`,
    difficulty: 'medium',
    category: 'Express.js',
    constraints: 'Use Express.js framework.',
    inputFormat: 'No input.',
    outputFormat: 'Return the Express server code.',
    sampleInput: '',
    sampleOutput: 'Express server with GET, POST routes',
    testCases: [
      { input: '', expectedOutput: 'Uses express module', isHidden: false },
      { input: '', expectedOutput: 'Has GET, POST, and parameterized routes', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "const express = require('express');\nconst app = express();\n\n// Add middleware\n// Define routes\n// Start server" }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // Express.js â€” Additional
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-express-2',
    title: 'Middleware Chain',
    description: `Create an Express.js middleware chain that:\n1. Logger middleware: Logs "Method: GET, Path: /, Time: [timestamp]" for every request\n2. Auth middleware: Checks for Authorization header, returns 401 if missing\n3. Validate middleware: Checks if request body has 'name' field, returns 400 if missing\n4. Route handler: Returns "Hello, {name}!" with status 200\n\nApply middlewares in order: Logger â†’ Auth â†’ Validate â†’ Handler`,
    difficulty: 'medium',
    category: 'Express.js',
    constraints: 'Use Express.js middleware pattern.',
    inputFormat: 'No input.',
    outputFormat: 'Return the middleware and route code.',
    sampleInput: '',
    sampleOutput: 'Express with middleware chain',
    testCases: [
      { input: '', expectedOutput: 'Has logger, auth, validate middlewares', isHidden: false },
      { input: '', expectedOutput: 'Middlewares applied in correct order', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "const express = require('express');\nconst app = express();\napp.use(express.json());\n\nconst logger = (req, res, next) => {\n  // Log method, path, and timestamp\n};\n\nconst auth = (req, res, next) => {\n  // Check Authorization header\n};\n\nconst validate = (req, res, next) => {\n  // Check for 'name' in body\n};\n\napp.post('/greet', logger, auth, validate, (req, res) => {\n  // Return greeting\n});\n\napp.listen(3000);" }
    ]
  },
  {
    _id: 'local-express-3',
    title: 'File Upload Endpoint',
    description: `Create an Express.js endpoint for file uploads using multer:\n1. Configure multer for single file uploads\n2. Create POST /upload endpoint that:\n   - Accepts a file field named 'file'\n   - Saves to 'uploads/' directory\n   - Returns JSON with { filename, size, mimetype }\n3. Add file type validation: only allow .jpg, .png, .pdf\n4. Return 400 for invalid file types, 500 for server errors`,
    difficulty: 'medium',
    category: 'Express.js',
    constraints: 'Use multer package for file uploads.',
    inputFormat: 'No input.',
    outputFormat: 'Return the Express code.',
    sampleInput: '',
    sampleOutput: 'Express endpoint with multer for file uploads',
    testCases: [
      { input: '', expectedOutput: 'Uses multer for file upload', isHidden: false },
      { input: '', expectedOutput: 'Has file type validation', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "const express = require('express');\nconst multer = require('multer');\nconst path = require('path');\n\nconst app = express();\n\n// Configure multer storage\nconst storage = multer.diskStorage({\n  destination: (req, file, cb) => {},\n  filename: (req, file, cb) => {}\n});\n\n// Configure upload with file filter\nconst upload = multer({ storage });\n\n// POST /upload endpoint\napp.post('/upload', upload.single('file'), (req, res) => {\n  // Return file info\n});\n\napp.listen(3000);" }
    ]
  },
  {
    _id: 'local-express-4',
    title: 'Rate Limiting Middleware',
    description: `Create an Express.js rate limiting middleware that:\n1. Limits each IP to 100 requests per 15-minute window\n2. Tracks request counts using an in-memory Map\n3. Returns 429 status with "Too many requests" when limit exceeded\n4. Sets X-RateLimit-Limit, X-RateLimit-Remaining, and Retry-After headers\n5. Automatically cleans up expired entries`,
    difficulty: 'hard',
    category: 'Express.js',
    constraints: 'Use in-memory storage (Map).',
    inputFormat: 'No input.',
    outputFormat: 'Return the rate limiter middleware code.',
    sampleInput: '',
    sampleOutput: 'Rate limiting middleware with headers',
    testCases: [
      { input: '', expectedOutput: 'Tracks requests per IP', isHidden: false },
      { input: '', expectedOutput: 'Returns 429 when limit exceeded', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "const express = require('express');\nconst app = express();\n\nconst rateLimitMap = new Map();\n\nconst rateLimiter = (req, res, next) => {\n  const ip = req.ip;\n  const now = Date.now();\n  const windowMs = 15 * 60 * 1000; // 15 minutes\n  const maxRequests = 100;\n\n  // Implement rate limiting logic\n  \n  next();\n};\n\napp.use(rateLimiter);\n\napp.get('/', (req, res) => res.send('OK'));\napp.listen(3000);" }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // MongoDB
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-mongo-1',
    title: 'MongoDB CRUD Operations',
    description: `Write MongoDB/Mongoose code for a User model and basic CRUD operations:

1. Define a User schema with fields: name (String, required), email (String, required, unique), age (Number), createdAt (Date, default: now)
2. Create a function to add a new user
3. Create a function to find a user by email
4. Create a function to update a user's age by ID
5. Create a function to delete a user by ID`,
    difficulty: 'medium',
    category: 'MongoDB',
    constraints: 'Use Mongoose ODM.',
    inputFormat: 'No input.',
    outputFormat: 'Return the Mongoose code.',
    sampleInput: '',
    sampleOutput: 'User schema + CRUD functions',
    testCases: [
      { input: '', expectedOutput: 'Mongoose schema definition', isHidden: false },
      { input: '', expectedOutput: 'Has create, find, update, delete functions', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "const mongoose = require('mongoose');\n\n// Define User schema\n\n// Create CRUD functions\nconst createUser = async (userData) => {};\nconst findUserByEmail = async (email) => {};\nconst updateUserAge = async (id, age) => {};\nconst deleteUser = async (id) => {};" }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // MongoDB â€” Additional
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-mongo-2',
    title: 'Aggregation Pipeline',
    description: `Write a MongoDB aggregation pipeline for an 'orders' collection with fields: customerId, product, amount, status, createdAt.\n\nCreate pipelines for:\n1. Total revenue per customer (group by customerId, sum amount)\n2. Average order value per product (group by product, avg amount)\n3. Monthly order count (group by month from createdAt)\n4. Top 5 customers by total spending (sort by total desc, limit 5)`,
    difficulty: 'medium',
    category: 'MongoDB',
    constraints: 'Use MongoDB aggregation framework.',
    inputFormat: 'No input.',
    outputFormat: 'Return aggregation pipeline arrays.',
    sampleInput: '',
    sampleOutput: 'Aggregation pipeline stages',
    testCases: [
      { input: '', expectedOutput: 'Uses $group, $sum, $avg stages', isHidden: false },
      { input: '', expectedOutput: 'Pipeline for top customers uses $sort and $limit', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "const mongoose = require('mongoose');\n\nconst revenuePerCustomer = async () => {\n  return Order.aggregate([\n    // $group by customerId, $sum amount\n  ]);\n};\n\nconst avgOrderPerProduct = async () => {\n  return Order.aggregate([\n    // $group by product, $avg amount\n  ]);\n};\n\nconst monthlyOrderCount = async () => {\n  return Order.aggregate([\n    // $group by month from createdAt\n  ]);\n};\n\nconst topCustomers = async () => {\n  return Order.aggregate([\n    // $group, $sort desc, $limit 5\n  ]);\n};" }
    ]
  },
  {
    _id: 'local-mongo-3',
    title: 'Index Optimization',
    description: `Given a MongoDB 'users' collection queried frequently by email, name, and age:\n\nWrite code to:\n1. Create a unique index on the 'email' field\n2. Create a compound index on 'name' and 'age'\n3. Create a text index on 'name' and 'bio' fields\n4. Use explain() to analyze query performance for: db.users.find({email: 'test@example.com'})\n5. List all indexes on the collection`,
    difficulty: 'medium',
    category: 'MongoDB',
    constraints: 'Use MongoDB index operations.',
    inputFormat: 'No input.',
    outputFormat: 'Return MongoDB index commands.',
    sampleInput: '',
    sampleOutput: 'Index creation and explain() commands',
    testCases: [
      { input: '', expectedOutput: 'Creates unique, compound, and text indexes', isHidden: false },
      { input: '', expectedOutput: 'Uses explain("executionStats")', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "const mongoose = require('mongoose');\n\nconst optimizeIndexes = async () => {\n  // Create unique index on email\n  \n  // Create compound index on name and age\n  \n  // Create text index on name and bio\n  \n  // Analyze query performance\n  const explanation = await User.find({email: 'test@example.com'}).explain('executionStats');\n  \n  // List all indexes\n  const indexes = await User.listIndexes();\n  \n  return { explanation, indexes };\n};" }
    ]
  },
  {
    _id: 'local-mongo-4',
    title: 'Change Streams',
    description: `Write MongoDB change stream code to:\n1. Watch for 'insert' operations on the 'orders' collection\n2. Watch for 'update' operations on the 'users' collection\n3. Log changes with operation type, document key, and full document\n4. Handle resume tokens for reconnecting\n5. Implement error handling and automatic reconnection`,
    difficulty: 'hard',
    category: 'MongoDB',
    constraints: 'Use MongoDB change streams (requires replica set).',
    inputFormat: 'No input.',
    outputFormat: 'Return change stream code.',
    sampleInput: '',
    sampleOutput: 'Change stream with resume token handling',
    testCases: [
      { input: '', expectedOutput: 'Uses collection.watch()', isHidden: false },
      { input: '', expectedOutput: 'Handles resume tokens and reconnection', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "const mongoose = require('mongoose');\n\nlet resumeToken = null;\n\nconst watchOrders = async () => {\n  const changeStream = Order.watch([], { fullDocument: 'updateLookup' });\n  \n  changeStream.on('change', (change) => {\n    // Handle change event\n    resumeToken = change._id;\n  });\n  \n  changeStream.on('error', async (error) => {\n    // Handle error and reconnect with resume token\n  });\n};" }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // SQL
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-sql-1',
    title: 'Create Users Table',
    description: `Write SQL query to create a table called 'users' with the following columns:
- id: INTEGER, PRIMARY KEY, AUTO_INCREMENT
- name: VARCHAR(100), NOT NULL
- email: VARCHAR(255), UNIQUE, NOT NULL
- age: INTEGER, DEFAULT 0
- created_at: TIMESTAMP, DEFAULT CURRENT_TIMESTAMP`,
    difficulty: 'easy',
    category: 'SQL',
    constraints: 'Use standard SQL syntax.',
    inputFormat: 'No input.',
    outputFormat: 'Return the CREATE TABLE query.',
    sampleInput: '',
    sampleOutput: 'CREATE TABLE users (id INTEGER PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100) NOT NULL, email VARCHAR(255) UNIQUE NOT NULL, age INTEGER DEFAULT 0, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);',
    testCases: [
      { input: '', expectedOutput: 'CREATE TABLE statement', isHidden: false },
      { input: '', expectedOutput: 'Has all required columns with constraints', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: '-- Write the CREATE TABLE query\n\n' }
    ]
  },
  {
    _id: 'local-sql-2',
    title: 'SELECT with WHERE Clause',
    description: `Given a table 'employees' with columns: id, name, department, salary.

Write SQL queries for:
1. Select all employees in the 'Engineering' department
2. Select employees with salary greater than 50000
3. Select employees whose name starts with 'A'
4. Select employees ordered by salary in descending order`,
    difficulty: 'easy',
    category: 'SQL',
    constraints: 'Use standard SQL.',
    inputFormat: 'No input.',
    outputFormat: 'Return 4 SQL queries.',
    sampleInput: '',
    sampleOutput: "SELECT * FROM employees WHERE department = 'Engineering';SELECT * FROM employees WHERE salary > 50000;SELECT * FROM employees WHERE name LIKE 'A%';SELECT * FROM employees ORDER BY salary DESC;",
    testCases: [
      { input: '', expectedOutput: '4 SELECT queries', isHidden: false },
      { input: '', expectedOutput: 'Uses WHERE, LIKE, ORDER BY', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "-- Query 1: Select Engineering employees\n\n-- Query 2: Select employees with salary > 50000\n\n-- Query 3: Select employees whose name starts with A\n\n-- Query 4: Select employees ordered by salary DESC\n" }
    ]
  },
  {
    _id: 'local-sql-3',
    title: 'JOIN Query',
    description: `Given two tables:
- students: id, name, course_id
- courses: id, course_name, credits

Write a SQL query that joins the two tables to show each student's name along with their course name and credits. Use INNER JOIN.`,
    difficulty: 'medium',
    category: 'SQL',
    constraints: 'Use INNER JOIN.',
    inputFormat: 'No input.',
    outputFormat: 'Return the JOIN query.',
    sampleInput: '',
    sampleOutput: "SELECT students.name, courses.course_name, courses.credits FROM students INNER JOIN courses ON students.course_id = courses.id;",
    testCases: [
      { input: '', expectedOutput: 'SELECT with INNER JOIN', isHidden: false },
      { input: '', expectedOutput: 'Joins on course_id = id', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "-- Write the JOIN query\n\n" }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // DBMS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-dbms-1',
    title: 'Normalization Question',
    description: `Explain the difference between 1NF, 2NF, and 3NF with examples.

Write a function that takes a relation (as a string description) and returns which normal form it satisfies.

For the purpose of this problem, assume:
- A relation is in 1NF if all attributes are atomic
- A relation is in 2NF if it is in 1NF and no partial dependency exists
- A relation is in 3NF if it is in 2NF and no transitive dependency exists

Given a relation description string, return "1NF", "2NF", or "3NF".`,
    difficulty: 'medium',
    category: 'DBMS',
    constraints: 'Return exactly one of: "1NF", "2NF", "3NF"',
    inputFormat: 'A string describing the relation.',
    outputFormat: 'Return the highest normal form.',
    sampleInput: 'R(A,B,C) with A->B, B->C',
    sampleOutput: '2NF',
    testCases: [
      { input: 'R(A,B,C) with A->B, B->C', expectedOutput: '2NF', isHidden: false },
      { input: 'R(A,B) with A->B', expectedOutput: '3NF', isHidden: false },
      { input: 'R(A,B,C,D) with A->B, BC->D', expectedOutput: '3NF', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function checkNormalForm(relation) {\n  // Analyze the relation and return normal form\n  \n}' },
      { language: 'python', template: 'def checkNormalForm(relation):\n    # Analyze the relation and return normal form\n    pass' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // DBMS â€” Additional
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-dbms-2',
    title: 'ER Diagram Design',
    description: `Design an ER diagram for a Library Management System.\n\nGiven entity types and relationships:\n- Book(ISBN, title, author, genre)\n- Member(member_id, name, email, phone)\n- Loan(loan_id, book_isbn, member_id, loan_date, return_date)\n\nWrite a function that returns the ER diagram description as a string, identifying:\n1. Entity types and their attributes\n2. Relationship types (Loan is a relationship between Book and Member)\n3. Cardinality (One member can have many loans, one book can be loaned many times)`,
    difficulty: 'easy',
    category: 'DBMS',
    constraints: 'Return a structured description.',
    inputFormat: 'No input.',
    outputFormat: 'Return ER diagram description string.',
    sampleInput: '',
    sampleOutput: 'ER diagram with entities, attributes, and relationships',
    testCases: [
      { input: '', expectedOutput: 'Identifies entities, attributes, relationships', isHidden: false },
      { input: '', expectedOutput: 'Specifies cardinality correctly', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function designERDiagram() {\n  // Return ER diagram description\n  \n}' },
      { language: 'python', template: 'def design_er_diagram():\n    # Return ER diagram description\n    pass' }
    ]
  },
  {
    _id: 'local-dbms-3',
    title: 'Transaction ACID Properties',
    description: `Explain and demonstrate the four ACID properties of database transactions:\n\n1. Atomicity: All or nothing\n2. Consistency: Valid state transitions\n3. Isolation: Concurrent transactions don't interfere\n4. Durability: Committed data persists\n\nWrite a function that, given a property name, returns an explanation and a SQL code example demonstrating that property.`,
    difficulty: 'medium',
    category: 'DBMS',
    constraints: 'Return explanations for each ACID property.',
    inputFormat: 'A property name string.',
    outputFormat: 'Return explanation and SQL example.',
    sampleInput: 'Atomicity',
    sampleOutput: 'Atomicity: All operations in a transaction succeed or none do. Example: BEGIN; INSERT...; UPDATE...; COMMIT;',
    testCases: [
      { input: 'Atomicity', expectedOutput: 'Explanation with BEGIN/COMMIT/ROLLBACK', isHidden: false },
      { input: 'Isolation', expectedOutput: 'Explanation with isolation levels', isHidden: false },
      { input: 'Durability', expectedOutput: 'Explanation about committed data persistence', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function explainACID(property) {\n  // Return explanation and SQL example for the property\n  \n}' },
      { language: 'python', template: 'def explain_acid(property):\n    # Return explanation and SQL example for the property\n    pass' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // Operating System
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-os-1',
    title: 'FCFS Scheduling',
    description: `Implement First Come First Serve (FCFS) CPU scheduling algorithm.

Given an array of processes with their burst times, calculate:
1. Waiting time for each process
2. Turnaround time for each process
3. Average waiting time and average turnaround time

Assume all processes arrive at time 0 and are executed in order.`,
    difficulty: 'easy',
    category: 'Operating System',
    constraints: '1 <= n <= 100\n1 <= burst_time <= 1000',
    inputFormat: 'Array of burst times.',
    outputFormat: 'Return avg_wait_time and avg_turnaround_time as "wait: X, turnaround: Y" (rounded to 1 decimal).',
    sampleInput: '[4, 3, 1]',
    sampleOutput: 'wait: 2.7, turnaround: 6.0',
    testCases: [
      { input: '[4,3,1]', expectedOutput: 'wait: 2.7, turnaround: 6.0', isHidden: false },
      { input: '[10,2,3]', expectedOutput: 'wait: 4.0, turnaround: 11.7', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function fcfs(burstTimes) {\n  // Implement FCFS scheduling\n  \n}' },
      { language: 'python', template: 'def fcfs(burst_times):\n    # Implement FCFS scheduling\n    pass' }
    ]
  },
  {
    _id: 'local-os-2',
    title: 'Round Robin Scheduling',
    description: `Implement Round Robin CPU scheduling algorithm with a given time quantum.

Given an array of processes with their burst times and a time quantum:
1. Calculate waiting time for each process
2. Calculate turnaround time for each process
3. Return average waiting time and average turnaround time

Assume all processes arrive at time 0.`,
    difficulty: 'medium',
    category: 'Operating System',
    constraints: '1 <= n <= 100\n1 <= burst_time <= 1000\n1 <= quantum <= 100',
    inputFormat: 'Array of burst times and time quantum.',
    outputFormat: 'Return "wait: X, turnaround: Y" rounded to 1 decimal.',
    sampleInput: '[4,3,1]\n2',
    sampleOutput: 'wait: 2.7, turnaround: 6.0',
    testCases: [
      { input: '[4,3,1]\n2', expectedOutput: 'wait: 2.7, turnaround: 6.0', isHidden: false },
      { input: '[10,2,3]\n3', expectedOutput: 'wait: 5.7, turnaround: 13.0', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function roundRobin(burstTimes, quantum) {\n  // Implement Round Robin scheduling\n  \n}' },
      { language: 'python', template: 'def roundRobin(burst_times, quantum):\n    # Implement Round Robin scheduling\n    pass' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // Operating System â€” Additional
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-os-3',
    title: 'Deadlock Detection',
    description: `Implement a deadlock detection algorithm using the Banker's algorithm approach.\n\nGiven:\n- n processes and m resource types\n- Available vector of available instances of each resource\n- Allocation matrix (currently allocated resources per process)\n- Request matrix (remaining requests per process)\n\nWrite a function that detects if the system is in a safe state or if deadlock exists.\nReturn "Safe" or "Deadlock" with the process that causes it.`,
    difficulty: 'medium',
    category: 'Operating System',
    constraints: '1 <= n <= 10\n1 <= m <= 5',
    inputFormat: 'Available vector, Allocation matrix, Request matrix.',
    outputFormat: 'Return "Safe" or "Deadlock".',
    sampleInput: '[3,3,2]\n[[0,1,0],[2,0,0],[3,0,2],[2,1,1]]\n[[0,0,0],[2,0,2],[0,0,0],[1,0,0]]',
    sampleOutput: 'Safe',
    testCases: [
      { input: '[3,3,2]\n[[0,1,0],[2,0,0],[3,0,2],[2,1,1]]\n[[0,0,0],[2,0,2],[0,0,0],[1,0,0]]', expectedOutput: 'Safe', isHidden: false },
      { input: '[0,0,0]\n[[0,1,0],[2,0,0]]\n[[0,0,1],[2,0,2]]', expectedOutput: 'Deadlock', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function detectDeadlock(available, allocation, request) {\n  // Implement deadlock detection\n  \n}' },
      { language: 'python', template: 'def detect_deadlock(available, allocation, request):\n    # Implement deadlock detection\n    pass' }
    ]
  },
  {
    _id: 'local-os-4',
    title: 'Memory Paging',
    description: `Implement logical to physical address translation using paging.\n\nGiven:\n- Page size (e.g., 1024 bytes)\n- Logical address\n- Page table mapping logical pages to physical frames\n\nWrite a function that:\n1. Extracts the page number and offset from the logical address\n2. Looks up the physical frame from the page table\n3. Returns the physical address\n4. Returns an error if the page is not in the page table`,
    difficulty: 'medium',
    category: 'Operating System',
    constraints: '1 <= page_size <= 10^6\n0 <= logical_address <= 10^9',
    inputFormat: 'Page size, logical address, page table.',
    outputFormat: 'Return physical address or "Page Fault".',
    sampleInput: '1024\n2050\n{0:5,1:2,2:8}',
    sampleOutput: 'Physical address: 8338',
    testCases: [
      { input: '1024\n2050\n{0:5,1:2,2:8}', expectedOutput: '8338', isHidden: false },
      { input: '1024\n3074\n{0:5,1:2,2:8}', expectedOutput: 'Page Fault', isHidden: false },
      { input: '512\n1536\n{0:3,1:7,2:1,3:9}', expectedOutput: '4617', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function translateAddress(pageSize, logicalAddress, pageTable) {\n  // Extract page number and offset\n  // Look up frame in page table\n  // Calculate physical address\n  \n}' },
      { language: 'python', template: 'def translate_address(page_size, logical_address, page_table):\n    # Extract page number and offset\n    # Look up frame in page table\n    # Calculate physical address\n    pass' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // OOP
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-oop-1',
    title: 'Bank Account Class',
    description: `Create a BankAccount class with the following features:

1. Constructor takes owner name and initial balance (default 0)
2. deposit(amount) - adds amount to balance, returns new balance
3. withdraw(amount) - subtracts amount if sufficient balance, returns new balance or error
4. getBalance() - returns current balance
5. toString() - returns "Owner: [name], Balance: [balance]"

Implement proper encapsulation with private balance.`,
    difficulty: 'easy',
    category: 'OOP',
    constraints: 'Balance cannot be negative.',
    inputFormat: 'No input.',
    outputFormat: 'Return the class implementation.',
    sampleInput: '',
    sampleOutput: 'BankAccount class with deposit, withdraw, getBalance methods',
    testCases: [
      { input: '', expectedOutput: 'Class with constructor and methods', isHidden: false },
      { input: '', expectedOutput: 'Proper encapsulation', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "class BankAccount {\n  constructor(owner, balance = 0) {\n    // Initialize with encapsulation\n  }\n\n  deposit(amount) {\n    // Add to balance\n  }\n\n  withdraw(amount) {\n    // Subtract from balance if sufficient\n  }\n\n  getBalance() {\n    // Return balance\n  }\n\n  toString() {\n    // Return string representation\n  }\n}" },
      { language: 'python', template: "class BankAccount:\n    def __init__(self, owner, balance=0):\n        # Initialize with encapsulation\n        pass\n\n    def deposit(self, amount):\n        # Add to balance\n        pass\n\n    def withdraw(self, amount):\n        # Subtract from balance if sufficient\n        pass\n\n    def get_balance(self):\n        # Return balance\n        pass\n\n    def __str__(self):\n        # Return string representation\n        pass" }
    ]
  },
  {
    _id: 'local-oop-2',
    title: 'Shape Hierarchy',
    description: `Create an abstract Shape class and two derived classes: Circle and Rectangle.

Shape (abstract):
- abstract area() method
- abstract perimeter() method

Circle extends Shape:
- Constructor takes radius
- area() returns Ï€ * rÂ²
- perimeter() returns 2 * Ï€ * r

Rectangle extends Shape:
- Constructor takes width and height
- area() returns width * height
- perimeter() returns 2 * (width + height)

Use Math.PI for calculations.`,
    difficulty: 'easy',
    category: 'OOP',
    constraints: 'Use Math.PI for Ï€. Round to 2 decimal places.',
    inputFormat: 'No input.',
    outputFormat: 'Return class implementations.',
    sampleInput: '',
    sampleOutput: 'Shape, Circle, and Rectangle classes',
    testCases: [
      { input: '', expectedOutput: 'Abstract class with derived classes', isHidden: false },
      { input: '', expectedOutput: 'Correct area and perimeter formulas', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "class Shape {\n  area() { throw new Error('Not implemented'); }\n  perimeter() { throw new Error('Not implemented'); }\n}\n\nclass Circle extends Shape {\n  constructor(radius) {\n    super();\n  }\n  // Implement area and perimeter\n}\n\nclass Rectangle extends Shape {\n  constructor(width, height) {\n    super();\n  }\n  // Implement area and perimeter\n}" },
      { language: 'python', template: "from abc import ABC, abstractmethod\nimport math\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n\n    @abstractmethod\n    def perimeter(self):\n        pass\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        pass\n\n    def area(self):\n        pass\n\n    def perimeter(self):\n        pass\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        pass\n\n    def area(self):\n        pass\n\n    def perimeter(self):\n        pass" }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // Data Structures & Algorithms
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-dsa-1',
    title: 'Reverse String',
    description: `Write a function that reverses a string. The input string is given as an array of characters.

You must do this by modifying the input array in-place with O(1) extra memory.`,
    difficulty: 'easy',
    category: 'Data Structures & Algorithms',
    constraints: '1 <= s.length <= 10^5\ns[i] is a printable ascii character.',
    inputFormat: 'An array of characters.',
    outputFormat: 'The reversed string.',
    sampleInput: '["h","e","l","l","o"]',
    sampleOutput: '["o","l","l","e","h"]',
    testCases: [
      { input: '["h","e","l","l","o"]', expectedOutput: '["o","l","l","e","h"]', isHidden: false },
      { input: '["H","a","n","n","a","h"]', expectedOutput: '["h","a","n","n","a","H"]', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function reverseString(s) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def reverseString(s):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-dsa-2',
    title: 'Fibonacci Number',
    description: `The Fibonacci numbers, commonly denoted F(n), form a sequence called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

Given n, calculate F(n).`,
    difficulty: 'easy',
    category: 'Data Structures & Algorithms',
    constraints: '0 <= n <= 30',
    inputFormat: 'A single integer n.',
    outputFormat: 'Return the nth Fibonacci number.',
    sampleInput: '4',
    sampleOutput: '3',
    testCases: [
      { input: '4', expectedOutput: '3', isHidden: false },
      { input: '0', expectedOutput: '0', isHidden: false },
      { input: '10', expectedOutput: '55', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function fibonacci(n) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def fibonacci(n):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-dsa-3',
    title: 'Factorial',
    description: `Write a function that calculates the factorial of a non-negative integer n.

0! = 1
n! = n * (n-1) * (n-2) * ... * 1`,
    difficulty: 'easy',
    category: 'Data Structures & Algorithms',
    constraints: '0 <= n <= 12',
    inputFormat: 'A single integer n.',
    outputFormat: 'Return n!',
    sampleInput: '5',
    sampleOutput: '120',
    testCases: [
      { input: '5', expectedOutput: '120', isHidden: false },
      { input: '0', expectedOutput: '1', isHidden: false },
      { input: '10', expectedOutput: '3628800', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function factorial(n) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def factorial(n):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-dsa-4',
    title: 'Prime Number Check',
    description: `Given an integer n, return true if n is a prime number, otherwise return false.`,
    difficulty: 'easy',
    category: 'Data Structures & Algorithms',
    constraints: '0 <= n <= 10^4',
    inputFormat: 'A single integer n.',
    outputFormat: 'Return true or false.',
    sampleInput: '7',
    sampleOutput: 'true',
    testCases: [
      { input: '7', expectedOutput: 'true', isHidden: false },
      { input: '4', expectedOutput: 'false', isHidden: false },
      { input: '1', expectedOutput: 'false', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function isPrime(n) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def isPrime(n):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-dsa-5',
    title: 'Binary Search',
    description: `Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return -1.

You must write an algorithm with O(log n) runtime complexity.`,
    difficulty: 'easy',
    category: 'Data Structures & Algorithms',
    constraints: '1 <= nums.length <= 10^4\n-10^4 < nums[i], target < 10^4\nAll integers in nums are unique.\nnums is sorted in ascending order.',
    inputFormat: 'First line: sorted array\nSecond line: target',
    outputFormat: 'Return index or -1.',
    sampleInput: '[-1,0,3,5,9,12]\n9',
    sampleOutput: '4',
    testCases: [
      { input: '[-1,0,3,5,9,12]\n9', expectedOutput: '4', isHidden: false },
      { input: '[-1,0,3,5,9,12]\n2', expectedOutput: '-1', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function binarySearch(nums, target) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def binarySearch(nums, target):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-dsa-6',
    title: 'Bubble Sort',
    description: `Implement bubble sort to sort an array of integers in ascending order.`,
    difficulty: 'easy',
    category: 'Data Structures & Algorithms',
    constraints: '1 <= nums.length <= 10^3\n-10^4 <= nums[i] <= 10^4',
    inputFormat: 'An array of integers.',
    outputFormat: 'Return the sorted array.',
    sampleInput: '[5,2,3,1]',
    sampleOutput: '[1,2,3,5]',
    testCases: [
      { input: '[5,2,3,1]', expectedOutput: '[1,2,3,5]', isHidden: false },
      { input: '[5,1,1,2,0,0]', expectedOutput: '[0,0,1,1,2,5]', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function bubbleSort(nums) {\n  // Write your solution here\n  return nums;\n}' },
      { language: 'python', template: 'def bubbleSort(nums):\n    # Write your solution here\n    return nums' }
    ]
  },
  {
    _id: 'local-dsa-7',
    title: 'Merge Two Sorted Arrays',
    description: `Given two sorted arrays nums1 and nums2, merge them into a single sorted array.`,
    difficulty: 'easy',
    category: 'Data Structures & Algorithms',
    constraints: '1 <= nums1.length, nums2.length <= 10^3\n-10^4 <= nums1[i], nums2[i] <= 10^4',
    inputFormat: 'Two sorted arrays.',
    outputFormat: 'Return merged sorted array.',
    sampleInput: '[1,3,5]\n[2,4,6]',
    sampleOutput: '[1,2,3,4,5,6]',
    testCases: [
      { input: '[1,3,5]\n[2,4,6]', expectedOutput: '[1,2,3,4,5,6]', isHidden: false },
      { input: '[1]\n[2,3,4]', expectedOutput: '[1,2,3,4]', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function mergeSorted(nums1, nums2) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def mergeSorted(nums1, nums2):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-dsa-8',
    title: 'Stack Implementation',
    description: `Implement a stack using an array. Support push, pop, top, and empty operations.`,
    difficulty: 'easy',
    category: 'Data Structures & Algorithms',
    constraints: '1 <= x <= 9\nAt most 100 calls.',
    inputFormat: 'A sequence of operations.',
    outputFormat: 'Return results for each operation.',
    sampleInput: 'push(1), push(2), top(), pop(), empty()',
    sampleOutput: 'null, null, 2, 2, false',
    testCases: [
      { input: 'push(1)\npush(2)\ntop()\npop()\nempty()', expectedOutput: 'null\nnull\n2\n2\nfalse', isHidden: false },
      { input: 'push(10)\npush(20)\npush(30)\npop()\npop()', expectedOutput: 'null\nnull\nnull\n30\n20', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'class MyStack {\n  constructor() {\n    // Initialize\n  }\n  push(x) { }\n  pop() { }\n  top() { }\n  empty() { }\n}' },
      { language: 'python', template: 'class MyStack:\n    def __init__(self):\n        pass\n    def push(self, x):\n        pass\n    def pop(self):\n        pass\n    def top(self):\n        pass\n    def empty(self):\n        pass' }
    ]
  },
  {
    _id: 'local-dsa-9',
    title: 'Queue Implementation',
    description: `Implement a queue using an array. Support push, pop, peek, and empty operations.`,
    difficulty: 'easy',
    category: 'Data Structures & Algorithms',
    constraints: '1 <= x <= 9\nAt most 100 calls.',
    inputFormat: 'A sequence of operations.',
    outputFormat: 'Return results for each operation.',
    sampleInput: 'push(1), push(2), peek(), pop(), empty()',
    sampleOutput: 'null, null, 1, 1, false',
    testCases: [
      { input: 'push(1)\npush(2)\npeek()\npop()\nempty()', expectedOutput: 'null\nnull\n1\n1\nfalse', isHidden: false },
      { input: 'push(5)\npush(10)\npop()\npop()', expectedOutput: 'null\nnull\n5\n10', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'class MyQueue {\n  constructor() {\n    // Initialize\n  }\n  push(x) { }\n  pop() { }\n  peek() { }\n  empty() { }\n}' },
      { language: 'python', template: 'class MyQueue:\n    def __init__(self):\n        pass\n    def push(self, x):\n        pass\n    def pop(self):\n        pass\n    def peek(self):\n        pass\n    def empty(self):\n        pass' }
    ]
  },
  {
    _id: 'local-dsa-10',
    title: 'Linked List Basics',
    description: `Design a singly linked list that supports get, addAtHead, addAtTail, addAtIndex, and deleteAtIndex operations.`,
    difficulty: 'medium',
    category: 'Data Structures & Algorithms',
    constraints: '0 <= index <= 1000\n0 <= val <= 1000\nAt most 2000 calls.',
    inputFormat: 'A sequence of operations.',
    outputFormat: 'Return results for get operations.',
    sampleInput: 'addAtHead(1), addAtTail(3), addAtIndex(1,2), get(1), deleteAtIndex(1), get(1)',
    sampleOutput: 'null, null, null, 2, null, 3',
    testCases: [
      { input: 'addAtHead(1)\naddAtTail(3)\naddAtIndex(1,2)\nget(1)\ndeleteAtIndex(1)\nget(1)', expectedOutput: 'null\nnull\nnull\n2\nnull\n3', isHidden: false },
      { input: 'addAtHead(5)\nget(0)', expectedOutput: 'null\n5', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'class ListNode {\n  constructor(val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass LinkedList {\n  constructor() { }\n  get(index) { }\n  addAtHead(val) { }\n  addAtTail(val) { }\n  addAtIndex(index, val) { }\n  deleteAtIndex(index) { }\n}' },
      { language: 'python', template: 'class ListNode:\n    def __init__(self, val=0):\n        self.val = val\n        self.next = None\n\nclass LinkedList:\n    def __init__(self):\n        pass\n    def get(self, index):\n        pass\n    def addAtHead(self, val):\n        pass\n    def addAtTail(self, val):\n        pass\n    def addAtIndex(self, index, val):\n        pass\n    def deleteAtIndex(self, index):\n        pass' }
    ]
  },
  {
    _id: 'local-dsa-11',
    title: 'Tree Traversal (Inorder)',
    description: `Given a binary tree, return the inorder traversal of its nodes' values (left, root, right).`,
    difficulty: 'medium',
    category: 'Data Structures & Algorithms',
    constraints: '0 <= number of nodes <= 100\n-100 <= node.val <= 100',
    inputFormat: 'Root of binary tree.',
    outputFormat: 'Return comma-separated values of inorder traversal.',
    sampleInput: '[1,null,2,3]',
    sampleOutput: '1,3,2',
    testCases: [
      { input: '[1,null,2,3]', expectedOutput: '1,3,2', isHidden: false },
      { input: '[]', expectedOutput: '', isHidden: false },
      { input: '[1]', expectedOutput: '1', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function inorderTraversal(root) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def inorderTraversal(root):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-dsa-12',
    title: 'Tree Traversal (Preorder)',
    description: `Given a binary tree, return the preorder traversal of its nodes' values (root, left, right).`,
    difficulty: 'medium',
    category: 'Data Structures & Algorithms',
    constraints: '0 <= number of nodes <= 100\n-100 <= node.val <= 100',
    inputFormat: 'Root of binary tree.',
    outputFormat: 'Return comma-separated values of preorder traversal.',
    sampleInput: '[1,null,2,3]',
    sampleOutput: '1,2,3',
    testCases: [
      { input: '[1,null,2,3]', expectedOutput: '1,2,3', isHidden: false },
      { input: '[]', expectedOutput: '', isHidden: false },
      { input: '[1]', expectedOutput: '1', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function preorderTraversal(root) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def preorderTraversal(root):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-dsa-13',
    title: 'Valid Parentheses',
    description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.`,
    difficulty: 'easy',
    category: 'Data Structures & Algorithms',
    constraints: '1 <= s.length <= 10^4\ns consists of parentheses only.',
    inputFormat: 'A string of parentheses.',
    outputFormat: 'Return true or false.',
    sampleInput: '()[]{}',
    sampleOutput: 'true',
    testCases: [
      { input: '()[]{}', expectedOutput: 'true', isHidden: false },
      { input: '(]', expectedOutput: 'false', isHidden: false },
      { input: '([)]', expectedOutput: 'false', isHidden: false },
      { input: '{[]}', expectedOutput: 'true', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function isValid(s) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def isValid(s):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-dsa-14',
    title: 'Maximum Subarray (Kadane\'s Algorithm)',
    description: `Given an integer array nums, find the subarray with the largest sum, and return its sum.`,
    difficulty: 'medium',
    category: 'Data Structures & Algorithms',
    constraints: '1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4',
    inputFormat: 'An array of integers.',
    outputFormat: 'Return the maximum subarray sum.',
    sampleInput: '[-2,1,-3,4,-1,2,1,-5,4]',
    sampleOutput: '6',
    testCases: [
      { input: '[-2,1,-3,4,-1,2,1,-5,4]', expectedOutput: '6', isHidden: false },
      { input: '[1]', expectedOutput: '1', isHidden: false },
      { input: '[5,4,-1,7,8]', expectedOutput: '23', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function maxSubArray(nums) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def maxSubArray(nums):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-dsa-15',
    title: 'Sort an Array',
    description: `Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(n log n) time.`,
    difficulty: 'medium',
    category: 'Data Structures & Algorithms',
    constraints: '1 <= nums.length <= 5 * 10^4\n-5 * 10^4 <= nums[i] <= 5 * 10^4',
    inputFormat: 'An array of integers.',
    outputFormat: 'Return the sorted array.',
    sampleInput: '[5,2,3,1]',
    sampleOutput: '[1,2,3,5]',
    testCases: [
      { input: '[5,2,3,1]', expectedOutput: '[1,2,3,5]', isHidden: false },
      { input: '[5,1,1,2,0,0]', expectedOutput: '[0,0,1,1,2,5]', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function sortArray(nums) {\n  // Write your solution here\n  return nums;\n}' },
      { language: 'python', template: 'def sortArray(nums):\n    # Write your solution here\n    return nums' }
    ]
  },
  {
    _id: 'local-dsa-16',
    title: 'Count Sort',
    description: `Implement counting sort for an array of non-negative integers.`,
    difficulty: 'medium',
    category: 'Data Structures & Algorithms',
    constraints: '1 <= nums.length <= 10^4\n0 <= nums[i] <= 100',
    inputFormat: 'An array of non-negative integers.',
    outputFormat: 'Return the sorted array.',
    sampleInput: '[4,2,2,8,3,3,1]',
    sampleOutput: '[1,2,2,3,3,4,8]',
    testCases: [
      { input: '[4,2,2,8,3,3,1]', expectedOutput: '[1,2,2,3,3,4,8]', isHidden: false },
      { input: '[5,5,5]', expectedOutput: '[5,5,5]', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function countingSort(nums) {\n  // Write your solution here\n  return nums;\n}' },
      { language: 'python', template: 'def countingSort(nums):\n    # Write your solution here\n    return nums' }
    ]
  },
  {
    _id: 'local-dsa-17',
    title: 'Quick Sort',
    description: `Implement the Quick Sort algorithm to sort an array of integers in ascending order.`,
    difficulty: 'hard',
    category: 'Data Structures & Algorithms',
    constraints: '1 <= nums.length <= 10^4\n-10^4 <= nums[i] <= 10^4',
    inputFormat: 'An array of integers.',
    outputFormat: 'Return the sorted array.',
    sampleInput: '[3,6,8,10,1,2,1]',
    sampleOutput: '[1,1,2,3,6,8,10]',
    testCases: [
      { input: '[3,6,8,10,1,2,1]', expectedOutput: '[1,1,2,3,6,8,10]', isHidden: false },
      { input: '[1]', expectedOutput: '[1]', isHidden: false },
      { input: '[5,4,3,2,1]', expectedOutput: '[1,2,3,4,5]', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function quickSort(nums) {\n  // Write your solution here\n  return nums;\n}' },
      { language: 'python', template: 'def quickSort(nums):\n    # Write your solution here\n    return nums' }
    ]
  },
  {
    _id: 'local-dsa-18',
    title: 'Merge Sort',
    description: `Implement the Merge Sort algorithm to sort an array of integers in ascending order.`,
    difficulty: 'hard',
    category: 'Data Structures & Algorithms',
    constraints: '1 <= nums.length <= 10^4\n-10^4 <= nums[i] <= 10^4',
    inputFormat: 'An array of integers.',
    outputFormat: 'Return the sorted array.',
    sampleInput: '[38,27,43,3,9,82,10]',
    sampleOutput: '[3,9,10,27,38,43,82]',
    testCases: [
      { input: '[38,27,43,3,9,82,10]', expectedOutput: '[3,9,10,27,38,43,82]', isHidden: false },
      { input: '[1]', expectedOutput: '[1]', isHidden: false },
      { input: '[5,1,1,2,0,0]', expectedOutput: '[0,0,1,1,2,5]', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function mergeSort(nums) {\n  // Write your solution here\n  return nums;\n}' },
      { language: 'python', template: 'def mergeSort(nums):\n    # Write your solution here\n    return nums' }
    ]
  },
  {
    _id: 'local-dsa-19',
    title: 'Graph BFS',
    description: `Implement Breadth-First Search (BFS) on a graph represented as an adjacency list.

Given a graph (adjacency list) and a starting node, return the BFS traversal order.`,
    difficulty: 'medium',
    category: 'Data Structures & Algorithms',
    constraints: '1 <= number of nodes <= 10^4\n0 <= node value < number of nodes',
    inputFormat: 'Adjacency list and start node.',
    outputFormat: 'Return comma-separated BFS order.',
    sampleInput: '{0:[1,2],1:[0,3],2:[0],3:[1]}\n0',
    sampleOutput: '0,1,2,3',
    testCases: [
      { input: '{0:[1,2],1:[0,3],2:[0],3:[1]}\n0', expectedOutput: '0,1,2,3', isHidden: false },
      { input: '{0:[1],1:[0,2],2:[1]}\n0', expectedOutput: '0,1,2', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function bfs(graph, start) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def bfs(graph, start):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-dsa-20',
    title: 'Graph DFS',
    description: `Implement Depth-First Search (DFS) on a graph represented as an adjacency list.

Given a graph and a starting node, return the DFS traversal order.`,
    difficulty: 'medium',
    category: 'Data Structures & Algorithms',
    constraints: '1 <= number of nodes <= 10^4',
    inputFormat: 'Adjacency list and start node.',
    outputFormat: 'Return comma-separated DFS order.',
    sampleInput: '{0:[1,2],1:[0,3],2:[0],3:[1]}\n0',
    sampleOutput: '0,1,3,2',
    testCases: [
      { input: '{0:[1,2],1:[0,3],2:[0],3:[1]}\n0', expectedOutput: '0,1,3,2', isHidden: false },
      { input: '{0:[1],1:[0,2],2:[1]}\n0', expectedOutput: '0,1,2', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function dfs(graph, start) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def dfs(graph, start):\n    # Write your solution here\n    pass' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // DSA â€” Additional
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-dsa-21',
    title: 'Detect Cycle in Linked List',
    description: `Given the head of a linked list, determine if the linked list has a cycle in it.\n\nA cycle exists if some node in the list can be reached again by continuously following next pointers.\n\nImplement using Floyd's Cycle-Finding Algorithm (tortoise and hare).`,
    difficulty: 'medium',
    category: 'Data Structures & Algorithms',
    constraints: '0 <= number of nodes <= 10^4\n-10^5 <= node.val <= 10^5',
    inputFormat: 'Head of linked list.',
    outputFormat: 'Return true if cycle exists, false otherwise.',
    sampleInput: '[3,2,0,-4]\n1',
    sampleOutput: 'true',
    testCases: [
      { input: '[3,2,0,-4]\n1', expectedOutput: 'true', isHidden: false },
      { input: '[1,2]\n0', expectedOutput: 'true', isHidden: false },
      { input: '[1]\n-1', expectedOutput: 'false', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function hasCycle(head) {\n  // Implement Floyd\'s algorithm\n  \n}' },
      { language: 'python', template: 'def hasCycle(head):\n    # Implement Floyd\'s algorithm\n    pass' }
    ]
  },
  {
    _id: 'local-dsa-22',
    title: 'Lowest Common Ancestor of Binary Tree',
    description: `Given a binary tree, find the lowest common ancestor (LCA) of two given nodes p and q.\n\nThe lowest common ancestor is the deepest node that has both p and q as descendants (a node can be a descendant of itself).`,
    difficulty: 'medium',
    category: 'Data Structures & Algorithms',
    constraints: '2 <= number of nodes <= 10^5\n-10^9 <= node.val <= 10^9\nAll node values are unique.\np != q\np and q exist in the tree.',
    inputFormat: 'Root of binary tree and two target values.',
    outputFormat: 'Return the LCA node value.',
    sampleInput: '[3,5,1,6,2,0,8,null,null,7,4]\n5\n1',
    sampleOutput: '3',
    testCases: [
      { input: '[3,5,1,6,2,0,8,null,null,7,4]\n5\n1', expectedOutput: '3', isHidden: false },
      { input: '[3,5,1,6,2,0,8,null,null,7,4]\n5\n4', expectedOutput: '5', isHidden: false },
      { input: '[1,2]\n1\n2', expectedOutput: '1', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function lowestCommonAncestor(root, p, q) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def lowestCommonAncestor(root, p, q):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-dsa-23',
    title: 'Top K Frequent Elements',
    description: `Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.`,
    difficulty: 'medium',
    category: 'Data Structures & Algorithms',
    constraints: '1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4\nk is in the range [1, number of unique elements].\nIt is guaranteed that the answer is unique.',
    inputFormat: 'An array of integers and integer k.',
    outputFormat: 'Return array of k most frequent elements.',
    sampleInput: '[1,1,1,2,2,3]\n2',
    sampleOutput: '[1,2]',
    testCases: [
      { input: '[1,1,1,2,2,3]\n2', expectedOutput: '[1,2]', isHidden: false },
      { input: '[1]\n1', expectedOutput: '[1]', isHidden: false },
      { input: '[4,1,-1,2,-1,2,3]\n2', expectedOutput: '[-1,2]', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function topKFrequent(nums, k) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def topKFrequent(nums, k):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-dsa-24',
    title: 'Clone Graph',
    description: `Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.\n\nEach node contains a value and a list of its neighbors.`,
    difficulty: 'medium',
    category: 'Data Structures & Algorithms',
    constraints: '0 <= number of nodes <= 100\n-100 <= node.val <= 100\nnode.val is unique.\nThe graph is connected.',
    inputFormat: 'Reference to a graph node.',
    outputFormat: 'Return a deep copy of the graph.',
    sampleInput: '[[2,4],[1,3],[2,4],[1,3]]',
    sampleOutput: '[[2,4],[1,3],[2,4],[1,3]]',
    testCases: [
      { input: '[[2,4],[1,3],[2,4],[1,3]]', expectedOutput: '[[2,4],[1,3],[2,4],[1,3]]', isHidden: false },
      { input: '[[]]', expectedOutput: '[[]]', isHidden: false },
      { input: '[]', expectedOutput: '[]', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function cloneGraph(node) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def cloneGraph(node):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-dsa-25',
    title: 'Course Schedule',
    description: `There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.\n\nSome courses have prerequisites. For example, to take course 0 you have to first take course 1, given as pair [0, 1].\n\nGiven the total number of courses and a list of prerequisite pairs, is it possible to finish all courses?`,
    difficulty: 'hard',
    category: 'Data Structures & Algorithms',
    constraints: '1 <= numCourses <= 2000\n0 <= prerequisites.length <= 5000',
    inputFormat: 'Number of courses and array of prerequisite pairs.',
    outputFormat: 'Return true or false.',
    sampleInput: '2\n[[1,0]]',
    sampleOutput: 'true',
    testCases: [
      { input: '2\n[[1,0]]', expectedOutput: 'true', isHidden: false },
      { input: '2\n[[1,0],[0,1]]', expectedOutput: 'false', isHidden: false },
      { input: '1\n[]', expectedOutput: 'true', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function canFinish(numCourses, prerequisites) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def canFinish(numCourses, prerequisites):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-dsa-26',
    title: 'Word Ladder',
    description: `A transformation sequence from word beginWord to word endWord is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:\n\n- Every adjacent pair of words differs by a single letter.\n- Every si is in the wordList.\n- Note that beginWord does not need to be in the wordList.\n\nGiven two words beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence.`,
    difficulty: 'hard',
    category: 'Data Structures & Algorithms',
    constraints: '1 <= beginWord.length <= 10\n1 <= wordList.length <= 5000\nwordList[i].length == beginWord.length',
    inputFormat: 'beginWord, endWord, and wordList.',
    outputFormat: 'Return the length of shortest transformation sequence.',
    sampleInput: 'hit\ncog\n["hot","dot","dog","lot","log","cog"]',
    sampleOutput: '5',
    testCases: [
      { input: 'hit\ncog\n["hot","dot","dog","lot","log","cog"]', expectedOutput: '5', isHidden: false },
      { input: 'hit\ncog\n["hot","dot","dog","lot","log"]', expectedOutput: '0', isHidden: false },
      { input: 'a\nc\n["a","b","c"]', expectedOutput: '2', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function ladderLength(beginWord, endWord, wordList) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def ladderLength(beginWord, endWord, wordList):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-dsa-27',
    title: 'Minimum Window Substring',
    description: `Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.\n\nIf there is no such substring, return the empty string "".`,
    difficulty: 'hard',
    category: 'Data Structures & Algorithms',
    constraints: 'm == s.length\nn == t.length\n1 <= m, n <= 10^5\ns and t consist of uppercase and lowercase English letters.',
    inputFormat: 'Two strings s and t.',
    outputFormat: 'Return the minimum window substring.',
    sampleInput: 'ADOBECODEBANC\nABC',
    sampleOutput: 'BANC',
    testCases: [
      { input: 'ADOBECODEBANC\nABC', expectedOutput: 'BANC', isHidden: false },
      { input: 'a\na', expectedOutput: 'a', isHidden: false },
      { input: 'a\naa', expectedOutput: '', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function minWindow(s, t) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def minWindow(s, t):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-dsa-28',
    title: 'Trapping Rain Water',
    description: `Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.`,
    difficulty: 'hard',
    category: 'Data Structures & Algorithms',
    constraints: 'n == height.length\n1 <= n <= 2 * 10^4\n0 <= height[i] <= 10^5',
    inputFormat: 'An array of non-negative integers.',
    outputFormat: 'Return total units of trapped water.',
    sampleInput: '[0,1,0,2,1,0,1,3,2,1,2,1]',
    sampleOutput: '6',
    testCases: [
      { input: '[0,1,0,2,1,0,1,3,2,1,2,1]', expectedOutput: '6', isHidden: false },
      { input: '[4,2,0,3,2,5]', expectedOutput: '9', isHidden: false },
      { input: '[1,0,1]', expectedOutput: '1', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function trap(height) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def trap(height):\n    # Write your solution here\n    pass' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // Full Stack Development
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-fs-1',
    title: 'REST API Design',
    description: `Design a RESTful API for a blog application with the following resources:

Posts: id, title, content, authorId, createdAt, updatedAt

Write Express.js routes for:
1. GET /api/posts - List all posts
2. GET /api/posts/:id - Get single post
3. POST /api/posts - Create a new post
4. PUT /api/posts/:id - Update a post
5. DELETE /api/posts/:id - Delete a post

Include proper error handling and status codes.`,
    difficulty: 'medium',
    category: 'Full Stack Development',
    constraints: 'Use Express.js with proper HTTP methods and status codes.',
    inputFormat: 'No input.',
    outputFormat: 'Return the route definitions.',
    sampleInput: '',
    sampleOutput: 'Express routes with CRUD operations',
    testCases: [
      { input: '', expectedOutput: 'Has all 5 routes', isHidden: false },
      { input: '', expectedOutput: 'Uses proper HTTP methods and status codes', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "const express = require('express');\nconst router = express.Router();\n\n// GET /api/posts\nrouter.get('/', (req, res) => {});\n\n// GET /api/posts/:id\nrouter.get('/:id', (req, res) => {});\n\n// POST /api/posts\nrouter.post('/', (req, res) => {});\n\n// PUT /api/posts/:id\nrouter.put('/:id', (req, res) => {});\n\n// DELETE /api/posts/:id\nrouter.delete('/:id', (req, res) => {});\n\nmodule.exports = router;" }
    ]
  },
  {
    _id: 'local-fs-2',
    title: 'React API Integration',
    description: `Create a React component that fetches and displays a list of users from a REST API.

Requirements:
1. Fetch users from https://jsonplaceholder.typicode.com/users on mount
2. Show a loading state while fetching
3. Show an error state if the fetch fails
4. Display each user's name, email, and phone
5. Use useEffect and useState hooks
6. Handle cleanup to prevent memory leaks`,
    difficulty: 'medium',
    category: 'Full Stack Development',
    constraints: 'Use functional component with hooks.',
    inputFormat: 'No input.',
    outputFormat: 'Return the React component code.',
    sampleInput: '',
    sampleOutput: 'React component with API fetching, loading, and error states',
    testCases: [
      { input: '', expectedOutput: 'Uses useEffect and useState', isHidden: false },
      { input: '', expectedOutput: 'Has loading and error states', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "import React, { useState, useEffect } from 'react';\n\nconst UserList = () => {\n  const [users, setUsers] = useState([]);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    // Fetch users and handle states\n  }, []);\n\n  if (loading) return <div>Loading...</div>;\n  if (error) return <div>Error: {error}</div>;\n\n  return (\n    <div>\n      {/* Render user list */}\n    </div>\n  );\n};\n\nexport default UserList;" }
    ]
  },
  {
    _id: 'local-fs-3',
    title: 'JWT Authentication Middleware',
    description: `Write an Express.js middleware function for JWT authentication.

The middleware should:
1. Extract the Bearer token from the Authorization header
2. Verify the token using jsonwebtoken library
3. Attach the decoded user data to req.user
4. Return 401 if no token is provided
5. Return 403 if the token is invalid or expired

Also write the login route that generates a JWT token.`,
    difficulty: 'hard',
    category: 'Full Stack Development',
    constraints: 'Use jsonwebtoken package.',
    inputFormat: 'No input.',
    outputFormat: 'Return the middleware and login route.',
    sampleInput: '',
    sampleOutput: 'JWT middleware + login route',
    testCases: [
      { input: '', expectedOutput: 'Middleware extracts and verifies token', isHidden: false },
      { input: '', expectedOutput: 'Login route generates JWT', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "const jwt = require('jsonwebtoken');\n\nconst authMiddleware = (req, res, next) => {\n  // Extract and verify token\n};\n\nconst loginRoute = async (req, res) => {\n  // Verify credentials and return JWT\n};\n\nmodule.exports = { authMiddleware, loginRoute };" }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // Data Structures
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-ds-1',
    title: 'Implement a Stack',
    description: `Implement a Stack data structure with the following operations:
- push(x): Push element x onto stack
- pop(): Removes the element on the top and returns it
- top(): Get the top element without removing it
- isEmpty(): Return true if the stack is empty, false otherwise

Implement using an array.`,
    difficulty: 'easy',
    category: 'Data Structures',
    constraints: '1 <= operations <= 10^4\n-10^9 <= x <= 10^9',
    inputFormat: 'A series of stack operations.',
    outputFormat: 'Output after each pop/top/isEmpty operation.',
    sampleInput: 'push(1), push(2), top(), pop(), isEmpty()',
    sampleOutput: '2, 2, false',
    testCases: [
      { input: 'push(1),push(2),top()', expectedOutput: '2', isHidden: false },
      { input: 'push(5),pop(),isEmpty()', expectedOutput: '5,true', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'class Stack {\n  constructor() {\n    this.items = [];\n  }\n  push(x) {\n    // Add to top\n  }\n  pop() {\n    // Remove and return top\n  }\n  top() {\n    // Return top without removing\n  }\n  isEmpty() {\n    // Return true if empty\n  }\n}' },
      { language: 'python', template: 'class Stack:\n    def __init__(self):\n        self.items = []\n    def push(self, x):\n        # Add to top\n        pass\n    def pop(self):\n        # Remove and return top\n        pass\n    def top(self):\n        # Return top without removing\n        pass\n    def is_empty(self):\n        # Return True if empty\n        pass' },
      { language: 'java', template: 'class Stack {\n    private int[] arr;\n    private int top;\n    public Stack(int size) {\n        arr = new int[size];\n        top = -1;\n    }\n    public void push(int x) { /* Add to top */ }\n    public int pop() { /* Remove and return top */ return -1; }\n    public int top() { /* Return top */ return -1; }\n    public boolean isEmpty() { /* Return true if empty */ return false; }\n}' }
    ]
  },
  {
    _id: 'local-ds-2',
    title: 'Implement a Queue',
    description: `Implement a Queue data structure using two stacks.

Operations:
- enqueue(x): Add element to the back
- dequeue(): Remove and return the front element
- peek(): Return front element without removing
- isEmpty(): Return true if queue is empty

Use two stacks internally.`,
    difficulty: 'medium',
    category: 'Data Structures',
    constraints: '1 <= operations <= 10^4\n-10^9 <= x <= 10^9',
    inputFormat: 'Series of queue operations.',
    outputFormat: 'Output of dequeue/peek/isEmpty calls.',
    sampleInput: 'enqueue(1), enqueue(2), dequeue(), peek()',
    sampleOutput: '1, 2',
    testCases: [
      { input: 'enqueue(1),enqueue(2),dequeue()', expectedOutput: '1', isHidden: false },
      { input: 'enqueue(3),peek()', expectedOutput: '3', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'class MyQueue {\n  constructor() {\n    this.stack1 = [];\n    this.stack2 = [];\n  }\n  enqueue(x) {\n    // Push to stack1\n  }\n  dequeue() {\n    // Use stack2 to get front\n  }\n  peek() {\n    // Front element\n  }\n  isEmpty() {\n    return this.stack1.length === 0 && this.stack2.length === 0;\n  }\n}' },
      { language: 'python', template: 'class MyQueue:\n    def __init__(self):\n        self.s1, self.s2 = [], []\n    def enqueue(self, x):\n        self.s1.append(x)\n    def dequeue(self):\n        if not self.s2:\n            while self.s1:\n                self.s2.append(self.s1.pop())\n        return self.s2.pop() if self.s2 else None\n    def peek(self):\n        if not self.s2:\n            while self.s1:\n                self.s2.append(self.s1.pop())\n        return self.s2[-1] if self.s2 else None\n    def is_empty(self):\n        return not self.s1 and not self.s2' }
    ]
  },
  {
    _id: 'local-ds-3',
    title: 'Linked List â€” Insert & Delete',
    description: `Implement a Singly Linked List with:
- insertAtHead(val): Insert at the beginning
- insertAtTail(val): Insert at the end  
- deleteByValue(val): Delete first occurrence of val
- print(): Return all values as a space-separated string

Each node has: value and next pointer.`,
    difficulty: 'easy',
    category: 'Data Structures',
    constraints: '1 <= operations <= 10^3\n-10^4 <= val <= 10^4',
    inputFormat: 'Series of linked list operations.',
    outputFormat: 'Result of print() call.',
    sampleInput: 'insertAtHead(3), insertAtHead(1), insertAtTail(5), print()',
    sampleOutput: '1 3 5',
    testCases: [
      { input: 'insertAtTail(1),insertAtTail(2),insertAtTail(3),print()', expectedOutput: '1 2 3', isHidden: false },
      { input: 'insertAtHead(5),insertAtHead(3),deleteByValue(5),print()', expectedOutput: '3', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'class Node {\n  constructor(val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass LinkedList {\n  constructor() {\n    this.head = null;\n  }\n  insertAtHead(val) {\n    // Insert at beginning\n  }\n  insertAtTail(val) {\n    // Insert at end\n  }\n  deleteByValue(val) {\n    // Delete first occurrence\n  }\n  print() {\n    // Return space-separated values\n  }\n}' },
      { language: 'python', template: 'class Node:\n    def __init__(self, val):\n        self.val = val\n        self.next = None\n\nclass LinkedList:\n    def __init__(self):\n        self.head = None\n    def insert_at_head(self, val):\n        node = Node(val)\n        node.next = self.head\n        self.head = node\n    def insert_at_tail(self, val):\n        node = Node(val)\n        if not self.head:\n            self.head = node; return\n        cur = self.head\n        while cur.next: cur = cur.next\n        cur.next = node\n    def delete_by_value(self, val):\n        if not self.head: return\n        if self.head.val == val:\n            self.head = self.head.next; return\n        cur = self.head\n        while cur.next and cur.next.val != val: cur = cur.next\n        if cur.next: cur.next = cur.next.next\n    def print_list(self):\n        vals = []\n        cur = self.head\n        while cur:\n            vals.append(str(cur.val))\n            cur = cur.next\n        return " ".join(vals)' }
    ]
  },
  {
    _id: 'local-ds-4',
    title: 'Binary Search Tree â€” Insert & Search',
    description: `Implement a Binary Search Tree (BST) with:
- insert(val): Insert value maintaining BST property
- search(val): Return true if val exists, false otherwise
- inorder(): Return inorder traversal as comma-separated string

BST Property: left subtree has smaller values, right has larger.`,
    difficulty: 'medium',
    category: 'Data Structures',
    constraints: '1 <= n <= 10^3\n-10^4 <= val <= 10^4',
    inputFormat: 'Series of BST operations.',
    outputFormat: 'Result of search/inorder calls.',
    sampleInput: 'insert(5), insert(3), insert(7), inorder()',
    sampleOutput: '3,5,7',
    testCases: [
      { input: 'insert(5),insert(3),insert(7),inorder()', expectedOutput: '3,5,7', isHidden: false },
      { input: 'insert(4),insert(2),insert(6),search(2)', expectedOutput: 'true', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'class TreeNode {\n  constructor(val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass BST {\n  constructor() {\n    this.root = null;\n  }\n  insert(val) {\n    // Insert maintaining BST property\n  }\n  search(val) {\n    // Return true if found\n  }\n  inorder() {\n    // Return inorder traversal\n  }\n}' },
      { language: 'python', template: 'class BST:\n    def __init__(self):\n        self.root = None\n    def _insert(self, node, val):\n        if not node:\n            return type("Node", (), {"val": val, "left": None, "right": None})()\n        if val < node.val: node.left = self._insert(node.left, val)\n        elif val > node.val: node.right = self._insert(node.right, val)\n        return node\n    def insert(self, val):\n        self.root = self._insert(self.root, val)\n    def search(self, val):\n        cur = self.root\n        while cur:\n            if cur.val == val: return True\n            cur = cur.left if val < cur.val else cur.right\n        return False\n    def inorder(self):\n        result = []\n        def dfs(node):\n            if node:\n                dfs(node.left); result.append(str(node.val)); dfs(node.right)\n        dfs(self.root)\n        return ",".join(result)' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // Algorithms
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-algo-1',
    title: 'Binary Search',
    description: `Given a sorted array of integers and a target value, return the index of target using binary search.

If target is not found, return -1.

Binary search works by repeatedly dividing the search interval in half.`,
    difficulty: 'easy',
    category: 'Algorithms',
    constraints: '1 <= nums.length <= 10^4\n-10^4 <= nums[i], target <= 10^4\nnums is sorted in ascending order.',
    inputFormat: 'First line: sorted array\nSecond line: target',
    outputFormat: 'Index of target or -1.',
    sampleInput: '[1,3,5,7,9]\n7',
    sampleOutput: '3',
    testCases: [
      { input: '[1,3,5,7,9]\n7', expectedOutput: '3', isHidden: false },
      { input: '[1,2,3,4,5]\n6', expectedOutput: '-1', isHidden: false },
      { input: '[-5,-3,0,3,9]\n0', expectedOutput: '2', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function binarySearch(nums, target) {\n  let left = 0, right = nums.length - 1;\n  // Implement binary search\n  return -1;\n}' },
      { language: 'python', template: 'def binary_search(nums, target):\n    left, right = 0, len(nums) - 1\n    # Implement binary search\n    return -1' },
      { language: 'java', template: 'class Solution {\n    public int search(int[] nums, int target) {\n        int left = 0, right = nums.length - 1;\n        // Implement binary search\n        return -1;\n    }\n}' },
      { language: 'cpp', template: '#include <vector>\nusing namespace std;\n\nint binarySearch(vector<int>& nums, int target) {\n    int left = 0, right = nums.size() - 1;\n    // Implement binary search\n    return -1;\n}' }
    ]
  },
  {
    _id: 'local-algo-2',
    title: 'Merge Sort',
    description: `Implement the Merge Sort algorithm to sort an array of integers in ascending order.

Merge Sort works by:
1. Dividing the array in half recursively
2. Sorting each half
3. Merging the two sorted halves

Time complexity: O(n log n), Space: O(n)`,
    difficulty: 'medium',
    category: 'Algorithms',
    constraints: '1 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9',
    inputFormat: 'An array of integers.',
    outputFormat: 'The sorted array as a comma-separated string.',
    sampleInput: '[5,2,8,1,9,3]',
    sampleOutput: '1,2,3,5,8,9',
    testCases: [
      { input: '[5,2,8,1,9,3]', expectedOutput: '1,2,3,5,8,9', isHidden: false },
      { input: '[1]', expectedOutput: '1', isHidden: false },
      { input: '[9,8,7,6,5,4,3,2,1]', expectedOutput: '1,2,3,4,5,6,7,8,9', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function mergeSort(arr) {\n  if (arr.length <= 1) return arr;\n  const mid = Math.floor(arr.length / 2);\n  const left = mergeSort(arr.slice(0, mid));\n  const right = mergeSort(arr.slice(mid));\n  return merge(left, right);\n}\n\nfunction merge(left, right) {\n  // Merge two sorted arrays\n  const result = [];\n  // Write merge logic here\n  return result;\n}' },
      { language: 'python', template: 'def merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(left, right):\n    result = []\n    i = j = 0\n    # Merge logic here\n    return result' }
    ]
  },
  {
    _id: 'local-algo-3',
    title: 'Longest Common Subsequence',
    description: `Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order.

Example: text1 = "abcde", text2 = "ace" â†’ LCS = "ace" â†’ length 3

Use dynamic programming.`,
    difficulty: 'hard',
    category: 'Algorithms',
    constraints: '1 <= text1.length, text2.length <= 1000\ntext1 and text2 consist of lowercase English characters.',
    inputFormat: 'Two strings on separate lines.',
    outputFormat: 'The length of the longest common subsequence.',
    sampleInput: 'abcde\nace',
    sampleOutput: '3',
    testCases: [
      { input: 'abcde\nace', expectedOutput: '3', isHidden: false },
      { input: 'abc\nabc', expectedOutput: '3', isHidden: false },
      { input: 'abc\ndef', expectedOutput: '0', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function longestCommonSubsequence(text1, text2) {\n  const m = text1.length, n = text2.length;\n  // Create DP table\n  const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));\n  // Fill DP table\n  // Return dp[m][n]\n}' },
      { language: 'python', template: 'def lcs(text1, text2):\n    m, n = len(text1), len(text2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if text1[i-1] == text2[j-1]:\n                dp[i][j] = dp[i-1][j-1] + 1\n            else:\n                dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n    return dp[m][n]' }
    ]
  },
  {
    _id: 'local-algo-4',
    title: 'Maximum Subarray (Kadane\'s Algorithm)',
    description: `Given an integer array nums, find the contiguous subarray which has the largest sum and return its sum.

Use Kadane's Algorithm for O(n) time complexity.

Example: [-2,1,-3,4,-1,2,1,-5,4] â†’ max subarray is [4,-1,2,1] â†’ sum = 6`,
    difficulty: 'easy',
    category: 'Algorithms',
    constraints: '1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4',
    inputFormat: 'An array of integers.',
    outputFormat: 'Maximum subarray sum.',
    sampleInput: '[-2,1,-3,4,-1,2,1,-5,4]',
    sampleOutput: '6',
    testCases: [
      { input: '[-2,1,-3,4,-1,2,1,-5,4]', expectedOutput: '6', isHidden: false },
      { input: '[1]', expectedOutput: '1', isHidden: false },
      { input: '[-1,-2,-3,-4]', expectedOutput: '-1', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function maxSubArray(nums) {\n  // Implement Kadane\'s algorithm\n  let maxSum = nums[0];\n  let currentSum = nums[0];\n  // Fill in the logic\n  return maxSum;\n}' },
      { language: 'python', template: 'def max_sub_array(nums):\n    max_sum = nums[0]\n    current_sum = nums[0]\n    for num in nums[1:]:\n        current_sum = max(num, current_sum + num)\n        max_sum = max(max_sum, current_sum)\n    return max_sum' },
      { language: 'cpp', template: '#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint maxSubArray(vector<int>& nums) {\n    int maxSum = nums[0], cur = nums[0];\n    for (int i = 1; i < nums.size(); i++) {\n        cur = max(nums[i], cur + nums[i]);\n        maxSum = max(maxSum, cur);\n    }\n    return maxSum;\n}' }
    ]
  },
  {
    _id: 'local-algo-5',
    title: 'Valid Parentheses',
    description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.`,
    difficulty: 'easy',
    category: 'Algorithms',
    constraints: '1 <= s.length <= 10^4\ns consists of parentheses only.',
    inputFormat: 'A string of brackets.',
    outputFormat: 'Return true or false.',
    sampleInput: '()[]{}',
    sampleOutput: 'true',
    testCases: [
      { input: '()[]{}', expectedOutput: 'true', isHidden: false },
      { input: '([)]', expectedOutput: 'false', isHidden: false },
      { input: '{[]}', expectedOutput: 'true', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function isValid(s) {\n  const stack = [];\n  const map = { ")": "(", "}": "{", "]": "[" };\n  // Implement using stack\n  return stack.length === 0;\n}' },
      { language: 'python', template: 'def is_valid(s):\n    stack = []\n    mapping = {")": "(", "}": "{", "]": "["}\n    for ch in s:\n        if ch in mapping:\n            top = stack.pop() if stack else "#"\n            if mapping[ch] != top:\n                return False\n        else:\n            stack.append(ch)\n    return not stack' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // Algorithms â€” Additional
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-algo-6',
    title: "Dijkstra's Shortest Path",
    description: `Implement Dijkstra's algorithm to find the shortest path from a source vertex to all other vertices in a weighted graph.\n\nGiven a graph represented as an adjacency list with weights, find the shortest distance from the source to every other vertex.\n\nReturn the shortest distances as a comma-separated string. Use -1 for unreachable vertices.`,
    difficulty: 'hard',
    category: 'Algorithms',
    constraints: '1 <= V <= 10^4\n0 <= E <= 10^5\n1 <= weight <= 10^4',
    inputFormat: 'Adjacency list and source vertex.',
    outputFormat: 'Return shortest distances from source.',
    sampleInput: '{0:[[1,4],[2,1]],1:[[3,1]],2:[[1,2],[3,5]]}\n0',
    sampleOutput: '0,3,1,4',
    testCases: [
      { input: '{0:[[1,4],[2,1]],1:[[3,1]],2:[[1,2],[3,5]]}\n0', expectedOutput: '0,3,1,4', isHidden: false },
      { input: '{0:[[1,2]],1:[[2,3]],2:[]}\n0', expectedOutput: '0,2,5', isHidden: false },
      { input: '{0:[[1,1]],1:[]}\n0', expectedOutput: '0,1,-1', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function dijkstra(graph, source) {\n  // Implement Dijkstra\'s algorithm\n  \n}' },
      { language: 'python', template: 'import heapq\n\ndef dijkstra(graph, source):\n    # Implement Dijkstra\'s algorithm\n    pass' }
    ]
  },
  {
    _id: 'local-algo-7',
    title: '0/1 Knapsack Problem',
    description: `Given n items, each with a weight and a value, determine the maximum value that can be obtained by putting items in a knapsack of capacity W.\n\nYou cannot break items - either take the whole item or leave it (0/1 property).`,
    difficulty: 'hard',
    category: 'Algorithms',
    constraints: '1 <= n <= 100\n1 <= W <= 1000\n1 <= weight[i] <= W\n1 <= value[i] <= 1000',
    inputFormat: 'Capacity W, number of items n, arrays of weights and values.',
    outputFormat: 'Return maximum value.',
    sampleInput: '50\n3\n[10,20,30]\n[60,100,120]',
    sampleOutput: '220',
    testCases: [
      { input: '50\n3\n[10,20,30]\n[60,100,120]', expectedOutput: '220', isHidden: false },
      { input: '10\n2\n[5,6]\n[10,20]', expectedOutput: '20', isHidden: false },
      { input: '0\n1\n[5]\n[10]', expectedOutput: '0', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function knapsack(W, weights, values) {\n  // Implement 0/1 Knapsack\n  \n}' },
      { language: 'python', template: 'def knapsack(W, weights, values):\n    # Implement 0/1 Knapsack\n    pass' }
    ]
  },
  {
    _id: 'local-algo-8',
    title: "Backtracking - N-Queens",
    description: `The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.\n\nGiven an integer n, return the number of distinct solutions to the n-queens puzzle.\n\nEach solution contains a distinct board configuration of the n-queens placement, where 'Q' indicates a queen and '.' indicates an empty space.`,
    difficulty: 'hard',
    category: 'Algorithms',
    constraints: '1 <= n <= 9',
    inputFormat: 'An integer n.',
    outputFormat: 'Return the number of distinct solutions.',
    sampleInput: '4',
    sampleOutput: '2',
    testCases: [
      { input: '4', expectedOutput: '2', isHidden: false },
      { input: '1', expectedOutput: '1', isHidden: false },
      { input: '8', expectedOutput: '92', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function nQueens(n) {\n  // Implement N-Queens using backtracking\n  \n}' },
      { language: 'python', template: 'def nQueens(n):\n    # Implement N-Queens using backtracking\n    pass' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // OOP
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-oop-1',
    title: 'Class Inheritance â€” Animal',
    description: `Design an OOP hierarchy for animals:

1. Create a base class Animal with:
   - Properties: name, sound
   - Constructor to initialize them
   - Method makeSound(): returns "\${name} says \${sound}"

2. Create derived classes Dog and Cat that inherit Animal:
   - Dog: sound = "Woof"
   - Cat: sound = "Meow"

3. Create a Zoo class that:
   - Holds an array of Animals
   - Method addAnimal(animal)
   - Method allSounds(): returns all sounds joined by ", "`,
    difficulty: 'easy',
    category: 'OOP',
    constraints: 'Use class-based OOP.',
    inputFormat: 'No input.',
    outputFormat: 'Return result of allSounds().',
    sampleInput: 'new Dog("Rex"), new Cat("Whiskers")',
    sampleOutput: 'Rex says Woof, Whiskers says Meow',
    testCases: [
      { input: 'Dog("Rex"), Cat("Whiskers")', expectedOutput: 'Rex says Woof, Whiskers says Meow', isHidden: false },
      { input: 'Animal hierarchy setup', expectedOutput: 'Correct inheritance', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'class Animal {\n  constructor(name, sound) {\n    // Initialize name and sound\n  }\n  makeSound() {\n    // Return "{name} says {sound}"\n  }\n}\n\nclass Dog extends Animal {\n  constructor(name) {\n    // Call super with "Woof"\n  }\n}\n\nclass Cat extends Animal {\n  constructor(name) {\n    // Call super with "Meow"\n  }\n}\n\nclass Zoo {\n  constructor() {\n    this.animals = [];\n  }\n  addAnimal(animal) { this.animals.push(animal); }\n  allSounds() {\n    return this.animals.map(a => a.makeSound()).join(\', \');\n  }\n}' },
      { language: 'python', template: 'class Animal:\n    def __init__(self, name, sound):\n        self.name = name\n        self.sound = sound\n    def make_sound(self):\n        return f"{self.name} says {self.sound}"\n\nclass Dog(Animal):\n    def __init__(self, name):\n        super().__init__(name, "Woof")\n\nclass Cat(Animal):\n    def __init__(self, name):\n        super().__init__(name, "Meow")\n\nclass Zoo:\n    def __init__(self):\n        self.animals = []\n    def add_animal(self, animal):\n        self.animals.append(animal)\n    def all_sounds(self):\n        return ", ".join(a.make_sound() for a in self.animals)' }
    ]
  },
  {
    _id: 'local-oop-2',
    title: 'Design a Bank Account',
    description: `Design a BankAccount class with OOP principles:

Properties:
- accountNumber (string, readonly)
- ownerName (string)
- balance (number, private - starts at 0)

Methods:
- deposit(amount): Add to balance. Throw error if amount <= 0
- withdraw(amount): Deduct from balance. Throw error if amount > balance or amount <= 0
- getBalance(): Return current balance
- toString(): Return "Account {accountNumber}: {ownerName} â€” â‚¹{balance}"

Demonstrate encapsulation by protecting the balance.`,
    difficulty: 'medium',
    category: 'OOP',
    constraints: 'Balance must not go negative.',
    inputFormat: 'Series of BankAccount operations.',
    outputFormat: 'Return balance or toString() result.',
    sampleInput: 'deposit(1000), deposit(500), withdraw(200), getBalance()',
    sampleOutput: '1300',
    testCases: [
      { input: 'deposit(500),withdraw(200),getBalance()', expectedOutput: '300', isHidden: false },
      { input: 'deposit(100),withdraw(200)', expectedOutput: 'Error: Insufficient funds', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'class BankAccount {\n  #balance = 0;\n  constructor(accountNumber, ownerName) {\n    this.accountNumber = accountNumber;\n    this.ownerName = ownerName;\n  }\n  deposit(amount) {\n    if (amount <= 0) throw new Error("Amount must be positive");\n    this.#balance += amount;\n  }\n  withdraw(amount) {\n    if (amount <= 0) throw new Error("Amount must be positive");\n    if (amount > this.#balance) throw new Error("Insufficient funds");\n    this.#balance -= amount;\n  }\n  getBalance() { return this.#balance; }\n  toString() {\n    return `Account ${this.accountNumber}: ${this.ownerName} â€” â‚¹${this.#balance}`;\n  }\n}' },
      { language: 'python', template: 'class BankAccount:\n    def __init__(self, account_number, owner_name):\n        self.account_number = account_number\n        self.owner_name = owner_name\n        self.__balance = 0\n    def deposit(self, amount):\n        if amount <= 0:\n            raise ValueError("Amount must be positive")\n        self.__balance += amount\n    def withdraw(self, amount):\n        if amount <= 0:\n            raise ValueError("Amount must be positive")\n        if amount > self.__balance:\n            raise ValueError("Insufficient funds")\n        self.__balance -= amount\n    def get_balance(self):\n        return self.__balance\n    def __str__(self):\n        return f"Account {self.account_number}: {self.owner_name} â€” â‚¹{self.__balance}"' }
    ]
  },
  {
    _id: 'local-oop-3',
    title: 'Polymorphism â€” Shape Calculator',
    description: `Demonstrate polymorphism with shapes:

1. Abstract base class Shape with:
   - Abstract method area(): Returns area
   - Abstract method perimeter(): Returns perimeter
   - Method describe(): Returns "Shape: {type}, Area: {area:.2f}, Perimeter: {perimeter:.2f}"

2. Concrete classes:
   - Circle(radius): area = Ï€Ã—rÂ², perimeter = 2Ã—Ï€Ã—r
   - Rectangle(width, height): area = wÃ—h, perimeter = 2Ã—(w+h)
   - Triangle(a, b, c) where c is height: area = 0.5Ã—aÃ—c, perimeter = a+b+c

3. Write a function printShapes(shapes) that calls describe() on each.`,
    difficulty: 'medium',
    category: 'OOP',
    constraints: 'Use inheritance and method overriding. Use Math.PI = 3.14159.',
    inputFormat: 'No input.',
    outputFormat: 'Return describe() for each shape.',
    sampleInput: 'Circle(5), Rectangle(4, 6)',
    sampleOutput: 'Shape: Circle, Area: 78.54, Perimeter: 31.42\nShape: Rectangle, Area: 24.00, Perimeter: 20.00',
    testCases: [
      { input: 'Circle with radius 5', expectedOutput: 'Area: 78.54', isHidden: false },
      { input: 'Rectangle 4x6', expectedOutput: 'Perimeter: 20.00', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'class Shape {\n  area() { throw new Error("Must implement area()"); }\n  perimeter() { throw new Error("Must implement perimeter()"); }\n  describe() {\n    return `Shape: ${this.constructor.name}, Area: ${this.area().toFixed(2)}, Perimeter: ${this.perimeter().toFixed(2)}`;\n  }\n}\n\nclass Circle extends Shape {\n  constructor(radius) {\n    super();\n    this.radius = radius;\n  }\n  area() { return Math.PI * this.radius ** 2; }\n  perimeter() { return 2 * Math.PI * this.radius; }\n}\n\nclass Rectangle extends Shape {\n  constructor(width, height) {\n    super();\n    this.width = width;\n    this.height = height;\n  }\n  area() { /* Implement */ }\n  perimeter() { /* Implement */ }\n}' },
      { language: 'python', template: 'from abc import ABC, abstractmethod\nimport math\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self): pass\n    @abstractmethod\n    def perimeter(self): pass\n    def describe(self):\n        return f"Shape: {type(self).__name__}, Area: {self.area():.2f}, Perimeter: {self.perimeter():.2f}"\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    def area(self): return math.pi * self.radius ** 2\n    def perimeter(self): return 2 * math.pi * self.radius\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    def area(self): return self.width * self.height\n    def perimeter(self): return 2 * (self.width + self.height)' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // OOP â€” Additional
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-oop-4',
    title: 'Observer Pattern',
    description: `Implement the Observer design pattern:\n\n1. Create a Subject class that:\n   - Maintains a list of observers\n   - Has subscribe(observer) and unsubscribe(observer) methods\n   - Has notify(data) method that calls update on all observers\n\n2. Create an Observer class/interface with an update(data) method\n\n3. Create concrete observers: LoggerObserver (logs data) and CounterObserver (counts notifications)\n\nDemonstrate by subscribing observers, notifying them, and unsubscribing one.`,
    difficulty: 'medium',
    category: 'OOP',
    constraints: 'Implement the Observer pattern correctly.',
    inputFormat: 'No input.',
    outputFormat: 'Return class implementations.',
    sampleInput: '',
    sampleOutput: 'Subject, Observer, LoggerObserver, CounterObserver classes',
    testCases: [
      { input: '', expectedOutput: 'Subject has subscribe, unsubscribe, notify', isHidden: false },
      { input: '', expectedOutput: 'Observers get notified on data change', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'class Subject {\n  constructor() {\n    this.observers = [];\n  }\n  subscribe(observer) {\n    this.observers.push(observer);\n  }\n  unsubscribe(observer) {\n    this.observers = this.observers.filter(o => o !== observer);\n  }\n  notify(data) {\n    this.observers.forEach(o => o.update(data));\n  }\n}\n\nclass LoggerObserver {\n  update(data) {\n    console.log("Logged:", data);\n  }\n}\n\nclass CounterObserver {\n  constructor() { this.count = 0; }\n  update(data) { this.count++; }\n}' },
      { language: 'python', template: 'class Subject:\n    def __init__(self):\n        self.observers = []\n    def subscribe(self, observer):\n        self.observers.append(observer)\n    def unsubscribe(self, observer):\n        self.observers.remove(observer)\n    def notify(self, data):\n        for o in self.observers:\n            o.update(data)\n\nclass LoggerObserver:\n    def update(self, data):\n        print(f"Logged: {data}")\n\nclass CounterObserver:\n    def __init__(self):\n        self.count = 0\n    def update(self, data):\n        self.count += 1' }
    ]
  },
  {
    _id: 'local-oop-5',
    title: 'Factory Pattern',
    description: `Implement the Factory design pattern for creating different types of vehicles:\n\n1. Create a Vehicle interface/base class with start() and stop() methods\n\n2. Create concrete classes: Car, Truck, Motorcycle\n   - Car: start() returns "Car started", stop() returns "Car stopped"\n   - Truck: start() returns "Truck started with heavy engine", stop() returns "Truck stopped"\n   - Motorcycle: start() returns "Motorcycle started", stop() returns "Motorcycle stopped"\n\n3. Create a VehicleFactory with a create(type) method that returns the appropriate vehicle\n\n4. Handle invalid types by throwing an error`,
    difficulty: 'medium',
    category: 'OOP',
    constraints: 'Use the Factory pattern.',
    inputFormat: 'Vehicle type string.',
    outputFormat: 'Return a vehicle instance.',
    sampleInput: 'Car',
    sampleOutput: 'Vehicle that returns "Car started" on start()',
    testCases: [
      { input: 'Car', expectedOutput: 'start() returns "Car started"', isHidden: false },
      { input: 'Truck', expectedOutput: 'start() returns "Truck started with heavy engine"', isHidden: false },
      { input: 'Boat', expectedOutput: 'Throws error', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'class Vehicle {\n  start() { throw new Error("Not implemented"); }\n  stop() { throw new Error("Not implemented"); }\n}\n\nclass Car extends Vehicle {\n  start() { return "Car started"; }\n  stop() { return "Car stopped"; }\n}\n\nclass Truck extends Vehicle {\n  start() { return "Truck started with heavy engine"; }\n  stop() { return "Truck stopped"; }\n}\n\nclass Motorcycle extends Vehicle {\n  start() { return "Motorcycle started"; }\n  stop() { return "Motorcycle stopped"; }\n}\n\nclass VehicleFactory {\n  static create(type) {\n    // Return appropriate vehicle\n  }\n}' },
      { language: 'python', template: 'class Vehicle:\n    def start(self): raise NotImplementedError\n    def stop(self): raise NotImplementedError\n\nclass Car(Vehicle):\n    def start(self): return "Car started"\n    def stop(self): return "Car stopped"\n\nclass Truck(Vehicle):\n    def start(self): return "Truck started with heavy engine"\n    def stop(self): return "Truck stopped"\n\nclass Motorcycle(Vehicle):\n    def start(self): return "Motorcycle started"\n    def stop(self): return "Motorcycle stopped"\n\nclass VehicleFactory:\n    @staticmethod\n    def create(vehicle_type):\n        # Return appropriate vehicle\n        pass' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // More C++ â€” Medium / Hard
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-cpp-4',
    title: 'Longest Substring Without Repeating',
    description: `Given a string s, find the length of the longest substring without repeating characters.

Use the sliding window technique for O(n) time.

Example: s = "abcabcbb" â†’ "abc" â†’ length 3`,
    difficulty: 'medium',
    category: 'C++',
    constraints: '0 <= s.length <= 5 Ã— 10^4\ns consists of English letters, digits, symbols and spaces.',
    inputFormat: 'A string s.',
    outputFormat: 'Length of longest substring without repeating characters.',
    sampleInput: 'abcabcbb',
    sampleOutput: '3',
    testCases: [
      { input: 'abcabcbb', expectedOutput: '3', isHidden: false },
      { input: 'bbbbb', expectedOutput: '1', isHidden: false },
      { input: 'pwwkew', expectedOutput: '3', isHidden: true }
    ],
    starterCode: [
      { language: 'cpp', template: '#include <string>\n#include <unordered_map>\nusing namespace std;\n\nint lengthOfLongestSubstring(string s) {\n    unordered_map<char, int> map;\n    int left = 0, maxLen = 0;\n    // Sliding window logic\n    return maxLen;\n}' },
      { language: 'javascript', template: 'function lengthOfLongestSubstring(s) {\n  const map = new Map();\n  let left = 0, maxLen = 0;\n  // Sliding window logic\n  return maxLen;\n}' },
      { language: 'python', template: 'def length_of_longest_substring(s):\n    char_map = {}\n    left = 0\n    max_len = 0\n    for right, ch in enumerate(s):\n        if ch in char_map and char_map[ch] >= left:\n            left = char_map[ch] + 1\n        char_map[ch] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len' }
    ]
  },
  {
    _id: 'local-cpp-5',
    title: 'Matrix Rotation (90Â°)',
    description: `Given an nÃ—n 2D matrix, rotate it 90 degrees clockwise in-place.

Approach:
1. Transpose the matrix (swap matrix[i][j] with matrix[j][i])
2. Reverse each row

Example:
Input:  [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]`,
    difficulty: 'medium',
    category: 'C++',
    constraints: 'n == matrix.length == matrix[i].length\n1 <= n <= 20',
    inputFormat: 'An nÃ—n matrix.',
    outputFormat: 'The rotated matrix.',
    sampleInput: '[[1,2,3],[4,5,6],[7,8,9]]',
    sampleOutput: '[[7,4,1],[8,5,2],[9,6,3]]',
    testCases: [
      { input: '[[1,2,3],[4,5,6],[7,8,9]]', expectedOutput: '[[7,4,1],[8,5,2],[9,6,3]]', isHidden: false },
      { input: '[[1]]', expectedOutput: '[[1]]', isHidden: false },
      { input: '[[1,2],[3,4]]', expectedOutput: '[[3,1],[4,2]]', isHidden: true }
    ],
    starterCode: [
      { language: 'cpp', template: '#include <vector>\nusing namespace std;\n\nvoid rotate(vector<vector<int>>& matrix) {\n    int n = matrix.size();\n    // Step 1: Transpose\n    // Step 2: Reverse each row\n}' },
      { language: 'javascript', template: 'function rotate(matrix) {\n  const n = matrix.length;\n  // Step 1: Transpose\n  for (let i = 0; i < n; i++)\n    for (let j = i + 1; j < n; j++)\n      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];\n  // Step 2: Reverse each row\n  for (let i = 0; i < n; i++)\n    matrix[i].reverse();\n}' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // C++ â€” Additional
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-cpp-6',
    title: 'Merge Sorted Arrays',
    description: `Given two sorted arrays nums1 and nums2, merge them into a single sorted array.\n\nThe result should be stored in nums1 (which has enough space to hold all elements).`,
    difficulty: 'easy',
    category: 'C++',
    constraints: '1 <= nums1.length, nums2.length <= 10^3\n-10^4 <= nums1[i], nums2[i] <= 10^4\nnums1.length == m + n',
    inputFormat: 'Two sorted arrays.',
    outputFormat: 'Return merged sorted array.',
    sampleInput: '[1,2,3,0,0,0]\n3\n[2,5,6]\n3',
    sampleOutput: '[1,2,2,3,5,6]',
    testCases: [
      { input: '[1,2,3,0,0,0]\n3\n[2,5,6]\n3', expectedOutput: '[1,2,2,3,5,6]', isHidden: false },
      { input: '[0]\n0\n[1]\n1', expectedOutput: '[1]', isHidden: false },
      { input: '[4,5,6,0,0,0]\n3\n[1,2,3]\n3', expectedOutput: '[1,2,3,4,5,6]', isHidden: true }
    ],
    starterCode: [
      { language: 'cpp', template: '#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n        // Merge nums2 into nums1 in-place\n    }\n};' },
      { language: 'javascript', template: 'function merge(nums1, m, nums2, n) {\n  // Merge nums2 into nums1 in-place\n  \n}' },
      { language: 'python', template: 'def merge(nums1, m, nums2, n):\n    # Merge nums2 into nums1 in-place\n    pass' }
    ]
  },
  {
    _id: 'local-cpp-7',
    title: 'Valid Parentheses',
    description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.`,
    difficulty: 'easy',
    category: 'C++',
    constraints: '1 <= s.length <= 10^4\ns consists of parentheses only.',
    inputFormat: 'A string of parentheses.',
    outputFormat: 'Return true or false.',
    sampleInput: '()[]{}',
    sampleOutput: 'true',
    testCases: [
      { input: '()[]{}', expectedOutput: 'true', isHidden: false },
      { input: '(]', expectedOutput: 'false', isHidden: false },
      { input: '([)]', expectedOutput: 'false', isHidden: false },
      { input: '{[]}', expectedOutput: 'true', isHidden: true }
    ],
    starterCode: [
      { language: 'cpp', template: '#include <string>\n#include <stack>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool isValid(string s) {\n        // Write your solution here\n        \n    }\n};' },
      { language: 'javascript', template: 'function isValid(s) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def isValid(s):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-cpp-8',
    title: 'Maximum Subarray',
    description: `Given an integer array nums, find the subarray with the largest sum, and return its sum.\n\nA subarray is a contiguous non-empty sequence of elements within an array.`,
    difficulty: 'medium',
    category: 'C++',
    constraints: '1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4',
    inputFormat: 'An array of integers.',
    outputFormat: 'Return the maximum subarray sum.',
    sampleInput: '[-2,1,-3,4,-1,2,1,-5,4]',
    sampleOutput: '6',
    testCases: [
      { input: '[-2,1,-3,4,-1,2,1,-5,4]', expectedOutput: '6', isHidden: false },
      { input: '[1]', expectedOutput: '1', isHidden: false },
      { input: '[5,4,-1,7,8]', expectedOutput: '23', isHidden: true }
    ],
    starterCode: [
      { language: 'cpp', template: '#include <vector>\n#include <algorithm>\nusing namespace std;\n\nclass Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        // Write your solution here\n        \n    }\n};' },
      { language: 'javascript', template: 'function maxSubArray(nums) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def maxSubArray(nums):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-cpp-9',
    title: 'Binary Tree Level Order Traversal',
    description: `Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).`,
    difficulty: 'hard',
    category: 'C++',
    constraints: '0 <= number of nodes <= 2000\n-1000 <= node.val <= 1000',
    inputFormat: 'Root of binary tree (level-order representation).',
    outputFormat: 'Return level order traversal as nested arrays.',
    sampleInput: '[3,9,20,null,null,15,7]',
    sampleOutput: '[[3],[9,20],[15,7]]',
    testCases: [
      { input: '[3,9,20,null,null,15,7]', expectedOutput: '[[3],[9,20],[15,7]]', isHidden: false },
      { input: '[1]', expectedOutput: '[[1]]', isHidden: false },
      { input: '[]', expectedOutput: '[]', isHidden: true }
    ],
    starterCode: [
      { language: 'cpp', template: '#include <vector>\n#include <queue>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode *left;\n    TreeNode *right;\n    TreeNode() : val(0), left(nullptr), right(nullptr) {}\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n};\n\nclass Solution {\npublic:\n    vector<vector<int>> levelOrder(TreeNode* root) {\n        // Write your solution here\n        \n    }\n};' },
      { language: 'javascript', template: 'function levelOrder(root) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def levelOrder(root):\n    # Write your solution here\n    pass' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // More Python â€” Medium
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-py-5',
    title: 'Group Anagrams',
    description: `Given an array of strings strs, group the anagrams together.

An Anagram is a word formed by rearranging the letters of a different word, using all the original letters exactly once.

Example: ["eat","tea","tan","ate","nat","bat"] â†’ [["bat"],["nat","tan"],["ate","eat","tea"]]`,
    difficulty: 'medium',
    category: 'Python',
    constraints: '1 <= strs.length <= 10^4\n0 <= strs[i].length <= 100',
    inputFormat: 'Array of strings.',
    outputFormat: 'Groups of anagrams, each group sorted, groups sorted by first element.',
    sampleInput: '["eat","tea","tan","ate","nat","bat"]',
    sampleOutput: '[["ate","eat","tea"],["bat"],["nat","tan"]]',
    testCases: [
      { input: '["eat","tea","tan","ate","nat","bat"]', expectedOutput: '[["ate","eat","tea"],["bat"],["nat","tan"]]', isHidden: false },
      { input: '[""]', expectedOutput: '[[""]]', isHidden: true }
    ],
    starterCode: [
      { language: 'python', template: 'from collections import defaultdict\n\ndef group_anagrams(strs):\n    anagram_map = defaultdict(list)\n    for s in strs:\n        key = tuple(sorted(s))\n        anagram_map[key].append(s)\n    return [sorted(group) for group in sorted(anagram_map.values())]' },
      { language: 'javascript', template: 'function groupAnagrams(strs) {\n  const map = new Map();\n  for (const s of strs) {\n    const key = s.split("").sort().join("");\n    if (!map.has(key)) map.set(key, []);\n    map.get(key).push(s);\n  }\n  return Array.from(map.values());\n}' }
    ]
  },
  {
    _id: 'local-py-6',
    title: 'Number of Islands',
    description: `Given an mÃ—n 2D binary grid of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.

Use DFS or BFS to mark visited land.`,
    difficulty: 'medium',
    category: 'Python',
    constraints: 'm == grid.length\nn == grid[i].length\n1 <= m, n <= 300',
    inputFormat: 'A 2D grid of 1s and 0s.',
    outputFormat: 'Number of islands.',
    sampleInput: '[["1","1","0","0"],["1","1","0","0"],["0","0","1","0"],["0","0","0","1"]]',
    sampleOutput: '3',
    testCases: [
      { input: '[["1","1","0"],["0","1","0"],["0","0","1"]]', expectedOutput: '2', isHidden: false },
      { input: '[["1","0","0"],["0","0","0"],["0","0","1"]]', expectedOutput: '2', isHidden: true }
    ],
    starterCode: [
      { language: 'python', template: 'def num_islands(grid):\n    if not grid: return 0\n    count = 0\n    def dfs(r, c):\n        if r < 0 or r >= len(grid) or c < 0 or c >= len(grid[0]) or grid[r][c] == "0":\n            return\n        grid[r][c] = "0"\n        dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1)\n    for r in range(len(grid)):\n        for c in range(len(grid[0])):\n            if grid[r][c] == "1":\n                dfs(r, c)\n                count += 1\n    return count' },
      { language: 'javascript', template: 'function numIslands(grid) {\n  const rows = grid.length, cols = grid[0].length;\n  let count = 0;\n  function dfs(r, c) {\n    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === "0") return;\n    grid[r][c] = "0";\n    dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1);\n  }\n  for (let r = 0; r < rows; r++)\n    for (let c = 0; c < cols; c++)\n      if (grid[r][c] === "1") { dfs(r,c); count++; }\n  return count;\n}' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // Python â€” Additional
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-py-7',
    title: 'Matrix Spiral Order',
    description: `Given an m x n matrix, return all elements of the matrix in spiral order.\n\nSpiral order: start from top-left, go right across top row, down right column, left across bottom row, up left column, and repeat inward.`,
    difficulty: 'medium',
    category: 'Python',
    constraints: '1 <= m, n <= 10\n-100 <= matrix[i][j] <= 100',
    inputFormat: 'An m x n matrix.',
    outputFormat: 'Return elements in spiral order as a comma-separated list.',
    sampleInput: '[[1,2,3],[4,5,6],[7,8,9]]',
    sampleOutput: '1,2,3,6,9,8,7,4,5',
    testCases: [
      { input: '[[1,2,3],[4,5,6],[7,8,9]]', expectedOutput: '1,2,3,6,9,8,7,4,5', isHidden: false },
      { input: '[[1,2,3,4],[5,6,7,8],[9,10,11,12]]', expectedOutput: '1,2,3,4,8,12,11,10,9,5,6,7', isHidden: false },
      { input: '[[1]]', expectedOutput: '1', isHidden: true }
    ],
    starterCode: [
      { language: 'python', template: 'def spiralOrder(matrix):\n    # Write your solution here\n    pass' },
      { language: 'javascript', template: 'function spiralOrder(matrix) {\n  // Write your solution here\n  \n}' }
    ]
  },
  {
    _id: 'local-py-8',
    title: 'Longest Palindrome Substring',
    description: `Given a string s, return the longest palindromic substring in s.\n\nA palindrome is a string that reads the same backward as forward.`,
    difficulty: 'medium',
    category: 'Python',
    constraints: '1 <= s.length <= 1000\ns consist of only digits and English letters.',
    inputFormat: 'A string s.',
    outputFormat: 'Return the longest palindromic substring.',
    sampleInput: 'babad',
    sampleOutput: 'bab',
    testCases: [
      { input: 'babad', expectedOutput: 'bab', isHidden: false },
      { input: 'cbbd', expectedOutput: 'bb', isHidden: false },
      { input: 'a', expectedOutput: 'a', isHidden: true }
    ],
    starterCode: [
      { language: 'python', template: 'def longestPalindrome(s):\n    # Write your solution here\n    pass' },
      { language: 'javascript', template: 'function longestPalindrome(s) {\n  // Write your solution here\n  \n}' }
    ]
  },
  {
    _id: 'local-py-9',
    title: 'Coin Change',
    description: `You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.\n\nReturn the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.\n\nYou may assume that you have an infinite number of each kind of coin.`,
    difficulty: 'hard',
    category: 'Python',
    constraints: '1 <= coins.length <= 12\n1 <= coins[i] <= 2^31 - 1\n0 <= amount <= 10^4',
    inputFormat: 'An array of coin denominations and a target amount.',
    outputFormat: 'Return minimum number of coins, or -1.',
    sampleInput: '[1,5,10,25]\n30',
    sampleOutput: '2',
    testCases: [
      { input: '[1,5,10,25]\n30', expectedOutput: '2', isHidden: false },
      { input: '[2]\n3', expectedOutput: '-1', isHidden: false },
      { input: '[1]\n0', expectedOutput: '0', isHidden: true }
    ],
    starterCode: [
      { language: 'python', template: 'def coinChange(coins, amount):\n    # Write your solution here\n    pass' },
      { language: 'javascript', template: 'function coinChange(coins, amount) {\n  // Write your solution here\n  \n}' }
    ]
  },
  {
    _id: 'local-py-10',
    title: 'Edit Distance',
    description: `Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.\n\nYou have the following three operations permitted on a word:\n1. Insert a character\n2. Delete a character\n3. Replace a character`,
    difficulty: 'hard',
    category: 'Python',
    constraints: '0 <= word1.length, word2.length <= 500\nword1 and word2 consist of lowercase English letters.',
    inputFormat: 'Two strings on separate lines.',
    outputFormat: 'Return the minimum edit distance.',
    sampleInput: 'horse\nros',
    sampleOutput: '3',
    testCases: [
      { input: 'horse\nros', expectedOutput: '3', isHidden: false },
      { input: 'intention\nexecution', expectedOutput: '5', isHidden: false },
      { input: '', expectedOutput: '0', isHidden: true }
    ],
    starterCode: [
      { language: 'python', template: 'def minDistance(word1, word2):\n    # Write your solution here\n    pass' },
      { language: 'javascript', template: 'function minDistance(word1, word2) {\n  // Write your solution here\n  \n}' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // More Java â€” Hard
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-java-4',
    title: 'LRU Cache',
    description: `Design and implement a data structure for an LRU (Least Recently Used) cache.

It should support:
- get(key): Get the value of key if exists, otherwise return -1.
- put(key, value): Insert/update value. If capacity is reached, evict the LRU item.

Both operations must be O(1) time.

Use a combination of HashMap + Doubly Linked List.`,
    difficulty: 'hard',
    category: 'Java',
    constraints: '1 <= capacity <= 3000\n0 <= key <= 10^4\n0 <= value <= 10^5',
    inputFormat: 'capacity, then operations.',
    outputFormat: 'Results of get() calls.',
    sampleInput: 'capacity=2, put(1,1), put(2,2), get(1), put(3,3), get(2), get(3)',
    sampleOutput: '1, -1, 3',
    testCases: [
      { input: 'LRU(2),put(1,1),put(2,2),get(1)', expectedOutput: '1', isHidden: false },
      { input: 'LRU(1),put(1,1),put(2,2),get(1)', expectedOutput: '-1', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'class LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity;\n    this.cache = new Map();\n  }\n  get(key) {\n    if (!this.cache.has(key)) return -1;\n    const val = this.cache.get(key);\n    this.cache.delete(key);\n    this.cache.set(key, val);\n    return val;\n  }\n  put(key, value) {\n    if (this.cache.has(key)) this.cache.delete(key);\n    else if (this.cache.size >= this.capacity)\n      this.cache.delete(this.cache.keys().next().value);\n    this.cache.set(key, value);\n  }\n}' },
      { language: 'python', template: 'from collections import OrderedDict\n\nclass LRUCache:\n    def __init__(self, capacity):\n        self.capacity = capacity\n        self.cache = OrderedDict()\n    def get(self, key):\n        if key not in self.cache: return -1\n        self.cache.move_to_end(key)\n        return self.cache[key]\n    def put(self, key, value):\n        if key in self.cache:\n            self.cache.move_to_end(key)\n        self.cache[key] = value\n        if len(self.cache) > self.capacity:\n            self.cache.popitem(last=False)' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // Java â€” Additional
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-java-5',
    title: 'Reverse Integer',
    description: `Given a signed 32-bit integer x, return x with its digits reversed.\n\nIf reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.`,
    difficulty: 'easy',
    category: 'Java',
    constraints: '-2^31 <= x <= 2^31 - 1',
    inputFormat: 'A single integer x.',
    outputFormat: 'Return the reversed integer.',
    sampleInput: '123',
    sampleOutput: '321',
    testCases: [
      { input: '123', expectedOutput: '321', isHidden: false },
      { input: '-123', expectedOutput: '-321', isHidden: false },
      { input: '120', expectedOutput: '21', isHidden: false },
      { input: '1534236469', expectedOutput: '0', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function reverse(x) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def reverse(x):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-java-6',
    title: 'Palindrome String',
    description: `Given a string s, return true if it is a palindrome, or false otherwise.\n\nA palindrome string reads the same backward as forward. Consider only alphanumeric characters and ignore cases.`,
    difficulty: 'easy',
    category: 'Java',
    constraints: '1 <= s.length <= 2 * 10^5\ns consists only of printable ASCII characters.',
    inputFormat: 'A string s.',
    outputFormat: 'Return true or false.',
    sampleInput: 'A man, a plan, a canal: Panama',
    sampleOutput: 'true',
    testCases: [
      { input: 'A man, a plan, a canal: Panama', expectedOutput: 'true', isHidden: false },
      { input: 'race a car', expectedOutput: 'false', isHidden: false },
      { input: ' ', expectedOutput: 'true', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function isPalindrome(s) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def isPalindrome(s):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-java-7',
    title: 'Merge Intervals',
    description: `Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.`,
    difficulty: 'medium',
    category: 'Java',
    constraints: '1 <= intervals.length <= 10^4\nintervals[i].length == 2\n0 <= starti <= endi <= 10^4',
    inputFormat: 'An array of intervals.',
    outputFormat: 'Return merged intervals.',
    sampleInput: '[[1,3],[2,6],[8,10],[15,18]]',
    sampleOutput: '[[1,6],[8,10],[15,18]]',
    testCases: [
      { input: '[[1,3],[2,6],[8,10],[15,18]]', expectedOutput: '[[1,6],[8,10],[15,18]]', isHidden: false },
      { input: '[[1,4],[4,5]]', expectedOutput: '[[1,5]]', isHidden: false },
      { input: '[[1,4],[0,4]]', expectedOutput: '[[0,4]]', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function merge(intervals) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def merge(intervals):\n    # Write your solution here\n    pass' }
    ]
  },
  {
    _id: 'local-java-8',
    title: 'Word Search',
    description: `Given an m x n grid of characters board and a string word, return true if word exists in the grid.\n\nThe word can be constructed from letters of sequentially adjacent cells (horizontally or vertically). The same cell may not be used more than once.`,
    difficulty: 'hard',
    category: 'Java',
    constraints: 'm == board.length\nn == board[i].length\n1 <= m, n <= 6\n1 <= word.length <= 15\nboard and word consist of only lowercase and uppercase English letters.',
    inputFormat: 'A 2D character grid and a target word.',
    outputFormat: 'Return true or false.',
    sampleInput: '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\nABCCED',
    sampleOutput: 'true',
    testCases: [
      { input: '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\nABCCED', expectedOutput: 'true', isHidden: false },
      { input: '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\nSEE', expectedOutput: 'true', isHidden: false },
      { input: '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\nABCB', expectedOutput: 'false', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function exist(board, word) {\n  // Write your solution here\n  \n}' },
      { language: 'python', template: 'def exist(board, word):\n    # Write your solution here\n    pass' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // More SQL â€” Hard
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-sql-4',
    title: 'GROUP BY and Aggregation',
    description: `Given a table 'orders' with columns: order_id, customer_id, product, amount, order_date.

Write SQL queries for:
1. Find the total sales amount per customer, ordered by total sales DESC
2. Find customers who have spent more than 10000 total (HAVING clause)
3. Find the average order amount per product
4. Find the top 3 customers by order count`,
    difficulty: 'medium',
    category: 'SQL',
    constraints: 'Use GROUP BY, HAVING, ORDER BY, LIMIT.',
    inputFormat: 'No input.',
    outputFormat: '4 SQL queries.',
    sampleInput: '',
    sampleOutput: 'SELECT customer_id, SUM(amount) as total FROM orders GROUP BY customer_id ORDER BY total DESC',
    testCases: [
      { input: '', expectedOutput: 'Uses GROUP BY and SUM()', isHidden: false },
      { input: '', expectedOutput: 'Uses HAVING for filtering groups', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "-- Query 1: Total sales per customer\nSELECT customer_id, SUM(amount) as total_sales\nFROM orders\nGROUP BY customer_id\nORDER BY total_sales DESC;\n\n-- Query 2: Customers spending more than 10000\n\n-- Query 3: Average amount per product\n\n-- Query 4: Top 3 customers by order count\n" }
    ]
  },
  {
    _id: 'local-sql-5',
    title: 'Subqueries and Correlated Queries',
    description: `Given tables:
- employees: emp_id, name, department_id, salary
- departments: dept_id, dept_name, manager_id

Write SQL for:
1. Find employees who earn more than the average salary in their department (correlated subquery)
2. Find the highest paid employee in each department
3. Find departments with no employees
4. Find the second highest salary in the company`,
    difficulty: 'hard',
    category: 'SQL',
    constraints: 'Use subqueries, correlated subqueries, or window functions.',
    inputFormat: 'No input.',
    outputFormat: '4 SQL queries.',
    sampleInput: '',
    sampleOutput: 'SELECT * FROM employees e WHERE salary > (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id)',
    testCases: [
      { input: '', expectedOutput: 'Correlated subquery for dept average', isHidden: false },
      { input: '', expectedOutput: 'Second highest salary query', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "-- Query 1: Employees earning more than their dept average\nSELECT e.name, e.salary, e.department_id\nFROM employees e\nWHERE e.salary > (\n    SELECT AVG(salary) FROM employees\n    WHERE department_id = e.department_id\n);\n\n-- Query 2: Highest paid in each department\n\n-- Query 3: Departments with no employees\n\n-- Query 4: Second highest salary\n" }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // SQL â€” Additional
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-sql-6',
    title: 'Window Functions',
    description: `Given a table 'sales' with columns: sale_id, employee_id, department, amount, sale_date.\n\nWrite SQL queries using window functions:\n1. Rank employees by total sales within each department (RANK)\n2. Calculate running total of sales per employee ordered by sale_date\n3. Find the difference between each sale and the previous sale per employee (LAG)\n4. Calculate moving average of sales over 3 rows`,
    difficulty: 'medium',
    category: 'SQL',
    constraints: 'Use window functions: RANK, SUM OVER, LAG, AVG OVER.',
    inputFormat: 'No input.',
    outputFormat: 'Return 4 SQL queries.',
    sampleInput: '',
    sampleOutput: 'SQL queries using window functions',
    testCases: [
      { input: '', expectedOutput: 'Uses RANK() OVER (PARTITION BY ...)', isHidden: false },
      { input: '', expectedOutput: 'Uses LAG() and moving AVG()', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "-- Query 1: Rank employees by sales within department\nSELECT employee_id, department, SUM(amount) as total,\n  RANK() OVER (PARTITION BY department ORDER BY SUM(amount) DESC) as rank\nFROM sales\nGROUP BY employee_id, department;\n\n-- Query 2: Running total per employee\n\n-- Query 3: Difference from previous sale\n\n-- Query 4: Moving average over 3 rows\n" }
    ]
  },
  {
    _id: 'local-sql-7',
    title: 'Recursive CTE',
    description: `Given an 'employees' table with columns: emp_id, name, manager_id.\n\nWrite a recursive CTE to:\n1. Find the complete organizational hierarchy from the CEO (manager_id IS NULL)\n2. Show each employee's level in the hierarchy\n3. Find all subordinates of a specific manager (emp_id = 1)\n4. Calculate the total number of reports under each manager`,
    difficulty: 'hard',
    category: 'SQL',
    constraints: 'Use WITH RECURSIVE and recursive CTEs.',
    inputFormat: 'No input.',
    outputFormat: 'Return recursive CTE queries.',
    sampleInput: '',
    sampleOutput: 'Recursive CTE for hierarchy traversal',
    testCases: [
      { input: '', expectedOutput: 'Uses WITH RECURSIVE', isHidden: false },
      { input: '', expectedOutput: 'Has anchor and recursive member', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "-- Query 1: Complete org hierarchy\nWITH RECURSIVE hierarchy AS (\n  SELECT emp_id, name, manager_id, 1 as level\n  FROM employees WHERE manager_id IS NULL\n  UNION ALL\n  SELECT e.emp_id, e.name, e.manager_id, h.level + 1\n  FROM employees e JOIN hierarchy h ON e.manager_id = h.emp_id\n)\nSELECT * FROM hierarchy;\n\n-- Query 2: All subordinates of emp_id = 1\n\n-- Query 3: Total reports per manager\n" }
    ]
  },
  {
    _id: 'local-sql-8',
    title: 'Transaction Management',
    description: `Write SQL transaction code for a banking system:\n\n1. Create a transaction that transfers $500 from account A to account B:\n   - Check if account A has sufficient balance\n   - Deduct from A, add to B\n   - If any step fails, rollback\n   - On success, commit\n\n2. Create a savepoint before deducting, and rollback to savepoint if deduction fails\n\n3. Set transaction isolation level to SERIALIZABLE`,
    difficulty: 'hard',
    category: 'SQL',
    constraints: 'Use BEGIN, COMMIT, ROLLBACK, SAVEPOINT.',
    inputFormat: 'No input.',
    outputFormat: 'Return transaction SQL code.',
    sampleInput: '',
    sampleOutput: 'Transaction with savepoint and rollback',
    testCases: [
      { input: '', expectedOutput: 'Uses BEGIN, COMMIT, ROLLBACK', isHidden: false },
      { input: '', expectedOutput: 'Uses SAVEPOINT and ROLLBACK TO', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: "-- Bank transfer transaction\nBEGIN;\n\n-- Check balance of account A\n\n-- Create savepoint\nSAVEPOINT before_deduct;\n\n-- Deduct from account A\n\n-- If error, rollback to savepoint\n-- ROLLBACK TO before_deduct;\n\n-- Add to account B\n\n-- Set isolation level\n-- SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n\nCOMMIT;\n-- or ROLLBACK on error;" }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // More JavaScript â€” Hard
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-js-6',
    title: 'Debounce Function',
    description: `Implement a debounce function that delays invoking the provided function until after wait milliseconds have elapsed since the last time it was invoked.

debounce(func, wait):
- Returns a new function that, when called, delays calling func until wait ms after the last call
- Useful for optimizing expensive operations like API calls on search input

Example: If wait=200ms and you call the debounced function 5 times in 100ms, func is only called once (200ms after the last call).`,
    difficulty: 'medium',
    category: 'JavaScript',
    constraints: 'wait >= 0\nfunc is a function.',
    inputFormat: 'A function and a wait time in ms.',
    outputFormat: 'Return the debounced function.',
    sampleInput: 'debounce(console.log, 200)',
    sampleOutput: 'Function that delays execution',
    testCases: [
      { input: 'Debounce with 200ms wait', expectedOutput: 'Only called once after last invocation', isHidden: false },
      { input: 'Multiple rapid calls', expectedOutput: 'Func called only once', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function debounce(func, wait) {\n  let timeoutId = null;\n  return function(...args) {\n    // Clear previous timeout\n    clearTimeout(timeoutId);\n    // Set new timeout\n    timeoutId = setTimeout(() => {\n      func.apply(this, args);\n    }, wait);\n  };\n}' }
    ]
  },
  {
    _id: 'local-js-7',
    title: 'Deep Clone Object',
    description: `Write a function deepClone(obj) that creates a deep copy of a JavaScript object (or array).

Requirements:
- Must handle nested objects and arrays
- Must handle primitive values (string, number, boolean, null)
- Must NOT use JSON.parse(JSON.stringify()) â€” implement it manually
- Should handle circular references gracefully (return the reference for circular objects)`,
    difficulty: 'hard',
    category: 'JavaScript',
    constraints: 'obj can be any depth.\nHandle arrays and objects.',
    inputFormat: 'A JavaScript object.',
    outputFormat: 'A deeply cloned copy.',
    sampleInput: '{ a: 1, b: { c: 2, d: [3, 4] } }',
    sampleOutput: 'Same structure, different reference',
    testCases: [
      { input: '{a: 1, b: {c: 2}}', expectedOutput: 'Deep clone', isHidden: false },
      { input: '[1,[2,[3]]]', expectedOutput: 'Nested array clone', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function deepClone(obj, seen = new WeakMap()) {\n  if (obj === null || typeof obj !== "object") return obj;\n  if (seen.has(obj)) return seen.get(obj);\n  \n  const clone = Array.isArray(obj) ? [] : {};\n  seen.set(obj, clone);\n  \n  for (const key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) {\n      clone[key] = deepClone(obj[key], seen);\n    }\n  }\n  return clone;\n}' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // JavaScript â€” Additional
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-js-8',
    title: 'Promise.all Implementation',
    description: `Implement your own version of Promise.all that takes an array of promises and returns a single promise.\n\nThe returned promise should resolve with an array of results in the same order as the input promises, or reject with the reason of the first promise that rejects.`,
    difficulty: 'medium',
    category: 'JavaScript',
    constraints: 'Input is an array of Promises.\nIf the array is empty, resolve with an empty array.',
    inputFormat: 'An array of promises.',
    outputFormat: 'Return a Promise that resolves with an array of results.',
    sampleInput: '[Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]',
    sampleOutput: '[1, 2, 3]',
    testCases: [
      { input: '[Promise.resolve(1), Promise.resolve(2)]', expectedOutput: '[1,2]', isHidden: false },
      { input: '[Promise.reject("error")]', expectedOutput: 'reject with "error"', isHidden: false },
      { input: '[]', expectedOutput: '[]', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function promiseAll(promises) {\n  return new Promise((resolve, reject) => {\n    // Implement Promise.all\n  });\n}' }
    ]
  },
  {
    _id: 'local-js-9',
    title: 'EventEmitter',
    description: `Implement an EventEmitter class that supports:\n- on(event, callback): Register a listener\n- off(event, callback): Remove a specific listener\n- emit(event, ...args): Call all listeners for the event with arguments\n- once(event, callback): Register a listener that fires only once\n\nThe class should maintain a mapping of event names to arrays of callback functions.`,
    difficulty: 'medium',
    category: 'JavaScript',
    constraints: 'Multiple listeners can be registered for the same event.\nListeners should be called in the order they were registered.',
    inputFormat: 'A sequence of event operations.',
    outputFormat: 'Return results of emit calls.',
    sampleInput: 'on("data", cb1), emit("data", "hello"), off("data", cb1), emit("data", "world")',
    sampleOutput: 'cb1("hello"), no output after off',
    testCases: [
      { input: 'on("click", fn1), emit("click", 1)', expectedOutput: 'fn1 called with 1', isHidden: false },
      { input: 'once("init", fn1), emit("init"), emit("init")', expectedOutput: 'fn1 called once only', isHidden: false },
      { input: 'on("a", fn1), on("a", fn2), emit("a")', expectedOutput: 'fn1 and fn2 called', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'class EventEmitter {\n  constructor() {\n    this.events = {};\n  }\n  on(event, callback) {\n    // Register listener\n  }\n  off(event, callback) {\n    // Remove listener\n  }\n  emit(event, ...args) {\n    // Call all listeners\n  }\n  once(event, callback) {\n    // Register one-time listener\n  }\n}' }
    ]
  },
  {
    _id: 'local-js-10',
    title: 'Rate Limiter',
    description: `Implement a rate limiter that limits the number of function calls within a given time window.\n\nCreate a function createRateLimiter(limit, window) that returns a rate-limited version of a function.\n\nIf a call is within the rate limit, it should execute and return the result.\nIf a call exceeds the rate limit, it should return null.`,
    difficulty: 'hard',
    category: 'JavaScript',
    constraints: '1 <= limit <= 100\n1 <= window <= 10000 (ms)',
    inputFormat: 'A limit and window size.',
    outputFormat: 'Return a rate-limited function.',
    sampleInput: 'createRateLimiter(3, 1000)',
    sampleOutput: 'First 3 calls within 1s execute, rest return null',
    testCases: [
      { input: 'Rate limit 2 calls per 1s', expectedOutput: 'First 2 calls execute, 3rd returns null', isHidden: false },
      { input: 'After window expires, calls reset', expectedOutput: 'Calls work again after window', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function createRateLimiter(limit, window) {\n  const calls = [];\n  return function rateLimited(...args) {\n    // Implement rate limiting logic\n  };\n}' }
    ]
  },
  {
    _id: 'local-js-11',
    title: 'Curry Function',
    description: `Implement a curry function that converts a function with multiple arguments into a sequence of functions each taking a single argument.\n\nFor example: curry(a, b, c) â†’ curry(a)(b)(c)\n\nThe curried function should return the result when the total number of collected arguments equals the original function's arity.`,
    difficulty: 'easy',
    category: 'JavaScript',
    constraints: 'The original function has at least one argument.',
    inputFormat: 'A function with multiple arguments.',
    outputFormat: 'Return a curried version of the function.',
    sampleInput: 'curry(function(a,b,c){return a+b+c})',
    sampleOutput: 'Curried function: sum(1)(2)(3) === 6',
    testCases: [
      { input: 'curry(add)(1)(2)(3)', expectedOutput: '6', isHidden: false },
      { input: 'curry(add)(1,2)(3)', expectedOutput: '6', isHidden: false },
      { input: 'curry(add)(1)(2,3)', expectedOutput: '6', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function curry(fn) {\n  return function curried(...args) {\n    // Implement currying logic\n  };\n}' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // More C â€” Medium
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-c-5',
    title: 'Count Digits',
    description: `Write a C program that reads an integer and counts the number of digits in it.

For example: 12345 has 5 digits. Negative numbers like -456 have 3 digits (ignore the sign).`,
    difficulty: 'easy',
    category: 'C',
    constraints: '-10^9 <= n <= 10^9',
    inputFormat: 'A single integer n.',
    outputFormat: 'Number of digits.',
    sampleInput: '12345',
    sampleOutput: '5',
    testCases: [
      { input: '12345', expectedOutput: '5', isHidden: false },
      { input: '-456', expectedOutput: '3', isHidden: false },
      { input: '0', expectedOutput: '1', isHidden: true }
    ],
    starterCode: [
      { language: 'cpp', template: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    if (n < 0) n = -n;\n    if (n == 0) { printf("1"); return 0; }\n    int count = 0;\n    // Count digits\n    printf("%d", count);\n    return 0;\n}' }
    ]
  },
  {
    _id: 'local-c-6',
    title: 'Prime Number Check in C',
    description: `Write a C program that checks if a given number is prime.

A prime number is greater than 1 and has no divisors other than 1 and itself.

Print "Prime" if the number is prime, "Not Prime" otherwise.`,
    difficulty: 'easy',
    category: 'C',
    constraints: '1 <= n <= 10^6',
    inputFormat: 'A single integer n.',
    outputFormat: 'Print "Prime" or "Not Prime".',
    sampleInput: '17',
    sampleOutput: 'Prime',
    testCases: [
      { input: '17', expectedOutput: 'Prime', isHidden: false },
      { input: '4', expectedOutput: 'Not Prime', isHidden: false },
      { input: '1', expectedOutput: 'Not Prime', isHidden: true }
    ],
    starterCode: [
      { language: 'cpp', template: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    if (n <= 1) { printf("Not Prime"); return 0; }\n    for (int i = 2; i <= sqrt(n); i++) {\n        if (n % i == 0) { printf("Not Prime"); return 0; }\n    }\n    printf("Prime");\n    return 0;\n}' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // C â€” Additional
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-c-7',
    title: 'Fibonacci Series in C',
    description: `Write a C program that prints the first n numbers of the Fibonacci sequence.\n\nThe Fibonacci sequence starts with 0 and 1. Each subsequent number is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8, 13, ...\n\nPrint the numbers separated by space.`,
    difficulty: 'easy',
    category: 'C',
    constraints: '1 <= n <= 30',
    inputFormat: 'A single integer n.',
    outputFormat: 'Print the first n Fibonacci numbers separated by space.',
    sampleInput: '7',
    sampleOutput: '0 1 1 2 3 5 8',
    testCases: [
      { input: '7', expectedOutput: '0 1 1 2 3 5 8', isHidden: false },
      { input: '1', expectedOutput: '0', isHidden: false },
      { input: '10', expectedOutput: '0 1 1 2 3 5 8 13 21 34', isHidden: true }
    ],
    starterCode: [
      { language: 'cpp', template: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Print first n Fibonacci numbers\n    return 0;\n}' }
    ]
  },
  {
    _id: 'local-c-8',
    title: 'Array Sum in C',
    description: `Write a C program that reads n integers into an array and prints their sum.`,
    difficulty: 'easy',
    category: 'C',
    constraints: '1 <= n <= 1000\n-10^4 <= arr[i] <= 10^4',
    inputFormat: 'First line: integer n\nSecond line: n integers separated by space.',
    outputFormat: 'Print the sum of all elements.',
    sampleInput: '5\n1 2 3 4 5',
    sampleOutput: '15',
    testCases: [
      { input: '5\n1 2 3 4 5', expectedOutput: '15', isHidden: false },
      { input: '3\n-1 0 1', expectedOutput: '0', isHidden: false },
      { input: '1\n42', expectedOutput: '42', isHidden: true }
    ],
    starterCode: [
      { language: 'cpp', template: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);\n    // Compute and print sum\n    return 0;\n}' }
    ]
  },
  {
    _id: 'local-c-9',
    title: 'String Length in C',
    description: `Write a C function that returns the length of a given string without using the built-in strlen function.`,
    difficulty: 'easy',
    category: 'C',
    constraints: '0 <= s.length <= 10^5\ns consists of printable ASCII characters.',
    inputFormat: 'A string s.',
    outputFormat: 'Print the length of the string.',
    sampleInput: 'hello',
    sampleOutput: '5',
    testCases: [
      { input: 'hello', expectedOutput: '5', isHidden: false },
      { input: '', expectedOutput: '0', isHidden: false },
      { input: 'a', expectedOutput: '1', isHidden: true }
    ],
    starterCode: [
      { language: 'cpp', template: '#include <stdio.h>\n\nint stringLength(char *s) {\n    // Return length of string\n    return 0;\n}\n\nint main() {\n    char s[100001];\n    scanf("%s", s);\n    printf("%d", stringLength(s));\n    return 0;\n}' }
    ]
  },
  {
    _id: 'local-c-10',
    title: 'Matrix Multiplication in C',
    description: `Write a C program that multiplies two matrices A (m x n) and B (n x p) and prints the resulting matrix (m x p).\n\nMatrix multiplication: C[i][j] = sum of A[i][k] * B[k][j] for k = 0 to n-1.`,
    difficulty: 'medium',
    category: 'C',
    constraints: '1 <= m, n, p <= 50\n-100 <= A[i][j], B[i][j] <= 100',
    inputFormat: 'First line: three integers m n p\nNext m lines: matrix A (n integers per row)\nNext n lines: matrix B (p integers per row)',
    outputFormat: 'Print the resulting m x p matrix, each row on a new line, values separated by space.',
    sampleInput: '2 3 2\n1 2 3\n4 5 6\n7 8\n9 10\n11 12',
    sampleOutput: '58 64\n139 154',
    testCases: [
      { input: '2 3 2\n1 2 3\n4 5 6\n7 8\n9 10\n11 12', expectedOutput: '58 64\n139 154', isHidden: false },
      { input: '1 1 1\n5\n3', expectedOutput: '15', isHidden: false },
      { input: '2 2 2\n1 0\n0 1\n1 2\n3 4', expectedOutput: '1 2\n3 4', isHidden: true }
    ],
    starterCode: [
      { language: 'cpp', template: '#include <stdio.h>\n\nint main() {\n    int m, n, p;\n    scanf("%d %d %d", &m, &n, &p);\n    int A[m][n], B[n][p], C[m][p];\n    for (int i = 0; i < m; i++)\n        for (int j = 0; j < n; j++)\n            scanf("%d", &A[i][j]);\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < p; j++)\n            scanf("%d", &B[i][j]);\n    // Multiply matrices A and B, store in C\n    // Print result matrix C\n    return 0;\n}' }
    ]
  },
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // Computer Networks (NEW)
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    _id: 'local-cn-1',
    title: 'TCP vs UDP Comparison',
    description: `Write a function that returns a comparison of TCP and UDP protocols.\n\nGiven a topic string, return the relevant comparison:\n- "reliability": TCP is reliable, UDP is not\n- "order": TCP maintains order, UDP does not\n- "speed": UDP is faster, TCP is slower\n- "connection": TCP is connection-oriented, UDP is connectionless\n- "header": TCP header is 20 bytes, UDP header is 8 bytes\n- "use_case" TCP is used for web, email, file transfer; UDP is used for streaming, gaming, DNS`,
    difficulty: 'easy',
    category: 'Computer Networks',
    constraints: 'topic must be one of the valid options.',
    inputFormat: 'A string topic.',
    outputFormat: 'Return the comparison string.',
    sampleInput: 'reliability',
    sampleOutput: 'TCP is reliable, UDP is not reliable',
    testCases: [
      { input: 'reliability', expectedOutput: 'TCP is reliable, UDP is not reliable', isHidden: false },
      { input: 'speed', expectedOutput: 'UDP is faster, TCP is slower', isHidden: false },
      { input: 'connection', expectedOutput: 'TCP is connection-oriented, UDP is connectionless', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function compareProtocols(topic) {\n  // Return comparison based on topic\n  \n}' },
      { language: 'python', template: 'def compare_protocols(topic):\n    # Return comparison based on topic\n    pass' }
    ]
  },
  {
    _id: 'local-cn-2',
    title: 'Subnet Calculation',
    description: `Write a function that calculates subnet information given an IP address and a CIDR prefix length.\n\nGiven an IP address like "192.168.1.0" and prefix length 24, calculate:\n1. Subnet mask (e.g., "255.255.255.0")\n2. Number of usable hosts (2^(32-prefix) - 2)\n3. Network address (IP ANDed with mask)\n4. Broadcast address (network ORed with inverse mask)\n\nReturn results as "subnet_mask: X, hosts: Y, network: Z, broadcast: W"`,
    difficulty: 'medium',
    category: 'Computer Networks',
    constraints: '0 <= prefix <= 32\nValid IPv4 address.',
    inputFormat: 'An IP address string and an integer prefix.',
    outputFormat: 'Return subnet information string.',
    sampleInput: '192.168.1.0\n24',
    sampleOutput: 'subnet_mask: 255.255.255.0, hosts: 254, network: 192.168.1.0, broadcast: 192.168.1.255',
    testCases: [
      { input: '192.168.1.0\n24', expectedOutput: 'subnet_mask: 255.255.255.0, hosts: 254, network: 192.168.1.0, broadcast: 192.168.1.255', isHidden: false },
      { input: '10.0.0.0\n8', expectedOutput: 'subnet_mask: 255.0.0.0, hosts: 16777214, network: 10.0.0.0, broadcast: 10.255.255.255', isHidden: false },
      { input: '172.16.0.0\n12', expectedOutput: 'subnet_mask: 255.240.0.0, hosts: 1048574, network: 172.16.0.0, broadcast: 172.31.255.255', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function subnetCalc(ip, prefix) {\n  // Calculate subnet mask, hosts, network, broadcast\n  \n}' },
      { language: 'python', template: 'def subnet_calc(ip, prefix):\n    # Calculate subnet mask, hosts, network, broadcast\n    pass' }
    ]
  },
  {
    _id: 'local-cn-3',
    title: 'HTTP Status Codes',
    description: `Write a function that returns the description and category of an HTTP status code.\n\nCategories:\n- 1xx: Informational\n- 2xx: Success\n- 3xx: Redirection\n- 4xx: Client Error\n- 5xx: Server Error\n\nCommon codes:\n- 200: OK\n- 201: Created\n- 301: Moved Permanently\n- 400: Bad Request\n- 401: Unauthorized\n- 403: Forbidden\n- 404: Not Found\n- 500: Internal Server Error\n- 503: Service Unavailable`,
    difficulty: 'easy',
    category: 'Computer Networks',
    constraints: '100 <= code <= 599',
    inputFormat: 'An integer status code.',
    outputFormat: 'Return "code: description (category)".',
    sampleInput: '200',
    sampleOutput: '200: OK (Success)',
    testCases: [
      { input: '200', expectedOutput: '200: OK (Success)', isHidden: false },
      { input: '404', expectedOutput: '404: Not Found (Client Error)', isHidden: false },
      { input: '503', expectedOutput: '503: Service Unavailable (Server Error)', isHidden: true }
    ],
    starterCode: [
      { language: 'javascript', template: 'function httpStatus(code) {\n  // Return description and category\n  \n}' },
      { language: 'python', template: 'def http_status(code):\n    # Return description and category\n    pass' }
    ]
  },
  {
    _id: "local-cpp-10",
    title: "Climbing Stairs",
    description: "Each time you can climb 1 or 2 steps. Return distinct ways.",
    difficulty: "easy",
    category: "C++",
    constraints: "1 <= n <= 45",
    inputFormat: "Integer n",
    outputFormat: "Number of ways",
    sampleInput: "2",
    sampleOutput: "2",
    testCases: [
      { input: "2", expectedOutput: "2", isHidden: false },
      { input: "3", expectedOutput: "3", isHidden: false },
      { input: "5", expectedOutput: "8", isHidden: true }
    ],
    starterCode: [
      { language: "cpp", template: "class Solution {\npublic:\n    int solve(vector<int>& nums) {\n        // TODO: Implement\n        return 0;\n    }\n};" },
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-cpp-11",
    title: "Best Time to Buy and Sell Stock",
    description: "Find max profit from one buy and sell.",
    difficulty: "easy",
    category: "C++",
    constraints: "1 <= prices.length <= 10^5",
    inputFormat: "Array of prices",
    outputFormat: "Max profit",
    sampleInput: "[7,1,5,3,6,4]",
    sampleOutput: "5",
    testCases: [
      { input: "[7,1,5,3,6,4]", expectedOutput: "5", isHidden: false },
      { input: "[7,6,4,3,1]", expectedOutput: "0", isHidden: false },
      { input: "[2,4,1]", expectedOutput: "2", isHidden: true }
    ],
    starterCode: [
      { language: "cpp", template: "class Solution {\npublic:\n    int solve(vector<int>& nums) {\n        // TODO: Implement\n        return 0;\n    }\n};" },
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-cpp-12",
    title: "Contains Duplicate",
    description: "Return true if any value appears at least twice.",
    difficulty: "easy",
    category: "C++",
    constraints: "1 <= nums.length <= 10^5",
    inputFormat: "Array of integers",
    outputFormat: "True or false",
    sampleInput: "[1,2,3,1]",
    sampleOutput: "true",
    testCases: [
      { input: "[1,2,3,1]", expectedOutput: "true", isHidden: false },
      { input: "[1,2,3,4]", expectedOutput: "false", isHidden: false },
      { input: "[1,1,1,3,3,4,3,2,4,2]", expectedOutput: "true", isHidden: true }
    ],
    starterCode: [
      { language: "cpp", template: "class Solution {\npublic:\n    int solve(vector<int>& nums) {\n        // TODO: Implement\n        return 0;\n    }\n};" },
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-cpp-13",
    title: "Single Number",
    description: "Find element appearing once using XOR.",
    difficulty: "easy",
    category: "C++",
    constraints: "1 <= nums.length <= 3*10^4",
    inputFormat: "Array of integers",
    outputFormat: "Single number",
    sampleInput: "[2,2,1]",
    sampleOutput: "1",
    testCases: [
      { input: "[2,2,1]", expectedOutput: "1", isHidden: false },
      { input: "[4,1,2,1,2]", expectedOutput: "4", isHidden: false },
      { input: "[1]", expectedOutput: "1", isHidden: true }
    ],
    starterCode: [
      { language: "cpp", template: "class Solution {\npublic:\n    int solve(vector<int>& nums) {\n        // TODO: Implement\n        return 0;\n    }\n};" },
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-cpp-14",
    title: "Maximum Subarray",
    description: "Find contiguous subarray with largest sum.",
    difficulty: "medium",
    category: "C++",
    constraints: "1 <= nums.length <= 10^5",
    inputFormat: "Array of integers",
    outputFormat: "Max subarray sum",
    sampleInput: "[-2,1,-3,4,-1,2,1,-5,4]",
    sampleOutput: "6",
    testCases: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", expectedOutput: "6", isHidden: false },
      { input: "[1]", expectedOutput: "1", isHidden: false },
      { input: "[5,4,-1,7,8]", expectedOutput: "23", isHidden: true }
    ],
    starterCode: [
      { language: "cpp", template: "class Solution {\npublic:\n    int solve(vector<int>& nums) {\n        // TODO: Implement\n        return 0;\n    }\n};" },
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-cpp-15",
    title: "Two Sum",
    description: "Return indices of two numbers adding to target.",
    difficulty: "easy",
    category: "C++",
    constraints: "2 <= nums.length <= 10^4",
    inputFormat: "Array and target",
    outputFormat: "[i, j]",
    sampleInput: "[2,7,11,15]\n9",
    sampleOutput: "[0,1]",
    testCases: [
      { input: "[2,7,11,15]\n9", expectedOutput: "[0,1]", isHidden: false },
      { input: "[3,2,4]\n6", expectedOutput: "[1,2]", isHidden: false },
      { input: "[3,3]\n6", expectedOutput: "[0,1]", isHidden: true }
    ],
    starterCode: [
      { language: "cpp", template: "class Solution {\npublic:\n    int solve(vector<int>& nums) {\n        // TODO: Implement\n        return 0;\n    }\n};" },
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-cpp-16",
    title: "Valid Parentheses",
    description: "Determine if brackets string is valid.",
    difficulty: "easy",
    category: "C++",
    constraints: "1 <= s.length <= 10^4",
    inputFormat: "String of brackets",
    outputFormat: "True or false",
    sampleInput: "()[]{}",
    sampleOutput: "true",
    testCases: [
      { input: "()[]{}", expectedOutput: "true", isHidden: false },
      { input: "(]", expectedOutput: "false", isHidden: false },
      { input: "{[]}", expectedOutput: "true", isHidden: true }
    ],
    starterCode: [
      { language: "cpp", template: "class Solution {\npublic:\n    int solve(vector<int>& nums) {\n        // TODO: Implement\n        return 0;\n    }\n};" },
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-cpp-17",
    title: "Merge Sorted Arrays",
    description: "Merge two sorted arrays.",
    difficulty: "easy",
    category: "C++",
    constraints: "0 <= m,n <= 10^4",
    inputFormat: "Two sorted arrays",
    outputFormat: "Merged array",
    sampleInput: "[1,2,3]\n[2,5,6]",
    sampleOutput: "[1,2,2,3,5,6]",
    testCases: [
      { input: "[1,2,3]\n[2,5,6]", expectedOutput: "[1,2,2,3,5,6]", isHidden: false },
      { input: "[]\n[1]", expectedOutput: "[1]", isHidden: false },
      { input: "[2]\n[]", expectedOutput: "[2]", isHidden: true }
    ],
    starterCode: [
      { language: "cpp", template: "class Solution {\npublic:\n    int solve(vector<int>& nums) {\n        // TODO: Implement\n        return 0;\n    }\n};" },
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-cpp-18",
    title: "FizzBuzz",
    description: "Return FizzBuzz array from 1 to n.",
    difficulty: "easy",
    category: "C++",
    constraints: "1 <= n <= 10^4",
    inputFormat: "Integer n",
    outputFormat: "FizzBuzz array",
    sampleInput: "5",
    sampleOutput: "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\"]",
    testCases: [
      { input: "5", expectedOutput: "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\"]", isHidden: false },
      { input: "3", expectedOutput: "[\"1\",\"2\",\"Fizz\"]", isHidden: false },
      { input: "15", expectedOutput: "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\",\"Fizz\",\"7\",\"8\",\"Fizz\",\"Buzz\",\"11\",\"Fizz\",\"13\",\"14\",\"FizzBuzz\"]", isHidden: true }
    ],
    starterCode: [
      { language: "cpp", template: "class Solution {\npublic:\n    int solve(vector<int>& nums) {\n        // TODO: Implement\n        return 0;\n    }\n};" },
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-cpp-19",
    title: "Count Primes",
    description: "Count primes less than n using Sieve.",
    difficulty: "medium",
    category: "C++",
    constraints: "0 <= n <= 5*10^6",
    inputFormat: "Integer n",
    outputFormat: "Count of primes",
    sampleInput: "10",
    sampleOutput: "4",
    testCases: [
      { input: "10", expectedOutput: "4", isHidden: false },
      { input: "0", expectedOutput: "0", isHidden: false },
      { input: "1", expectedOutput: "0", isHidden: true }
    ],
    starterCode: [
      { language: "cpp", template: "class Solution {\npublic:\n    int solve(vector<int>& nums) {\n        // TODO: Implement\n        return 0;\n    }\n};" },
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-cpp-20",
    title: "Power of Two",
    description: "Return true if n is a power of two.",
    difficulty: "easy",
    category: "C++",
    constraints: "-2^31 <= n <= 2^31-1",
    inputFormat: "Integer n",
    outputFormat: "True or false",
    sampleInput: "16",
    sampleOutput: "true",
    testCases: [
      { input: "16", expectedOutput: "true", isHidden: false },
      { input: "1", expectedOutput: "true", isHidden: false },
      { input: "3", expectedOutput: "false", isHidden: true }
    ],
    starterCode: [
      { language: "cpp", template: "class Solution {\npublic:\n    int solve(vector<int>& nums) {\n        // TODO: Implement\n        return 0;\n    }\n};" },
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },

  {
    _id: "local-java-9",
    title: "Two Sum",
    description: "Return indices of two numbers adding to target.",
    difficulty: "easy",
    category: "Java",
    constraints: "2 <= nums.length <= 10^4",
    inputFormat: "Array and target",
    outputFormat: "[i, j]",
    sampleInput: "[2,7,11,15]\n9",
    sampleOutput: "[0,1]",
    testCases: [
      { input: "[2,7,11,15]\n9", expectedOutput: "[0,1]", isHidden: false },
      { input: "[3,2,4]\n6", expectedOutput: "[1,2]", isHidden: false },
      { input: "[3,3]\n6", expectedOutput: "[0,1]", isHidden: true }
    ],
    starterCode: [
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-java-10",
    title: "Reverse String",
    description: "Reverse a string in-place.",
    difficulty: "easy",
    category: "Java",
    constraints: "1 <= s.length <= 10^5",
    inputFormat: "String s",
    outputFormat: "Reversed string",
    sampleInput: "hello",
    sampleOutput: "olleh",
    testCases: [
      { input: "hello", expectedOutput: "olleh", isHidden: false },
      { input: "Hannah", expectedOutput: "hannaH", isHidden: false },
      { input: "a", expectedOutput: "a", isHidden: true }
    ],
    starterCode: [
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-java-11",
    title: "First Unique Character",
    description: "Find first non-repeating character index.",
    difficulty: "easy",
    category: "Java",
    constraints: "1 <= s.length <= 10^5",
    inputFormat: "String s",
    outputFormat: "Index or -1",
    sampleInput: "leetcode",
    sampleOutput: "0",
    testCases: [
      { input: "leetcode", expectedOutput: "0", isHidden: false },
      { input: "loveleetcode", expectedOutput: "2", isHidden: false },
      { input: "aabb", expectedOutput: "-1", isHidden: true }
    ],
    starterCode: [
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-java-12",
    title: "Valid Anagram",
    description: "Check if t is an anagram of s.",
    difficulty: "easy",
    category: "Java",
    constraints: "1 <= s.length <= 5*10^4",
    inputFormat: "Two strings",
    outputFormat: "True or false",
    sampleInput: "anagram",
    sampleOutput: "nagaa",
    testCases: [
      { input: "anagram", expectedOutput: "nagaa", isHidden: false },
      { input: "rat", expectedOutput: "car", isHidden: false },
      { input: "listen", expectedOutput: "silent", isHidden: true }
    ],
    starterCode: [
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-java-13",
    title: "Missing Number",
    description: "Find missing number in range [0,n].",
    difficulty: "easy",
    category: "Java",
    constraints: "1 <= nums.length <= 10^4",
    inputFormat: "Array of integers",
    outputFormat: "Missing number",
    sampleInput: "[3,0,1]",
    sampleOutput: "2",
    testCases: [
      { input: "[3,0,1]", expectedOutput: "2", isHidden: false },
      { input: "[0,1]", expectedOutput: "2", isHidden: false },
      { input: "[9,6,4,2,3,5,7,0,1]", expectedOutput: "8", isHidden: true }
    ],
    starterCode: [
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-java-14",
    title: "Intersection of Two Arrays",
    description: "Return unique intersection.",
    difficulty: "easy",
    category: "Java",
    constraints: "1 <= nums1.length, nums2.length <= 1000",
    inputFormat: "Two arrays",
    outputFormat: "Intersection",
    sampleInput: "[1,2,2,1]\n[2,2]",
    sampleOutput: "[2]",
    testCases: [
      { input: "[1,2,2,1]\n[2,2]", expectedOutput: "[2]", isHidden: false },
      { input: "[4,9,5]\n[9,4,9,8,4]", expectedOutput: "[4,9]", isHidden: false },
      { input: "[1]\n[1]", expectedOutput: "[1]", isHidden: true }
    ],
    starterCode: [
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-java-15",
    title: "Contains Duplicate II",
    description: "Check duplicate within distance k.",
    difficulty: "easy",
    category: "Java",
    constraints: "1 <= nums.length <= 10^5",
    inputFormat: "Array and k",
    outputFormat: "True or false",
    sampleInput: "[1,2,3,1]\n3",
    sampleOutput: "true",
    testCases: [
      { input: "[1,2,3,1]\n3", expectedOutput: "true", isHidden: false },
      { input: "[1,2,3,1,2,3]\n2", expectedOutput: "false", isHidden: false },
      { input: "[1,0,1,1]\n1", expectedOutput: "true", isHidden: true }
    ],
    starterCode: [
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-java-16",
    title: "Minimum Size Subarray Sum",
    description: "Find minimal length subarray with sum >= target.",
    difficulty: "medium",
    category: "Java",
    constraints: "1 <= nums.length <= 10^5",
    inputFormat: "Target and array",
    outputFormat: "Minimal length",
    sampleInput: "7\n[2,3,1,2,4,3]",
    sampleOutput: "2",
    testCases: [
      { input: "7\n[2,3,1,2,4,3]", expectedOutput: "2", isHidden: false },
      { input: "4\n[1,4,4]", expectedOutput: "1", isHidden: false },
      { input: "11\n[1,1,1,1,1,1,1,1]", expectedOutput: "0", isHidden: true }
    ],
    starterCode: [
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-java-17",
    title: "Merge Intervals",
    description: "Merge all overlapping intervals.",
    difficulty: "medium",
    category: "Java",
    constraints: "1 <= intervals.length <= 10^4",
    inputFormat: "Array of intervals",
    outputFormat: "Merged intervals",
    sampleInput: "[[1,3],[2,6],[8,10],[15,18]]",
    sampleOutput: "[[1,6],[8,10],[15,18]]",
    testCases: [
      { input: "[[1,3],[2,6],[8,10],[15,18]]", expectedOutput: "[[1,6],[8,10],[15,18]]", isHidden: false },
      { input: "[[1,4],[4,5]]", expectedOutput: "[[1,5]]", isHidden: false },
      { input: "[[1,4],[0,4]]", expectedOutput: "[[0,4]]", isHidden: true }
    ],
    starterCode: [
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-java-18",
    title: "Product of Array Except Self",
    description: "Return product array except self.",
    difficulty: "medium",
    category: "Java",
    constraints: "2 <= nums.length <= 10^5",
    inputFormat: "Array of integers",
    outputFormat: "Product array",
    sampleInput: "[1,2,3,4]",
    sampleOutput: "[24,12,8,6]",
    testCases: [
      { input: "[1,2,3,4]", expectedOutput: "[24,12,8,6]", isHidden: false },
      { input: "[-1,1,0,-3,3]", expectedOutput: "[0,0,9,0,0]", isHidden: false },
      { input: "[2,3]", expectedOutput: "[3,2]", isHidden: true }
    ],
    starterCode: [
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-java-19",
    title: "Sort Colors",
    description: "Sort 0s, 1s, 2s in-place.",
    difficulty: "medium",
    category: "Java",
    constraints: "1 <= nums.length <= 300",
    inputFormat: "Array of 0s,1s,2s",
    outputFormat: "Sorted array",
    sampleInput: "[2,0,2,1,1,0]",
    sampleOutput: "[0,0,1,1,2,2]",
    testCases: [
      { input: "[2,0,2,1,1,0]", expectedOutput: "[0,0,1,1,2,2]", isHidden: false },
      { input: "[0]", expectedOutput: "[0]", isHidden: false },
      { input: "[2,1]", expectedOutput: "[1,2]", isHidden: true }
    ],
    starterCode: [
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-java-20",
    title: "Linked List Cycle",
    description: "Detect cycle using Floyd algorithm.",
    difficulty: "easy",
    category: "Java",
    constraints: "0 <= Node.val <= 100",
    inputFormat: "Head of linked list",
    outputFormat: "True or false",
    sampleInput: "[3,2,0,-4]\n1",
    sampleOutput: "true",
    testCases: [
      { input: "[3,2,0,-4]\n1", expectedOutput: "true", isHidden: false },
      { input: "[1]\n-1", expectedOutput: "false", isHidden: false },
      { input: "[1]\n0", expectedOutput: "true", isHidden: true }
    ],
    starterCode: [
      { language: "javascript", template: "function solve(nums) {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve(nums):\n    # TODO: Implement\n    pass" }
    ]
  },

  {
    _id: "local-js-12",
    title: "FizzBuzz",
    description: "Return FizzBuzz array from 1 to n.",
    difficulty: "easy",
    category: "JavaScript",
    constraints: "1 <= n <= 10^4",
    inputFormat: "Integer n",
    outputFormat: "FizzBuzz array",
    sampleInput: "5",
    sampleOutput: "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\"]",
    testCases: [
      { input: "5", expectedOutput: "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\"]", isHidden: false },
      { input: "3", expectedOutput: "[\"1\",\"2\",\"Fizz\"]", isHidden: false },
      { input: "15", expectedOutput: "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\",\"Fizz\",\"7\",\"8\",\"Fizz\",\"Buzz\",\"11\",\"Fizz\",\"13\",\"14\",\"FizzBuzz\"]", isHidden: true }
    ],
    starterCode: [
      { language: "javascript", template: "function solve() {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve():\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-js-13",
    title: "Palindromic Substring",
    description: "Find the longest palindromic substring.",
    difficulty: "medium",
    category: "JavaScript",
    constraints: "1 <= s.length <= 1000",
    inputFormat: "String s",
    outputFormat: "Longest palindrome",
    sampleInput: "babad",
    sampleOutput: "bab",
    testCases: [
      { input: "babad", expectedOutput: "bab", isHidden: false },
      { input: "cbbd", expectedOutput: "bb", isHidden: false },
      { input: "a", expectedOutput: "a", isHidden: true }
    ],
    starterCode: [
      { language: "javascript", template: "function solve() {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve():\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-js-14",
    title: "Anagram Groups",
    description: "Group strings that are anagrams.",
    difficulty: "medium",
    category: "JavaScript",
    constraints: "1 <= strs.length <= 10^4",
    inputFormat: "Array of strings",
    outputFormat: "Grouped anagrams",
    sampleInput: "[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
    sampleOutput: "[[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]",
    testCases: [
      { input: "[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]", expectedOutput: "[[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]", isHidden: false },
      { input: "[\"a\"]", expectedOutput: "[[\"a\"]]", isHidden: false },
      { input: "[\"\",\"\"]", expectedOutput: "[[\"\",\"\"]]", isHidden: true }
    ],
    starterCode: [
      { language: "javascript", template: "function solve() {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve():\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-js-15",
    title: "Top K Frequent Elements",
    description: "Return k most frequent elements.",
    difficulty: "medium",
    category: "JavaScript",
    constraints: "1 <= nums.length <= 10^5",
    inputFormat: "Array and k",
    outputFormat: "K elements",
    sampleInput: "[1,1,1,2,2,3]\n2",
    sampleOutput: "[1,2]",
    testCases: [
      { input: "[1,1,1,2,2,3]\n2", expectedOutput: "[1,2]", isHidden: false },
      { input: "[1]\n1", expectedOutput: "[1]", isHidden: false },
      { input: "[4,1,-1,2,-1,2,3]\n2", expectedOutput: "[-1,2]", isHidden: true }
    ],
    starterCode: [
      { language: "javascript", template: "function solve() {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve():\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-js-16",
    title: "Product of Array Except Self",
    description: "Return product array except self.",
    difficulty: "medium",
    category: "JavaScript",
    constraints: "2 <= nums.length <= 10^5",
    inputFormat: "Array of integers",
    outputFormat: "Product array",
    sampleInput: "[1,2,3,4]",
    sampleOutput: "[24,12,8,6]",
    testCases: [
      { input: "[1,2,3,4]", expectedOutput: "[24,12,8,6]", isHidden: false },
      { input: "[-1,1,0,-3,3]", expectedOutput: "[0,0,9,0,0]", isHidden: false },
      { input: "[2,3]", expectedOutput: "[3,2]", isHidden: true }
    ],
    starterCode: [
      { language: "javascript", template: "function solve() {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve():\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-js-17",
    title: "Maximum Depth Binary Tree",
    description: "Return maximum depth of binary tree.",
    difficulty: "easy",
    category: "JavaScript",
    constraints: "0 <= nodes <= 10^4",
    inputFormat: "Root node",
    outputFormat: "Max depth",
    sampleInput: "[3,9,20,null,null,15,7]",
    sampleOutput: "3",
    testCases: [
      { input: "[3,9,20,null,null,15,7]", expectedOutput: "3", isHidden: false },
      { input: "[1,null,2]", expectedOutput: "2", isHidden: false },
      { input: "[]", expectedOutput: "0", isHidden: true }
    ],
    starterCode: [
      { language: "javascript", template: "function solve() {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve():\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-js-18",
    title: "Decode Ways",
    description: "Count number of ways to decode digit string.",
    difficulty: "medium",
    category: "JavaScript",
    constraints: "1 <= s.length <= 100",
    inputFormat: "String of digits",
    outputFormat: "Number of decodings",
    sampleInput: "226",
    sampleOutput: "3",
    testCases: [
      { input: "226", expectedOutput: "3", isHidden: false },
      { input: "0", expectedOutput: "0", isHidden: false },
      { input: "11", expectedOutput: "2", isHidden: true }
    ],
    starterCode: [
      { language: "javascript", template: "function solve() {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve():\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-js-19",
    title: "Clone Graph",
    description: "Clone an undirected graph.",
    difficulty: "medium",
    category: "JavaScript",
    constraints: "0 <= Node.val <= 100",
    inputFormat: "Graph node reference",
    outputFormat: "Deep copy",
    sampleInput: "[[2,4],[1,3],[2,4],[1,3]]",
    sampleOutput: "[[2,4],[1,3],[2,4],[1,3]]",
    testCases: [
      { input: "[[2,4],[1,3],[2,4],[1,3]]", expectedOutput: "[[2,4],[1,3],[2,4],[1,3]]", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "function solve() {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve():\n    # TODO: Implement\n    pass" }
    ]
  },
  {
    _id: "local-js-20",
    title: "LRU Cache",
    description: "Design LRU cache with O(1) operations.",
    difficulty: "medium",
    category: "JavaScript",
    constraints: "1 <= capacity <= 3000",
    inputFormat: "Capacity",
    outputFormat: "Cache operations",
    sampleInput: "[\"LRUCache\",\"put\",\"get\"]\n[[2],[1,1],[1]]",
    sampleOutput: "[null,null,1]",
    testCases: [
      { input: "[\"LRUCache\",\"put\",\"get\"]\n[[2],[1,1],[1]]", expectedOutput: "[null,null,1]", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "function solve() {\n  // TODO: Implement\n}" },
      { language: "python", template: "def solve():\n    # TODO: Implement\n    pass" }
    ]
  },

  {
    _id: "local-html-6",
    title: "HTML Forms",
    description: "Create a form with text input, email input, and submit button.",
    difficulty: "easy",
    category: "HTML",
    constraints: "Basic HTML forms",
    inputFormat: "None",
    outputFormat: "HTML form",
    sampleInput: "None",
    sampleOutput: "Valid HTML form",
    testCases: [
      { input: "None", expectedOutput: "Valid HTML form", isHidden: false }
    ],
    starterCode: [
      { language: "html", template: "<!-- Solution HTML -->" }
    ]
  },
  {
    _id: "local-html-7",
    title: "HTML Tables",
    description: "Create a table with 3 rows and 3 columns.",
    difficulty: "easy",
    category: "HTML",
    constraints: "Basic HTML tables",
    inputFormat: "None",
    outputFormat: "HTML table",
    sampleInput: "None",
    sampleOutput: "Valid HTML table",
    testCases: [
      { input: "None", expectedOutput: "Valid HTML table", isHidden: false }
    ],
    starterCode: [
      { language: "html", template: "<!-- Solution HTML -->" }
    ]
  },
  {
    _id: "local-html-8",
    title: "HTML Links and Images",
    description: "Create a hyperlink and an image tag.",
    difficulty: "easy",
    category: "HTML",
    constraints: "Anchor and img tags",
    inputFormat: "None",
    outputFormat: "HTML with link and image",
    sampleInput: "None",
    sampleOutput: "Valid HTML",
    testCases: [
      { input: "None", expectedOutput: "Valid HTML", isHidden: false }
    ],
    starterCode: [
      { language: "html", template: "<!-- Solution HTML -->" }
    ]
  },
  {
    _id: "local-html-9",
    title: "HTML Lists",
    description: "Create ordered and unordered lists with 3 items.",
    difficulty: "easy",
    category: "HTML",
    constraints: "ol and ul tags",
    inputFormat: "None",
    outputFormat: "HTML lists",
    sampleInput: "None",
    sampleOutput: "Valid HTML lists",
    testCases: [
      { input: "None", expectedOutput: "Valid HTML lists", isHidden: false }
    ],
    starterCode: [
      { language: "html", template: "<!-- Solution HTML -->" }
    ]
  },
  {
    _id: "local-html-10",
    title: "HTML Semantic Elements",
    description: "Use header, nav, main, article, footer.",
    difficulty: "easy",
    category: "HTML",
    constraints: "Semantic HTML5",
    inputFormat: "None",
    outputFormat: "Page structure",
    sampleInput: "None",
    sampleOutput: "Valid semantic HTML",
    testCases: [
      { input: "None", expectedOutput: "Valid semantic HTML", isHidden: false }
    ],
    starterCode: [
      { language: "html", template: "<!-- Solution HTML -->" }
    ]
  },
  {
    _id: "local-html-11",
    title: "HTML Audio and Video",
    description: "Add audio and video elements with controls.",
    difficulty: "easy",
    category: "HTML",
    constraints: "audio and video tags",
    inputFormat: "None",
    outputFormat: "Media elements",
    sampleInput: "None",
    sampleOutput: "Valid HTML media",
    testCases: [
      { input: "None", expectedOutput: "Valid HTML media", isHidden: false }
    ],
    starterCode: [
      { language: "html", template: "<!-- Solution HTML -->" }
    ]
  },
  {
    _id: "local-html-12",
    title: "HTML Meta Tags",
    description: "Add charset, viewport, and description meta tags.",
    difficulty: "easy",
    category: "HTML",
    constraints: "meta tag usage",
    inputFormat: "None",
    outputFormat: "HTML head",
    sampleInput: "None",
    sampleOutput: "Valid HTML head",
    testCases: [
      { input: "None", expectedOutput: "Valid HTML head", isHidden: false }
    ],
    starterCode: [
      { language: "html", template: "<!-- Solution HTML -->" }
    ]
  },
  {
    _id: "local-html-13",
    title: "HTML Blockquote and Code",
    description: "Use blockquote, pre, and code elements.",
    difficulty: "easy",
    category: "HTML",
    constraints: "Block-level elements",
    inputFormat: "None",
    outputFormat: "HTML with blockquote",
    sampleInput: "None",
    sampleOutput: "Valid HTML",
    testCases: [
      { input: "None", expectedOutput: "Valid HTML", isHidden: false }
    ],
    starterCode: [
      { language: "html", template: "<!-- Solution HTML -->" }
    ]
  },
  {
    _id: "local-html-14",
    title: "HTML Data Attributes",
    description: "Use custom data-* attributes on elements.",
    difficulty: "easy",
    category: "HTML",
    constraints: "data-* attributes",
    inputFormat: "None",
    outputFormat: "Elements with data attrs",
    sampleInput: "None",
    sampleOutput: "Valid HTML",
    testCases: [
      { input: "None", expectedOutput: "Valid HTML", isHidden: false }
    ],
    starterCode: [
      { language: "html", template: "<!-- Solution HTML -->" }
    ]
  },
  {
    _id: "local-html-15",
    title: "HTML Details and Summary",
    description: "Create collapsible section with details/summary.",
    difficulty: "easy",
    category: "HTML",
    constraints: "HTML5 details element",
    inputFormat: "None",
    outputFormat: "Collapsible section",
    sampleInput: "None",
    sampleOutput: "Valid HTML",
    testCases: [
      { input: "None", expectedOutput: "Valid HTML", isHidden: false }
    ],
    starterCode: [
      { language: "html", template: "<!-- Solution HTML -->" }
    ]
  },
  {
    _id: "local-html-16",
    title: "HTML Progress and Meter",
    description: "Use progress and meter elements.",
    difficulty: "easy",
    category: "HTML",
    constraints: "HTML5 progress/meter",
    inputFormat: "None",
    outputFormat: "Progress elements",
    sampleInput: "None",
    sampleOutput: "Valid HTML",
    testCases: [
      { input: "None", expectedOutput: "Valid HTML", isHidden: false }
    ],
    starterCode: [
      { language: "html", template: "<!-- Solution HTML -->" }
    ]
  },
  {
    _id: "local-html-17",
    title: "HTML Table with Caption",
    description: "Create table with caption and thead/tbody.",
    difficulty: "easy",
    category: "HTML",
    constraints: "Table semantics",
    inputFormat: "None",
    outputFormat: "Structured table",
    sampleInput: "None",
    sampleOutput: "Valid table",
    testCases: [
      { input: "None", expectedOutput: "Valid table", isHidden: false }
    ],
    starterCode: [
      { language: "html", template: "<!-- Solution HTML -->" }
    ]
  },
  {
    _id: "local-html-18",
    title: "HTML Dialog Element",
    description: "Create modal using dialog element.",
    difficulty: "easy",
    category: "HTML",
    constraints: "HTML5 dialog tag",
    inputFormat: "None",
    outputFormat: "Dialog element",
    sampleInput: "None",
    sampleOutput: "Valid HTML dialog",
    testCases: [
      { input: "None", expectedOutput: "Valid HTML dialog", isHidden: false }
    ],
    starterCode: [
      { language: "html", template: "<!-- Solution HTML -->" }
    ]
  },
  {
    _id: "local-html-19",
    title: "HTML Fieldset and Legend",
    description: "Group form elements with fieldset/legend.",
    difficulty: "easy",
    category: "HTML",
    constraints: "Form grouping",
    inputFormat: "None",
    outputFormat: "Form with fieldset",
    sampleInput: "None",
    sampleOutput: "Valid HTML form",
    testCases: [
      { input: "None", expectedOutput: "Valid HTML form", isHidden: false }
    ],
    starterCode: [
      { language: "html", template: "<!-- Solution HTML -->" }
    ]
  },
  {
    _id: "local-html-20",
    title: "HTML Output Element",
    description: "Use output element for calculations.",
    difficulty: "easy",
    category: "HTML",
    constraints: "HTML5 output tag",
    inputFormat: "None",
    outputFormat: "Output element",
    sampleInput: "None",
    sampleOutput: "Valid HTML",
    testCases: [
      { input: "None", expectedOutput: "Valid HTML", isHidden: false }
    ],
    starterCode: [
      { language: "html", template: "<!-- Solution HTML -->" }
    ]
  },

  {
    _id: "local-css-6",
    title: "CSS Flexbox Centering",
    description: "Center a div using Flexbox.",
    difficulty: "easy",
    category: "CSS",
    constraints: "display:flex",
    inputFormat: "Parent and child",
    outputFormat: "Centered div",
    sampleInput: "None",
    sampleOutput: "Flex centering",
    testCases: [
      { input: "None", expectedOutput: "Flex centering", isHidden: false }
    ],
    starterCode: [
      { language: "css", template: "/* Solution CSS */" }
    ]
  },
  {
    _id: "local-css-7",
    title: "CSS Grid Layout",
    description: "Create a 3-column grid layout.",
    difficulty: "easy",
    category: "CSS",
    constraints: "display:grid",
    inputFormat: "Container with items",
    outputFormat: "Grid layout",
    sampleInput: "None",
    sampleOutput: "Grid CSS",
    testCases: [
      { input: "None", expectedOutput: "Grid CSS", isHidden: false }
    ],
    starterCode: [
      { language: "css", template: "/* Solution CSS */" }
    ]
  },
  {
    _id: "local-css-8",
    title: "CSS Box Shadow",
    description: "Apply box shadow to a div.",
    difficulty: "easy",
    category: "CSS",
    constraints: "box-shadow property",
    inputFormat: "A div element",
    outputFormat: "Div with shadow",
    sampleInput: "None",
    sampleOutput: "Shadow CSS",
    testCases: [
      { input: "None", expectedOutput: "Shadow CSS", isHidden: false }
    ],
    starterCode: [
      { language: "css", template: "/* Solution CSS */" }
    ]
  },
  {
    _id: "local-css-9",
    title: "CSS Transition Animation",
    description: "Create hover effect with transition.",
    difficulty: "easy",
    category: "CSS",
    constraints: "transition property",
    inputFormat: "A div element",
    outputFormat: "Smooth transition",
    sampleInput: "None",
    sampleOutput: "Transition CSS",
    testCases: [
      { input: "None", expectedOutput: "Transition CSS", isHidden: false }
    ],
    starterCode: [
      { language: "css", template: "/* Solution CSS */" }
    ]
  },
  {
    _id: "local-css-10",
    title: "CSS Text Styling",
    description: "Style text with font, color, shadow.",
    difficulty: "easy",
    category: "CSS",
    constraints: "text properties",
    inputFormat: "Paragraph element",
    outputFormat: "Styled text",
    sampleInput: "None",
    sampleOutput: "Text CSS",
    testCases: [
      { input: "None", expectedOutput: "Text CSS", isHidden: false }
    ],
    starterCode: [
      { language: "css", template: "/* Solution CSS */" }
    ]
  },
  {
    _id: "local-css-11",
    title: "CSS Media Queries",
    description: "Change layout for mobile screens.",
    difficulty: "easy",
    category: "CSS",
    constraints: "@media rule",
    inputFormat: "Container",
    outputFormat: "Responsive layout",
    sampleInput: "None",
    sampleOutput: "Media query CSS",
    testCases: [
      { input: "None", expectedOutput: "Media query CSS", isHidden: false }
    ],
    starterCode: [
      { language: "css", template: "/* Solution CSS */" }
    ]
  },
  {
    _id: "local-css-12",
    title: "CSS Position Absolute",
    description: "Position element absolutely in relative parent.",
    difficulty: "easy",
    category: "CSS",
    constraints: "position:absolute/relative",
    inputFormat: "Parent with child",
    outputFormat: "Positioned element",
    sampleInput: "None",
    sampleOutput: "Positioning CSS",
    testCases: [
      { input: "None", expectedOutput: "Positioning CSS", isHidden: false }
    ],
    starterCode: [
      { language: "css", template: "/* Solution CSS */" }
    ]
  },
  {
    _id: "local-css-13",
    title: "CSS Pseudo-classes",
    description: "Use :hover, :nth-child, :focus.",
    difficulty: "easy",
    category: "CSS",
    constraints: "Pseudo-class selectors",
    inputFormat: "Elements",
    outputFormat: "Interactive styles",
    sampleInput: "None",
    sampleOutput: "Pseudo-class CSS",
    testCases: [
      { input: "None", expectedOutput: "Pseudo-class CSS", isHidden: false }
    ],
    starterCode: [
      { language: "css", template: "/* Solution CSS */" }
    ]
  },
  {
    _id: "local-css-14",
    title: "CSS Gradients",
    description: "Create linear and radial gradients.",
    difficulty: "easy",
    category: "CSS",
    constraints: "linear-gradient, radial-gradient",
    inputFormat: "Elements",
    outputFormat: "Gradient backgrounds",
    sampleInput: "None",
    sampleOutput: "Gradient CSS",
    testCases: [
      { input: "None", expectedOutput: "Gradient CSS", isHidden: false }
    ],
    starterCode: [
      { language: "css", template: "/* Solution CSS */" }
    ]
  },
  {
    _id: "local-css-15",
    title: "CSS Animations",
    description: "Create keyframe animation.",
    difficulty: "easy",
    category: "CSS",
    constraints: "@keyframes",
    inputFormat: "Div element",
    outputFormat: "Animated element",
    sampleInput: "None",
    sampleOutput: "Animation CSS",
    testCases: [
      { input: "None", expectedOutput: "Animation CSS", isHidden: false }
    ],
    starterCode: [
      { language: "css", template: "/* Solution CSS */" }
    ]
  },
  {
    _id: "local-css-16",
    title: "CSS Variables",
    description: "Use CSS custom properties.",
    difficulty: "easy",
    category: "CSS",
    constraints: "CSS custom properties",
    inputFormat: "Elements",
    outputFormat: "Styled with variables",
    sampleInput: "None",
    sampleOutput: "CSS variables",
    testCases: [
      { input: "None", expectedOutput: "CSS variables", isHidden: false }
    ],
    starterCode: [
      { language: "css", template: "/* Solution CSS */" }
    ]
  },
  {
    _id: "local-css-17",
    title: "CSS Overflow Truncation",
    description: "Truncate text with ellipsis.",
    difficulty: "easy",
    category: "CSS",
    constraints: "text-overflow:ellipsis",
    inputFormat: "Container",
    outputFormat: "Truncated text",
    sampleInput: "None",
    sampleOutput: "Truncation CSS",
    testCases: [
      { input: "None", expectedOutput: "Truncation CSS", isHidden: false }
    ],
    starterCode: [
      { language: "css", template: "/* Solution CSS */" }
    ]
  },
  {
    _id: "local-css-18",
    title: "CSS Z-index Layering",
    description: "Stack elements using z-index.",
    difficulty: "easy",
    category: "CSS",
    constraints: "z-index property",
    inputFormat: "Positioned elements",
    outputFormat: "Layered elements",
    sampleInput: "None",
    sampleOutput: "Z-index CSS",
    testCases: [
      { input: "None", expectedOutput: "Z-index CSS", isHidden: false }
    ],
    starterCode: [
      { language: "css", template: "/* Solution CSS */" }
    ]
  },
  {
    _id: "local-css-19",
    title: "CSS Flexbox Gap",
    description: "Use gap in flexbox.",
    difficulty: "easy",
    category: "CSS",
    constraints: "gap in flexbox",
    inputFormat: "Flex container",
    outputFormat: "Spaced items",
    sampleInput: "None",
    sampleOutput: "Flex gap CSS",
    testCases: [
      { input: "None", expectedOutput: "Flex gap CSS", isHidden: false }
    ],
    starterCode: [
      { language: "css", template: "/* Solution CSS */" }
    ]
  },
  {
    _id: "local-css-20",
    title: "CSS Aspect Ratio",
    description: "Maintain aspect ratio.",
    difficulty: "easy",
    category: "CSS",
    constraints: "aspect-ratio property",
    inputFormat: "Elements",
    outputFormat: "Fixed ratio",
    sampleInput: "None",
    sampleOutput: "Aspect ratio CSS",
    testCases: [
      { input: "None", expectedOutput: "Aspect ratio CSS", isHidden: false }
    ],
    starterCode: [
      { language: "css", template: "/* Solution CSS */" }
    ]
  },

  {
    _id: "local-react-6",
    title: "React Component Lifecycle",
    description: "Use useEffect for mount/unmount.",
    difficulty: "easy",
    category: "React",
    constraints: "useEffect cleanup",
    inputFormat: "None",
    outputFormat: "Lifecycle component",
    sampleInput: "None",
    sampleOutput: "React component",
    testCases: [
      { input: "None", expectedOutput: "React component", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "function Component() {\n  return <div>TODO</div>;\n}" }
    ]
  },
  {
    _id: "local-react-7",
    title: "React Conditional Rendering",
    description: "Show different UI based on state.",
    difficulty: "easy",
    category: "React",
    constraints: "Conditional rendering",
    inputFormat: "None",
    outputFormat: "Conditional UI",
    sampleInput: "None",
    sampleOutput: "React conditional",
    testCases: [
      { input: "None", expectedOutput: "React conditional", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "function Component() {\n  return <div>TODO</div>;\n}" }
    ]
  },
  {
    _id: "local-react-8",
    title: "React List Rendering",
    description: "Render list items using map.",
    difficulty: "easy",
    category: "React",
    constraints: "Array rendering with key",
    inputFormat: "None",
    outputFormat: "List of items",
    sampleInput: "None",
    sampleOutput: "React list",
    testCases: [
      { input: "None", expectedOutput: "React list", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "function Component() {\n  return <div>TODO</div>;\n}" }
    ]
  },
  {
    _id: "local-react-9",
    title: "React Form Handling",
    description: "Handle form submission with controlled inputs.",
    difficulty: "easy",
    category: "React",
    constraints: "Controlled components",
    inputFormat: "None",
    outputFormat: "Form with state",
    sampleInput: "None",
    sampleOutput: "React form",
    testCases: [
      { input: "None", expectedOutput: "React form", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "function Component() {\n  return <div>TODO</div>;\n}" }
    ]
  },
  {
    _id: "local-react-10",
    title: "React Context API",
    description: "Use Context to share state across components.",
    difficulty: "medium",
    category: "React",
    constraints: "createContext, useContext",
    inputFormat: "None",
    outputFormat: "Shared state",
    sampleInput: "None",
    sampleOutput: "React context",
    testCases: [
      { input: "None", expectedOutput: "React context", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "function Component() {\n  return <div>TODO</div>;\n}" }
    ]
  },
  {
    _id: "local-react-11",
    title: "React useReducer",
    description: "Manage complex state with useReducer.",
    difficulty: "medium",
    category: "React",
    constraints: "useReducer hook",
    inputFormat: "None",
    outputFormat: "Reduced state",
    sampleInput: "None",
    sampleOutput: "React useReducer",
    testCases: [
      { input: "None", expectedOutput: "React useReducer", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "function Component() {\n  return <div>TODO</div>;\n}" }
    ]
  },
  {
    _id: "local-react-12",
    title: "React useCallback useMemo",
    description: "Optimize with memoization hooks.",
    difficulty: "medium",
    category: "React",
    constraints: "Performance hooks",
    inputFormat: "None",
    outputFormat: "Optimized component",
    sampleInput: "None",
    sampleOutput: "React optimization",
    testCases: [
      { input: "None", expectedOutput: "React optimization", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "function Component() {\n  return <div>TODO</div>;\n}" }
    ]
  },
  {
    _id: "local-react-13",
    title: "React useRef",
    description: "Access DOM elements with useRef.",
    difficulty: "easy",
    category: "React",
    constraints: "useRef hook",
    inputFormat: "None",
    outputFormat: "DOM reference",
    sampleInput: "None",
    sampleOutput: "React useRef",
    testCases: [
      { input: "None", expectedOutput: "React useRef", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "function Component() {\n  return <div>TODO</div>;\n}" }
    ]
  },
  {
    _id: "local-react-14",
    title: "React Custom Hook",
    description: "Create a custom useFetch hook.",
    difficulty: "medium",
    category: "React",
    constraints: "Custom hook pattern",
    inputFormat: "None",
    outputFormat: "Reusable hook",
    sampleInput: "None",
    sampleOutput: "React custom hook",
    testCases: [
      { input: "None", expectedOutput: "React custom hook", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "function Component() {\n  return <div>TODO</div>;\n}" }
    ]
  },
  {
    _id: "local-react-15",
    title: "React Error Boundary",
    description: "Implement error boundary with componentDidCatch.",
    difficulty: "medium",
    category: "React",
    constraints: "Error boundary class",
    inputFormat: "None",
    outputFormat: "Error handler",
    sampleInput: "None",
    sampleOutput: "React error boundary",
    testCases: [
      { input: "None", expectedOutput: "React error boundary", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "function Component() {\n  return <div>TODO</div>;\n}" }
    ]
  },
  {
    _id: "local-react-16",
    title: "React Portal",
    description: "Render children outside parent DOM.",
    difficulty: "medium",
    category: "React",
    constraints: "ReactDOM.createPortal",
    inputFormat: "None",
    outputFormat: "Portal component",
    sampleInput: "None",
    sampleOutput: "React portal",
    testCases: [
      { input: "None", expectedOutput: "React portal", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "function Component() {\n  return <div>TODO</div>;\n}" }
    ]
  },
  {
    _id: "local-react-17",
    title: "React Memoization",
    description: "Prevent re-renders with React.memo.",
    difficulty: "easy",
    category: "React",
    constraints: "React.memo HOC",
    inputFormat: "None",
    outputFormat: "Memoized component",
    sampleInput: "None",
    sampleOutput: "React memo",
    testCases: [
      { input: "None", expectedOutput: "React memo", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "function Component() {\n  return <div>TODO</div>;\n}" }
    ]
  },
  {
    _id: "local-react-18",
    title: "React Suspense",
    description: "Use Suspense with lazy loading.",
    difficulty: "medium",
    category: "React",
    constraints: "React.lazy, Suspense",
    inputFormat: "None",
    outputFormat: "Lazy loaded component",
    sampleInput: "None",
    sampleOutput: "React suspense",
    testCases: [
      { input: "None", expectedOutput: "React suspense", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "function Component() {\n  return <div>TODO</div>;\n}" }
    ]
  },
  {
    _id: "local-react-19",
    title: "React forwardRef",
    description: "Forward ref to child component.",
    difficulty: "medium",
    category: "React",
    constraints: "forwardRef API",
    inputFormat: "None",
    outputFormat: "Forwarded ref",
    sampleInput: "None",
    sampleOutput: "React forwardRef",
    testCases: [
      { input: "None", expectedOutput: "React forwardRef", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "function Component() {\n  return <div>TODO</div>;\n}" }
    ]
  },
  {
    _id: "local-react-20",
    title: "React Synthetic Events",
    description: "Handle events with synthetic events.",
    difficulty: "easy",
    category: "React",
    constraints: "SyntheticEvent",
    inputFormat: "None",
    outputFormat: "Event handler",
    sampleInput: "None",
    sampleOutput: "React events",
    testCases: [
      { input: "None", expectedOutput: "React events", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "function Component() {\n  return <div>TODO</div>;\n}" }
    ]
  },

  {
    _id: "local-node-5",
    title: "Node.js File Read",
    description: "Read file using fs module.",
    difficulty: "easy",
    category: "Node.js",
    constraints: "fs module",
    inputFormat: "File path",
    outputFormat: "File contents",
    sampleInput: "test.txt",
    sampleOutput: "Hello World",
    testCases: [
      { input: "test.txt", expectedOutput: "Hello World", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-node-6",
    title: "Node.js HTTP Server",
    description: "Create basic HTTP server.",
    difficulty: "easy",
    category: "Node.js",
    constraints: "http module",
    inputFormat: "None",
    outputFormat: "Server running",
    sampleInput: "None",
    sampleOutput: "Hello World",
    testCases: [
      { input: "None", expectedOutput: "Hello World", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-node-7",
    title: "Node.js Path Module",
    description: "Use path module for file paths.",
    difficulty: "easy",
    category: "Node.js",
    constraints: "path module",
    inputFormat: "File path",
    outputFormat: "Parsed path",
    sampleInput: "/home/user/file.txt",
    sampleOutput: "txt",
    testCases: [
      { input: "/home/user/file.txt", expectedOutput: ".txt", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-node-8",
    title: "Node.js Event Emitter",
    description: "Use EventEmitter for events.",
    difficulty: "easy",
    category: "Node.js",
    constraints: "EventEmitter",
    inputFormat: "None",
    outputFormat: "Event logged",
    sampleInput: "None",
    sampleOutput: "Event fired",
    testCases: [
      { input: "None", expectedOutput: "Event fired", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-node-9",
    title: "Node.js JSON Parsing",
    description: "Parse and stringify JSON.",
    difficulty: "easy",
    category: "Node.js",
    constraints: "JSON.parse/stringify",
    inputFormat: "JSON string",
    outputFormat: "Parsed object",
    sampleInput: "{\"name\":\"John\"}",
    sampleOutput: "John",
    testCases: [
      { input: "{\"name\":\"John\"}", expectedOutput: "John", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-node-10",
    title: "Node.js Streams",
    description: "Read files using streams.",
    difficulty: "medium",
    category: "Node.js",
    constraints: "fs.createReadStream",
    inputFormat: "Large file",
    outputFormat: "Streamed data",
    sampleInput: "large.txt",
    sampleOutput: "Data",
    testCases: [
      { input: "large.txt", expectedOutput: "Data", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-node-11",
    title: "Node.js Express Route",
    description: "Create Express routes.",
    difficulty: "medium",
    category: "Node.js",
    constraints: "express.Router",
    inputFormat: "None",
    outputFormat: "Route handlers",
    sampleInput: "None",
    sampleOutput: "Routes defined",
    testCases: [
      { input: "None", expectedOutput: "Routes defined", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-node-12",
    title: "Node.js Middleware",
    description: "Create logging middleware.",
    difficulty: "medium",
    category: "Node.js",
    constraints: "Middleware function",
    inputFormat: "None",
    outputFormat: "Logging middleware",
    sampleInput: "None",
    sampleOutput: "Middleware defined",
    testCases: [
      { input: "None", expectedOutput: "Middleware defined", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-node-13",
    title: "Node.js Error Handling",
    description: "Global error handling in Express.",
    difficulty: "medium",
    category: "Node.js",
    constraints: "Error middleware",
    inputFormat: "None",
    outputFormat: "Error handler",
    sampleInput: "None",
    sampleOutput: "Error handler",
    testCases: [
      { input: "None", expectedOutput: "Error handler", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-node-14",
    title: "Node.js Query Params",
    description: "Handle query parameters.",
    difficulty: "easy",
    category: "Node.js",
    constraints: "req.query",
    inputFormat: "URL with query",
    outputFormat: "Query extracted",
    sampleInput: "/search?q=hello",
    sampleOutput: "hello",
    testCases: [
      { input: "/search?q=hello", expectedOutput: "hello", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-node-15",
    title: "Node.js Dynamic Routes",
    description: "Handle route parameters.",
    difficulty: "easy",
    category: "Node.js",
    constraints: "req.params",
    inputFormat: "URL with param",
    outputFormat: "Param extracted",
    sampleInput: "/users/42",
    sampleOutput: "42",
    testCases: [
      { input: "/users/42", expectedOutput: "42", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-node-16",
    title: "Node.js Env Variables",
    description: "Read environment variables.",
    difficulty: "easy",
    category: "Node.js",
    constraints: "process.env",
    inputFormat: "Env var",
    outputFormat: "Config value",
    sampleInput: "PORT",
    sampleOutput: "3000",
    testCases: [
      { input: "PORT", expectedOutput: "3000", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-node-17",
    title: "Node.js File Write",
    description: "Write data to file.",
    difficulty: "easy",
    category: "Node.js",
    constraints: "fs.writeFile",
    inputFormat: "Path and data",
    outputFormat: "Written",
    sampleInput: "out.txt Hello",
    sampleOutput: "written",
    testCases: [
      { input: "out.txt Hello", expectedOutput: "written", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-node-18",
    title: "Node.js URL Parsing",
    description: "Parse URL strings.",
    difficulty: "easy",
    category: "Node.js",
    constraints: "URL class",
    inputFormat: "URL string",
    outputFormat: "Parsed URL",
    sampleInput: "https://example.com/path",
    sampleOutput: "example.com",
    testCases: [
      { input: "https://example.com/path", expectedOutput: "example.com", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-node-19",
    title: "Node.js Crypto Hash",
    description: "Generate SHA-256 hash.",
    difficulty: "medium",
    category: "Node.js",
    constraints: "crypto module",
    inputFormat: "String",
    outputFormat: "Hex hash",
    sampleInput: "hello",
    sampleOutput: "2cf24dba",
    testCases: [
      { input: "hello", expectedOutput: "2cf24dba", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-node-20",
    title: "Node.js Buffer Operations",
    description: "Work with Buffers.",
    difficulty: "medium",
    category: "Node.js",
    constraints: "Buffer class",
    inputFormat: "String",
    outputFormat: "Buffer ops",
    sampleInput: "Hello",
    sampleOutput: "hex",
    testCases: [
      { input: "Hello", expectedOutput: "hex", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },

  {
    _id: "local-express-5",
    title: "Express Basic Setup",
    description: "Set up basic Express server.",
    difficulty: "easy",
    category: "Express.js",
    constraints: "express()",
    inputFormat: "None",
    outputFormat: "Running server",
    sampleInput: "None",
    sampleOutput: "Server running",
    testCases: [
      { input: "None", expectedOutput: "Server running", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "const express = require(\"express\");\nconst app = express();\n// TODO: Implement" }
    ]
  },
  {
    _id: "local-express-6",
    title: "Express Router",
    description: "Organize routes with Router.",
    difficulty: "easy",
    category: "Express.js",
    constraints: "express.Router()",
    inputFormat: "None",
    outputFormat: "Router routes",
    sampleInput: "None",
    sampleOutput: "Routes defined",
    testCases: [
      { input: "None", expectedOutput: "Routes defined", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "const express = require(\"express\");\nconst app = express();\n// TODO: Implement" }
    ]
  },
  {
    _id: "local-express-7",
    title: "Express Static Files",
    description: "Serve static files.",
    difficulty: "easy",
    category: "Express.js",
    constraints: "express.static()",
    inputFormat: "None",
    outputFormat: "Static served",
    sampleInput: "None",
    sampleOutput: "Files served",
    testCases: [
      { input: "None", expectedOutput: "Files served", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "const express = require(\"express\");\nconst app = express();\n// TODO: Implement" }
    ]
  },
  {
    _id: "local-express-8",
    title: "Express Body Parser",
    description: "Parse JSON request bodies.",
    difficulty: "easy",
    category: "Express.js",
    constraints: "express.json()",
    inputFormat: "None",
    outputFormat: "Parsed body",
    sampleInput: "None",
    sampleOutput: "Body parsed",
    testCases: [
      { input: "None", expectedOutput: "Body parsed", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "const express = require(\"express\");\nconst app = express();\n// TODO: Implement" }
    ]
  },
  {
    _id: "local-express-9",
    title: "Express Status Codes",
    description: "Send HTTP status codes.",
    difficulty: "easy",
    category: "Express.js",
    constraints: "res.status()",
    inputFormat: "None",
    outputFormat: "Status response",
    sampleInput: "None",
    sampleOutput: "Status sent",
    testCases: [
      { input: "None", expectedOutput: "Status sent", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "const express = require(\"express\");\nconst app = express();\n// TODO: Implement" }
    ]
  },
  {
    _id: "local-express-10",
    title: "Express Cookie Parser",
    description: "Parse and set cookies.",
    difficulty: "medium",
    category: "Express.js",
    constraints: "cookie-parser",
    inputFormat: "None",
    outputFormat: "Cookie operations",
    sampleInput: "None",
    sampleOutput: "Cookies handled",
    testCases: [
      { input: "None", expectedOutput: "Cookies handled", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "const express = require(\"express\");\nconst app = express();\n// TODO: Implement" }
    ]
  },
  {
    _id: "local-express-11",
    title: "Express Session",
    description: "Manage user sessions.",
    difficulty: "medium",
    category: "Express.js",
    constraints: "express-session",
    inputFormat: "None",
    outputFormat: "Session stored",
    sampleInput: "None",
    sampleOutput: "Session set",
    testCases: [
      { input: "None", expectedOutput: "Session set", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "const express = require(\"express\");\nconst app = express();\n// TODO: Implement" }
    ]
  },
  {
    _id: "local-express-12",
    title: "Express CORS",
    description: "Enable CORS middleware.",
    difficulty: "easy",
    category: "Express.js",
    constraints: "cors middleware",
    inputFormat: "None",
    outputFormat: "CORS enabled",
    sampleInput: "None",
    sampleOutput: "CORS active",
    testCases: [
      { input: "None", expectedOutput: "CORS active", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "const express = require(\"express\");\nconst app = express();\n// TODO: Implement" }
    ]
  },
  {
    _id: "local-express-13",
    title: "Express Template Engine",
    description: "Set up EJS template engine.",
    difficulty: "easy",
    category: "Express.js",
    constraints: "app.set view engine",
    inputFormat: "None",
    outputFormat: "Template rendered",
    sampleInput: "None",
    sampleOutput: "Template set",
    testCases: [
      { input: "None", expectedOutput: "Template set", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "const express = require(\"express\");\nconst app = express();\n// TODO: Implement" }
    ]
  },
  {
    _id: "local-express-14",
    title: "Express File Upload",
    description: "Handle file uploads with multer.",
    difficulty: "medium",
    category: "Express.js",
    constraints: "multer middleware",
    inputFormat: "None",
    outputFormat: "Upload handler",
    sampleInput: "None",
    sampleOutput: "Upload set",
    testCases: [
      { input: "None", expectedOutput: "Upload set", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "const express = require(\"express\");\nconst app = express();\n// TODO: Implement" }
    ]
  },
  {
    _id: "local-express-15",
    title: "Express Rate Limiting",
    description: "Limit request rates.",
    difficulty: "medium",
    category: "Express.js",
    constraints: "express-rate-limit",
    inputFormat: "None",
    outputFormat: "Rate limiter",
    sampleInput: "None",
    sampleOutput: "Limiter active",
    testCases: [
      { input: "None", expectedOutput: "Limiter active", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "const express = require(\"express\");\nconst app = express();\n// TODO: Implement" }
    ]
  },
  {
    _id: "local-express-16",
    title: "Express Error Handling",
    description: "Centralized error handling.",
    difficulty: "medium",
    category: "Express.js",
    constraints: "Error middleware",
    inputFormat: "None",
    outputFormat: "Error handler",
    sampleInput: "None",
    sampleOutput: "Handler defined",
    testCases: [
      { input: "None", expectedOutput: "Handler defined", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "const express = require(\"express\");\nconst app = express();\n// TODO: Implement" }
    ]
  },
  {
    _id: "local-express-17",
    title: "Express JSON Response",
    description: "Send JSON responses.",
    difficulty: "easy",
    category: "Express.js",
    constraints: "res.json()",
    inputFormat: "None",
    outputFormat: "JSON response",
    sampleInput: "None",
    sampleOutput: "JSON sent",
    testCases: [
      { input: "None", expectedOutput: "JSON sent", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "const express = require(\"express\");\nconst app = express();\n// TODO: Implement" }
    ]
  },
  {
    _id: "local-express-18",
    title: "Express Redirect",
    description: "Redirect requests.",
    difficulty: "easy",
    category: "Express.js",
    constraints: "res.redirect()",
    inputFormat: "None",
    outputFormat: "Redirect performed",
    sampleInput: "None",
    sampleOutput: "Redirect works",
    testCases: [
      { input: "None", expectedOutput: "Redirect works", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "const express = require(\"express\");\nconst app = express();\n// TODO: Implement" }
    ]
  },
  {
    _id: "local-express-19",
    title: "Express Request Headers",
    description: "Access request headers.",
    difficulty: "easy",
    category: "Express.js",
    constraints: "req.headers",
    inputFormat: "None",
    outputFormat: "Headers accessed",
    sampleInput: "None",
    sampleOutput: "Headers shown",
    testCases: [
      { input: "None", expectedOutput: "Headers shown", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "const express = require(\"express\");\nconst app = express();\n// TODO: Implement" }
    ]
  },
  {
    _id: "local-express-20",
    title: "Express Chain Routes",
    description: "Chain route handlers.",
    difficulty: "easy",
    category: "Express.js",
    constraints: "app.route()",
    inputFormat: "None",
    outputFormat: "Chained routes",
    sampleInput: "None",
    sampleOutput: "Routes chained",
    testCases: [
      { input: "None", expectedOutput: "Routes chained", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "const express = require(\"express\");\nconst app = express();\n// TODO: Implement" }
    ]
  },

  {
    _id: "local-mongo-5",
    title: "MongoDB Insert Document",
    description: "Insert a single document into a collection.",
    difficulty: "easy",
    category: "MongoDB",
    constraints: "insertOne()",
    inputFormat: "None",
    outputFormat: "Document inserted",
    sampleInput: "None",
    sampleOutput: "Insert done",
    testCases: [
      { input: "None", expectedOutput: "Insert done", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// MongoDB query\n// db.collection.method()" }
    ]
  },
  {
    _id: "local-mongo-6",
    title: "MongoDB Find Documents",
    description: "Find documents matching a query.",
    difficulty: "easy",
    category: "MongoDB",
    constraints: "find()",
    inputFormat: "None",
    outputFormat: "Matching documents",
    sampleInput: "None",
    sampleOutput: "Documents found",
    testCases: [
      { input: "None", expectedOutput: "Documents found", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// MongoDB query\n// db.collection.method()" }
    ]
  },
  {
    _id: "local-mongo-7",
    title: "MongoDB Update Document",
    description: "Update a single document.",
    difficulty: "easy",
    category: "MongoDB",
    constraints: "updateOne()",
    inputFormat: "None",
    outputFormat: "Document updated",
    sampleInput: "None",
    sampleOutput: "Update done",
    testCases: [
      { input: "None", expectedOutput: "Update done", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// MongoDB query\n// db.collection.method()" }
    ]
  },
  {
    _id: "local-mongo-8",
    title: "MongoDB Delete Document",
    description: "Delete a document from collection.",
    difficulty: "easy",
    category: "MongoDB",
    constraints: "deleteOne()",
    inputFormat: "None",
    outputFormat: "Document deleted",
    sampleInput: "None",
    sampleOutput: "Delete done",
    testCases: [
      { input: "None", expectedOutput: "Delete done", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// MongoDB query\n// db.collection.method()" }
    ]
  },
  {
    _id: "local-mongo-9",
    title: "MongoDB Sort Results",
    description: "Sort query results by field.",
    difficulty: "easy",
    category: "MongoDB",
    constraints: "sort()",
    inputFormat: "None",
    outputFormat: "Sorted results",
    sampleInput: "None",
    sampleOutput: "Sorted",
    testCases: [
      { input: "None", expectedOutput: "Sorted", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// MongoDB query\n// db.collection.method()" }
    ]
  },
  {
    _id: "local-mongo-10",
    title: "MongoDB Limit Results",
    description: "Limit number of returned documents.",
    difficulty: "easy",
    category: "MongoDB",
    constraints: "limit()",
    inputFormat: "None",
    outputFormat: "Limited results",
    sampleInput: "None",
    sampleOutput: "Limited",
    testCases: [
      { input: "None", expectedOutput: "Limited", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// MongoDB query\n// db.collection.method()" }
    ]
  },
  {
    _id: "local-mongo-11",
    title: "MongoDB Projection",
    description: "Select specific fields in results.",
    difficulty: "easy",
    category: "MongoDB",
    constraints: "projection",
    inputFormat: "None",
    outputFormat: "Projected fields",
    sampleInput: "None",
    sampleOutput: "Projected",
    testCases: [
      { input: "None", expectedOutput: "Projected", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// MongoDB query\n// db.collection.method()" }
    ]
  },
  {
    _id: "local-mongo-12",
    title: "MongoDB Nested Documents",
    description: "Query nested document fields.",
    difficulty: "medium",
    category: "MongoDB",
    constraints: "Dot notation",
    inputFormat: "None",
    outputFormat: "Nested query",
    sampleInput: "None",
    sampleOutput: "Found",
    testCases: [
      { input: "None", expectedOutput: "Found", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// MongoDB query\n// db.collection.method()" }
    ]
  },
  {
    _id: "local-mongo-13",
    title: "MongoDB Array Query",
    description: "Query array fields in documents.",
    difficulty: "medium",
    category: "MongoDB",
    constraints: "$in, $all",
    inputFormat: "None",
    outputFormat: "Array matched",
    sampleInput: "None",
    sampleOutput: "Matched",
    testCases: [
      { input: "None", expectedOutput: "Matched", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// MongoDB query\n// db.collection.method()" }
    ]
  },
  {
    _id: "local-mongo-14",
    title: "MongoDB Count Documents",
    description: "Count documents matching criteria.",
    difficulty: "easy",
    category: "MongoDB",
    constraints: "countDocuments()",
    inputFormat: "None",
    outputFormat: "Count result",
    sampleInput: "None",
    sampleOutput: "Counted",
    testCases: [
      { input: "None", expectedOutput: "Counted", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// MongoDB query\n// db.collection.method()" }
    ]
  },
  {
    _id: "local-mongo-15",
    title: "MongoDB Aggregation Pipeline",
    description: "Use aggregation for data processing.",
    difficulty: "medium",
    category: "MongoDB",
    constraints: "aggregate()",
    inputFormat: "None",
    outputFormat: "Aggregated result",
    sampleInput: "None",
    sampleOutput: "Aggregated",
    testCases: [
      { input: "None", expectedOutput: "Aggregated", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// MongoDB query\n// db.collection.method()" }
    ]
  },
  {
    _id: "local-mongo-16",
    title: "MongoDB Group Documents",
    description: "Group documents by a field.",
    difficulty: "medium",
    category: "MongoDB",
    constraints: "$group stage",
    inputFormat: "None",
    outputFormat: "Grouped result",
    sampleInput: "None",
    sampleOutput: "Grouped",
    testCases: [
      { input: "None", expectedOutput: "Grouped", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// MongoDB query\n// db.collection.method()" }
    ]
  },
  {
    _id: "local-mongo-17",
    title: "MongoDB Index Creation",
    description: "Create an index on a field.",
    difficulty: "easy",
    category: "MongoDB",
    constraints: "createIndex()",
    inputFormat: "None",
    outputFormat: "Index created",
    sampleInput: "None",
    sampleOutput: "Indexed",
    testCases: [
      { input: "None", expectedOutput: "Indexed", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// MongoDB query\n// db.collection.method()" }
    ]
  },
  {
    _id: "local-mongo-18",
    title: "MongoDB Text Search",
    description: "Perform text search on documents.",
    difficulty: "medium",
    category: "MongoDB",
    constraints: "$text search",
    inputFormat: "None",
    outputFormat: "Search results",
    sampleInput: "None",
    sampleOutput: "Found",
    testCases: [
      { input: "None", expectedOutput: "Found", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// MongoDB query\n// db.collection.method()" }
    ]
  },
  {
    _id: "local-mongo-19",
    title: "MongoDB $lookup Join",
    description: "Join two collections with $lookup.",
    difficulty: "hard",
    category: "MongoDB",
    constraints: "$lookup stage",
    inputFormat: "None",
    outputFormat: "Joined result",
    sampleInput: "None",
    sampleOutput: "Joined",
    testCases: [
      { input: "None", expectedOutput: "Joined", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// MongoDB query\n// db.collection.method()" }
    ]
  },
  {
    _id: "local-mongo-20",
    title: "MongoDB Bulk Operations",
    description: "Perform bulk insert operations.",
    difficulty: "medium",
    category: "MongoDB",
    constraints: "bulkWrite()",
    inputFormat: "None",
    outputFormat: "Bulk done",
    sampleInput: "None",
    sampleOutput: "Completed",
    testCases: [
      { input: "None", expectedOutput: "Completed", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// MongoDB query\n// db.collection.method()" }
    ]
  },

  {
    _id: "local-sql-9",
    title: "SQL Select All",
    description: "Select all records from a table.",
    difficulty: "easy",
    category: "SQL",
    constraints: "SELECT * FROM",
    inputFormat: "None",
    outputFormat: "All records",
    sampleInput: "None",
    sampleOutput: "All rows",
    testCases: [
      { input: "None", expectedOutput: "All rows", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- SQL query" }
    ]
  },
  {
    _id: "local-sql-10",
    title: "SQL Where Clause",
    description: "Filter records with WHERE.",
    difficulty: "easy",
    category: "SQL",
    constraints: "WHERE condition",
    inputFormat: "None",
    outputFormat: "Filtered records",
    sampleInput: "None",
    sampleOutput: "Filtered rows",
    testCases: [
      { input: "None", expectedOutput: "Filtered rows", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- SQL query" }
    ]
  },
  {
    _id: "local-sql-11",
    title: "SQL Order By",
    description: "Sort results by column.",
    difficulty: "easy",
    category: "SQL",
    constraints: "ORDER BY column",
    inputFormat: "None",
    outputFormat: "Sorted results",
    sampleInput: "None",
    sampleOutput: "Sorted rows",
    testCases: [
      { input: "None", expectedOutput: "Sorted rows", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- SQL query" }
    ]
  },
  {
    _id: "local-sql-12",
    title: "SQL Insert Values",
    description: "Insert new records into table.",
    difficulty: "easy",
    category: "SQL",
    constraints: "INSERT INTO",
    inputFormat: "None",
    outputFormat: "Row inserted",
    sampleInput: "None",
    sampleOutput: "Inserted",
    testCases: [
      { input: "None", expectedOutput: "Inserted", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- SQL query" }
    ]
  },
  {
    _id: "local-sql-13",
    title: "SQL Update Records",
    description: "Update existing records.",
    difficulty: "easy",
    category: "SQL",
    constraints: "UPDATE SET WHERE",
    inputFormat: "None",
    outputFormat: "Row updated",
    sampleInput: "None",
    sampleOutput: "Updated",
    testCases: [
      { input: "None", expectedOutput: "Updated", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- SQL query" }
    ]
  },
  {
    _id: "local-sql-14",
    title: "SQL Delete Records",
    description: "Delete records from table.",
    difficulty: "easy",
    category: "SQL",
    constraints: "DELETE FROM WHERE",
    inputFormat: "None",
    outputFormat: "Row deleted",
    sampleInput: "None",
    sampleOutput: "Deleted",
    testCases: [
      { input: "None", expectedOutput: "Deleted", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- SQL query" }
    ]
  },
  {
    _id: "local-sql-15",
    title: "SQL Count Aggregate",
    description: "Count rows in a table.",
    difficulty: "easy",
    category: "SQL",
    constraints: "COUNT(*)",
    inputFormat: "None",
    outputFormat: "Row count",
    sampleInput: "None",
    sampleOutput: "Counted",
    testCases: [
      { input: "None", expectedOutput: "Counted", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- SQL query" }
    ]
  },
  {
    _id: "local-sql-16",
    title: "SQL Group By",
    description: "Group results by a column.",
    difficulty: "medium",
    category: "SQL",
    constraints: "GROUP BY",
    inputFormat: "None",
    outputFormat: "Grouped results",
    sampleInput: "None",
    sampleOutput: "Grouped",
    testCases: [
      { input: "None", expectedOutput: "Grouped", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- SQL query" }
    ]
  },
  {
    _id: "local-sql-17",
    title: "SQL Having Clause",
    description: "Filter groups with HAVING.",
    difficulty: "medium",
    category: "SQL",
    constraints: "HAVING condition",
    inputFormat: "None",
    outputFormat: "Filtered groups",
    sampleInput: "None",
    sampleOutput: "Filtered",
    testCases: [
      { input: "None", expectedOutput: "Filtered", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- SQL query" }
    ]
  },
  {
    _id: "local-sql-18",
    title: "SQL Join Tables",
    description: "Join two tables with INNER JOIN.",
    difficulty: "medium",
    category: "SQL",
    constraints: "INNER JOIN",
    inputFormat: "None",
    outputFormat: "Joined results",
    sampleInput: "None",
    sampleOutput: "Joined",
    testCases: [
      { input: "None", expectedOutput: "Joined", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- SQL query" }
    ]
  },
  {
    _id: "local-sql-19",
    title: "SQL Left Join",
    description: "Left join two tables.",
    difficulty: "medium",
    category: "SQL",
    constraints: "LEFT JOIN",
    inputFormat: "None",
    outputFormat: "Left joined",
    sampleInput: "None",
    sampleOutput: "Left joined",
    testCases: [
      { input: "None", expectedOutput: "Left joined", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- SQL query" }
    ]
  },
  {
    _id: "local-sql-20",
    title: "SQL Subquery",
    description: "Use subquery in SELECT.",
    difficulty: "medium",
    category: "SQL",
    constraints: "Subquery",
    inputFormat: "None",
    outputFormat: "Subquery result",
    sampleInput: "None",
    sampleOutput: "Found",
    testCases: [
      { input: "None", expectedOutput: "Found", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- SQL query" }
    ]
  },

  {
    _id: "local-dbms-4",
    title: "Normalization Basics",
    description: "Explain first normal form (1NF).",
    difficulty: "easy",
    category: "DBMS",
    constraints: "1NF definition",
    inputFormat: "None",
    outputFormat: "1NF explanation",
    sampleInput: "None",
    sampleOutput: "1NF defined",
    testCases: [
      { input: "None", expectedOutput: "1NF defined", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- Database concept explanation" }
    ]
  },
  {
    _id: "local-dbms-5",
    title: "SQL vs NoSQL",
    description: "Compare SQL and NoSQL databases.",
    difficulty: "easy",
    category: "DBMS",
    constraints: "Database types",
    inputFormat: "None",
    outputFormat: "Comparison",
    sampleInput: "None",
    sampleOutput: "Compared",
    testCases: [
      { input: "None", expectedOutput: "Compared", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- Database concept explanation" }
    ]
  },
  {
    _id: "local-dbms-6",
    title: "ACID Properties",
    description: "Explain ACID properties in databases.",
    difficulty: "easy",
    category: "DBMS",
    constraints: "ACID acronym",
    inputFormat: "None",
    outputFormat: "ACID explanation",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- Database concept explanation" }
    ]
  },
  {
    _id: "local-dbms-7",
    title: "Primary Key",
    description: "Explain primary key concept.",
    difficulty: "easy",
    category: "DBMS",
    constraints: "Primary key definition",
    inputFormat: "None",
    outputFormat: "PK explanation",
    sampleInput: "None",
    sampleOutput: "Defined",
    testCases: [
      { input: "None", expectedOutput: "Defined", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- Database concept explanation" }
    ]
  },
  {
    _id: "local-dbms-8",
    title: "Foreign Key",
    description: "Explain foreign key relationships.",
    difficulty: "easy",
    category: "DBMS",
    constraints: "FK definition",
    inputFormat: "None",
    outputFormat: "FK explanation",
    sampleInput: "None",
    sampleOutput: "Defined",
    testCases: [
      { input: "None", expectedOutput: "Defined", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- Database concept explanation" }
    ]
  },
  {
    _id: "local-dbms-9",
    title: "Indexing Basics",
    description: "Explain database indexing.",
    difficulty: "easy",
    category: "DBMS",
    constraints: "Index concept",
    inputFormat: "None",
    outputFormat: "Index explanation",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- Database concept explanation" }
    ]
  },
  {
    _id: "local-dbms-10",
    title: "JOIN Types",
    description: "Explain different SQL JOIN types.",
    difficulty: "medium",
    category: "DBMS",
    constraints: "JOIN types",
    inputFormat: "None",
    outputFormat: "JOIN explanation",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- Database concept explanation" }
    ]
  },
  {
    _id: "local-dbms-11",
    title: "Transaction Isolation",
    description: "Explain transaction isolation levels.",
    difficulty: "medium",
    category: "DBMS",
    constraints: "Isolation levels",
    inputFormat: "None",
    outputFormat: "Levels explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- Database concept explanation" }
    ]
  },
  {
    _id: "local-dbms-12",
    title: "Deadlock Prevention",
    description: "Explain deadlock in databases.",
    difficulty: "medium",
    category: "DBMS",
    constraints: "Deadlock concept",
    inputFormat: "None",
    outputFormat: "Deadlock explanation",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- Database concept explanation" }
    ]
  },
  {
    _id: "local-dbms-13",
    title: "ER Diagram Basics",
    description: "Draw entity-relationship diagram concepts.",
    difficulty: "medium",
    category: "DBMS",
    constraints: "ER modeling",
    inputFormat: "None",
    outputFormat: "ER diagram",
    sampleInput: "None",
    sampleOutput: "Diagram drawn",
    testCases: [
      { input: "None", expectedOutput: "Diagram drawn", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- Database concept explanation" }
    ]
  },
  {
    _id: "local-dbms-14",
    title: "Query Optimization",
    description: "Optimize slow SQL queries.",
    difficulty: "hard",
    category: "DBMS",
    constraints: "EXPLAIN, indexes",
    inputFormat: "None",
    outputFormat: "Optimization steps",
    sampleInput: "None",
    sampleOutput: "Optimized",
    testCases: [
      { input: "None", expectedOutput: "Optimized", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- Database concept explanation" }
    ]
  },
  {
    _id: "local-dbms-15",
    title: "Stored Procedures",
    description: "Explain stored procedure concept.",
    difficulty: "medium",
    category: "DBMS",
    constraints: "Stored procedure",
    inputFormat: "None",
    outputFormat: "Procedure explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- Database concept explanation" }
    ]
  },
  {
    _id: "local-dbms-16",
    title: "Triggers in DBMS",
    description: "Explain database triggers.",
    difficulty: "medium",
    category: "DBMS",
    constraints: "Trigger concept",
    inputFormat: "None",
    outputFormat: "Trigger explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- Database concept explanation" }
    ]
  },
  {
    _id: "local-dbms-17",
    title: "Views in SQL",
    description: "Explain database views.",
    difficulty: "easy",
    category: "DBMS",
    constraints: "CREATE VIEW",
    inputFormat: "None",
    outputFormat: "View explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- Database concept explanation" }
    ]
  },
  {
    _id: "local-dbms-18",
    title: "Denormalization",
    description: "Explain when to denormalize.",
    difficulty: "medium",
    category: "DBMS",
    constraints: "Denormalization trade-offs",
    inputFormat: "None",
    outputFormat: "Explanation",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- Database concept explanation" }
    ]
  },
  {
    _id: "local-dbms-19",
    title: "Replication",
    description: "Explain database replication.",
    difficulty: "hard",
    category: "DBMS",
    constraints: "Replication types",
    inputFormat: "None",
    outputFormat: "Replication explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- Database concept explanation" }
    ]
  },
  {
    _id: "local-dbms-20",
    title: "Partitioning",
    description: "Explain table partitioning.",
    difficulty: "hard",
    category: "DBMS",
    constraints: "Partitioning strategies",
    inputFormat: "None",
    outputFormat: "Partitioning explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "-- Database concept explanation" }
    ]
  },

  {
    _id: "local-os-5",
    title: "Process vs Thread",
    description: "Explain the difference between processes and threads.",
    difficulty: "easy",
    category: "Operating System",
    constraints: "Process and thread concepts",
    inputFormat: "None",
    outputFormat: "Comparison",
    sampleInput: "None",
    sampleOutput: "Compared",
    testCases: [
      { input: "None", expectedOutput: "Compared", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Operating system concept" }
    ]
  },
  {
    _id: "local-os-6",
    title: "CPU Scheduling",
    description: "Explain FCFS, SJF, and Round Robin scheduling.",
    difficulty: "medium",
    category: "Operating System",
    constraints: "Scheduling algorithms",
    inputFormat: "None",
    outputFormat: "Algorithm comparison",
    sampleInput: "None",
    sampleOutput: "Compared",
    testCases: [
      { input: "None", expectedOutput: "Compared", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Operating system concept" }
    ]
  },
  {
    _id: "local-os-7",
    title: "Deadlock Conditions",
    description: "Explain the four conditions for deadlock.",
    difficulty: "medium",
    category: "Operating System",
    constraints: "Deadlock conditions",
    inputFormat: "None",
    outputFormat: "Conditions listed",
    sampleInput: "None",
    sampleOutput: "Listed",
    testCases: [
      { input: "None", expectedOutput: "Listed", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Operating system concept" }
    ]
  },
  {
    _id: "local-os-8",
    title: "Virtual Memory",
    description: "Explain virtual memory concept.",
    difficulty: "easy",
    category: "Operating System",
    constraints: "Virtual memory",
    inputFormat: "None",
    outputFormat: "VM explanation",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Operating system concept" }
    ]
  },
  {
    _id: "local-os-9",
    title: "Paging vs Segmentation",
    description: "Compare paging and segmentation.",
    difficulty: "medium",
    category: "Operating System",
    constraints: "Memory management",
    inputFormat: "None",
    outputFormat: "Comparison",
    sampleInput: "None",
    sampleOutput: "Compared",
    testCases: [
      { input: "None", expectedOutput: "Compared", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Operating system concept" }
    ]
  },
  {
    _id: "local-os-10",
    title: "Semaphore Usage",
    description: "Explain semaphore for synchronization.",
    difficulty: "medium",
    category: "Operating System",
    constraints: "Semaphore concept",
    inputFormat: "None",
    outputFormat: "Semaphore explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Operating system concept" }
    ]
  },

  {
    _id: "local-oop-8",
    title: "Encapsulation",
    description: "Explain encapsulation in OOP.",
    difficulty: "easy",
    category: "OOP",
    constraints: "Encapsulation concept",
    inputFormat: "None",
    outputFormat: "Explanation",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# OOP concept" }
    ]
  },
  {
    _id: "local-oop-9",
    title: "Inheritance Types",
    description: "Explain single, multiple, multilevel inheritance.",
    difficulty: "medium",
    category: "OOP",
    constraints: "Inheritance types",
    inputFormat: "None",
    outputFormat: "Types explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# OOP concept" }
    ]
  },
  {
    _id: "local-oop-10",
    title: "Polymorphism",
    description: "Explain compile-time vs runtime polymorphism.",
    difficulty: "medium",
    category: "OOP",
    constraints: "Polymorphism types",
    inputFormat: "None",
    outputFormat: "Types compared",
    sampleInput: "None",
    sampleOutput: "Compared",
    testCases: [
      { input: "None", expectedOutput: "Compared", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# OOP concept" }
    ]
  },
  {
    _id: "local-oop-11",
    title: "Abstract Classes",
    description: "Explain abstract classes vs interfaces.",
    difficulty: "medium",
    category: "OOP",
    constraints: "Abstraction",
    inputFormat: "None",
    outputFormat: "Comparison",
    sampleInput: "None",
    sampleOutput: "Compared",
    testCases: [
      { input: "None", expectedOutput: "Compared", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# OOP concept" }
    ]
  },
  {
    _id: "local-oop-12",
    title: "Design Patterns",
    description: "Explain Singleton and Factory patterns.",
    difficulty: "medium",
    category: "OOP",
    constraints: "Design patterns",
    inputFormat: "None",
    outputFormat: "Pattern explanation",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# OOP concept" }
    ]
  },
  {
    _id: "local-oop-13",
    title: "SOLID Principles",
    description: "Explain the SOLID principles.",
    difficulty: "hard",
    category: "OOP",
    constraints: "SOLID acronym",
    inputFormat: "None",
    outputFormat: "Principles explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# OOP concept" }
    ]
  },
  {
    _id: "local-oop-14",
    title: "Composition vs Inheritance",
    description: "Compare composition and inheritance.",
    difficulty: "medium",
    category: "OOP",
    constraints: "OOP relationships",
    inputFormat: "None",
    outputFormat: "Comparison",
    sampleInput: "None",
    sampleOutput: "Compared",
    testCases: [
      { input: "None", expectedOutput: "Compared", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# OOP concept" }
    ]
  },
  {
    _id: "local-oop-15",
    title: "Constructor Overloading",
    description: "Explain constructor overloading.",
    difficulty: "easy",
    category: "OOP",
    constraints: "Constructor concepts",
    inputFormat: "None",
    outputFormat: "Overloading explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# OOP concept" }
    ]
  },
  {
    _id: "local-oop-16",
    title: "Method Overriding",
    description: "Explain method overriding in inheritance.",
    difficulty: "easy",
    category: "OOP",
    constraints: "Method overriding",
    inputFormat: "None",
    outputFormat: "Overriding explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# OOP concept" }
    ]
  },
  {
    _id: "local-oop-17",
    title: "Access Modifiers",
    description: "Explain public, private, protected access.",
    difficulty: "easy",
    category: "OOP",
    constraints: "Access modifiers",
    inputFormat: "None",
    outputFormat: "Modifiers explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# OOP concept" }
    ]
  },
  {
    _id: "local-oop-18",
    title: "Interfaces",
    description: "Explain interface implementation.",
    difficulty: "medium",
    category: "OOP",
    constraints: "Interface concept",
    inputFormat: "None",
    outputFormat: "Interface explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# OOP concept" }
    ]
  },
  {
    _id: "local-oop-19",
    title: "Deep vs Shallow Copy",
    description: "Explain deep and shallow copy in OOP.",
    difficulty: "medium",
    category: "OOP",
    constraints: "Copy types",
    inputFormat: "None",
    outputFormat: "Copy comparison",
    sampleInput: "None",
    sampleOutput: "Compared",
    testCases: [
      { input: "None", expectedOutput: "Compared", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# OOP concept" }
    ]
  },
  {
    _id: "local-oop-20",
    title: "Memory Management",
    description: "Explain OOP memory management.",
    difficulty: "medium",
    category: "OOP",
    constraints: "Memory concepts",
    inputFormat: "None",
    outputFormat: "Memory explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# OOP concept" }
    ]
  },

  {
    _id: "local-fs-4",
    title: "REST API Design",
    description: "Design a RESTful API for a blog.",
    difficulty: "medium",
    category: "Full Stack Development",
    constraints: "REST principles",
    inputFormat: "None",
    outputFormat: "API design",
    sampleInput: "None",
    sampleOutput: "API designed",
    testCases: [
      { input: "None", expectedOutput: "API designed", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// Full stack implementation" }
    ]
  },
  {
    _id: "local-fs-5",
    title: "Authentication Flow",
    description: "Implement JWT authentication flow.",
    difficulty: "medium",
    category: "Full Stack Development",
    constraints: "JWT tokens",
    inputFormat: "None",
    outputFormat: "Auth flow",
    sampleInput: "None",
    sampleOutput: "Flow implemented",
    testCases: [
      { input: "None", expectedOutput: "Flow implemented", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// Full stack implementation" }
    ]
  },
  {
    _id: "local-fs-6",
    title: "Database Schema Design",
    description: "Design schema for e-commerce.",
    difficulty: "medium",
    category: "Full Stack Development",
    constraints: "Database design",
    inputFormat: "None",
    outputFormat: "Schema designed",
    sampleInput: "None",
    sampleOutput: "Schema done",
    testCases: [
      { input: "None", expectedOutput: "Schema done", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// Full stack implementation" }
    ]
  },
  {
    _id: "local-fs-7",
    title: "Frontend State Management",
    description: "Compare Redux and Context API.",
    difficulty: "medium",
    category: "Full Stack Development",
    constraints: "State management",
    inputFormat: "None",
    outputFormat: "Comparison",
    sampleInput: "None",
    sampleOutput: "Compared",
    testCases: [
      { input: "None", expectedOutput: "Compared", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// Full stack implementation" }
    ]
  },
  {
    _id: "local-fs-8",
    title: "WebSocket Chat",
    description: "Implement real-time chat with WebSocket.",
    difficulty: "hard",
    category: "Full Stack Development",
    constraints: "WebSocket API",
    inputFormat: "None",
    outputFormat: "Chat working",
    sampleInput: "None",
    sampleOutput: "Chat done",
    testCases: [
      { input: "None", expectedOutput: "Chat done", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// Full stack implementation" }
    ]
  },
  {
    _id: "local-fs-9",
    title: "File Upload System",
    description: "Implement file upload with validation.",
    difficulty: "medium",
    category: "Full Stack Development",
    constraints: "File handling",
    inputFormat: "None",
    outputFormat: "Upload system",
    sampleInput: "None",
    sampleOutput: "Upload done",
    testCases: [
      { input: "None", expectedOutput: "Upload done", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// Full stack implementation" }
    ]
  },
  {
    _id: "local-fs-10",
    title: "Pagination Implementation",
    description: "Implement API pagination.",
    difficulty: "easy",
    category: "Full Stack Development",
    constraints: "Pagination concepts",
    inputFormat: "None",
    outputFormat: "Paginated API",
    sampleInput: "None",
    sampleOutput: "Pagination done",
    testCases: [
      { input: "None", expectedOutput: "Pagination done", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// Full stack implementation" }
    ]
  },
  {
    _id: "local-fs-11",
    title: "Error Handling Strategy",
    description: "Design error handling across stack.",
    difficulty: "medium",
    category: "Full Stack Development",
    constraints: "Error handling",
    inputFormat: "None",
    outputFormat: "Strategy defined",
    sampleInput: "None",
    sampleOutput: "Strategy done",
    testCases: [
      { input: "None", expectedOutput: "Strategy done", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// Full stack implementation" }
    ]
  },
  {
    _id: "local-fs-12",
    title: "Caching Strategy",
    description: "Implement Redis caching layer.",
    difficulty: "medium",
    category: "Full Stack Development",
    constraints: "Redis caching",
    inputFormat: "None",
    outputFormat: "Cache layer",
    sampleInput: "None",
    sampleOutput: "Cache set",
    testCases: [
      { input: "None", expectedOutput: "Cache set", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// Full stack implementation" }
    ]
  },
  {
    _id: "local-fs-13",
    title: "CI/CD Pipeline",
    description: "Set up continuous deployment pipeline.",
    difficulty: "hard",
    category: "Full Stack Development",
    constraints: "CI/CD tools",
    inputFormat: "None",
    outputFormat: "Pipeline configured",
    sampleInput: "None",
    sampleOutput: "Pipeline done",
    testCases: [
      { input: "None", expectedOutput: "Pipeline done", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// Full stack implementation" }
    ]
  },
  {
    _id: "local-fs-14",
    title: "Environment Configuration",
    description: "Manage environment variables across environments.",
    difficulty: "easy",
    category: "Full Stack Development",
    constraints: "Environment config",
    inputFormat: "None",
    outputFormat: "Config managed",
    sampleInput: "None",
    sampleOutput: "Config done",
    testCases: [
      { input: "None", expectedOutput: "Config done", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// Full stack implementation" }
    ]
  },
  {
    _id: "local-fs-15",
    title: "API Rate Limiting",
    description: "Implement rate limiting for API.",
    difficulty: "medium",
    category: "Full Stack Development",
    constraints: "Rate limiting",
    inputFormat: "None",
    outputFormat: "Limiter set",
    sampleInput: "None",
    sampleOutput: "Limiter active",
    testCases: [
      { input: "None", expectedOutput: "Limiter active", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// Full stack implementation" }
    ]
  },
  {
    _id: "local-fs-16",
    title: "Logging and Monitoring",
    description: "Set up application logging.",
    difficulty: "medium",
    category: "Full Stack Development",
    constraints: "Logging tools",
    inputFormat: "None",
    outputFormat: "Logging set",
    sampleInput: "None",
    sampleOutput: "Logging done",
    testCases: [
      { input: "None", expectedOutput: "Logging done", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// Full stack implementation" }
    ]
  },
  {
    _id: "local-fs-17",
    title: "Mobile Responsive Design",
    description: "Make frontend responsive for mobile.",
    difficulty: "easy",
    category: "Full Stack Development",
    constraints: "Responsive CSS",
    inputFormat: "None",
    outputFormat: "Responsive design",
    sampleInput: "None",
    sampleOutput: "Responsive",
    testCases: [
      { input: "None", expectedOutput: "Responsive", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// Full stack implementation" }
    ]
  },
  {
    _id: "local-fs-18",
    title: "Search Implementation",
    description: "Implement full-text search.",
    difficulty: "medium",
    category: "Full Stack Development",
    constraints: "Search engine",
    inputFormat: "None",
    outputFormat: "Search working",
    sampleInput: "None",
    sampleOutput: "Search done",
    testCases: [
      { input: "None", expectedOutput: "Search done", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// Full stack implementation" }
    ]
  },
  {
    _id: "local-fs-19",
    title: "Email Integration",
    description: "Integrate email sending functionality.",
    difficulty: "medium",
    category: "Full Stack Development",
    constraints: "Email service",
    inputFormat: "None",
    outputFormat: "Email sent",
    sampleInput: "None",
    sampleOutput: "Email set",
    testCases: [
      { input: "None", expectedOutput: "Email set", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// Full stack implementation" }
    ]
  },
  {
    _id: "local-fs-20",
    title: "Deployment Strategy",
    description: "Deploy full stack application.",
    difficulty: "hard",
    category: "Full Stack Development",
    constraints: "Deployment tools",
    inputFormat: "None",
    outputFormat: "App deployed",
    sampleInput: "None",
    sampleOutput: "Deployed",
    testCases: [
      { input: "None", expectedOutput: "Deployed", isHidden: false }
    ],
    starterCode: [
      { language: "javascript", template: "// Full stack implementation" }
    ]
  },

  {
    _id: "local-ds-5",
    title: "Stack Implementation",
    description: "Implement a stack using array.",
    difficulty: "easy",
    category: "Data Structures",
    constraints: "Stack operations",
    inputFormat: "None",
    outputFormat: "Stack class",
    sampleInput: "None",
    sampleOutput: "Stack working",
    testCases: [
      { input: "None", expectedOutput: "Stack working", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Data structure implementation" }
    ]
  },
  {
    _id: "local-ds-6",
    title: "Queue Implementation",
    description: "Implement a queue using array.",
    difficulty: "easy",
    category: "Data Structures",
    constraints: "Queue operations",
    inputFormat: "None",
    outputFormat: "Queue class",
    sampleInput: "None",
    sampleOutput: "Queue working",
    testCases: [
      { input: "None", expectedOutput: "Queue working", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Data structure implementation" }
    ]
  },
  {
    _id: "local-ds-7",
    title: "Linked List Traversal",
    description: "Traverse a singly linked list.",
    difficulty: "easy",
    category: "Data Structures",
    constraints: "Linked list traversal",
    inputFormat: "None",
    outputFormat: "Traversal output",
    sampleInput: "None",
    sampleOutput: "Traversed",
    testCases: [
      { input: "None", expectedOutput: "Traversed", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Data structure implementation" }
    ]
  },
  {
    _id: "local-ds-8",
    title: "Binary Tree Inorder",
    description: "Perform inorder traversal of binary tree.",
    difficulty: "medium",
    category: "Data Structures",
    constraints: "Tree traversal",
    inputFormat: "None",
    outputFormat: "Inorder output",
    sampleInput: "None",
    sampleOutput: "Traversed",
    testCases: [
      { input: "None", expectedOutput: "Traversed", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Data structure implementation" }
    ]
  },
  {
    _id: "local-ds-9",
    title: "BST Search",
    description: "Search in a binary search tree.",
    difficulty: "easy",
    category: "Data Structures",
    constraints: "BST search",
    inputFormat: "None",
    outputFormat: "Search result",
    sampleInput: "None",
    sampleOutput: "Found",
    testCases: [
      { input: "None", expectedOutput: "Found", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Data structure implementation" }
    ]
  },
  {
    _id: "local-ds-10",
    title: "Hash Table Implementation",
    description: "Implement basic hash table.",
    difficulty: "medium",
    category: "Data Structures",
    constraints: "Hash table ops",
    inputFormat: "None",
    outputFormat: "Hash table",
    sampleInput: "None",
    sampleOutput: "Working",
    testCases: [
      { input: "None", expectedOutput: "Working", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Data structure implementation" }
    ]
  },
  {
    _id: "local-ds-11",
    title: "Heap Operations",
    description: "Implement min-heap insert and extract.",
    difficulty: "medium",
    category: "Data Structures",
    constraints: "Heap operations",
    inputFormat: "None",
    outputFormat: "Heap working",
    sampleInput: "None",
    sampleOutput: "Heap done",
    testCases: [
      { input: "None", expectedOutput: "Heap done", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Data structure implementation" }
    ]
  },
  {
    _id: "local-ds-12",
    title: "Graph BFS",
    description: "Implement breadth-first search.",
    difficulty: "medium",
    category: "Data Structures",
    constraints: "Graph BFS",
    inputFormat: "None",
    outputFormat: "BFS traversal",
    sampleInput: "None",
    sampleOutput: "Traversed",
    testCases: [
      { input: "None", expectedOutput: "Traversed", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Data structure implementation" }
    ]
  },
  {
    _id: "local-ds-13",
    title: "Graph DFS",
    description: "Implement depth-first search.",
    difficulty: "medium",
    category: "Data Structures",
    constraints: "Graph DFS",
    inputFormat: "None",
    outputFormat: "DFS traversal",
    sampleInput: "None",
    sampleOutput: "Traversed",
    testCases: [
      { input: "None", expectedOutput: "Traversed", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Data structure implementation" }
    ]
  },
  {
    _id: "local-ds-14",
    title: "Trie Implementation",
    description: "Implement a trie data structure.",
    difficulty: "hard",
    category: "Data Structures",
    constraints: "Trie operations",
    inputFormat: "None",
    outputFormat: "Trie working",
    sampleInput: "None",
    sampleOutput: "Trie done",
    testCases: [
      { input: "None", expectedOutput: "Trie done", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Data structure implementation" }
    ]
  },
  {
    _id: "local-ds-15",
    title: "AVL Tree",
    description: "Explain AVL tree balancing.",
    difficulty: "hard",
    category: "Data Structures",
    constraints: "AVL rotation",
    inputFormat: "None",
    outputFormat: "Balanced tree",
    sampleInput: "None",
    sampleOutput: "Balanced",
    testCases: [
      { input: "None", expectedOutput: "Balanced", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Data structure implementation" }
    ]
  },
  {
    _id: "local-ds-16",
    title: "Stack Queue Problem",
    description: "Implement queue using two stacks.",
    difficulty: "medium",
    category: "Data Structures",
    constraints: "Queue from stacks",
    inputFormat: "None",
    outputFormat: "Queue working",
    sampleInput: "None",
    sampleOutput: "Working",
    testCases: [
      { input: "None", expectedOutput: "Working", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Data structure implementation" }
    ]
  },
  {
    _id: "local-ds-17",
    title: "Circular Buffer",
    description: "Implement circular buffer/ring buffer.",
    difficulty: "medium",
    category: "Data Structures",
    constraints: "Circular buffer",
    inputFormat: "None",
    outputFormat: "Buffer working",
    sampleInput: "None",
    sampleOutput: "Working",
    testCases: [
      { input: "None", expectedOutput: "Working", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Data structure implementation" }
    ]
  },
  {
    _id: "local-ds-18",
    title: "Doubly Linked List",
    description: "Implement doubly linked list.",
    difficulty: "medium",
    category: "Data Structures",
    constraints: "DLL operations",
    inputFormat: "None",
    outputFormat: "DLL working",
    sampleInput: "None",
    sampleOutput: "Working",
    testCases: [
      { input: "None", expectedOutput: "Working", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Data structure implementation" }
    ]
  },
  {
    _id: "local-ds-19",
    title: "Priority Queue",
    description: "Implement priority queue using heap.",
    difficulty: "medium",
    category: "Data Structures",
    constraints: "Priority queue",
    inputFormat: "None",
    outputFormat: "PQ working",
    sampleInput: "None",
    sampleOutput: "Working",
    testCases: [
      { input: "None", expectedOutput: "Working", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Data structure implementation" }
    ]
  },
  {
    _id: "local-ds-20",
    title: "Disjoint Set",
    description: "Implement Union-Find data structure.",
    difficulty: "hard",
    category: "Data Structures",
    constraints: "Union-Find",
    inputFormat: "None",
    outputFormat: "DS working",
    sampleInput: "None",
    sampleOutput: "Working",
    testCases: [
      { input: "None", expectedOutput: "Working", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Data structure implementation" }
    ]
  },

  {
    _id: "local-alg-9",
    title: "Binary Search Algorithm",
    description: "Implement binary search.",
    difficulty: "easy",
    category: "Algorithms",
    constraints: "Sorted array",
    inputFormat: "None",
    outputFormat: "Search index",
    sampleInput: "None",
    sampleOutput: "Found",
    testCases: [
      { input: "None", expectedOutput: "Found", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Algorithm implementation" }
    ]
  },
  {
    _id: "local-alg-10",
    title: "Merge Sort",
    description: "Implement merge sort.",
    difficulty: "medium",
    category: "Algorithms",
    constraints: "Unsorted array",
    inputFormat: "None",
    outputFormat: "Sorted array",
    sampleInput: "None",
    sampleOutput: "Sorted",
    testCases: [
      { input: "None", expectedOutput: "Sorted", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Algorithm implementation" }
    ]
  },
  {
    _id: "local-alg-11",
    title: "Quick Sort",
    description: "Implement quick sort.",
    difficulty: "medium",
    category: "Algorithms",
    constraints: "Unsorted array",
    inputFormat: "None",
    outputFormat: "Sorted array",
    sampleInput: "None",
    sampleOutput: "Sorted",
    testCases: [
      { input: "None", expectedOutput: "Sorted", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Algorithm implementation" }
    ]
  },
  {
    _id: "local-alg-12",
    title: "BFS Algorithm",
    description: "Implement breadth-first search on graph.",
    difficulty: "medium",
    category: "Algorithms",
    constraints: "Graph",
    inputFormat: "None",
    outputFormat: "BFS order",
    sampleInput: "None",
    sampleOutput: "Traversed",
    testCases: [
      { input: "None", expectedOutput: "Traversed", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Algorithm implementation" }
    ]
  },
  {
    _id: "local-alg-13",
    title: "DFS Algorithm",
    description: "Implement depth-first search on graph.",
    difficulty: "medium",
    category: "Algorithms",
    constraints: "Graph",
    inputFormat: "None",
    outputFormat: "DFS order",
    sampleInput: "None",
    sampleOutput: "Traversed",
    testCases: [
      { input: "None", expectedOutput: "Traversed", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Algorithm implementation" }
    ]
  },
  {
    _id: "local-alg-14",
    title: "Dijkstra Shortest Path",
    description: "Implement Dijkstra algorithm.",
    difficulty: "hard",
    category: "Algorithms",
    constraints: "Weighted graph",
    inputFormat: "None",
    outputFormat: "Shortest paths",
    sampleInput: "None",
    sampleOutput: "Computed",
    testCases: [
      { input: "None", expectedOutput: "Computed", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Algorithm implementation" }
    ]
  },
  {
    _id: "local-alg-15",
    title: "Kruskal MST",
    description: "Implement Kruskal minimum spanning tree.",
    difficulty: "hard",
    category: "Algorithms",
    constraints: "Weighted graph",
    inputFormat: "None",
    outputFormat: "MST edges",
    sampleInput: "None",
    sampleOutput: "Computed",
    testCases: [
      { input: "None", expectedOutput: "Computed", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Algorithm implementation" }
    ]
  },
  {
    _id: "local-alg-16",
    title: "Dynamic Programming Knapsack",
    description: "Solve 0/1 knapsack with DP.",
    difficulty: "medium",
    category: "Algorithms",
    constraints: "Items and capacity",
    inputFormat: "None",
    outputFormat: "Max value",
    sampleInput: "None",
    sampleOutput: "Computed",
    testCases: [
      { input: "None", expectedOutput: "Computed", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Algorithm implementation" }
    ]
  },
  {
    _id: "local-alg-17",
    title: "Greedy Activity Selection",
    description: "Solve activity selection with greedy.",
    difficulty: "medium",
    category: "Algorithms",
    constraints: "Activities with times",
    inputFormat: "None",
    outputFormat: "Selected activities",
    sampleInput: "None",
    sampleOutput: "Selected",
    testCases: [
      { input: "None", expectedOutput: "Selected", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Algorithm implementation" }
    ]
  },

  {
    _id: "local-cn-4",
    title: "OSI Model",
    description: "Explain the 7 layers of OSI model.",
    difficulty: "easy",
    category: "Computer Networks",
    constraints: "OSI model",
    inputFormat: "None",
    outputFormat: "7 layers explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Computer network concept" }
    ]
  },
  {
    _id: "local-cn-5",
    title: "TCP vs UDP",
    description: "Compare TCP and UDP protocols.",
    difficulty: "easy",
    category: "Computer Networks",
    constraints: "Transport protocols",
    inputFormat: "None",
    outputFormat: "Comparison",
    sampleInput: "None",
    sampleOutput: "Compared",
    testCases: [
      { input: "None", expectedOutput: "Compared", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Computer network concept" }
    ]
  },
  {
    _id: "local-cn-6",
    title: "HTTP Methods",
    description: "Explain GET, POST, PUT, DELETE methods.",
    difficulty: "easy",
    category: "Computer Networks",
    constraints: "HTTP methods",
    inputFormat: "None",
    outputFormat: "Methods explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Computer network concept" }
    ]
  },
  {
    _id: "local-cn-7",
    title: "DNS Resolution",
    description: "Explain how DNS resolution works.",
    difficulty: "medium",
    category: "Computer Networks",
    constraints: "DNS process",
    inputFormat: "None",
    outputFormat: "Resolution steps",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Computer network concept" }
    ]
  },
  {
    _id: "local-cn-8",
    title: "IP Addressing",
    description: "Explain IPv4 addressing and subnetting.",
    difficulty: "medium",
    category: "Computer Networks",
    constraints: "IP addressing",
    inputFormat: "None",
    outputFormat: "Addressing explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Computer network concept" }
    ]
  },
  {
    _id: "local-cn-9",
    title: "TCP Three-Way Handshake",
    description: "Explain TCP connection establishment.",
    difficulty: "easy",
    category: "Computer Networks",
    constraints: "TCP handshake",
    inputFormat: "None",
    outputFormat: "Handshake steps",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Computer network concept" }
    ]
  },
  {
    _id: "local-cn-10",
    title: "HTTPS and SSL",
    description: "Explain how HTTPS works with SSL/TLS.",
    difficulty: "medium",
    category: "Computer Networks",
    constraints: "SSL/TLS",
    inputFormat: "None",
    outputFormat: "HTTPS explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Computer network concept" }
    ]
  },
  {
    _id: "local-cn-11",
    title: "Network Topologies",
    description: "Explain star, bus, ring topologies.",
    difficulty: "easy",
    category: "Computer Networks",
    constraints: "Network topologies",
    inputFormat: "None",
    outputFormat: "Topologies explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Computer network concept" }
    ]
  },
  {
    _id: "local-cn-12",
    title: "ARP Protocol",
    description: "Explain Address Resolution Protocol.",
    difficulty: "medium",
    category: "Computer Networks",
    constraints: "ARP protocol",
    inputFormat: "None",
    outputFormat: "ARP explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Computer network concept" }
    ]
  },
  {
    _id: "local-cn-13",
    title: "NAT (Network Address Translation)",
    description: "Explain NAT and its types.",
    difficulty: "medium",
    category: "Computer Networks",
    constraints: "NAT types",
    inputFormat: "None",
    outputFormat: "NAT explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Computer network concept" }
    ]
  },
  {
    _id: "local-cn-14",
    title: "Routing Algorithms",
    description: "Explain distance vector and link state routing.",
    difficulty: "medium",
    category: "Computer Networks",
    constraints: "Routing algorithms",
    inputFormat: "None",
    outputFormat: "Algorithms compared",
    sampleInput: "None",
    sampleOutput: "Compared",
    testCases: [
      { input: "None", expectedOutput: "Compared", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Computer network concept" }
    ]
  },
  {
    _id: "local-cn-15",
    title: "Subnetting Practice",
    description: "Calculate subnets from CIDR notation.",
    difficulty: "medium",
    category: "Computer Networks",
    constraints: "Subnet calculation",
    inputFormat: "None",
    outputFormat: "Subnet result",
    sampleInput: "None",
    sampleOutput: "Calculated",
    testCases: [
      { input: "None", expectedOutput: "Calculated", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Computer network concept" }
    ]
  },
  {
    _id: "local-cn-16",
    title: "Load Balancing",
    description: "Explain load balancing strategies.",
    difficulty: "medium",
    category: "Computer Networks",
    constraints: "Load balancing",
    inputFormat: "None",
    outputFormat: "Strategies explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Computer network concept" }
    ]
  },
  {
    _id: "local-cn-17",
    title: "WebSocket vs SSE",
    description: "Compare WebSocket and Server-Sent Events.",
    difficulty: "medium",
    category: "Computer Networks",
    constraints: "Real-time protocols",
    inputFormat: "None",
    outputFormat: "Comparison",
    sampleInput: "None",
    sampleOutput: "Compared",
    testCases: [
      { input: "None", expectedOutput: "Compared", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Computer network concept" }
    ]
  },
  {
    _id: "local-cn-18",
    title: "CDN Basics",
    description: "Explain Content Delivery Networks.",
    difficulty: "easy",
    category: "Computer Networks",
    constraints: "CDN concept",
    inputFormat: "None",
    outputFormat: "CDN explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Computer network concept" }
    ]
  },
  {
    _id: "local-cn-19",
    title: "Firewall Concepts",
    description: "Explain firewall types and rules.",
    difficulty: "easy",
    category: "Computer Networks",
    constraints: "Firewall types",
    inputFormat: "None",
    outputFormat: "Firewall explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Computer network concept" }
    ]
  },
  {
    _id: "local-cn-20",
    title: "IPv6 Basics",
    description: "Explain IPv6 advantages over IPv4.",
    difficulty: "easy",
    category: "Computer Networks",
    constraints: "IPv6 features",
    inputFormat: "None",
    outputFormat: "IPv6 explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Computer network concept" }
    ]
  },
  {
    _id: "local-c-11",
    title: "GCD of Two Numbers",
    description: "Compute GCD using Euclidean algorithm.",
    difficulty: "easy",
    category: "C",
    constraints: "1 <= a, b <= 10^6",
    inputFormat: "Two integers",
    outputFormat: "GCD",
    sampleInput: "12 8",
    sampleOutput: "4",
    testCases: [
      { input: "12 8", expectedOutput: "4", isHidden: false },
      { input: "100 75", expectedOutput: "25", isHidden: false },
      { input: "7 13", expectedOutput: "1", isHidden: true }
    ],
    starterCode: [
      { language: "cpp", template: "#include <stdio.h>\nint main(){\n    // TODO: Implement\n    return 0;\n}" }
    ]
  },
  {
    _id: "local-c-12",
    title: "Palindrome String",
    description: "Check if string is palindrome.",
    difficulty: "easy",
    category: "C",
    constraints: "1 <= length <= 10^5",
    inputFormat: "String s",
    outputFormat: "Yes or No",
    sampleInput: "racecar",
    sampleOutput: "Yes",
    testCases: [
      { input: "racecar", expectedOutput: "Yes", isHidden: false },
      { input: "hello", expectedOutput: "No", isHidden: false },
      { input: "a", expectedOutput: "Yes", isHidden: true }
    ],
    starterCode: [
      { language: "cpp", template: "#include <stdio.h>\nint main(){\n    // TODO: Implement\n    return 0;\n}" }
    ]
  },
  {
    _id: "local-c-13",
    title: "Power of a Number",
    description: "Compute base^exponent fast.",
    difficulty: "easy",
    category: "C",
    constraints: "0 <= base <= 10^9",
    inputFormat: "Two integers",
    outputFormat: "Result",
    sampleInput: "2 10",
    sampleOutput: "1024",
    testCases: [
      { input: "2 10", expectedOutput: "1024", isHidden: false },
      { input: "5 0", expectedOutput: "1", isHidden: false },
      { input: "3 5", expectedOutput: "243", isHidden: true }
    ],
    starterCode: [
      { language: "cpp", template: "#include <stdio.h>\nint main(){\n    // TODO: Implement\n    return 0;\n}" }
    ]
  },
  {
    _id: "local-c-14",
    title: "Array Rotation",
    description: "Rotate array right by k positions.",
    difficulty: "easy",
    category: "C",
    constraints: "1 <= n <= 10^4",
    inputFormat: "n, k, array",
    outputFormat: "Rotated array",
    sampleInput: "5 2\n1 2 3 4 5",
    sampleOutput: "4 5 1 2 3",
    testCases: [
      { input: "5 2\n1 2 3 4 5", expectedOutput: "4 5 1 2 3", isHidden: false },
      { input: "3 1\n1 2 3", expectedOutput: "3 1 2", isHidden: false },
      { input: "4 4\n1 2 3 4", expectedOutput: "1 2 3 4", isHidden: true }
    ],
    starterCode: [
      { language: "cpp", template: "#include <stdio.h>\nint main(){\n    // TODO: Implement\n    return 0;\n}" }
    ]
  },
  {
    _id: "local-c-15",
    title: "Bubble Sort",
    description: "Sort array using bubble sort.",
    difficulty: "easy",
    category: "C",
    constraints: "1 <= n <= 10^3",
    inputFormat: "n and array",
    outputFormat: "Sorted array",
    sampleInput: "5\n64 34 25 12 22",
    sampleOutput: "12 22 25 34 64",
    testCases: [
      { input: "5\n64 34 25 12 22", expectedOutput: "12 22 25 34 64", isHidden: false },
      { input: "1\n1", expectedOutput: "1", isHidden: false },
      { input: "4\n4 3 2 1", expectedOutput: "1 2 3 4", isHidden: true }
    ],
    starterCode: [
      { language: "cpp", template: "#include <stdio.h>\nint main(){\n    // TODO: Implement\n    return 0;\n}" }
    ]
  },
  {
    _id: "local-c-16",
    title: "Binary Search",
    description: "Search in sorted array.",
    difficulty: "easy",
    category: "C",
    constraints: "1 <= n <= 10^4",
    inputFormat: "n, array, target",
    outputFormat: "Index or -1",
    sampleInput: "6\n1 3 5 7 9 11\n7",
    sampleOutput: "3",
    testCases: [
      { input: "6\n1 3 5 7 9 11\n7", expectedOutput: "3", isHidden: false },
      { input: "5\n2 4 6 8 10\n5", expectedOutput: "-1", isHidden: false },
      { input: "1\n5\n5", expectedOutput: "0", isHidden: true }
    ],
    starterCode: [
      { language: "cpp", template: "#include <stdio.h>\nint main(){\n    // TODO: Implement\n    return 0;\n}" }
    ]
  },
  {
    _id: "local-c-17",
    title: "Reverse Digits",
    description: "Reverse digits of integer.",
    difficulty: "easy",
    category: "C",
    constraints: "-10^9 <= n <= 10^9",
    inputFormat: "Integer n",
    outputFormat: "Reversed number",
    sampleInput: "1234",
    sampleOutput: "4321",
    testCases: [
      { input: "1234", expectedOutput: "4321", isHidden: false },
      { input: "-123", expectedOutput: "-321", isHidden: false },
      { input: "1200", expectedOutput: "21", isHidden: true }
    ],
    starterCode: [
      { language: "cpp", template: "#include <stdio.h>\nint main(){\n    // TODO: Implement\n    return 0;\n}" }
    ]
  },
  {
    _id: "local-c-18",
    title: "Find Duplicates",
    description: "Find all duplicate elements in array.",
    difficulty: "medium",
    category: "C",
    constraints: "1 <= n <= 10^4",
    inputFormat: "n and array",
    outputFormat: "Duplicates sorted",
    sampleInput: "6\n1 2 3 2 4 3",
    sampleOutput: "2 3",
    testCases: [
      { input: "6\n1 2 3 2 4 3", expectedOutput: "2 3", isHidden: false },
      { input: "4\n1 2 3 4", expectedOutput: "-1", isHidden: false },
      { input: "5\n5 5 5 5 5", expectedOutput: "5", isHidden: true }
    ],
    starterCode: [
      { language: "cpp", template: "#include <stdio.h>\nint main(){\n    // TODO: Implement\n    return 0;\n}" }
    ]
  },
  {
    _id: "local-c-19",
    title: "Matrix Transpose",
    description: "Compute transpose of matrix.",
    difficulty: "medium",
    category: "C",
    constraints: "1 <= m, n <= 100",
    inputFormat: "m, n, matrix",
    outputFormat: "Transposed matrix",
    sampleInput: "2 3\n1 2 3\n4 5 6",
    sampleOutput: "1 4\n2 5\n3 6",
    testCases: [
      { input: "2 3\n1 2 3\n4 5 6", expectedOutput: "1 4\n2 5\n3 6", isHidden: false },
      { input: "1 1\n42", expectedOutput: "42", isHidden: true }
    ],
    starterCode: [
      { language: "cpp", template: "#include <stdio.h>\nint main(){\n    // TODO: Implement\n    return 0;\n}" }
    ]
  },
  {
    _id: "local-c-20",
    title: "Armstrong Number",
    description: "Check if number is Armstrong.",
    difficulty: "easy",
    category: "C",
    constraints: "0 <= n <= 10^6",
    inputFormat: "Integer n",
    outputFormat: "Armstrong or Not",
    sampleInput: "153",
    sampleOutput: "Armstrong",
    testCases: [
      { input: "153", expectedOutput: "Armstrong", isHidden: false },
      { input: "370", expectedOutput: "Armstrong", isHidden: false },
      { input: "123", expectedOutput: "Not Armstrong", isHidden: true }
    ],
    starterCode: [
      { language: "cpp", template: "#include <stdio.h>\nint main(){\n    // TODO: Implement\n    return 0;\n}" }
    ]
  },

  {
    _id: "local-py-11",
    title: "Two Sum",
    description: "Return indices of two numbers that add to target.",
    difficulty: "easy",
    category: "Python",
    constraints: "2 <= nums.length <= 10^4",
    inputFormat: "Array and target",
    outputFormat: "[i, j]",
    sampleInput: "[2,7,11,15]\n9",
    sampleOutput: "[0,1]",
    testCases: [
      { input: "[2,7,11,15]\n9", expectedOutput: "[0,1]", isHidden: false },
      { input: "[3,2,4]\n6", expectedOutput: "[1,2]", isHidden: false },
      { input: "[3,3]\n6", expectedOutput: "[0,1]", isHidden: true }
    ],
    starterCode: [
      { language: "python", template: "# TODO: Implement\npass" },
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-py-12",
    title: "Best Time to Buy and Sell Stock",
    description: "Find max profit from one buy and sell.",
    difficulty: "easy",
    category: "Python",
    constraints: "1 <= prices.length <= 10^5",
    inputFormat: "Array of prices",
    outputFormat: "Max profit",
    sampleInput: "[7,1,5,3,6,4]",
    sampleOutput: "5",
    testCases: [
      { input: "[7,1,5,3,6,4]", expectedOutput: "5", isHidden: false },
      { input: "[7,6,4,3,1]", expectedOutput: "0", isHidden: false },
      { input: "[2,4,1]", expectedOutput: "2", isHidden: true }
    ],
    starterCode: [
      { language: "python", template: "# TODO: Implement\npass" },
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-py-13",
    title: "Valid Parentheses",
    description: "Determine if brackets string is valid.",
    difficulty: "easy",
    category: "Python",
    constraints: "1 <= s.length <= 10^4",
    inputFormat: "String of brackets",
    outputFormat: "True or False",
    sampleInput: "()[]{}",
    sampleOutput: "True",
    testCases: [
      { input: "()[]{}", expectedOutput: "True", isHidden: false },
      { input: "(]", expectedOutput: "False", isHidden: false },
      { input: "{[]}", expectedOutput: "True", isHidden: true }
    ],
    starterCode: [
      { language: "python", template: "# TODO: Implement\npass" },
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-py-14",
    title: "Maximum Subarray",
    description: "Find contiguous subarray with largest sum.",
    difficulty: "medium",
    category: "Python",
    constraints: "1 <= nums.length <= 10^5",
    inputFormat: "Array of integers",
    outputFormat: "Max sum",
    sampleInput: "[-2,1,-3,4,-1,2,1,-5,4]",
    sampleOutput: "6",
    testCases: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", expectedOutput: "6", isHidden: false },
      { input: "[1]", expectedOutput: "1", isHidden: false },
      { input: "[5,4,-1,7,8]", expectedOutput: "23", isHidden: true }
    ],
    starterCode: [
      { language: "python", template: "# TODO: Implement\npass" },
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-py-15",
    title: "Merge Two Sorted Lists",
    description: "Merge two sorted linked lists.",
    difficulty: "easy",
    category: "Python",
    constraints: "0 <= both lengths <= 1000",
    inputFormat: "Two sorted lists",
    outputFormat: "Merged list",
    sampleInput: "[1,2,4]\n[1,3,4]",
    sampleOutput: "[1,1,2,3,4,4]",
    testCases: [
      { input: "[1,2,4]\n[1,3,4]", expectedOutput: "[1,1,2,3,4,4]", isHidden: false },
      { input: "[]\n[]", expectedOutput: "[]", isHidden: false },
      { input: "[]\n[0]", expectedOutput: "[0]", isHidden: true }
    ],
    starterCode: [
      { language: "python", template: "# TODO: Implement\npass" },
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-py-16",
    title: "Maximum Depth of Binary Tree",
    description: "Return max depth of binary tree.",
    difficulty: "easy",
    category: "Python",
    constraints: "0 <= nodes <= 10^4",
    inputFormat: "Root of tree",
    outputFormat: "Max depth",
    sampleInput: "[3,9,20,null,null,15,7]",
    sampleOutput: "3",
    testCases: [
      { input: "[3,9,20,null,null,15,7]", expectedOutput: "3", isHidden: false },
      { input: "[1,null,2]", expectedOutput: "2", isHidden: false },
      { input: "[]", expectedOutput: "0", isHidden: true }
    ],
    starterCode: [
      { language: "python", template: "# TODO: Implement\npass" },
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-py-17",
    title: "Climbing Stairs",
    description: "Count distinct ways to climb stairs.",
    difficulty: "easy",
    category: "Python",
    constraints: "1 <= n <= 45",
    inputFormat: "Integer n",
    outputFormat: "Number of ways",
    sampleInput: "2",
    sampleOutput: "2",
    testCases: [
      { input: "2", expectedOutput: "2", isHidden: false },
      { input: "3", expectedOutput: "3", isHidden: false },
      { input: "5", expectedOutput: "8", isHidden: true }
    ],
    starterCode: [
      { language: "python", template: "# TODO: Implement\npass" },
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-py-18",
    title: "Contains Duplicate",
    description: "Check if any value appears twice.",
    difficulty: "easy",
    category: "Python",
    constraints: "1 <= nums.length <= 10^5",
    inputFormat: "Array of integers",
    outputFormat: "True or False",
    sampleInput: "[1,2,3,1]",
    sampleOutput: "True",
    testCases: [
      { input: "[1,2,3,1]", expectedOutput: "True", isHidden: false },
      { input: "[1,2,3,4]", expectedOutput: "False", isHidden: false },
      { input: "[1,1,1,3,3,4,3,2,4,2]", expectedOutput: "True", isHidden: true }
    ],
    starterCode: [
      { language: "python", template: "# TODO: Implement\npass" },
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-py-19",
    title: "Single Number",
    description: "Find element appearing once using XOR.",
    difficulty: "easy",
    category: "Python",
    constraints: "1 <= nums.length <= 3*10^4",
    inputFormat: "Array of integers",
    outputFormat: "Single number",
    sampleInput: "[2,2,1]",
    sampleOutput: "1",
    testCases: [
      { input: "[2,2,1]", expectedOutput: "1", isHidden: false },
      { input: "[4,1,2,1,2]", expectedOutput: "4", isHidden: false },
      { input: "[1]", expectedOutput: "1", isHidden: true }
    ],
    starterCode: [
      { language: "python", template: "# TODO: Implement\npass" },
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },
  {
    _id: "local-py-20",
    title: "Intersection of Two Arrays II",
    description: "Return intersection with duplicates.",
    difficulty: "easy",
    category: "Python",
    constraints: "1 <= nums1.length, nums2.length <= 1000",
    inputFormat: "Two arrays",
    outputFormat: "Intersection",
    sampleInput: "[1,2,2,1]\n[2,2]",
    sampleOutput: "[2,2]",
    testCases: [
      { input: "[1,2,2,1]\n[2,2]", expectedOutput: "[2,2]", isHidden: false },
      { input: "[4,9,5]\n[9,4,9,8,4]", expectedOutput: "[4,9]", isHidden: false },
      { input: "[1]\n[1]", expectedOutput: "[1]", isHidden: true }
    ],
    starterCode: [
      { language: "python", template: "# TODO: Implement\npass" },
      { language: "javascript", template: "// TODO: Implement" }
    ]
  },

  {
    _id: "local-os-11",
    title: "Process Scheduling Algorithms",
    description: "Compare FCFS, SJF, Round Robin, and Priority scheduling.",
    difficulty: "medium",
    category: "Operating System",
    constraints: "Scheduling concepts",
    inputFormat: "None",
    outputFormat: "Algorithm comparison",
    sampleInput: "None",
    sampleOutput: "Compared",
    testCases: [
      { input: "None", expectedOutput: "Compared", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Operating system concept" },
      { language: "javascript", template: "// Operating system concept" }
    ]
  },
  {
    _id: "local-os-12",
    title: "Deadlock Handling",
    description: "Explain deadlock prevention, avoidance, and detection.",
    difficulty: "medium",
    category: "Operating System",
    constraints: "Deadlock strategies",
    inputFormat: "None",
    outputFormat: "Strategies explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Operating system concept" },
      { language: "javascript", template: "// Operating system concept" }
    ]
  },
  {
    _id: "local-os-13",
    title: "Memory Allocation",
    description: "Compare contiguous, paging, and segmentation allocation.",
    difficulty: "medium",
    category: "Operating System",
    constraints: "Memory management",
    inputFormat: "None",
    outputFormat: "Methods compared",
    sampleInput: "None",
    sampleOutput: "Compared",
    testCases: [
      { input: "None", expectedOutput: "Compared", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Operating system concept" },
      { language: "javascript", template: "// Operating system concept" }
    ]
  },
  {
    _id: "local-os-14",
    title: "Disk Scheduling",
    description: "Explain FCFS, SSTF, SCAN disk scheduling algorithms.",
    difficulty: "medium",
    category: "Operating System",
    constraints: "Disk scheduling",
    inputFormat: "None",
    outputFormat: "Algorithms compared",
    sampleInput: "None",
    sampleOutput: "Compared",
    testCases: [
      { input: "None", expectedOutput: "Compared", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Operating system concept" },
      { language: "javascript", template: "// Operating system concept" }
    ]
  },
  {
    _id: "local-os-15",
    title: "Inter-Process Communication",
    description: "Explain IPC mechanisms: pipes, message queues, shared memory.",
    difficulty: "medium",
    category: "Operating System",
    constraints: "IPC mechanisms",
    inputFormat: "None",
    outputFormat: "Mechanisms explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Operating system concept" },
      { language: "javascript", template: "// Operating system concept" }
    ]
  },
  {
    _id: "local-os-16",
    title: "Process Synchronization",
    description: "Explain mutex, semaphore, and monitors for synchronization.",
    difficulty: "medium",
    category: "Operating System",
    constraints: "Sync mechanisms",
    inputFormat: "None",
    outputFormat: "Mechanisms compared",
    sampleInput: "None",
    sampleOutput: "Compared",
    testCases: [
      { input: "None", expectedOutput: "Compared", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Operating system concept" },
      { language: "javascript", template: "// Operating system concept" }
    ]
  },
  {
    _id: "local-os-17",
    title: "File System Types",
    description: "Compare FAT, NTFS, ext4 file system types.",
    difficulty: "easy",
    category: "Operating System",
    constraints: "File systems",
    inputFormat: "None",
    outputFormat: "Types compared",
    sampleInput: "None",
    sampleOutput: "Compared",
    testCases: [
      { input: "None", expectedOutput: "Compared", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Operating system concept" },
      { language: "javascript", template: "// Operating system concept" }
    ]
  },
  {
    _id: "local-os-18",
    title: "Boot Process",
    description: "Explain the computer boot process from BIOS to OS load.",
    difficulty: "easy",
    category: "Operating System",
    constraints: "Boot sequence",
    inputFormat: "None",
    outputFormat: "Steps explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Operating system concept" },
      { language: "javascript", template: "// Operating system concept" }
    ]
  },
  {
    _id: "local-os-19",
    title: "Context Switching",
    description: "Explain context switching between processes.",
    difficulty: "medium",
    category: "Operating System",
    constraints: "Context switching",
    inputFormat: "None",
    outputFormat: "Process explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Operating system concept" },
      { language: "javascript", template: "// Operating system concept" }
    ]
  },
  {
    _id: "local-os-20",
    title: "Zombie and Orphan Processes",
    description: "Explain zombie and orphan process states.",
    difficulty: "medium",
    category: "Operating System",
    constraints: "Process states",
    inputFormat: "None",
    outputFormat: "States explained",
    sampleInput: "None",
    sampleOutput: "Explained",
    testCases: [
      { input: "None", expectedOutput: "Explained", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Operating system concept" },
      { language: "javascript", template: "// Operating system concept" }
    ]
  },

  {
    _id: "local-alg-9",
    title: "KMP Pattern Matching",
    description: "Implement KMP string matching algorithm.",
    difficulty: "hard",
    category: "Algorithms",
    constraints: "String and pattern",
    inputFormat: "None",
    outputFormat: "Match positions",
    sampleInput: "None",
    sampleOutput: "Found",
    testCases: [
      { input: "None", expectedOutput: "Found", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Algorithm implementation" },
      { language: "javascript", template: "// Algorithm implementation" }
    ]
  },
  {
    _id: "local-alg-10",
    title: "Topological Sort",
    description: "Implement topological sort for DAG.",
    difficulty: "hard",
    category: "Algorithms",
    constraints: "Directed acyclic graph",
    inputFormat: "None",
    outputFormat: "Sorted order",
    sampleInput: "None",
    sampleOutput: "Sorted",
    testCases: [
      { input: "None", expectedOutput: "Sorted", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Algorithm implementation" },
      { language: "javascript", template: "// Algorithm implementation" }
    ]
  },
  {
    _id: "local-alg-11",
    title: "Bellman-Ford Shortest Path",
    description: "Implement Bellman-Ford algorithm for shortest paths.",
    difficulty: "hard",
    category: "Algorithms",
    constraints: "Weighted graph",
    inputFormat: "None",
    outputFormat: "Shortest paths",
    sampleInput: "None",
    sampleOutput: "Computed",
    testCases: [
      { input: "None", expectedOutput: "Computed", isHidden: false }
    ],
    starterCode: [
      { language: "python", template: "# Algorithm implementation" },
      { language: "javascript", template: "// Algorithm implementation" }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // C - EXPANDED
  // ═══════════════════════════════════════════════════════════
  {
    _id: 'local-c-21',
    title: 'Swap Two Numbers Without Temporary Variable',
    description: 'Write a C program to swap two numbers without using a temporary variable.',
    difficulty: 'easy',
    category: 'C',
    constraints: 'Use arithmetic operations or XOR.',
    inputFormat: 'Two integers',
    outputFormat: 'Two swapped integers',
    sampleInput: '5 10',
    sampleOutput: '10 5',
    testCases: [{ input: '5 10', expectedOutput: '10 5', isHidden: false }],
    starterCode: [{ language: 'c', template: '#include<stdio.h>\nint main() {\n  int a, b;\n  scanf("%d %d", &a, &b);\n  // Swap logic\n  printf("%d %d", a, b);\n  return 0;\n}' }]
  },
  {
    _id: 'local-c-22',
    title: 'Check Prime Number',
    description: 'Write a C program to check if a given number is prime.',
    difficulty: 'easy',
    category: 'C',
    constraints: '1 <= n <= 10^6',
    inputFormat: 'One integer n',
    outputFormat: 'Print "Prime" or "Not Prime"',
    sampleInput: '7',
    sampleOutput: 'Prime',
    testCases: [{ input: '7', expectedOutput: 'Prime', isHidden: false }],
    starterCode: [{ language: 'c', template: '#include<stdio.h>\n#include<math.h>\nint main() {\n  int n;\n  scanf("%d", &n);\n  // Check prime\n  return 0;\n}' }]
  },
  {
    _id: 'local-c-23',
    title: 'Factorial Using Recursion',
    description: 'Write a C program to find factorial of a number using recursion.',
    difficulty: 'easy',
    category: 'C',
    constraints: '0 <= n <= 20',
    inputFormat: 'One integer n',
    outputFormat: 'Factorial of n',
    sampleInput: '5',
    sampleOutput: '120',
    testCases: [{ input: '5', expectedOutput: '120', isHidden: false }],
    starterCode: [{ language: 'c', template: '#include<stdio.h>\nlong factorial(int n) {\n  // Recursive implementation\n}\nint main() {\n  int n;\n  scanf("%d", &n);\n  printf("%ld", factorial(n));\n  return 0;\n}' }]
  },
  {
    _id: 'local-c-24',
    title: 'Fibonacci Series',
    description: 'Write a C program to print first n Fibonacci numbers.',
    difficulty: 'easy',
    category: 'C',
    constraints: '1 <= n <= 50',
    inputFormat: 'One integer n',
    outputFormat: 'First n Fibonacci numbers',
    sampleInput: '7',
    sampleOutput: '0 1 1 2 3 5 8',
    testCases: [{ input: '7', expectedOutput: '0 1 1 2 3 5 8', isHidden: false }],
    starterCode: [{ language: 'c', template: '#include<stdio.h>\nint main() {\n  int n;\n  scanf("%d", &n);\n  // Print Fibonacci\n  return 0;\n}' }]
  },
  {
    _id: 'local-c-25',
    title: 'GCD Using Euclidean Algorithm',
    description: 'Write a C program to find GCD of two numbers using Euclidean algorithm.',
    difficulty: 'easy',
    category: 'C',
    constraints: '1 <= a, b <= 10^9',
    inputFormat: 'Two integers a and b',
    outputFormat: 'GCD of a and b',
    sampleInput: '12 8',
    sampleOutput: '4',
    testCases: [{ input: '12 8', expectedOutput: '4', isHidden: false }],
    starterCode: [{ language: 'c', template: '#include<stdio.h>\nint gcd(int a, int b) {\n  // Euclidean algorithm\n}\nint main() {\n  int a, b;\n  scanf("%d %d", &a, &b);\n  printf("%d", gcd(a, b));\n  return 0;\n}' }]
  },
  {
    _id: 'local-c-26',
    title: 'Reverse a String in C',
    description: 'Write a C program to reverse a string without using strrev.',
    difficulty: 'easy',
    category: 'C',
    constraints: '1 <= length <= 1000',
    inputFormat: 'A string',
    outputFormat: 'Reversed string',
    sampleInput: 'hello',
    sampleOutput: 'olleh',
    testCases: [{ input: 'hello', expectedOutput: 'olleh', isHidden: false }],
    starterCode: [{ language: 'c', template: '#include<stdio.h>\n#include<string.h>\nint main() {\n  char str[1000];\n  scanf("%s", str);\n  // Reverse string\n  return 0;\n}' }]
  },
  {
    _id: 'local-c-27',
    title: 'Check Palindrome String',
    description: 'Write a C program to check if a string is a palindrome.',
    difficulty: 'easy',
    category: 'C',
    constraints: '1 <= length <= 1000',
    inputFormat: 'A string',
    outputFormat: 'Print "Yes" or "No"',
    sampleInput: 'racecar',
    sampleOutput: 'Yes',
    testCases: [{ input: 'racecar', expectedOutput: 'Yes', isHidden: false }],
    starterCode: [{ language: 'c', template: '#include<stdio.h>\n#include<string.h>\nint main() {\n  char str[1000];\n  scanf("%s", str);\n  // Check palindrome\n  return 0;\n}' }]
  },
  {
    _id: 'local-c-28',
    title: 'Count Vowels and Consonants',
    description: 'Write a C program to count vowels and consonants in a string.',
    difficulty: 'easy',
    category: 'C',
    constraints: '1 <= length <= 1000',
    inputFormat: 'A string',
    outputFormat: 'Count of vowels and consonants',
    sampleInput: 'hello',
    sampleOutput: '2 3',
    testCases: [{ input: 'hello', expectedOutput: '2 3', isHidden: false }],
    starterCode: [{ language: 'c', template: '#include<stdio.h>\n#include<string.h>\nint main() {\n  char str[1000];\n  scanf("%s", str);\n  // Count vowels and consonants\n  return 0;\n}' }]
  },
  {
    _id: 'local-c-29',
    title: 'Sum of Array Elements',
    description: 'Write a C program to find the sum of all elements in an array.',
    difficulty: 'easy',
    category: 'C',
    constraints: '1 <= n <= 10^4',
    inputFormat: 'Size n followed by n integers',
    outputFormat: 'Sum of array',
    sampleInput: '5\n1 2 3 4 5',
    sampleOutput: '15',
    testCases: [{ input: '5\n1 2 3 4 5', expectedOutput: '15', isHidden: false }],
    starterCode: [{ language: 'c', template: '#include<stdio.h>\nint main() {\n  int n;\n  scanf("%d", &n);\n  int arr[n];\n  for(int i=0;i<n;i++) scanf("%d",&arr[i]);\n  // Calculate sum\n  return 0;\n}' }]
  },
  {
    _id: 'local-c-30',
    title: 'Find Maximum in Array',
    description: 'Write a C program to find the maximum element in an array.',
    difficulty: 'easy',
    category: 'C',
    constraints: '1 <= n <= 10^4',
    inputFormat: 'Size n followed by n integers',
    outputFormat: 'Maximum element',
    sampleInput: '5\n3 1 4 1 5',
    sampleOutput: '5',
    testCases: [{ input: '5\n3 1 4 1 5', expectedOutput: '5', isHidden: false }],
    starterCode: [{ language: 'c', template: '#include<stdio.h>\nint main() {\n  int n;\n  scanf("%d", &n);\n  int arr[n];\n  for(int i=0;i<n;i++) scanf("%d",&arr[i]);\n  // Find max\n  return 0;\n}' }]
  },


  // ═══════════════════════════════════════════════════════════
  // C++ - EXPANDED
  // ═══════════════════════════════════════════════════════════
  {
    _id: 'local-cpp-21',
    title: 'Two Sum Problem',
    description: 'Given an array of integers and a target, return indices of two numbers that add up to target.',
    difficulty: 'easy',
    category: 'C++',
    constraints: '2 <= n <= 10^4',
    inputFormat: 'Array of integers and target',
    outputFormat: 'Indices of two numbers',
    sampleInput: '[2,7,11,15] target=9',
    sampleOutput: '[0,1]',
    testCases: [{ input: '[2,7,11,15] target=9', expectedOutput: '[0,1]', isHidden: false }],
    starterCode: [{ language: 'c++', template: '#include<vector>\n#include<unordered_map>\nusing namespace std;\nclass Solution {\npublic:\n  vector<int> twoSum(vector<int>& nums, int target) {\n    // Your code\n  }\n};' }]
  },
  {
    _id: 'local-cpp-22',
    title: 'Reverse a Linked List',
    description: 'Reverse a singly linked list iteratively and recursively.',
    difficulty: 'medium',
    category: 'C++',
    constraints: '1 <= n <= 5000',
    inputFormat: 'Linked list',
    outputFormat: 'Reversed linked list',
    sampleInput: '1->2->3->4->5',
    sampleOutput: '5->4->3->2->1',
    testCases: [{ input: '1->2->3->4->5', expectedOutput: '5->4->3->2->1', isHidden: false }],
    starterCode: [{ language: 'c++', template: 'struct ListNode {\n  int val;\n  ListNode *next;\n  ListNode(int x) : val(x), next(NULL) {}\n};\nclass Solution {\npublic:\n  ListNode* reverseList(ListNode* head) {\n    // Your code\n  }\n};' }]
  },
  {
    _id: 'local-cpp-23',
    title: 'Merge Two Sorted Arrays',
    description: 'Merge two sorted arrays into one sorted array.',
    difficulty: 'easy',
    category: 'C++',
    constraints: '0 <= m,n <= 10^4',
    inputFormat: 'Two sorted arrays',
    outputFormat: 'One merged sorted array',
    sampleInput: '[1,2,3] [2,5,6]',
    sampleOutput: '[1,2,2,3,5,6]',
    testCases: [{ input: '[1,2,3] [2,5,6]', expectedOutput: '[1,2,2,3,5,6]', isHidden: false }],
    starterCode: [{ language: 'c++', template: '#include<vector>\nusing namespace std;\nclass Solution {\npublic:\n  vector<int> merge(vector<int>& a, vector<int>& b) {\n    // Your code\n  }\n};' }]
  },
  {
    _id: 'local-cpp-24',
    title: 'Valid Parentheses',
    description: 'Given a string containing only parentheses, determine if the input is valid.',
    difficulty: 'easy',
    category: 'C++',
    constraints: '1 <= s.length <= 10^4',
    inputFormat: 'String of parentheses',
    outputFormat: 'true or false',
    sampleInput: '()[]{}',
    sampleOutput: 'true',
    testCases: [{ input: '()[]{}', expectedOutput: 'true', isHidden: false }],
    starterCode: [{ language: 'c++', template: '#include<stack>\n#include<string>\nusing namespace std;\nclass Solution {\npublic:\n  bool isValid(string s) {\n    // Your code\n  }\n};' }]
  },
  {
    _id: 'local-cpp-25',
    title: 'Binary Search Implementation',
    description: 'Implement binary search to find target in sorted array.',
    difficulty: 'easy',
    category: 'C++',
    constraints: '1 <= n <= 10^4',
    inputFormat: 'Sorted array and target',
    outputFormat: 'Index of target or -1',
    sampleInput: '[1,2,3,4,5] target=3',
    sampleOutput: '2',
    testCases: [{ input: '[1,2,3,4,5] target=3', expectedOutput: '2', isHidden: false }],
    starterCode: [{ language: 'c++', template: '#include<vector>\nusing namespace std;\nclass Solution {\npublic:\n  int binarySearch(vector<int>& nums, int target) {\n    // Your code\n  }\n};' }]
  },
  {
    _id: 'local-cpp-26',
    title: 'Detect Cycle in Linked List',
    description: "Detect if a linked list has a cycle using Floyd's algorithm.",
    difficulty: 'medium',
    category: 'C++',
    constraints: '0 <= n <= 10^4',
    inputFormat: 'Linked list',
    outputFormat: 'true if cycle exists, false otherwise',
    sampleInput: '3->2->0->-4 (tail connects to node at index 1)',
    sampleOutput: 'true',
    testCases: [{ input: '3->2->0->-4 (cycle)', expectedOutput: 'true', isHidden: false }],
    starterCode: [{ language: 'c++', template: 'struct ListNode {\n  int val;\n  ListNode *next;\n};\nclass Solution {\npublic:\n  bool hasCycle(ListNode *head) {\n    // Floyds algorithm\n  }\n};' }]
  },
  {
    _id: 'local-cpp-27',
    title: 'Invert Binary Tree',
    description: 'Invert a binary tree (mirror the tree).',
    difficulty: 'easy',
    category: 'C++',
    constraints: '0 <= n <= 10^4',
    inputFormat: 'Binary tree',
    outputFormat: 'Inverted binary tree',
    sampleInput: '4 2 7 1 3 6 9',
    sampleOutput: '4 7 2 9 6 3 1',
    testCases: [{ input: '4 2 7 1 3 6 9', expectedOutput: '4 7 2 9 6 3 1', isHidden: false }],
    starterCode: [{ language: 'c++', template: 'struct TreeNode {\n  int val;\n  TreeNode *left, *right;\n};\nclass Solution {\npublic:\n  TreeNode* invertTree(TreeNode* root) {\n    // Your code\n  }\n};' }]
  },
  {
    _id: 'local-cpp-28',
    title: 'Maximum Subarray Sum Kadane',
    description: 'Find the contiguous subarray with the largest sum.',
    difficulty: 'medium',
    category: 'C++',
    constraints: '1 <= n <= 10^5',
    inputFormat: 'Array of integers',
    outputFormat: 'Maximum subarray sum',
    sampleInput: '[-2,1,-3,4,-1,2,1,-5,4]',
    sampleOutput: '6',
    testCases: [{ input: '[-2,1,-3,4,-1,2,1,-5,4]', expectedOutput: '6', isHidden: false }],
    starterCode: [{ language: 'c++', template: '#include<vector>\nusing namespace std;\nclass Solution {\npublic:\n  int maxSubArray(vector<int>& nums) {\n    // Kadanes algorithm\n  }\n};' }]
  },
  {
    _id: 'local-cpp-29',
    title: 'Product of Array Except Self',
    description: 'Return an array where each element is the product of all other elements.',
    difficulty: 'medium',
    category: 'C++',
    constraints: '2 <= n <= 10^5',
    inputFormat: 'Array of integers',
    outputFormat: 'Product array',
    sampleInput: '[1,2,3,4]',
    sampleOutput: '[24,12,8,6]',
    testCases: [{ input: '[1,2,3,4]', expectedOutput: '[24,12,8,6]', isHidden: false }],
    starterCode: [{ language: 'c++', template: '#include<vector>\nusing namespace std;\nclass Solution {\npublic:\n  vector<int> productExceptSelf(vector<int>& nums) {\n    // Your code\n  }\n};' }]
  },
  {
    _id: 'local-cpp-30',
    title: 'LRU Cache Implementation',
    description: 'Implement an LRU Cache with get and put operations in O(1).',
    difficulty: 'hard',
    category: 'C++',
    constraints: '1 <= capacity <= 3000',
    inputFormat: 'Capacity and operations',
    outputFormat: 'Results of get operations',
    sampleInput: 'LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)',
    sampleOutput: '1 -1',
    testCases: [{ input: 'LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)', expectedOutput: '1 -1', isHidden: false }],
    starterCode: [{ language: 'c++', template: '#include<unordered_map>\nusing namespace std;\nclass LRUCache {\npublic:\n  LRUCache(int capacity) {\n    // Initialize\n  }\n  int get(int key) {\n    // Your code\n  }\n  void put(int key, int value) {\n    // Your code\n  }\n};' }]
  },


  // JAVA - EXPANDED
  {
    _id: 'local-java-21',
    title: 'FizzBuzz',
    description: 'Print 1 to n replacing multiples of 3 with Fizz, 5 with Buzz, both with FizzBuzz.',
    difficulty: 'easy',
    category: 'Java',
    constraints: '1 <= n <= 10^4',
    inputFormat: 'One integer n',
    outputFormat: 'FizzBuzz sequence',
    sampleInput: '15',
    sampleOutput: '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz',
    testCases: [{ input: '15', expectedOutput: '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz', isHidden: false }],
    starterCode: [{ language: 'java', template: 'import java.util.*;\npublic class Solution {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    int n = sc.nextInt();\n    // Your code\n  }\n}' }]
  },
  {
    _id: 'local-java-22',
    title: 'Reverse a Number',
    description: 'Reverse the digits of an integer.',
    difficulty: 'easy',
    category: 'Java',
    constraints: '-2^31 <= n <= 2^31 - 1',
    inputFormat: 'One integer',
    outputFormat: 'Reversed number',
    sampleInput: '1234',
    sampleOutput: '4321',
    testCases: [{ input: '1234', expectedOutput: '4321', isHidden: false }],
    starterCode: [{ language: 'java', template: 'import java.util.*;\npublic class Solution {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    int n = sc.nextInt();\n    // Reverse digits\n  }\n}' }]
  },
  {
    _id: 'local-java-23',
    title: 'Count Digits in a Number',
    description: 'Count the number of digits in an integer.',
    difficulty: 'easy',
    category: 'Java',
    constraints: '0 <= n <= 10^9',
    inputFormat: 'One integer',
    outputFormat: 'Number of digits',
    sampleInput: '12345',
    sampleOutput: '5',
    testCases: [{ input: '12345', expectedOutput: '5', isHidden: false }],
    starterCode: [{ language: 'java', template: 'import java.util.*;\npublic class Solution {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    int n = sc.nextInt();\n    // Count digits\n  }\n}' }]
  },
  {
    _id: 'local-java-24',
    title: 'Check Anagram',
    description: 'Check if two strings are anagrams of each other.',
    difficulty: 'easy',
    category: 'Java',
    constraints: '1 <= length <= 10^5',
    inputFormat: 'Two strings',
    outputFormat: 'true or false',
    sampleInput: 'listen silent',
    sampleOutput: 'true',
    testCases: [{ input: 'listen silent', expectedOutput: 'true', isHidden: false }],
    starterCode: [{ language: 'java', template: 'import java.util.*;\npublic class Solution {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    String s1 = sc.next();\n    String s2 = sc.next();\n    // Check anagram\n  }\n}' }]
  },
  {
    _id: 'local-java-25',
    title: 'Remove Duplicates from Sorted Array',
    description: 'Remove duplicates in-place from sorted array.',
    difficulty: 'easy',
    category: 'Java',
    constraints: '1 <= n <= 3 * 10^4',
    inputFormat: 'Sorted array',
    outputFormat: 'Number of unique elements',
    sampleInput: '[1,1,2]',
    sampleOutput: '2',
    testCases: [{ input: '[1,1,2]', expectedOutput: '2', isHidden: false }],
    starterCode: [{ language: 'java', template: 'import java.util.*;\npublic class Solution {\n  public int removeDuplicates(int[] nums) {\n    // Your code\n  }\n}' }]
  },
  {
    _id: 'local-java-26',
    title: 'Find Missing Number',
    description: 'Find the missing number in array containing n distinct numbers from 0 to n.',
    difficulty: 'easy',
    category: 'Java',
    constraints: '1 <= n <= 10^4',
    inputFormat: 'Array of n numbers',
    outputFormat: 'Missing number',
    sampleInput: '[3,0,1]',
    sampleOutput: '2',
    testCases: [{ input: '[3,0,1]', expectedOutput: '2', isHidden: false }],
    starterCode: [{ language: 'java', template: 'import java.util.*;\npublic class Solution {\n  public int missingNumber(int[] nums) {\n    // Your code\n  }\n}' }]
  },
  {
    _id: 'local-java-27',
    title: 'Climbing Stairs',
    description: 'Count distinct ways to climb n stairs (1 or 2 steps at a time).',
    difficulty: 'easy',
    category: 'Java',
    constraints: '1 <= n <= 45',
    inputFormat: 'One integer n',
    outputFormat: 'Number of distinct ways',
    sampleInput: '3',
    sampleOutput: '3',
    testCases: [{ input: '3', expectedOutput: '3', isHidden: false }],
    starterCode: [{ language: 'java', template: 'public class Solution {\n  public int climbStairs(int n) {\n    // Your code\n  }\n}' }]
  },
  {
    _id: 'local-java-28',
    title: 'Longest Common Prefix',
    description: 'Find the longest common prefix string among an array of strings.',
    difficulty: 'easy',
    category: 'Java',
    constraints: '1 <= strs.length <= 200',
    inputFormat: 'Array of strings',
    outputFormat: 'Longest common prefix',
    sampleInput: '["flower","flow","flight"]',
    sampleOutput: 'fl',
    testCases: [{ input: '["flower","flow","flight"]', expectedOutput: 'fl', isHidden: false }],
    starterCode: [{ language: 'java', template: 'import java.util.*;\npublic class Solution {\n  public String longestCommonPrefix(String[] strs) {\n    // Your code\n  }\n}' }]
  },
  {
    _id: 'local-java-29',
    title: 'Majority Element',
    description: 'Find the element that appears more than n/2 times.',
    difficulty: 'easy',
    category: 'Java',
    constraints: '1 <= n <= 10^4',
    inputFormat: 'Array of integers',
    outputFormat: 'Majority element',
    sampleInput: '[2,2,1,1,1,2,2]',
    sampleOutput: '2',
    testCases: [{ input: '[2,2,1,1,1,2,2]', expectedOutput: '2', isHidden: false }],
    starterCode: [{ language: 'java', template: 'import java.util.*;\npublic class Solution {\n  public int majorityElement(int[] nums) {\n    // Your code\n  }\n}' }]
  },
  {
    _id: 'local-java-30',
    title: 'Design HashMap',
    description: 'Implement a HashMap without using built-in libraries.',
    difficulty: 'medium',
    category: 'Java',
    constraints: '0 <= key <= 10^6',
    inputFormat: 'Operations: put, get, remove',
    outputFormat: 'Results of get operations',
    sampleInput: 'MyHashMap(); put(1,1); put(2,2); get(1); get(3); put(2,1); get(2)',
    sampleOutput: '1 -1 1',
    testCases: [{ input: 'MyHashMap(); put(1,1); put(2,2); get(1); get(3); put(2,1); get(2)', expectedOutput: '1 -1 1', isHidden: false }],
    starterCode: [{ language: 'java', template: 'class MyHashMap {\n  public MyHashMap() {}\n  public void put(int key, int value) {}\n  public int get(int key) { return -1; }\n  public void remove(int key) {}\n}' }]
  },


  // PYTHON - EXPANDED
  {
    _id: 'local-python-21',
    title: 'Check Armstrong Number',
    description: 'Check if a number is an Armstrong number.',
    difficulty: 'easy',
    category: 'Python',
    constraints: '1 <= n <= 10^9',
    inputFormat: 'One integer',
    outputFormat: 'true or false',
    sampleInput: '153',
    sampleOutput: 'true',
    testCases: [{ input: '153', expectedOutput: 'true', isHidden: false }],
    starterCode: [{ language: 'python', template: 'n = int(input())\n# Check Armstrong' }]
  },
  {
    _id: 'local-python-22',
    title: 'Generate Pascal Triangle',
    description: 'Generate first n rows of Pascal Triangle.',
    difficulty: 'easy',
    category: 'Python',
    constraints: '1 <= n <= 30',
    inputFormat: 'One integer n',
    outputFormat: 'Pascal Triangle rows',
    sampleInput: '5',
    sampleOutput: '[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]',
    testCases: [{ input: '5', expectedOutput: '[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]', isHidden: false }],
    starterCode: [{ language: 'python', template: 'n = int(input())\n# Generate Pascal Triangle' }]
  },
  {
    _id: 'local-python-23',
    title: 'Matrix Transpose',
    description: 'Find the transpose of a given matrix.',
    difficulty: 'easy',
    category: 'Python',
    constraints: '1 <= rows, cols <= 100',
    inputFormat: 'Matrix dimensions followed by matrix',
    outputFormat: 'Transposed matrix',
    sampleInput: '2 3\n1 2 3\n4 5 6',
    sampleOutput: '1 4\n2 5\n3 6',
    testCases: [{ input: '2 3\n1 2 3\n4 5 6', expectedOutput: '1 4\n2 5\n3 6', isHidden: false }],
    starterCode: [{ language: 'python', template: 'rows, cols = map(int, input().split())\nmatrix = [list(map(int, input().split())) for _ in range(rows)]\n# Transpose matrix' }]
  },
  {
    _id: 'local-python-24',
    title: 'Count Words in String',
    description: 'Count the number of words in a string.',
    difficulty: 'easy',
    category: 'Python',
    constraints: '1 <= length <= 10^4',
    inputFormat: 'A string',
    outputFormat: 'Number of words',
    sampleInput: 'Hello World from Python',
    sampleOutput: '4',
    testCases: [{ input: 'Hello World from Python', expectedOutput: '4', isHidden: false }],
    starterCode: [{ language: 'python', template: 's = input()\n# Count words' }]
  },
  {
    _id: 'local-python-25',
    title: 'Check Perfect Number',
    description: 'Check if a number equals the sum of its proper divisors.',
    difficulty: 'easy',
    category: 'Python',
    constraints: '1 <= n <= 10^8',
    inputFormat: 'One integer',
    outputFormat: 'true or false',
    sampleInput: '28',
    sampleOutput: 'true',
    testCases: [{ input: '28', expectedOutput: 'true', isHidden: false }],
    starterCode: [{ language: 'python', template: 'n = int(input())\n# Check perfect number' }]
  },
  {
    _id: 'local-python-26',
    title: 'Find Second Largest',
    description: 'Find the second largest element in an array.',
    difficulty: 'easy',
    category: 'Python',
    constraints: '2 <= n <= 10^5',
    inputFormat: 'Array of integers',
    outputFormat: 'Second largest element',
    sampleInput: '[10, 5, 20, 8]',
    sampleOutput: '10',
    testCases: [{ input: '[10, 5, 20, 8]', expectedOutput: '10', isHidden: false }],
    starterCode: [{ language: 'python', template: 'arr = list(map(int, input().split()))\n# Find second largest' }]
  },
  {
    _id: 'local-python-27',
    title: 'Flatten Nested List',
    description: 'Flatten a nested list structure.',
    difficulty: 'medium',
    category: 'Python',
    constraints: '0 <= depth <= 100',
    inputFormat: 'Nested list',
    outputFormat: 'Flattened list',
    sampleInput: '[1, [2, 3], [4, [5, 6]]]',
    sampleOutput: '[1, 2, 3, 4, 5, 6]',
    testCases: [{ input: '[1, [2, 3], [4, [5, 6]]]', expectedOutput: '[1, 2, 3, 4, 5, 6]', isHidden: false }],
    starterCode: [{ language: 'python', template: 'def flatten(lst):\n    # Your code\n    pass' }]
  },
  {
    _id: 'local-python-28',
    title: 'Check Balanced Brackets',
    description: 'Check if brackets in string are balanced.',
    difficulty: 'medium',
    category: 'Python',
    constraints: '1 <= length <= 10^4',
    inputFormat: 'String with brackets',
    outputFormat: 'true or false',
    sampleInput: '()[]{}',
    sampleOutput: 'true',
    testCases: [{ input: '()[]{}', expectedOutput: 'true', isHidden: false }],
    starterCode: [{ language: 'python', template: 's = input()\n# Check balanced brackets' }]
  },
  {
    _id: 'local-python-29',
    title: 'Generate Combinations',
    description: 'Generate all combinations of k elements from n elements.',
    difficulty: 'medium',
    category: 'Python',
    constraints: '1 <= k <= n <= 20',
    inputFormat: 'n and k',
    outputFormat: 'All combinations',
    sampleInput: '4 2',
    sampleOutput: '[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]',
    testCases: [{ input: '4 2', expectedOutput: '[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]', isHidden: false }],
    starterCode: [{ language: 'python', template: 'from itertools import combinations\nn, k = map(int, input().split())\n# Generate combinations' }]
  },
  {
    _id: 'local-python-30',
    title: 'LRU Cache Python',
    description: 'Implement LRU Cache using OrderedDict.',
    difficulty: 'medium',
    category: 'Python',
    constraints: '1 <= capacity <= 3000',
    inputFormat: 'Capacity and operations',
    outputFormat: 'Results of get operations',
    sampleInput: 'LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)',
    sampleOutput: '1 -1',
    testCases: [{ input: 'LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)', expectedOutput: '1 -1', isHidden: false }],
    starterCode: [{ language: 'python', template: 'from collections import OrderedDict\nclass LRUCache:\n    def __init__(self, capacity):\n        self.cache = OrderedDict()\n        self.capacity = capacity\n    def get(self, key):\n        if key in self.cache:\n            self.cache.move_to_end(key)\n            return self.cache[key]\n        return -1\n    def put(self, key, value):\n        if key in self.cache:\n            self.cache.move_to_end(key)\n        self.cache[key] = value\n        if len(self.cache) > self.capacity:\n            self.cache.popitem(last=False)' }]
  },


  // JAVASCRIPT - EXPANDED
  {
    _id: 'local-javascript-21',
    title: 'Debounce Function',
    description: 'Implement a debounce function that delays invoking fn until after wait ms.',
    difficulty: 'medium',
    category: 'JavaScript',
    constraints: '0 <= wait <= 10^4',
    inputFormat: 'Function and wait time',
    outputFormat: 'Debounced function',
    sampleInput: 'debounce(fn, 100)',
    sampleOutput: 'Debounced function',
    testCases: [{ input: 'debounce(fn, 100)', expectedOutput: 'Debounced function', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'var debounce = function(fn, wait) {\n  // Your code\n};' }]
  },
  {
    _id: 'local-javascript-22',
    title: 'Throttle Function',
    description: 'Implement a throttle function that limits how often fn can be called.',
    difficulty: 'medium',
    category: 'JavaScript',
    constraints: '0 <= limit <= 10^4',
    inputFormat: 'Function and limit time',
    outputFormat: 'Throttled function',
    sampleInput: 'throttle(fn, 100)',
    sampleOutput: 'Throttled function',
    testCases: [{ input: 'throttle(fn, 100)', expectedOutput: 'Throttled function', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'var throttle = function(fn, limit) {\n  // Your code\n};' }]
  },
  {
    _id: 'local-javascript-23',
    title: 'Deep Clone Object',
    description: 'Implement deep clone for nested objects without using JSON.parse(JSON.stringify).',
    difficulty: 'medium',
    category: 'JavaScript',
    constraints: 'Object depth <= 100',
    inputFormat: 'Nested object',
    outputFormat: 'Deep cloned object',
    sampleInput: '{ a: 1, b: { c: 2 } }',
    sampleOutput: '{ a: 1, b: { c: 2 } } (different reference)',
    testCases: [{ input: '{ a: 1, b: { c: 2 } }', expectedOutput: '{ a: 1, b: { c: 2 } }', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'var deepClone = function(obj) {\n  // Your code\n};' }]
  },
  {
    _id: 'local-javascript-24',
    title: 'Promise.all Implementation',
    description: 'Implement your own Promise.all from scratch.',
    difficulty: 'hard',
    category: 'JavaScript',
    constraints: 'Array of promises',
    inputFormat: 'Array of promises',
    outputFormat: 'Promise that resolves to array of results',
    sampleInput: '[Promise.resolve(1), Promise.resolve(2)]',
    sampleOutput: 'Promise that resolves to [1, 2]',
    testCases: [{ input: '[Promise.resolve(1), Promise.resolve(2)]', expectedOutput: '[1, 2]', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'var promiseAll = function(promises) {\n  // Your code\n};' }]
  },
  {
    _id: 'local-javascript-25',
    title: 'Flatten Array',
    description: 'Flatten a deeply nested array to any depth.',
    difficulty: 'medium',
    category: 'JavaScript',
    constraints: '0 <= depth <= 100',
    inputFormat: 'Nested array',
    outputFormat: 'Flattened array',
    sampleInput: '[1, [2, [3, [4]]]]',
    sampleOutput: '[1, 2, 3, 4]',
    testCases: [{ input: '[1, [2, [3, [4]]]]', expectedOutput: '[1, 2, 3, 4]', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'var flatten = function(arr) {\n  // Your code\n};' }]
  },
  {
    _id: 'local-javascript-26',
    title: 'Memoize Function',
    description: 'Implement a memoize function that caches results of expensive function calls.',
    difficulty: 'medium',
    category: 'JavaScript',
    constraints: 'Single argument function',
    inputFormat: 'Function',
    outputFormat: 'Memoized function',
    sampleInput: 'memoize(fn)',
    sampleOutput: 'Memoized function',
    testCases: [{ input: 'memoize(fn)', expectedOutput: 'Memoized function', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'var memoize = function(fn) {\n  // Your code\n};' }]
  },
  {
    _id: 'local-javascript-27',
    title: 'Event Emitter',
    description: 'Implement a simple Event Emitter with on, off, and emit methods.',
    difficulty: 'medium',
    category: 'JavaScript',
    constraints: 'Multiple events and listeners',
    inputFormat: 'Events and listeners',
    outputFormat: 'Events emitted to listeners',
    sampleInput: 'on("click", handler); emit("click", data)',
    sampleOutput: 'handler called with data',
    testCases: [{ input: 'on("click", handler); emit("click", data)', expectedOutput: 'handler called with data', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'class EventEmitter {\n  constructor() { this.events = {}; }\n  on(event, listener) {}\n  off(event, listener) {}\n  emit(event, ...args) {}\n}' }]
  },
  {
    _id: 'local-javascript-28',
    title: 'Curry Function',
    description: 'Implement curry function that converts f(a,b,c) into f(a)(b)(c).',
    difficulty: 'medium',
    category: 'JavaScript',
    constraints: 'Any number of arguments',
    inputFormat: 'Function',
    outputFormat: 'Curried function',
    sampleInput: 'curry(sum)(1)(2)(3)',
    sampleOutput: '6',
    testCases: [{ input: 'curry(sum)(1)(2)(3)', expectedOutput: '6', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'var curry = function(fn) {\n  // Your code\n};' }]
  },
  {
    _id: 'local-javascript-29',
    title: 'Infinite Currying',
    description: 'Implement infinite currying that can take any number of arguments.',
    difficulty: 'hard',
    category: 'JavaScript',
    constraints: 'Infinite arguments',
    inputFormat: 'Function',
    outputFormat: 'Curried function that works with any args',
    sampleInput: 'sum(1)(2)(3)()',
    sampleOutput: '6',
    testCases: [{ input: 'sum(1)(2)(3)()', expectedOutput: '6', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'var infiniteCurry = function(fn) {\n  // Your code\n};' }]
  },
  {
    _id: 'local-javascript-30',
    title: 'Promise.allSettled Implementation',
    description: 'Implement Promise.allSettled that waits for all promises to settle.',
    difficulty: 'hard',
    category: 'JavaScript',
    constraints: 'Array of promises',
    inputFormat: 'Array of promises',
    outputFormat: 'Promise with status and value/reason',
    sampleInput: '[Promise.resolve(1), Promise.reject(2)]',
    sampleOutput: '[{status:"fulfilled",value:1},{status:"rejected",reason:2}]',
    testCases: [{ input: '[Promise.resolve(1), Promise.reject(2)]', expectedOutput: '[{status:"fulfilled",value:1},{status:"rejected",reason:2}]', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'var allSettled = function(promises) {\n  // Your code\n};' }]
  },


  // HTML/CSS - EXPANDED
  {
    _id: 'local-html-11',
    title: 'Semantic HTML Layout',
    description: 'Create a semantic HTML5 page with header, nav, main, article, aside, and footer.',
    difficulty: 'easy',
    category: 'HTML',
    constraints: 'Use only semantic tags',
    inputFormat: 'Page content requirements',
    outputFormat: 'Semantic HTML structure',
    sampleInput: 'Blog page with header, nav, article, sidebar, footer',
    sampleOutput: 'Proper semantic HTML',
    testCases: [{ input: 'Blog page', expectedOutput: 'Semantic HTML structure', isHidden: false }],
    starterCode: [{ language: 'html', template: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Blog</title>\n</head>\n<body>\n  <!-- Add semantic elements -->\n</body>\n</html>' }]
  },
  {
    _id: 'local-html-12',
    title: 'HTML Form Validation',
    description: 'Create a registration form with proper HTML5 validation attributes.',
    difficulty: 'easy',
    category: 'HTML',
    constraints: 'Use native HTML5 validation',
    inputFormat: 'Form requirements: name, email, password, phone',
    outputFormat: 'Validated HTML form',
    sampleInput: 'Registration form',
    sampleOutput: 'Form with validation',
    testCases: [{ input: 'Registration form', expectedOutput: 'Validated HTML form', isHidden: false }],
    starterCode: [{ language: 'html', template: '<form>\n  <!-- Add inputs with validation -->\n</form>' }]
  },
  {
    _id: 'local-css-11',
    title: 'CSS Grid Layout',
    description: 'Create a responsive grid layout using CSS Grid with auto-fit and minmax.',
    difficulty: 'easy',
    category: 'CSS',
    constraints: 'Responsive for all screen sizes',
    inputFormat: 'Grid requirements',
    outputFormat: 'Responsive CSS Grid layout',
    sampleInput: '3-column responsive grid',
    sampleOutput: 'CSS Grid with auto-fit',
    testCases: [{ input: '3-column responsive grid', expectedOutput: 'CSS Grid layout', isHidden: false }],
    starterCode: [{ language: 'css', template: '.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}' }]
  },
  {
    _id: 'local-css-12',
    title: 'CSS Flexbox Centering',
    description: 'Center an element both horizontally and vertically using Flexbox.',
    difficulty: 'easy',
    category: 'CSS',
    constraints: 'Use only Flexbox',
    inputFormat: 'Element to center',
    outputFormat: 'Centered element',
    sampleInput: 'Div inside container',
    sampleOutput: 'Perfectly centered div',
    testCases: [{ input: 'Div inside container', expectedOutput: 'Centered div', isHidden: false }],
    starterCode: [{ language: 'css', template: '.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}' }]
  },
  {
    _id: 'local-css-13',
    title: 'CSS Animations',
    description: 'Create a smooth CSS animation for a loading spinner.',
    difficulty: 'medium',
    category: 'CSS',
    constraints: 'Use keyframes and transforms',
    inputFormat: 'Spinner design',
    outputFormat: 'Animated loading spinner',
    sampleInput: 'Circle spinner',
    sampleOutput: 'Rotating spinner animation',
    testCases: [{ input: 'Circle spinner', expectedOutput: 'Animated spinner', isHidden: false }],
    starterCode: [{ language: 'css', template: '@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n.spinner {\n  animation: spin 1s linear infinite;\n}' }]
  },
  {
    _id: 'local-css-14',
    title: 'Responsive Navbar',
    description: 'Create a responsive navigation bar that collapses on mobile.',
    difficulty: 'medium',
    category: 'CSS',
    constraints: 'Mobile-first approach',
    inputFormat: 'Navigation links',
    outputFormat: 'Responsive navbar',
    sampleInput: 'Home, About, Contact links',
    sampleOutput: 'Responsive navbar with hamburger menu',
    testCases: [{ input: 'Nav links', expectedOutput: 'Responsive navbar', isHidden: false }],
    starterCode: [{ language: 'css', template: '.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n}\n@media (max-width: 768px) {\n  .nav-links {\n    display: none;\n  }\n}' }]
  },


  // REACT - EXPANDED
  {
    _id: 'local-react-11',
    title: 'useLocalStorage Hook',
    description: 'Create a custom hook that persists state to localStorage.',
    difficulty: 'medium',
    category: 'React',
    constraints: 'Must sync with localStorage',
    inputFormat: 'Key and initial value',
    outputFormat: 'Hook returning [value, setValue]',
    sampleInput: 'useLocalStorage("theme", "dark")',
    sampleOutput: 'Persisted state value',
    testCases: [{ input: 'useLocalStorage("theme", "dark")', expectedOutput: 'Persisted value', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'import { useState, useEffect } from "react";\n\nfunction useLocalStorage(key, initialValue) {\n  // Your code\n}' }]
  },
  {
    _id: 'local-react-12',
    title: 'useFetch Hook',
    description: 'Create a custom hook for data fetching with loading and error states.',
    difficulty: 'medium',
    category: 'React',
    constraints: 'Handle loading, error, and success states',
    inputFormat: 'URL',
    outputFormat: 'Hook returning { data, loading, error }',
    sampleInput: 'useFetch("https://api.example.com/data")',
    sampleOutput: '{ data, loading, error }',
    testCases: [{ input: 'useFetch(url)', expectedOutput: '{ data, loading, error }', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'import { useState, useEffect } from "react";\n\nfunction useFetch(url) {\n  // Your code\n}' }]
  },
  {
    _id: 'local-react-13',
    title: 'useDebounce Hook',
    description: 'Create a custom hook that debounces a value.',
    difficulty: 'medium',
    category: 'React',
    constraints: 'Must clean up on unmount',
    inputFormat: 'Value and delay',
    outputFormat: 'Debounced value',
    sampleInput: 'useDebounce(searchTerm, 500)',
    sampleOutput: 'Debounced search term',
    testCases: [{ input: 'useDebounce(value, 500)', expectedOutput: 'Debounced value', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'import { useState, useEffect } from "react";\n\nfunction useDebounce(value, delay) {\n  // Your code\n}' }]
  },
  {
    _id: 'local-react-14',
    title: 'useToggle Hook',
    description: 'Create a custom hook for boolean toggle state.',
    difficulty: 'easy',
    category: 'React',
    constraints: 'Simple toggle functionality',
    inputFormat: 'Initial value',
    outputFormat: 'Hook returning [value, toggle, setValue]',
    sampleInput: 'useToggle(false)',
    sampleOutput: '[false, toggleFn, setValue]',
    testCases: [{ input: 'useToggle(false)', expectedOutput: '[false, toggle, set]', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'import { useState, useCallback } from "react";\n\nfunction useToggle(initialValue = false) {\n  // Your code\n}' }]
  },
  {
    _id: 'local-react-15',
    title: 'useWindowSize Hook',
    description: 'Create a custom hook that tracks window size changes.',
    difficulty: 'medium',
    category: 'React',
    constraints: 'Update on resize',
    inputFormat: 'None',
    outputFormat: '{ width, height }',
    sampleInput: 'useWindowSize()',
    sampleOutput: '{ width: 1024, height: 768 }',
    testCases: [{ input: 'useWindowSize()', expectedOutput: '{ width, height }', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'import { useState, useEffect } from "react";\n\nfunction useWindowSize() {\n  // Your code\n}' }]
  },


  // NODE.JS / EXPRESS - EXPANDED
  {
    _id: 'local-node-11',
    title: 'REST API CRUD Operations',
    description: 'Create a complete REST API with CRUD operations using Express.',
    difficulty: 'medium',
    category: 'Node.js',
    constraints: 'Follow RESTful conventions',
    inputFormat: 'HTTP requests',
    outputFormat: 'JSON responses',
    sampleInput: 'GET /api/users, POST /api/users',
    sampleOutput: 'User data',
    testCases: [{ input: 'GET /api/users', expectedOutput: 'Array of users', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'const express = require("express");\nconst app = express();\napp.use(express.json());\n// Create routes\napp.listen(3000);' }]
  },
  {
    _id: 'local-node-12',
    title: 'JWT Authentication Middleware',
    description: 'Implement JWT authentication middleware for Express routes.',
    difficulty: 'medium',
    category: 'Node.js',
    constraints: 'Secure token validation',
    inputFormat: 'Request with Authorization header',
    outputFormat: 'Authenticated request or 401',
    sampleInput: 'Authorization: Bearer token',
    sampleOutput: '200 OK or 401 Unauthorized',
    testCases: [{ input: 'Valid token', expectedOutput: '200 OK', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'const jwt = require("jsonwebtoken");\nfunction authMiddleware(req, res, next) {\n  // Verify token\n}' }]
  },
  {
    _id: 'local-node-13',
    title: 'File Upload with Multer',
    description: 'Implement file upload functionality using Multer middleware.',
    difficulty: 'medium',
    category: 'Node.js',
    constraints: 'Handle single and multiple files',
    inputFormat: 'Multipart form data',
    outputFormat: 'File path or error',
    sampleInput: 'POST /upload with file',
    sampleOutput: 'File saved successfully',
    testCases: [{ input: 'Valid file upload', expectedOutput: 'File saved', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'const multer = require("multer");\nconst upload = multer({ dest: "uploads/" });\napp.post("/upload", upload.single("file"), (req, res) => {\n  // Handle file\n});' }]
  },
  {
    _id: 'local-node-14',
    title: 'Rate Limiting Middleware',
    description: 'Implement rate limiting to prevent API abuse.',
    difficulty: 'medium',
    category: 'Node.js',
    constraints: 'Configurable limits',
    inputFormat: 'Request count and time window',
    outputFormat: 'Allow or 429 Too Many Requests',
    sampleInput: '100 requests per 15 minutes',
    sampleOutput: 'Rate limit response',
    testCases: [{ input: '100 requests in 15min', expectedOutput: '429 after limit', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'const rateLimit = require("express-rate-limit");\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000,\n  max: 100\n});\napp.use("/api", limiter);' }]
  },
  {
    _id: 'local-node-15',
    title: 'WebSocket Chat Server',
    description: 'Create a real-time chat server using WebSocket.',
    difficulty: 'hard',
    category: 'Node.js',
    constraints: 'Handle multiple clients',
    inputFormat: 'WebSocket messages',
    outputFormat: 'Broadcast messages',
    sampleInput: 'Client sends message',
    sampleOutput: 'All clients receive message',
    testCases: [{ input: 'Message sent', expectedOutput: 'Broadcast received', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'const WebSocket = require("ws");\nconst wss = new WebSocket.Server({ port: 8080 });\nwss.on("connection", (ws) => {\n  // Handle messages\n});' }]
  },


  // MONGODB / SQL - EXPANDED
  {
    _id: 'local-mongodb-11',
    title: 'MongoDB Aggregation Pipeline',
    description: 'Create an aggregation pipeline to calculate average order value by customer.',
    difficulty: 'hard',
    category: 'MongoDB',
    constraints: 'Use aggregation stages',
    inputFormat: 'Orders collection',
    outputFormat: 'Average order value per customer',
    sampleInput: 'Orders with customerId and total',
    sampleOutput: '[{ _id: "cust1", avgOrder: 150.5 }]',
    testCases: [{ input: 'Orders collection', expectedOutput: 'Aggregated results', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'db.orders.aggregate([\n  { $group: { _id: "$customerId", avgOrder: { $avg: "$total" } } }\n]);' }]
  },
  {
    _id: 'local-mongodb-12',
    title: 'MongoDB Text Search',
    description: 'Implement full-text search on a products collection.',
    difficulty: 'medium',
    category: 'MongoDB',
    constraints: 'Create and use text index',
    inputFormat: 'Search query',
    outputFormat: 'Matching documents with score',
    sampleInput: 'Search for "wireless headphones"',
    sampleOutput: 'Products matching search',
    testCases: [{ input: 'wireless headphones', expectedOutput: 'Matching products', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'db.products.createIndex({ name: "text", description: "text" });\ndb.products.find({ $text: { $search: "wireless headphones" } });' }]
  },
  {
    _id: 'local-sql-11',
    title: 'SQL Joins Practice',
    description: 'Write SQL queries using INNER, LEFT, RIGHT, and FULL JOIN.',
    difficulty: 'medium',
    category: 'SQL',
    constraints: 'Multiple table joins',
    inputFormat: 'Tables: users, orders, products',
    outputFormat: 'Joined query results',
    sampleInput: 'Get all users with their orders',
    sampleOutput: 'User-order joined data',
    testCases: [{ input: 'users JOIN orders', expectedOutput: 'Joined data', isHidden: false }],
    starterCode: [{ language: 'sql', template: 'SELECT * FROM users\nINNER JOIN orders ON users.id = orders.user_id;' }]
  },
  {
    _id: 'local-sql-12',
    title: 'SQL Subqueries',
    description: 'Write subqueries to find customers who placed orders above average.',
    difficulty: 'medium',
    category: 'SQL',
    constraints: 'Use subqueries in WHERE and FROM',
    inputFormat: 'Customers and orders tables',
    outputFormat: 'Customers with above-average orders',
    sampleInput: 'Find customers with orders > avg',
    sampleOutput: 'Customer list',
    testCases: [{ input: 'Orders above average', expectedOutput: 'Customer list', isHidden: false }],
    starterCode: [{ language: 'sql', template: 'SELECT * FROM customers\nWHERE customer_id IN (\n  SELECT customer_id FROM orders\n  WHERE amount > (SELECT AVG(amount) FROM orders)\n);' }]
  },
  {
    _id: 'local-sql-13',
    title: 'SQL Window Functions',
    description: 'Use window functions to rank products by sales within each category.',
    difficulty: 'hard',
    category: 'SQL',
    constraints: 'Use RANK, ROW_NUMBER, or DENSE_RANK',
    inputFormat: 'Products with category and sales',
    outputFormat: 'Products with rank',
    sampleInput: 'Products ranked by sales in category',
    sampleOutput: 'Ranked product list',
    testCases: [{ input: 'Products by category', expectedOutput: 'Ranked results', isHidden: false }],
    starterCode: [{ language: 'sql', template: 'SELECT *,\n  RANK() OVER (PARTITION BY category ORDER BY sales DESC) as rank\nFROM products;' }]
  },
  {
    _id: 'local-mongodb-13',
    title: 'MongoDB Schema Design',
    description: 'Design a schema for an e-commerce platform with embedded and referenced documents.',
    difficulty: 'hard',
    category: 'MongoDB',
    constraints: 'Consider read/write patterns',
    inputFormat: 'E-commerce requirements',
    outputFormat: 'Optimized schema',
    sampleInput: 'Products, orders, reviews, users',
    sampleOutput: 'Optimized MongoDB schema',
    testCases: [{ input: 'E-commerce design', expectedOutput: 'Schema design', isHidden: false }],
    starterCode: [{ language: 'javascript', template: 'const productSchema = new mongoose.Schema({\n  name: String,\n  price: Number,\n  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }\n});' }]
  },


  // DATA STRUCTURES - EXPANDED
  {
    _id: 'local-ds-21',
    title: 'Implement Stack Using Array',
    description: 'Implement a stack data structure using an array with push, pop, peek, and isEmpty operations.',
    difficulty: 'easy',
    category: 'Data Structures',
    constraints: '1 <= capacity <= 10^4',
    inputFormat: 'Stack operations',
    outputFormat: 'Operation results',
    sampleInput: 'push(1), push(2), peek(), pop()',
    sampleOutput: '1 2 2',
    testCases: [{ input: 'push(1) push(2) peek() pop()', expectedOutput: '1 2 2', isHidden: false }],
    starterCode: [{ language: 'c++', template: 'class Stack {\nprivate:\n  int arr[10000];\n  int top;\npublic:\n  Stack() { top = -1; }\n  void push(int x) { // Your code }\n  int pop() { // Your code }\n  int peek() { // Your code }\n  bool isEmpty() { // Your code }\n};' }]
  },
  {
    _id: 'local-ds-22',
    title: 'Implement Queue Using Array',
    description: 'Implement a queue using an array with enqueue, dequeue, front, and isEmpty operations.',
    difficulty: 'easy',
    category: 'Data Structures',
    constraints: '1 <= capacity <= 10^4',
    inputFormat: 'Queue operations',
    outputFormat: 'Operation results',
    sampleInput: 'enqueue(1), enqueue(2), front(), dequeue()',
    sampleOutput: '1 1',
    testCases: [{ input: 'enqueue(1) enqueue(2) front() dequeue()', expectedOutput: '1 1', isHidden: false }],
    starterCode: [{ language: 'c++', template: 'class Queue {\nprivate:\n  int arr[10000];\n  int front, rear;\npublic:\n  Queue() { front = rear = -1; }\n  void enqueue(int x) { // Your code }\n  int dequeue() { // Your code }\n  int getFront() { // Your code }\n  bool isEmpty() { // Your code }\n};' }]
  },
  {
    _id: 'local-ds-23',
    title: 'Implement Binary Search Tree',
    description: 'Implement BST with insert, search, and in-order traversal.',
    difficulty: 'medium',
    category: 'Data Structures',
    constraints: '1 <= n <= 10^4',
    inputFormat: 'Values to insert',
    outputFormat: 'In-order traversal',
    sampleInput: '5,3,7,1,4',
    sampleOutput: '1 3 4 5 7',
    testCases: [{ input: '5 3 7 1 4', expectedOutput: '1 3 4 5 7', isHidden: false }],
    starterCode: [{ language: 'c++', template: 'struct TreeNode {\n  int val;\n  TreeNode *left, *right;\n};\nclass BST {\npublic:\n  TreeNode* insert(TreeNode* root, int val) { // Your code }\n  TreeNode* search(TreeNode* root, int val) { // Your code }\n};' }]
  },
  {
    _id: 'local-ds-24',
    title: 'Implement Min Heap',
    description: 'Implement a min heap with insert, extractMin, and peek operations.',
    difficulty: 'medium',
    category: 'Data Structures',
    constraints: '1 <= capacity <= 10^4',
    inputFormat: 'Heap operations',
    outputFormat: 'Operation results',
    sampleInput: 'insert(5), insert(3), extractMin(), peek()',
    sampleOutput: '3 5',
    testCases: [{ input: 'insert(5) insert(3) extractMin() peek()', expectedOutput: '3 5', isHidden: false }],
    starterCode: [{ language: 'c++', template: 'class MinHeap {\nprivate:\n  vector<int> heap;\npublic:\n  void insert(int val) { // Your code }\n  int extractMin() { // Your code }\n  int peek() { // Your code }\n};' }]
  },
  {
    _id: 'local-ds-25',
    title: 'Implement Trie',
    description: 'Implement a trie for storing and searching strings.',
    difficulty: 'hard',
    category: 'Data Structures',
    constraints: '1 <= word.length <= 100',
    inputFormat: 'Words to insert and search',
    outputFormat: 'Search results',
    sampleInput: 'insert("apple"), search("apple"), startsWith("app")',
    sampleOutput: 'true true',
    testCases: [{ input: 'insert apple, search apple, startsWith app', expectedOutput: 'true true', isHidden: false }],
    starterCode: [{ language: 'c++', template: 'struct TrieNode {\n  TrieNode* children[26];\n  bool isEnd;\n};\nclass Trie {\npublic:\n  void insert(string word) { // Your code }\n  bool search(string word) { // Your code }\n  bool startsWith(string prefix) { // Your code }\n};' }]
  },
  {
    _id: 'local-ds-26',
    title: 'Implement Graph BFS',
    description: 'Implement BFS traversal for a graph represented as adjacency list.',
    difficulty: 'medium',
    category: 'Data Structures',
    constraints: '1 <= n <= 10^4',
    inputFormat: 'Graph edges',
    outputFormat: 'BFS traversal order',
    sampleInput: '4 nodes: [[0,1],[0,2],[1,3],[2,3]]',
    sampleOutput: '0 1 2 3',
    testCases: [{ input: 'Graph edges', expectedOutput: '0 1 2 3', isHidden: false }],
    starterCode: [{ language: 'c++', template: 'vector<int> bfs(vector<vector<int>>& adj, int start) {\n  // Your code\n}' }]
  },
  {
    _id: 'local-ds-27',
    title: 'Implement Graph DFS',
    description: 'Implement DFS traversal for a graph (recursive and iterative).',
    difficulty: 'medium',
    category: 'Data Structures',
    constraints: '1 <= n <= 10^4',
    inputFormat: 'Graph edges',
    outputFormat: 'DFS traversal order',
    sampleInput: '4 nodes: [[0,1],[0,2],[1,3],[2,3]]',
    sampleOutput: '0 1 3 2',
    testCases: [{ input: 'Graph edges', expectedOutput: '0 1 3 2', isHidden: false }],
    starterCode: [{ language: 'c++', template: 'vector<int> dfs(vector<vector<int>>& adj, int start) {\n  // Your code\n}' }]
  },


  // ALGORITHMS - EXPANDED
  {
    _id: 'local-algo-21',
    title: 'Quick Sort Implementation',
    description: 'Implement quicksort algorithm with different pivot selection strategies.',
    difficulty: 'medium',
    category: 'Algorithms',
    constraints: '1 <= n <= 10^5',
    inputFormat: 'Unsorted array',
    outputFormat: 'Sorted array',
    sampleInput: '[3,1,4,1,5,9,2,6]',
    sampleOutput: '[1,1,2,3,4,5,6,9]',
    testCases: [{ input: '[3,1,4,1,5,9,2,6]', expectedOutput: '[1,1,2,3,4,5,6,9]', isHidden: false }],
    starterCode: [{ language: 'c++', template: 'void quickSort(vector<int>& arr, int low, int high) {\n  if (low < high) {\n    int pi = partition(arr, low, high);\n    quickSort(arr, low, pi - 1);\n    quickSort(arr, pi + 1, high);\n  }\n}' }]
  },
  {
    _id: 'local-algo-22',
    title: 'Merge Sort Implementation',
    description: 'Implement merge sort with proper merge function.',
    difficulty: 'medium',
    category: 'Algorithms',
    constraints: '1 <= n <= 10^5',
    inputFormat: 'Unsorted array',
    outputFormat: 'Sorted array',
    sampleInput: '[38, 27, 43, 3, 9, 82, 10]',
    sampleOutput: '[3, 9, 10, 27, 38, 43, 82]',
    testCases: [{ input: '[38,27,43,3,9,82,10]', expectedOutput: '[3,9,10,27,38,43,82]', isHidden: false }],
    starterCode: [{ language: 'c++', template: 'void mergeSort(vector<int>& arr, int l, int r) {\n  if (l < r) {\n    int m = l + (r - l) / 2;\n    mergeSort(arr, l, m);\n    mergeSort(arr, m + 1, r);\n    merge(arr, l, m, r);\n  }\n}' }]
  },
  {
    _id: 'local-algo-23',
    title: 'Dijkstra Shortest Path',
    description: "Implement Dijkstra's algorithm to find shortest paths from source.",
    difficulty: 'hard',
    category: 'Algorithms',
    constraints: '1 <= n <= 10^4, weighted graph',
    inputFormat: 'Weighted graph and source',
    outputFormat: 'Shortest distances',
    sampleInput: 'Graph with weights, source=0',
    sampleOutput: 'Shortest distances to all nodes',
    testCases: [{ input: 'Weighted graph', expectedOutput: 'Shortest distances', isHidden: false }],
    starterCode: [{ language: 'c++', template: 'vector<int> dijkstra(vector<vector<pair<int,int>>>& adj, int src) {\n  // Your code\n}' }]
  },
  {
    _id: 'local-algo-24',
    title: 'Knapsack Problem 0/1',
    description: 'Solve 0/1 knapsack using dynamic programming.',
    difficulty: 'hard',
    category: 'Algorithms',
    constraints: '1 <= n <= 100, W <= 10^4',
    inputFormat: 'Weights, values, and capacity',
    outputFormat: 'Maximum value',
    sampleInput: 'weights=[1,2,3], values=[6,10,12], capacity=5',
    sampleOutput: '22',
    testCases: [{ input: 'weights=[1,2,3] values=[6,10,12] W=5', expectedOutput: '22', isHidden: false }],
    starterCode: [{ language: 'c++', template: 'int knapsack(vector<int>& weights, vector<int>& values, int W) {\n  // Your code\n}' }]
  },
  {
    _id: 'local-algo-25',
    title: 'Longest Common Subsequence',
    description: 'Find the length of the longest common subsequence of two strings.',
    difficulty: 'hard',
    category: 'Algorithms',
    constraints: '1 <= m,n <= 1000',
    inputFormat: 'Two strings',
    outputFormat: 'Length of LCS',
    sampleInput: 'ABCBDAB, BDCAB',
    sampleOutput: '4',
    testCases: [{ input: 'ABCBDAB BDCAB', expectedOutput: '4', isHidden: false }],
    starterCode: [{ language: 'c++', template: 'int lcs(string s1, string s2) {\n  // Your code\n}' }]
  },
  {
    _id: 'local-algo-26',
    title: 'Activity Selection Problem',
    description: 'Select maximum number of non-overlapping activities using greedy approach.',
    difficulty: 'medium',
    category: 'Algorithms',
    constraints: '1 <= n <= 10^4',
    inputFormat: 'Start and finish times',
    outputFormat: 'Selected activities',
    sampleInput: 'Activities: [(1,4),(3,5),(0,6),(5,7),(3,9),(5,9),(6,10),(8,11)]',
    sampleOutput: 'Selected activities count',
    testCases: [{ input: 'Activity times', expectedOutput: 'Selected count', isHidden: false }],
    starterCode: [{ language: 'c++', template: 'int activitySelection(vector<pair<int,int>>& activities) {\n  // Your code\n}' }]
  },
  {
    _id: 'local-algo-27',
    title: 'N-Queens Problem',
    description: 'Place N queens on NxN chessboard such that no two queens attack each other.',
    difficulty: 'hard',
    category: 'Algorithms',
    constraints: '1 <= n <= 10',
    inputFormat: 'Board size n',
    outputFormat: 'Valid queen positions',
    sampleInput: '4',
    sampleOutput: 'Number of solutions',
    testCases: [{ input: '4', expectedOutput: '2', isHidden: false }],
    starterCode: [{ language: 'c++', template: 'void solveNQueens(int n) {\n  // Your code\n}' }]
  },


  // TYPESCRIPT - EXPANDED
  {
    _id: 'local-typescript-11',
    title: 'Generic Stack Implementation',
    description: 'Implement a generic Stack class in TypeScript with type safety.',
    difficulty: 'medium',
    category: 'TypeScript',
    constraints: 'Must be type-safe',
    inputFormat: 'Generic type T',
    outputFormat: 'Type-safe stack operations',
    sampleInput: 'Stack<number>',
    sampleOutput: 'Type-safe number stack',
    testCases: [{ input: 'Stack<number>', expectedOutput: 'Type-safe stack', isHidden: false }],
    starterCode: [{ language: 'typescript', template: 'class Stack<T> {\n  private items: T[] = [];\n  push(item: T): void { this.items.push(item); }\n  pop(): T | undefined { return this.items.pop(); }\n  peek(): T | undefined { return this.items[this.items.length - 1]; }\n  isEmpty(): boolean { return this.items.length === 0; }\n}' }]
  },
  {
    _id: 'local-typescript-12',
    title: 'Type-Safe Event Emitter',
    description: 'Create a type-safe event emitter with mapped types.',
    difficulty: 'hard',
    category: 'TypeScript',
    constraints: 'Events must be type-safe',
    inputFormat: 'Event map type',
    outputFormat: 'Type-safe event emitter',
    sampleInput: '{ click: MouseEvent, key: KeyboardEvent }',
    sampleOutput: 'Type-safe emitter',
    testCases: [{ input: 'Event map', expectedOutput: 'Type-safe emitter', isHidden: false }],
    starterCode: [{ language: 'typescript', template: 'type EventMap = Record<string, any[]>;\nclass TypedEmitter<Events extends EventMap> {\n  on<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void): void {}\n  emit<K extends keyof Events>(event: K, ...args: Events[K]): void {}\n}' }]
  },
  {
    _id: 'local-typescript-13',
    title: 'Utility Types Implementation',
    description: 'Implement custom utility types: Partial, Required, Pick, Omit from scratch.',
    difficulty: 'hard',
    category: 'TypeScript',
    constraints: 'Use mapped types',
    inputFormat: 'Interface definition',
    outputFormat: 'Utility type implementations',
    sampleInput: 'User interface',
    sampleOutput: 'Partial<User>, Required<User>, etc.',
    testCases: [{ input: 'User interface', expectedOutput: 'Utility types', isHidden: false }],
    starterCode: [{ language: 'typescript', template: 'type MyPartial<T> = { [P in keyof T]?: T[P]; };\ntype MyRequired<T> = { [P in keyof T]-?: T[P]; };\ntype MyPick<T, K extends keyof T> = { [P in K]: T[P]; };\ntype MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;' }]
  },
  {
    _id: 'local-typescript-14',
    title: 'Discriminated Unions',
    description: 'Use discriminated unions to handle different API response types.',
    difficulty: 'medium',
    category: 'TypeScript',
    constraints: 'Use type narrowing',
    inputFormat: 'API response types',
    outputFormat: 'Type-safe response handling',
    sampleInput: '{ status: "success", data: User } | { status: "error", message: string }',
    sampleOutput: 'Type-safe handling',
    testCases: [{ input: 'API response union', expectedOutput: 'Type-safe handling', isHidden: false }],
    starterCode: [{ language: 'typescript', template: 'type ApiResponse =\n  | { status: "success"; data: unknown }\n  | { status: "error"; message: string }\n  | { status: "loading" };\nfunction handleResponse(response: ApiResponse) {\n  switch (response.status) {\n    case "success": return response.data;\n    case "error": return response.message;\n    case "loading": return null;\n  }\n}' }]
  },
  {
    _id: 'local-typescript-15',
    title: 'Template Literal Types',
    description: 'Use template literal types to create type-safe route handlers.',
    difficulty: 'hard',
    category: 'TypeScript',
    constraints: 'Use template literal inference',
    inputFormat: 'Route patterns',
    outputFormat: 'Type-safe route params',
    sampleInput: '/users/:id/posts/:postId',
    sampleOutput: '{ id: string; postId: string }',
    testCases: [{ input: 'Route pattern', expectedOutput: 'Type-safe params', isHidden: false }],
    starterCode: [{ language: 'typescript', template: 'type ExtractParams<T extends string> =\n  T extends `${string}:${infer Param}/${infer Rest}`\n    ? { [K in Param | keyof ExtractParams<Rest>]: string }\n    : T extends `${string}:${infer Param}`\n    ? { [K in Param]: string }\n    : {};' }]
  },
];

export default localCodingQuestions;
