
export default function TopBar({ setShowCustomBeersSection,setShowAddCustomBeerDialog,showCustomBeersSection }) {
  return (
    <>
       <div className='flex justify-between p-20'>
        <div className='flex gap-4'>
          <p className="showCustomBeersSection?'text-gray-200':'text-red-200'" onClick={() => setShowCustomBeersSection(false)}>All Bears</p>
          <p onClick={() => setShowCustomBeersSection(true)}>My Beers</p>
        </div>
        {
          showCustomBeersSection && 
        <button className="bg-blue-300 rounded px-8 py-2 text-white" onClick={() => setShowAddCustomBeerDialog(true)}>Add a new beer</button>
        }
      </div>
    </>
  );
}

