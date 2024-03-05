// Create a new div element
const chatbotContainer = document.createElement("div");
// Set the attributes for the div
chatbotContainer.className = "milaoChatbotWrapper";
chatbotContainer.id = "chatbotContainer";
// Append the div to the body of the document
document.body.appendChild(chatbotContainer);

const chatIcon = document.getElementById("chatbotBtn");
const wrapper = document.querySelector(".milaoChatbotWrapper");

chatIcon.addEventListener("click", function () {
  if (chatIcon.classList.contains("active")) {
    wrapper.style.opacity = 0;
    wrapper.style.bottom = "0";
    wrapper.style.pointerEvents = "none";
    chatIcon.classList.remove("active");
  } else {
    wrapper.style.opacity = 1;
    wrapper.style.bottom = "85px";
    wrapper.style.pointerEvents = "auto";
    chatIcon.classList.add("active");
    initChatbot();
  }
});

function initChatbot() {
  var div = document.createElement("div");
  chatbotContainer.innerHTML = "";
  div.innerHTML = `
  <div class="head-text">Chat with us - Online</div>
  <div class="chat-box" id="chatbox">
    <div id="chatList">
      <div class="message receiver">
        <p>Hello there.</p>
      </div>
      <div class="message receiver">
        <p>I am a chatbot.</p>
      </div>
      <div class="message receiver">
        <p>How Can I Help You?</p>
      </div>
      <div class="message sender">
        <p>Details About Your services</p>
      </div>
      <form id="sendMessageForm">
      <div class="field">
        <input type="text" id="messageInput" placeholder="Type your message..." required />
        <button type="submit">Send</button>
      </div>
    </form>
    </div>

    <form id="user_reg_form">
      <div class="desc-text">
        Please provide us with these details so we may assist you better.
      </div>
      <div class="field">
        <input type="text" placeholder="Your Name" required />
      </div>
      <div class="field">
        <input type="text" placeholder="Email Address" required />
      </div>
      <div class="field">
        <button type="submit">Start Chat</button>
      </div>
    </form>
  </div>
    `;
  chatbotContainer.appendChild(div);

  // Add event listener for form submission
  const userRegForm = document.getElementById("user_reg_form");
  const chatList = document.getElementById("chatList");
  userRegForm.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Reset the form
    userRegForm.reset();
    userRegForm.style.display = "none";
    chatList.style.display = "block";
    scrollChatToBottom(chatList);
  });
}

function scrollChatToBottom(chatList) {
  chatList.scrollTop = chatList.scrollHeight;
}
