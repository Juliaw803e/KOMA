function Modal({ show, onClose, children }) {
    return (
      <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="close-button" onClick={onClose}>
            <span className="close">&times;</span>
          </div>
          {children}
        </div>
      </div>
    );
  }
export default Modal;  