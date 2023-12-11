import { useArtistVenues } from '@/relisten/realm/models/venue_repo';
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function Page() {
  const { uuid } = useLocalSearchParams();

  const results = useArtistVenues(String(uuid));
  const { data } = results;

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Text className="text-white">Tours</Text>
    </View>
  );
}
