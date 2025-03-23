// Function to toggle chat visibility
function toggleChat() {
    var chatPanel = document.getElementById("chat-panel");
    if (chatPanel.style.display === "none" || chatPanel.style.display === "") {
        console.log("Chat opened by user.");
        chatPanel.style.display = "block";
    } else {
        console.log("Chat closed by user.");
        chatPanel.style.display = "none";
    }
}

// Function to handle user messages
function sendMessage() {
    var inputField = document.getElementById("userInput");
    var userMessage = inputField.value.trim();

    if (userMessage === "") {
        console.log("User attempted to send an empty message.");
        return;
    }

    console.log("User Message: " + userMessage);

    // Display user message
    var chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<div class="user-message"><p>${userMessage}</p></div>`;
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to latest message

    // Process response
    setTimeout(function () {
        var botResponse = getBotResponse(userMessage);
        chatBox.innerHTML += `<div class="bot-message"><p>${botResponse}</p></div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
        console.log("Bot Response: " + botResponse);
    }, 1000);

    inputField.value = ""; // Clear input field
}

// Function to process user input and remove unnecessary words (articles)
function getBotResponse(input) {
    var lowerInput = input.toLowerCase();
    console.log("Processing user input: " + lowerInput);

    // Remove common articles from input (a, an, the)
    var cleanedInput = lowerInput.replace(/\b(a|an|the|what|is)\b/g, "").trim();
    console.log("Cleaned Input (without articles): " + cleanedInput);

    // Define key topics
    var topics = {
        "hi": "How can I assist you?",
        "hello": "How can I assist you?",
        "h": "How can I assist you?",
        "what are": "How can I assist you?",
        "hii": "How can I assist you?",
        "are you there": "Yes, I'm here! How can I assist you?.",
        "about college": "Government Polytechnic Adityapur (GPA) is one of the top polytechnic colleges in Jharkhand, known for its excellence in technical education and strong industry connections. Located in the Adityapur Industrial Area, the institute provides students with hands-on training and industrial exposure, making them job-ready. Established in 1980, GPA is affiliated with the Jharkhand University of Technology (JUT) and approved by AICTE.",
                // admission
        "admission": "Are you looking for Regular admission or Lateral Entry admission? Type 'Regular' or 'Lateral' for details.",
        "regular": "Regular admission is based on the entrance exam conducted by JUT. Apply through the official website: [https://gpa.ac.in/#/](https://gpa.ac.in/#/).",
        "lateral": "Lateral Entry admission is available for diploma holders in relevant fields. For eligibility and application details, visit: [https://gpa.ac.in/#/](https://gpa.ac.in/#/).",
        
        "courses": "We offer Computer Science, Electrical, Mechanical, and Metallurgical Engineering.",
        "faculty": "We have experienced faculty members in all departments. Visit the Faculty page for more details.",
        "placement": "Our students have been placed in top companies. Visit our Placement Page for more details.",
        "syllabus": "The syllabus is available on the JUT official website. Visit: [http://jutranchi.ac.in](http://jutranchi.ac.in)",
        "location": "We are located in Adityapur Industrial Area, Jharkhand. You can find us on Google Maps here: [View Map](https://goo.gl/maps/abcdef)",
        "library": "Our library is well-equipped with technical books and journals.",
        "anti ragging": "Ragging is strictly prohibited. Contact the Anti-Ragging Helpline for assistance.",
        "hostel": "Hostel facilities are available for students. Visit the Hostel Information page for details.",
        "contact": "You can contact us at +91-657 2383303 or visit us at Seraikella-Kharsawan, Jharkhand, PIN-832109.",
        "notice": "You can visit the official College website. Visit:()",
        "timing": "college timing is 10:00 am to 5:00pm.",
        "coures for how many year": "The course duration is 3 years, divided into 6 semesters.",
        "Total subject in 1st sem": "Total subjects in 1st semester: 5 subjects – Engineering Physics, Engineering Chemistry, Mathematics, Fundamentals of Computer, and Engineering Graphics.",
        "student facilities": "canteen, computer lab, Wi-Fi, canteen and many more facilities.",
        "academics & exams": "exam schedule:-The exam schedule is released by JUT and for the fees also You can check the official website: http://jutranchi.ac.in.",        
        "result": "Results are given only to the respective college.",        
        "attendance criteria": "Students must maintain at least 75% attendance to be eligible for exams.",  
        "marks distribution": "Each subject has a total of 100 marks, divided into 80 marks for the theory exam and 20 marks for internal assessment."      
    };

    // Check if cleaned input matches any topic
    for (var key in topics) {
        if (cleanedInput.includes(key)) {
            return topics[key];
        }
    }

    // If input does not match any known topic
    console.log("User asked an unrecognized question: " + cleanedInput);
    return "I'm not sure about that. Please visit our official website: [http://jutranchi.ac.in](http://jutranchi.ac.in)";
}
// 📌 Toggle Navigation Menu
function toggleMenu() {
    let navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("show-menu");
}

// 📌 Toggle Chatbot Visibility
function toggleChat() {
    let chatPanel = document.getElementById("chat-panel");
    chatPanel.classList.toggle("show-chat");
}
