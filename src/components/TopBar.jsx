export default function TopBar({
  setShowCustomBeersSection,
  setShowAddCustomBeerDialog,
  showCustomBeersSection,
}) {
  return (
    <>
      <div className="flex justify-between p-20">
        <div className="flex gap-4">
          <p
            className={`hover:cursor-pointer ${
              showCustomBeersSection ? "text-gray-400" : "text-black-200"
            }`}
            onClick={() => setShowCustomBeersSection(false)}
          >
            All Beers
          </p>
          <p
            className={`hover:cursor-pointer ${
              !showCustomBeersSection ? "text-gray-400" : "text-black-200"
            }`}
            onClick={() => setShowCustomBeersSection(true)}
          >
            My Beers
          </p>
        </div>
        {showCustomBeersSection && (
          <button
            className="bg-blue-300 rounded px-8 py-2 text-white"
            onClick={() => setShowAddCustomBeerDialog(true)}
          >
            Add a new beer
          </button>
        )}
      </div>
    </>
  );
}
