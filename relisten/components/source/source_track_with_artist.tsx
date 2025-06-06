import Flex from '@/relisten/components/flex';
import { RelistenText } from '@/relisten/components/relisten_text';
import { SubtitleRow, SubtitleText } from '@/relisten/components/row_subtitle';
import RowTitle from '@/relisten/components/row_title';
import { SectionedListItem } from '@/relisten/components/sectioned_list_item';
import { SourceTrackSucceededIndicator } from '@/relisten/components/source/source_track_offline_indicator';
import { SourceTrack } from '@/relisten/realm/models/source_track';
import { ShowLink } from '@/relisten/util/push_show';
import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';

export function TrackWithArtist({
  sourceTrack,
  children,
  offlineIndicator,
  indicatorComponent,
  subtitleColumn,
}: PropsWithChildren<{
  offlineIndicator?: boolean;
  sourceTrack: SourceTrack;
  indicatorComponent?: React.ReactNode;
  subtitleColumn?: boolean;
}>) {
  if (offlineIndicator === undefined) {
    offlineIndicator = true;
  }

  return (
    <ShowLink
      show={{
        artist: sourceTrack.artist,
        showUuid: sourceTrack.show.uuid,
        sourceUuid: sourceTrack.source.uuid,
      }}
      asChild
    >
      <SectionedListItem>
        <Flex className="flex items-center justify-between" full>
          <Flex className="flex-1 pr-2" column>
            <Flex className="items-center" style={{ gap: 8 }}>
              <RowTitle>{sourceTrack.title}</RowTitle>
              {sourceTrack.source.isSoundboard && (
                <RelistenText className="text-xs font-bold text-relisten-blue-600">
                  SBD
                </RelistenText>
              )}
              {offlineIndicator && sourceTrack.offlineInfo?.isPlayableOffline() && (
                <SourceTrackSucceededIndicator />
              )}
              <View className="grow" />
            </Flex>
            <SubtitleRow {...{ column: !!subtitleColumn }}>
              <SubtitleText>
                {sourceTrack.artist.name}
                &nbsp;&middot;&nbsp;
                {sourceTrack.show.displayDate}
              </SubtitleText>
              {children}
            </SubtitleRow>
          </Flex>
          <SubtitleText>{sourceTrack.humanizedDuration}</SubtitleText>

          {indicatorComponent}
        </Flex>
      </SectionedListItem>
    </ShowLink>
  );
}
