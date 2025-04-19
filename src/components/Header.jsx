function Header() {
    return (
      <header className="flex justify-between items-center bg-white shadow p-4 border-b">
        <div className="text-red-600 font-bold text-xl">AON</div>
        <div className="flex items-center gap-4 text-sm">
          <div className="text-right">
            <div className="font-medium">Puneet Kathpalia</div>
            <div className="text-gray-600">Candidate ID: 47525034</div>
          </div>
          <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">PK</div>
          <div className="bg-yellow-300 text-black px-2 py-1 rounded text-xs font-medium">08 : 14<br /><span className="text-[10px]">min&nbsp;&nbsp;&nbsp;&nbsp;sec</span></div>
        </div>
      </header>
    )
  }
  
  export default Header
  