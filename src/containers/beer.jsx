import { useEffect, useRef, useState } from 'react';
import { getMoreBeers } from '../services/beer.service'
import _ from 'lodash';
import AddCustomBeer from './customBear.jsx';
import CustomBearList from '../components/CustomBearList.jsx'
import BeerList from '../components/BeerList';
import TopBar from '../components/TopBar';
import NoCustomBeer from '../components/NoCustomBeer'

export default function Beer() {

  const [beers, setBeers] = useState([])
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(30)
  const [showCustomBeersSection, setShowCustomBeersSection] = useState(false)
  const [showAddCustomBeerDialog, setShowAddCustomBeerDialog] = useState(false)
  const [customBeers, setCustomBeers] = useState(null)

  useEffect(() => {
    const getAllBears = async () => {
      const response = await getMoreBeers(1, 10)
      setBeers(response.data)
    }
    getAllBears()
  }, [])

  const filterBeers = (oldBeerList, newBeerList) => {
    return _.unionBy(newBeerList, oldBeerList, 'id');
  }

  const sortBeersById = (beerList) => {
    return _.orderBy(beerList, ['id'], ['asc']);
  }

  const fetchNewBeers = async (pageToBeFetched, totalBeersFetched) => {
    const response = await getMoreBeers(pageToBeFetched, totalBeersFetched)
    const filteredBeers = filterBeers(response.data, beers);
    const beersSortedById = sortBeersById(filteredBeers)
    setBeers(beersSortedById)
  }
  const loadMoreBeers = async () => {
    const maxFetchLimit = 80;
    let pageToBeFetched;
    let totalBeersFetched;

    if (perPage === maxFetchLimit) {
      pageToBeFetched = page + 1
      totalBeersFetched = 10
      setPerPage(10)
      setPage(page + 1)
    }
    else {
      pageToBeFetched = page
      totalBeersFetched = perPage + 10
      setPerPage(perPage + 10)
    }
    fetchNewBeers(pageToBeFetched, totalBeersFetched)
  }

  return (
    <>
      <TopBar
        setShowCustomBeersSection={setShowCustomBeersSection}
        setShowAddCustomBeerDialog={setShowAddCustomBeerDialog}
        showCustomBeersSection={showCustomBeersSection}
      />
      {
        !showCustomBeersSection &&
        <>
          <div className='flex flex-row pt-x-20 pr-20 pl-20 flex-wrap gap-16'>
            {
              beers.length > 1 && beers.map((beer) => (
                <BeerList beer={beer} />
              ))
            }
          </div>
          <p className="flex justify-center text-blue-200 mb-5" onClick={loadMoreBeers}>Load more</p>
        </>
      }

      {
        showCustomBeersSection &&
        <div className='p-20'>
          {customBeers &&
            <CustomBearList
              customBeers={customBeers}
            />
          }
          <AddCustomBeer
            show={showAddCustomBeerDialog}
            close={() => setShowAddCustomBeerDialog(false)}
            setCustomBeers={(customBeers) => setCustomBeers(customBeers)}
          />
          {
            !customBeers &&
            <NoCustomBeer
              setShowAddCustomBeerDialog={setShowAddCustomBeerDialog}
            />
          }
        </div>
      }

    </>
  );
}

