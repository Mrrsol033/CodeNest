// "use client";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
// }

// export default function Modal({ isOpen, onClose, children }: ModalProps) {
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-2xl w-96 shadow-lg">
//         {children}
//         <button onClick={onClose} className="mt-4 text-blue-600 font-medium">Close</button>
//       </div>
//     </div>
//   );
// }
