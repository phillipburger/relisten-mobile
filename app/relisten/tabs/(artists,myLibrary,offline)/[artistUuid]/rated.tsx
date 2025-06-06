import { SortDirection } from '@/relisten/components/filtering/filters';
import { RefreshContextProvider } from '@/relisten/components/refresh_context';
import { RelistenText } from '@/relisten/components/relisten_text';
import { DisappearingHeaderScreen } from '@/relisten/components/screens/disappearing_title_screen';
import { ShowFilterKey, ShowListContainer } from '@/relisten/components/shows_list';
import { useArtistTopShows } from '@/relisten/realm/models/shows/top_shows_repo';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useMemo } from 'react';

export default function Page() {
  const navigation = useNavigation();
  const { artistUuid } = useLocalSearchParams();
  const results = useArtistTopShows(artistUuid as string);

  useEffect(() => {
    navigation.setOptions({
      title: 'Top Shows',
    });
  }, []);

  // The API will only return the 25 top shows so stop it here otherwise it'll just show the 26th top show of
  // whatever is cached
  const shows = useMemo(() => {
    return [{ data: results.data.shows.slice(0, 25) }];
  }, [results.data.shows]);

  return (
    <RefreshContextProvider networkBackedResults={results}>
      <DisappearingHeaderScreen
        ScrollableComponent={ShowListContainer}
        ListHeaderComponent={<ShowHeader />}
        data={shows}
        filterOptions={{
          default: {
            persistenceKey: ShowFilterKey.Rating,
            active: true,
            sortDirection: SortDirection.Descending,
          },
          persistence: { key: ['artists', artistUuid, 'rated'].join('/') },
        }}
        hideFilterBar={false}
      />
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
