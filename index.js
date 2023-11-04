const { Chatbot, ChatGPTInput } = require('intellinode');

const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY"; // Replace with your actual API key

// Set the system mode and the user message.
const input = new ChatGPTInput('You are a helpful assistant.');
input.addUserMessage('What is the distance between the Earth and the Moon?');

// Function to get the responses from the chatbot
async function getChatbotResponses() {
  const chatbot = new Chatbot(OPENAI_API_KEY, 'openai');
  const responses = await chatbot.chat(input);
  return responses;
}

// Example of calling the function and handling the responses
async function main() {
  try {
    const chatbotResponses = await getChatbotResponses();
    console.log('Chatbot Responses:', chatbotResponses);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the main function to interact with the chatbot
main();
