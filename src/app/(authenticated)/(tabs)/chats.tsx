
import React from 'react';

import ScreenContainer from '@/src/components/screen-container';
import { stories } from '@/src/constants/theme';

import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import {
  Camera,
  ChevronDown,
  Ellipsis,
  Menu,
  Pencil,
  Pin,
  Plus,
  Search,
  SlidersHorizontal,
  SquarePen,
} from 'lucide-react-native';

export default function Chats() {

  // Chat list data
  const chats = [
    {
      name: 'Sendanan',
      message: 'See you tomorrow!',
      time: '10:45 AM',
      image: 'https://i.pravatar.cc/150?img=47',
      unread: 2,
      online: true,
      pinned: true,
    },
    {
      name: 'Family Group',
      message: 'Mom: Dont forget to eat.',
      time: '10:30 AM',
      image: 'https://i.pravatar.cc/150?img=5',
      unread: 5,
      online: false,
      pinned: true,
    },
    {
      name: 'Michael',
      message: 'Did you finish the project?',
      time: '9:55 AM',
      image: 'https://i.pravatar.cc/150?img=11',
      unread: 1,
      online: true,
      pinned: false,
    },
    {
      name: 'Angela',
      message: 'Thank you so much!',
      time: '9:20 AM',
      image: 'https://i.pravatar.cc/150?img=44',
      unread: 0,
      online: false,
      pinned: false,
    },
    {
      name: 'Classmates',
      message: 'John: Check the group chat.',
      time: 'Yesterday',
      image: 'https://i.pravatar.cc/150?img=8',
      unread: 12,
      online: false,
      pinned: false,
    },
    {
      name: 'Sophia',
      message: 'Sent a photo',
      time: 'Yesterday',
      image: 'https://i.pravatar.cc/150?img=49',
      unread: 0,
      online: true,
      pinned: false,
    },
    {
      name: 'David',
      message: 'Okay, thank you!',
      time: 'Yesterday',
      image: 'https://i.pravatar.cc/150?img=15',
      unread: 0,
      online: false,
      pinned: false,
    },
    {
      name: 'IT Students',
      message: 'Mark: Good morning everyone!',
      time: 'Monday',
      image: 'https://i.pravatar.cc/150?img=60',
      unread: 3,
      online: false,
      pinned: false,
    },
    {
      name: 'Jessica',
      message: 'Haha that was funny 😂',
      time: 'Monday',
      image: 'https://i.pravatar.cc/150?img=32',
      unread: 0,
      online: false,
      pinned: false,
    },
    {
      name: 'Robert',
      message: 'See you later.',
      time: 'Sunday',
      image: 'https://i.pravatar.cc/150?img=68',
      unread: 0,
      online: false,
      pinned: false,
    },
  ];

  return (

    <ScreenContainer>

      <StatusBar
    barStyle="light-content"
  />

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {/* HEADER */}
        <View style={styles.header}>

          <View style={styles.headerLeft}>

            <Menu
              size={28}
              color="#229ED9"
            />

            <Text style={styles.headerTitle}>
              Telegram
            </Text>

          </View>

          <View style={styles.headerRight}>

            <Camera
              size={25}
              color="#229ED9"
            />

            <SquarePen
              size={26}
              color="#229ED9"
            />

          </View>

        </View>

        {/* SEARCH BAR */}
        <View style={styles.searchContainer}>

          <Search
            size={21}
            color="#8A8A8A"
          />

          <TextInput
            placeholder="Search"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />

          <SlidersHorizontal
            size={22}
            color="#8A8A8A"
          />

        </View>

        {/* STORIES HEADER */}
        <View style={styles.storiesHeader}>

          <Text style={styles.sectionTitle}>
            Stories
          </Text>

          <ChevronDown
            size={18}
            color="#777"
          />

        </View>

        {/* STORIES */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.storiesContainer}
        >

          {stories.map((item, index) => (

            <View key={index} style={styles.storyItem}>

              <View style={styles.storyImageContainer}>

                <Image
                  source={{ uri: item.image }}
                  style={styles.storyImage}
                />

                {index === 0 ? (

                  <View style={styles.addStory}>
                    <Plus
                      size={18}
                      color="#FFFFFF"
                    />
                  </View>

                ) : null}

              </View>

              <Text style={styles.storyName}>
                {item.name}
              </Text>

            </View>

          ))}

        </ScrollView>

        {/* CHATS HEADER */}
        <View style={styles.chatHeader}>

          <Text style={styles.sectionTitle}>
            All Chats
          </Text>

          <Ellipsis
            size={23}
            color="#777"
          />

        </View>

        {/* CHAT LIST */}
        <View style={styles.chatList}>

          {chats.map((item, index) => (

            <View key={index} style={styles.chatItem}>

              {/* PROFILE PICTURE */}
              <View style={styles.avatarContainer}>

                <Image
                  source={{ uri: item.image }}
                  style={styles.avatar}
                />

                {item.online && (

                  <View style={styles.onlineIndicator} />

                )}

              </View>

              {/* CHAT INFORMATION */}
              <View style={styles.chatInformation}>

                <View style={styles.chatTop}>

                  <Text
                    style={styles.chatName}
                    numberOfLines={1}
                  >
                    {item.name}
                  </Text>

                  <Text style={styles.chatTime}>
                    {item.time}
                  </Text>

                </View>

                <View style={styles.chatBottom}>

                  <Text
                    style={styles.chatMessage}
                    numberOfLines={1}
                  >
                    {item.message}
                  </Text>

                  <View style={styles.chatIndicators}>

                    {item.pinned && (

                      <Pin
                        size={15}
                        color="#A0A0A0"
                      />

                    )}

                    {item.unread > 0 && (

                      <View style={styles.unreadBadge}>

                        <Text style={styles.unreadText}>
                          {item.unread}
                        </Text>

                      </View>

                    )}

                  </View>

                </View>

              </View>

            </View>

          ))}

        </View>

        {/* END OF CHATS */}
        <Text style={styles.endText}>
          No more messages
        </Text>

      </ScrollView>

      {/* FLOATING ICON - VISUAL ONLY */}
      <View style={styles.floatingButton}>

        <Pencil
          size={25}
          color="#FFFFFF"
        />

      </View>

    </ScreenContainer>

  );
}

// STYLES
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#17212B',
  },

  header: {
    height: 65,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },

  headerTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22,
  },

  searchContainer: {
    height: 45,
    backgroundColor: '#242F3D',
    marginHorizontal: 15,
    marginTop: 8,
    marginBottom: 18,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: '#FFFFFF',
  },

  storiesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    gap: 5,
    marginBottom: 13,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  storiesContainer: {
    paddingLeft: 12,
    marginBottom: 20,
  },

  storyItem: {
    alignItems: 'center',
    width: 76,
    marginRight: 8,
  },

  storyImageContainer: {
    width: 64,
    height: 64,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#229ED9',
    padding: 3,
    position: 'relative',
  },

  storyImage: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },

  addStory: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 22,
    height: 22,
    borderRadius: 12,
    backgroundColor: '#229ED9',
    borderWidth: 2,
    borderColor: '#17212B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  storyName: {
    fontSize: 12,
    color: '#AAAAAA',
    marginTop: 7,
  },

  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 13,
    backgroundColor: '#202B36',
  },

  chatList: {
    backgroundColor: '#17212B',
  },

  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    minHeight: 82,
  },

  avatarContainer: {
    position: 'relative',
    marginRight: 13,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#242F3D',
  },

  onlineIndicator: {
    position: 'absolute',
    bottom: 1,
    right: 1,
    width: 13,
    height: 13,
    borderRadius: 8,
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#17212B',
  },

  chatInformation: {
    flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#2B3948',
    paddingBottom: 12,
    paddingTop: 5,
  },

  chatTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 7,
  },

  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
    marginRight: 8,
  },

  chatTime: {
    fontSize: 11,
    color: '#8A9AA9',
  },

  chatBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  chatMessage: {
    fontSize: 13,
    color: '#8A9AA9',
    flex: 1,
    marginRight: 8,
  },

  chatIndicators: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  unreadBadge: {
    minWidth: 21,
    height: 21,
    paddingHorizontal: 5,
    borderRadius: 12,
    backgroundColor: '#229ED9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  unreadText: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  endText: {
    textAlign: 'center',
    color: '#687887',
    fontSize: 12,
    marginVertical: 25,
  },

  floatingButton: {
    position: 'absolute',
    bottom: 25,
    right: 20,
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#229ED9',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

});