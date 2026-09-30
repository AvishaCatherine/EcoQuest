import React from 'react';

export default function ResetModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="reset-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="reset-icon-wrap">🔄</div>
        <h3 className="reset-heading">Reset Demo State?</h3>
        <p className="reset-desc">
          This will reset the profile back to initial presentation values:
          <br />
          <strong>Avisha • 820 XP • Eco Explorer • 6 Day Streak</strong>
          <br />
          with <em>Waste Warrior</em> ready to be demonstrated.
        </p>

        <div className="reset-actions">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-confirm-reset" onClick={onConfirm}>
            Yes, Reset Demo
          </button>
        </div>
      </div>
    </div>
  );
}
