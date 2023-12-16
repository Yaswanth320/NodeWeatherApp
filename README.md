# NodeWeatherApp
A straightforward weather app using Node.js to fetch and display real-time weather data.

# Node Package Installer

Welcome to the Node Package Installer repository! This project is designed to showcase how to download and install Node.js packages using npm.

## Getting Started

Follow these steps to get started with the project:

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from [https://nodejs.org/](https://nodejs.org/).

### Clone the Repository

**
-bash
**

git clone https://github.com/Yaswanth320/NodeWeatherApp.git

cd NodePackageInstaller

**
Install Node Packages
Use npm to install the required packages:
**

npm install

**
Configure Environment Variables
Rename example.env to .env:
**

mv example.env .env

**
Open the .env file in a text editor and add your API key and specify the port:
**

API_KEY=your-api-key   (scroll down to see how to generate your api key from Open Weather Map website)
PORT=3000

**
Run the Project
After installing the packages, you can run the project:
**
npm start

Visit http://localhost:PORT in your browser to see the Node Package Installer in action.

**
GENERATING YOUR API KEY FROM OPEN WEATHER MAP WEBSITE
**
To generate an API key from OpenWeatherMap (OWM), you'll need to sign up for a free account on their website and then create a new API key. Here are the steps:

1. Sign Up for an Account:
Go to the OpenWeatherMap website: https://openweathermap.org/.
Click on the "Sign Up" button to create a new account.

2. Verify Your Email:
After signing up, check your email for a verification message from OpenWeatherMap.
Follow the instructions in the email to verify your account.

3. Log In to Your Account:
Once your account is verified, log in to the OpenWeatherMap website using your credentials.

4. Generate API Key:
After logging in, go to the "API keys" section. This is usually found in your account settings or dashboard.

5. Create a New API Key:
Look for an option to create a new API key. This key will be associated with your account and can be used to access OpenWeatherMap's weather data.

6. Copy Your API Key:
Once you've created the API key, copy it. It's typically a long string of characters.
Now you have your OpenWeatherMap API key! Remember to keep it confidential and not share it publicly. You can use this API key in your Node.js application to fetch weather data.





