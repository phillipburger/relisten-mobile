import { SortDirection } from '@/relisten/components/filtering/filters';
import { RefreshContextProvider } from '@/relisten/components/refresh_context';
import { RelistenText } from '@/relisten/components/relisten_text';
import { DisappearingHeaderScreen } from '@/relisten/components/screens/disappearing_title_screen';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { useArtistTopShows } from '@/relisten/realm/models/shows/top_shows_repo';
import { ShowFilterKey, ShowList } from '@/relisten/components/shows_list';

const topRatedFilterOptions = {
  default: {
    persistenceKey: ShowFilterKey.Rating,
    active: true,
    sortDirection: SortDirection.Descending,
  },
};

export default function Page() {
  const navigation = useNavigation();
  const { artistUuid } = useLocalSearchParams();
  const results = useArtistTopShows(artistUuid as string);

  useEffect(() => {
    navigation.setOptions({
      title: 'Top Shows',
    });
  }, []);

  return (
    <RefreshContextProvider networkBackedResults={results}>
      <DisappearingHeaderScreen
        ScrollableComponent={ShowList}
        shows={results.data.shows}
        artist={results.data.artist}
        filterOptions={topRatedFilterOptions}
        hideFilterBar={false}
      >
        <ShowHeader />
      </DisappearingHeaderScreen>
    </RefreshContextProvider>
  );
}

const ShowHeader = () => {
  return (
    <>
      <RelistenText
        className="w-full py-2 text-center text-4xl font-bold text-white"
        selectable={false}
      >
        Top Shows
      </RelistenText>
    </>
  );
};
