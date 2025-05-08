'use client';

import { XIcon } from 'lucide-react';

export default function Dialog({
  isOpen,
  onClose,
  children,
  width = 'w-[950px]', // Default width
  height = 'h-[90%]',  // Default height
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-blue-600/70 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative bg-white ${width} ${height} rounded-xl overflow-hidden shadow-xl flex`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 text-black hover:bg-gray-200 z-10 p-1 rounded-full"
        >
          <XIcon className="w-5 h-5" />
        </button>

        {/* Dialog Content with Scrolling */}
        <div className="flex w-full h-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}