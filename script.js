// Event listener for chatbot button click
const chatIcon = document.getElementById("chatbotBtn");
const wrapper = document.querySelector(".wrapper");
const chatbotContainer = document.getElementById("chatbotContainer");

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

  <div class="chat-box">
    <div class="desc-text">
      Please provide us with these details so we may assist you better.
    </div>
    <form action="#">
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
}
