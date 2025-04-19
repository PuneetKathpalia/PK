// src/components/Sidebar.jsx
export default function Sidebar() {
  return (
    <div className="w-1/5 bg-gray-100 h-full p-4 border-r">
      <h2 className="text-lg font-semibold mb-4 text-blue-700">Sections</h2>
      <div className="bg-yellow-100 text-sm p-3 border-l-4 border-orange-500 text-gray-800">
        <p className="font-bold">01. Demo</p>
        <p>00 / 10 attempted</p>
      </div>
    </div>
  );
}
