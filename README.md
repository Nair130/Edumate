# EduMate - Study Companion Web App

EduMate is a comprehensive study companion web application designed to help students organize their study plans, schedule study sessions, and extract text from PDF documents for easy reference.

## Features

### Study Planner
The Study Planner feature allows users to create personalized study plans by specifying subjects, topics, deadlines, and estimated study time. Users can add multiple subjects and topics to their study plan and set a maximum time per study session.

### Study Schedule
The Study Schedule feature generates a study schedule based on the user's study plan. It dynamically allocates study sessions for each topic, taking into account the user's maximum study time per session and sleep time preferences. Users can mark completed study sessions and track their progress.

### Text Recognizer
The Text Recognizer feature enables users to upload PDF documents and extract text from them. It utilizes PDF.js to parse PDF documents and extract text content, which can then be displayed for easy reference.

## Requirements

To run this project locally, you need the following:

- **XAMPP:** A local server solution that includes Apache, MySQL, and PHP. You can download it from [here](https://www.apachefriends.org/index.html).

## Installation

1. Install XAMPP on your local machine.
2. Clone this repository to your local machine using `git clone https://github.com/yourusername/EduMate.git`.
3. Place the project files in the `htdocs` directory of your XAMPP installation.
4. Start the Apache and MySQL services in XAMPP.
5. Open your web browser and navigate to `http://localhost/EduMate` to access the application.

## Usage

1. After setting up the project, you can access the different features of EduMate using the navigation links provided.
2. Use the Study Planner to create personalized study plans by specifying subjects, topics, deadlines, and estimated study time.
3. View your scheduled study plans in the Study Schedule section, which provides detailed timings for each study session.
4. Utilize the Text Recognizer to extract text from PDF documents, making them searchable and editable.
5. Explore other features like Flashcards, Material Organizer, Flashcard Generator, and Exam Tracker to enhance your learning experience.

## Usage

### Study Planner
1. Navigate to the "Study Planner" page.
2. Enter the subject name, topics (comma-separated), deadline, and estimated study time.
3. Click "Add Another Subject" to add more subjects to your study plan.
4. Set the maximum time per session and sleep time.
5. Click "Create Plan" to save your study plan.

### Study Schedule
1. Visit the "Study Schedule" page.
2. Your study schedule will be automatically generated based on your study plan.
3. Each study session includes the subject, topic, date, start time, and end time.
4. Mark completed study sessions by checking the corresponding checkbox.

### Text Recognizer
1. Access the "Text Recognizer" page.
2. Upload a PDF file using the provided input field.
3. The text content extracted from the PDF will be displayed in the output area.

## Technologies Used

- HTML
- CSS (Tailwind CSS)
- JavaScript (Vanilla JS)
- PDF.js (for PDF text extraction)

## How to Run

1. Clone this repository to your local machine.
2. Open the project directory in a code editor.
3. Open the HTML files in your web browser to access the different features.

## Credits

EduMate was developed by Sunar Mohammad Riyaz, Rishabh Nair, Veeramalla Nitish Reddy and  Safwaan Sharieff as a project for jithack hackathon. 
