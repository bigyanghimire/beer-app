export default function NoCustomBeer({ setShowAddCustomBeerDialog }) {
  return (
    <>
      <div className="flex justify-center items-center text-gray-400 bg-gray-200 p-40">
        <div className="flex flex-col items-center">
          <p>Nothing to see yet. </p>
          <p onClick={() => setShowAddCustomBeerDialog(true)}>
            {" "}
            <span className="text-blue-300 hover:cursor-pointer">
              Click here
            </span>{" "}
            to add your first beer!
          </p>
        </div>
      </div>
    </>
  );
}
