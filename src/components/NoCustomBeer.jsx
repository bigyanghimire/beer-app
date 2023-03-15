
export default function NoCustomBeer({setShowAddCustomBeerDialog }) {
    return (
      <>
         <div className='flex justify-center items-center'>
              <p>Nothing to see yet. </p>
              <br></br>
              <p onClick={() => setShowAddCustomBeerDialog(true)} className="text-blue-300"> Click here</p> to add your first beer.
            </div>
      </>
    );
  }
  
  