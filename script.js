const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');

const questions = [
    "What is JavaScript?",
    "How to declare a variable in JavaScript?",
    "What is the DOM?",
    "How to create functions in JavaScript?",
    "What is an array?",
    "How to use 'if' statements in JavaScript?",
    "What are closures?",
    "How does prototypal inheritance work in JavaScript?",
    "What is the difference between '==' and '==='?",
    "How to handle asynchronous code in JavaScript?"
];

const answers = [
    "JavaScript is a programming language that enables interactive web pages.",
    "You can declare a variable using 'var', 'let', or 'const'. For example: 'var x = 5;'",
    "The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a document as a tree of objects.",
    "You can create functions using the 'function' keyword. For example: 'function myFunction() { // code here }'",
    "An array is a data structure that stores a list of elements. For example: 'var myArray = [1, 2, 3];'",
    "You can use 'if' statements to make decisions in JavaScript. For example: 'if (x > 0) { // code here }'",
    "Closures are functions that have access to variables from their outer (enclosing) scope.",
    "Prototypal inheritance in JavaScript allows objects to inherit properties and methods from other objects.",
    "'==' is the equality operator, which performs type coercion. '===' is the strict equality operator, which does not perform type coercion.",
    "You can handle asynchronous code using callbacks, promises, or async/await in JavaScript."
];

function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() !== '') {
        addUserMessage(userMessage);
        const index = questions.indexOf(userMessage);
        const botMessage = index !== -1 ? answers[index] : "I'm sorry, I don't understand that question.";
        addBotMessage(botMessage);
        userInput.value = '';
    }
}

function addUserMessage(message) {
    const userMessageElement = document.createElement('div');
    userMessageElement.className = 'user-message';
    userMessageElement.textContent = message;
    chatBody.appendChild(userMessageElement);
}

function addBotMessage(message) {
    const botMessageElement = document.createElement('div');
    botMessageElement.className = 'bot-message';
    botMessageElement.textContent = message;
    chatBody.appendChild(botMessageElement);
}
