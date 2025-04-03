import { Dialog } from "@headlessui/react";

export default function Modal({ setIsOpen, isOpen, title, children }) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* Blurred backdrop */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

      {/* Full-screen container */}
      <div className="fixed inset-0  flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-xl rounded-xl bg-white/90 shadow-2xl ring-1 ring-black/5 backdrop-blur-sm p-6 w-full">
          <Dialog.Title className="text-xl font-bold text-gray-900 mb-6">
            {title}
          </Dialog.Title>
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
