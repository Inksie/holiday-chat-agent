import "./ChatBox.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [sessionId, setSessionId] = useState();
  const [agentTyping, setAgentTyping] = useState(false);

  useEffect(() => {
    setSessionId(uuidv4());
    setMessages([
      {
        sender: "agent",
        text: "Hi! I'm here to recommend you a holiday. I'll have to ask you a series of questions in order to tailor pick your next destination.",
      },
      {
        sender: "agent",
        text: "First things first, what type of holiday are you looking for? A trip to the mountains, a city break, or an escape to the beach?",
      },
    ]);
  }, []);

  function handleMessageInput(e) {
    setCurrentMessage(e.target.value);
  }

  function handleSendMessage(e) {
    if (!currentMessage) {
      return;
    }

    const requestBody = {
      sessionId: sessionId,
      queryInput: {
        text: {
          text: currentMessage,
          languageCode: "en-GB",
        },
      },
    };

    setMessages((prevState) => {
      const newState = [...prevState];
      newState.push({ sender: "user", text: currentMessage });
      return newState;
    });

    setAgentTyping(true);

    fetch(
      "https://europe-west1-holiday-chat-agent.cloudfunctions.net/dialogflowGateway",
      {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setAgentTyping(false);
      });
  }
  function keyPressHandler(e) {
    if (e.charCode === 13) {
      e.preventDefault();
      handleSendMessage();
    }
  }

  return (
    <div className="chatbox-container">
      <div className="chatbox">
        <div className="messages"></div>
        <div className="input">
          <input
            type="text"
            value={currentMessage}
            onChange={handleMessageInput}
            onKeyPress={keyPressHandler}
          />
          <button>OK</button>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
