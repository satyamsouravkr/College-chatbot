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
    setTimeout(function() {
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
        "are you there":"Yes, I'm here! How can I assist you?.",
        "admission": "You can apply for admission through the official JUT website. Visit: [https://jutranchi.ac.in/](https://jutranchi.ac.in/)",
        "courses": "We offer Computer Science, Electrical, Mechanical, and Metallurgical Engineering.",
        "faculty": "We have experienced faculty members in all departments. Visit the Faculty page for more details.",
        "placement": "Our students have been placed in top companies. Visit our Placement Page for more details.",
        "syllabus": "The syllabus is available on the JUT official website. Visit: [http://jutranchi.ac.in](http://jutranchi.ac.in)",
        "location": "We are located in Adityapur Industrial Area, Jharkhand. You can find us on Google Maps here: [View Map](https://goo.gl/maps/abcdef)",
        "library": "Our library is well-equipped with technical books and journals.",
        "anti ragging": "Ragging is strictly prohibited. Contact the Anti-Ragging Helpline for assistance.",
        "hostel": "Hostel facilities are available for students. Visit the Hostel Information page for details.",
        "contact": "You can contact us at +91-657 2383303 or visit us at Seraikella-Kharsawan, Jharkhand, PIN-832109.",
        "timing":"college timing is 10:00 am to 5:00pm."
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
