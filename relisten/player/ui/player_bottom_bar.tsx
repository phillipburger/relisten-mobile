import { RelistenPlaybackState } from '@/modules/relisten-audio-player';
import Flex from '@/relisten/components/flex';
import { RelistenText } from '@/relisten/components/relisten_text';
import {
  useRelistenPlayer,
  useRelistenPlayerPlaybackState,
} from '@/relisten/player/relisten_player_hooks';
import {
  useRelistenPlayerCurrentTrack,
  useRelistenPlayerQueueOrderedTracks,
} from '@/relisten/player/relisten_player_queue_hooks';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { PropsWithChildren, useCallback, useContext, useState } from 'react';
import { LayoutChangeEvent, Platform, Pressable, TouchableOpacity, View } from 'react-native';
import { ScrubberRow } from './player_screen';
import * as Progress from 'react-native-progress';
import AirPlayButton from 'react-native-airplay-button';

function PlayerBottomBarContents() {
  const currentTrack = useRelistenPlayerCurrentTrack();
  const playbackState = useRelistenPlayerPlaybackState();
  const player = useRelistenPlayer();
  const router = useRouter();

  const artist = currentTrack?.sourceTrack?.artist;
  const showCache = currentTrack?.sourceTrack?.show;

  const subtitle = [
    artist?.name,
    showCache?.displayDate,
    showCache?.venue?.name,
    showCache?.venue?.location,
  ]
    .filter((x) => !!x && x.length > 0)
    .join(' · ');

  if (!currentTrack) {
    return <></>;
  }

  let playbackStateIcon = <MaterialIcons name="play-arrow" size={42} color="white" />;

  if (playbackState == RelistenPlaybackState.Playing) {
    playbackStateIcon = <MaterialIcons name="pause" size={42} color="white" />;
  } else if (playbackState == RelistenPlaybackState.Stalled) {
    playbackStateIcon = <Progress.CircleSnail indeterminate={true} size={28} color="white" />;
  }

  const track = currentTrack.sourceTrack;

  return (
    <Flex column cn="flex-1 gap-3">
      <Pressable onPress={() => router.push({ pathname: '/relisten/player' })}>
        <Flex cn="items-center">
          <Flex cn="ml-2 h-full items-center">
            <TouchableOpacity
              onPress={() => {
                player.togglePauseResume();
              }}
              className="flex h-[42px] w-[42px] items-center justify-center"
            >
              {playbackStateIcon}
            </TouchableOpacity>
          </Flex>
          <Flex column cn="ml-4 truncate flex-1">
            <RelistenText className="text-lg font-semibold">{track?.title ?? ''}</RelistenText>
            <RelistenText className="truncate" numberOfLines={1}>
              {subtitle ?? ''}
            </RelistenText>
          </Flex>
          {Platform.OS === 'ios' && (
            <Pressable
              onPress={() => {
                /* no op to stop it from opening the full player */
              }}
            >
              <AirPlayButton
                activeTintColor="white"
                tintColor="rgba(255, 255, 255, 0.5)"
                prioritizesVideoDevices={false}
                className="mx-2 h-[42] w-[42]"
              />
            </Pressable>
          )}
        </Flex>
      </Pressable>
      <View className="relative bg-relisten-blue-700">
        <ScrubberRow />
      </View>
    </Flex>
  );
}

export function PlayerBottomBar() {
  const { tabBarHeight, playerBottomBarHeight, setPlayerBottomBarHeight } =
    useRelistenPlayerBottomBarContext();

  const onLayout = useCallback(
    (e: LayoutChangeEvent) => {
      const { height } = e.nativeEvent.layout;
      if (playerBottomBarHeight != height) {
        setPlayerBottomBarHeight(height);
      }
    },
    [playerBottomBarHeight, setPlayerBottomBarHeight]
  );

  const isVisible = useIsPlayerBottomBarVisible();

  if (!isVisible) {
    return <></>;
  }

  return (
    <View onLayout={onLayout} style={{ bottom: tabBarHeight, position: 'absolute', width: '100%' }}>
      <View className={'w-full flex-1 p-0'}>
        <View className="rounded-t-s w-full border-t-2 border-t-relisten-blue-700 bg-relisten-blue-800 pt-2">
          <PlayerBottomBarContents />
        </View>
      </View>
    </View>
  );
}

export const useIsPlayerBottomBarVisible = () => {
  const playbackState = useRelistenPlayerPlaybackState();
  const tracks = useRelistenPlayerQueueOrderedTracks();

  return playbackState !== undefined && tracks.length > 0;
};

export interface RelistenPlayerBottomBarContextProps {
  tabBarHeight: number;
  playerBottomBarHeight: number;

  setTabBarHeight: (num: number) => void;
  setPlayerBottomBarHeight: (num: number) => void;
}

const DEFAULT_TAB_BAR_HEIGHT = 44;
const DEFAULT_PLAYER_BOTTOM_BAR_HEIGHT = 64;

const DEFAULT_CONTEXT_VALUE: RelistenPlayerBottomBarContextProps = {
  tabBarHeight: DEFAULT_TAB_BAR_HEIGHT,
  playerBottomBarHeight: DEFAULT_PLAYER_BOTTOM_BAR_HEIGHT,

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTabBarHeight: (num: number) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setPlayerBottomBarHeight: (num: number) => {},
};

export const RelistenPlayerBottomBarContext =
  React.createContext<RelistenPlayerBottomBarContextProps>(DEFAULT_CONTEXT_VALUE);

export const RelistenPlayerBottomBarProvider = ({ children }: PropsWithChildren<object>) => {
  const [tabBarHeight, setTabBarHeight] = useState(DEFAULT_TAB_BAR_HEIGHT);
  const [playerBottomBarHeight, setPlayerBottomBarHeight] = useState(
    DEFAULT_PLAYER_BOTTOM_BAR_HEIGHT
  );
  const isPlayerBottomBarVisible = useIsPlayerBottomBarVisible();

  return (
    <RelistenPlayerBottomBarContext.Provider
      value={{
        tabBarHeight,
        playerBottomBarHeight: isPlayerBottomBarVisible ? playerBottomBarHeight : 0,
        setTabBarHeight,
        setPlayerBottomBarHeight,
      }}
    >
      {children}
    </RelistenPlayerBottomBarContext.Provider>
  );
};
export const useRelistenPlayerBottomBarContext = () => {
  const context = useContext(RelistenPlayerBottomBarContext);

  if (context === undefined) {
    throw new Error('useRelistenPlayer must be used within a RelistenPlayerProvider');
  }

  return context;
};
