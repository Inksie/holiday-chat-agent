function ChatBubble(props) {
  return (
    <div className={`bubble ${props.message.sender}`}>
      <span>{props.message.text}</span>
    </div>
  );
}

export default ChatBubble;
