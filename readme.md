# QR Code Generator

A simple QR Code generator web application built with Node.js, Express, EJS, and QR-Image. Users can input a URL, and the application will generate and display a QR code for that URL.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Input a URL to generate a QR code.
- Display the generated QR code on the same page.
- Dynamic content rendering using EJS templates.

## Installation

### Prerequisites

- Node.js (v18 or above)
- npm (Node Package Manager)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/deepikakolli4/qr-code-generator.git
   cd qr-code-generator
2. **Install Dependencies**

Install the required npm packages:
npm install


### Usage
Start the Server

Run the application using:

bash
Copy code
npm start
This will start the server on http://localhost:3000.

Access the Application

*** Open your web browser and go to http://localhost:3000. You should see the QR Code Generator form.

Generate QR Code

Enter a URL in the input field.
Click the "Submit" button.
The QR code for the entered URL will be displayed on the same page.
Directory Structure

/qr-code-generator

|-- /views
|   |-- index.ejs
|-- server.js
|-- package.json
|-- README.md


/views/index.ejs: EJS template for rendering the QR Code Generator form and displaying the QR code.
server.js: Main server file that sets up Express and handles routing.

### Contributing
Contributions are welcome! If you have any suggestions or improvements, please fork the repository and submit a pull request. Make sure to follow the code of conduct and adhere to the project's coding standards.

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request.

## Images

![qr](https://github.com/user-attachments/assets/31248a74-3b75-4583-8037-11f9e75b6295)

##Video

https://github.com/user-attachments/assets/22bf04ea-6226-47b2-a6b2-4ec3759968cd

