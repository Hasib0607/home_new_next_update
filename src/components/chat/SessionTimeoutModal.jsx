import styles from './Chat.module.css';

const SessionTimeoutModal = ({ handleEndSession, setIsSessionModalOpen }) => {
  return (
    <div className={styles.sessionModal}>
      <div className={styles.modalContent}>
        <h3>Session Timeout Warning!!</h3>
        <p>Your session will expire due to inactivity. Do you want to continue?</p>
        <div className={styles.modalActions}>
          <button className={styles.modalButton} onClick={handleEndSession}>
            End Session
          </button>
          <button
            className={styles.modalButtonPrimary}
            onClick={() => setIsSessionModalOpen(false)}
          >
            Continue Chatting
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionTimeoutModal;
