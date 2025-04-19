const Topbar = ({ timeLeft, userName, candidateId }) => {
  const formatTime = (seconds) => {
    const mins = Math.ceil(seconds / 60); // Show minutes only, rounded up
    return `${mins} min`;
  };

  return (
    <div className="topbar">
      <div className="user-info">
        <div className="user-avatar">
          {userName.charAt(0).toUpperCase()}
        </div>
        <div>
          <div className="user-name">{userName}</div>
          <div className="user-id">ID: {candidateId}</div>
        </div>
      </div>
      <div className="timer">
        Time Left: {formatTime(timeLeft)}
      </div>
    </div>
  );
};