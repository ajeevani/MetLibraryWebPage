import React, { useEffect } from 'react';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from '../components/MainNav';
import { RouteGuard } from '../components/RouteGuard';
import { SWRConfig } from 'swr';
import { useAtom } from 'jotai';
import { favouritesAtom, searchHistoryAtom } from '../store';
import { getFavourites, getHistory } from '../lib/userData';
import { isAuthenticated } from '../lib/authenticate';

function MyApp({ Component, pageProps }) {
  const [favouritesList, setFavouritesList] = useAtom(favouritesAtom);
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);

  useEffect(() => {
    const updateAtoms = async () => {
      if (isAuthenticated()) {
        setFavouritesList(await getFavourites());
        setSearchHistory(await getHistory());
      }
    };

    updateAtoms();
  }, []);

  return (
    <RouteGuard>
      <MainNav />
      <SWRConfig value={{
        fetcher: async (url) => {
          const res = await fetch(url);
          if (!res.ok) {
            throw new Error('Error fetching data');
          }
          return res.json();
        }
      }}>
        <Component {...pageProps} />
      </SWRConfig>
    </RouteGuard>
  );
}

export default MyApp;