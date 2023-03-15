
export default function BeerList({ beer }) {
  return (
       <div className='hover:bg-blue-200  flex p-4 shadow-md items-center gap-20 mb-4 h-200 w-[calc(50%-2rem)] lg:w-full' style={{ "height": "180px", "width": "" }}>
                <div style={{ "width": "100px" }} className="flex items-center justify-center">
                  <img style={{ "height": "100px", "width": "fit-content" }} src={beer.image_url}></img>
                </div>
                <div style={{ "width": "50%" }}>
                  <h2 className='text-2xl'>{beer.name}</h2>
                  <h6 className='text-md text-primary-lightyellow mt-2'>{beer.tagline}</h6>
                  <p className='text-sm mt-2  truncate text-ellipsis md:overflow-hidden'>{beer.description}</p>
                </div>
              </div>
  );
}

