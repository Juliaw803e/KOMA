import React from 'react';

function Modal({ show, onClose, children }) {
  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
}

export default Modal;