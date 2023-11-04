# ChatGPT Integration with Intellinode

This repository contains a simple example of integrating the Intellinode ChatGPT module with your project. The ChatGPT module enables you to interact with OpenAI's GPT-based chatbot using Node.js.

## Prerequisites

Before using this code, make sure you have the following:

1. Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

2. An OpenAI API key. You can obtain your API key by signing up for an account on the OpenAI platform and creating an API key in your account settings.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Gausul/IntelliNode-chatGPT.git

2. cd your-repo

3. npm install

   
## Configuration

1. Open the index.js file in your preferred code editor.

2. Replace "YOUR_OPENAI_API_KEY" with your actual OpenAI API key:

`const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY";`


## Usage

To interact with the ChatGPT chatbot, you can call the getChatbotResponses function. Here's an example of how to use it:

`const chatbotResponses = await getChatbotResponses();`
`console.log('Chatbot Responses:', chatbotResponses);`

To execute the code and interact with the chatbot, run the following command:

`node index.js`

