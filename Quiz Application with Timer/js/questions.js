// creating an array and passing the number, questions, options, and answers
let questions = [
   
{
    numb: 0,
    question: "Which of the following has introduced text, list, box, margin, border, color, and background properties?",
    answer: "CSS",
    options: [
      "HTML",
      "PHP",
      "CSS",
      "Ajax"
    ]
  },   {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
  {
    numb: 6,
    question: "All keywords in C are in",
    answer: "LowerCase letters",
    options: [
      "LowerCase letters",
      "UpperCase letters",
      "CamelCase letters",
      "None of the mentioned"
    ]
  },
  {
    numb: 7,
    question: "Which of the following cannot be a variable name in C?",
    answer: "volatile",
    options: [
      "volatile",
      "true",
      "friend",
      "export"
    ]
  },
  {
    numb: 8,
    question: "Which one of the following is not a Java feature?",
    answer: "Use of pointers",
    options: [
      "Object-oriented",
      "Use of pointers",
      "Portable",
      "Dynamic and Extensible"
    ]
  },
  {
    numb: 9	,
    question: "What is the extension of java code files?",
    answer: ".java",
    options: [
      ".js",
      ".txt",
      ".class",
      ".java"
    ]
  },
  {
    numb: 10	,
    question: "What is short int in C programming?",
    answer: "Short is the qualifier and int is the basic data type",
    options: [
      "The basic data type of C",
      "Qualifier",
      "Short is the qualifier and int is the basic data type",
      "All of the mentioned"
    ]
  },
  {
    numb: 11	,
    question: "Which of the following typecasting is accepted by C language?",
    answer: "Widening & Narrowing conversions",
    options: [
      "Widening conversions",
      "Narrowing conversions",
      "Widening & Narrowing conversions",
      "None of the mentioned"
    ]
  },
  {
    numb: 12	,
    question: "Which component is used to compile, debug and execute the java programs?",
    answer: "JDK",
    options: [
      "JRE",
      "JIT",
      "JDK",
      "JVM"
    ]
  },
  {
    numb: 13	,
    question: "Is Python code compiled or interpreted?",
    answer: "Python code is neither compiled nor interpreted",
    options: [
      "Python code is both compiled and interpreted",
      "Python code is neither compiled nor interpreted",
      "Python code is only compiled",
      "Python code is only interpreted"
    ]
  },{
    numb: 14	,
    question: "What is Truncation in Java?",
    answer: "Floating-point value assigned to an integer type",
    options: [
      "Floating-point value assigned to a Floating type",
      "Floating-point value assigned to an integer type",
      "Integer value assigned to floating type",
      "Integer value assigned to floating type"
    ]
  },
  {
    numb: 15	,
    question: "Which of the following is used to define a block of code in Python language?",
    answer: "Indentation",
    options: [
      "Indentation",
      "Key",
      "Brackets",
      "All of the mentioned"
    ]
  },
  {
    numb: 16	,
    question: "Which of the following is not the element associated with the HTML table layout?",
    answer: ".java",
    options: [
      "alignment",
      "color",
      "size",
      "spanning"
    ]
  },
  {
    numb: 17	,
    question: "Which of the following is not javascript data types?",
    answer: "All of the mentioned",
    options: [
      "Null type",
      "Undefined type",
      "Number type",
      "All of the mentioned"
    ]
  },
  {
    numb: 18	,
    question: "In CSS, “font-size” can be called as",
    answer: "Property-Name",
    options: [
      "Property",
      "Selector",
      "Property-Name",
      "Rule"
    ]
  },
  {
    numb: 19	,
    question: "Python supports the creation of anonymous functions at runtime, using a construct called ",
    answer: "lambda",
    options: [
      "pi",
      "anonymous",
      "lambda",
      "none of the mentioned"
    ]
  },
];