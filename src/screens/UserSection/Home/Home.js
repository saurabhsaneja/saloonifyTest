//react components
import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
//third parties
//custom components
import MyHeader from 'components/MyHeader/MyHeader';
import MyText from 'components/MyText/MyText';
import BookSlotModal from 'modals/BookSlotModal/BookSlotModal';
//global
import {Colors, Constant, Images, ScreenNames, Service} from 'global/Index';
//styles
import {styles} from './HomeStyle';
import Toast from 'react-native-simple-toast';
const Home = ({navigation}) => {
  //variables
  //states
  const [showModal, setShowModal] = useState(false);
  const [slots, setSlots] = useState(getSlots());
  const [selectedSlot, setSelectedSlot] = useState({});
  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  useEffect(() => {
    // console.log('slots', slots);
  }, []);
  const validation = () => {
    if (name === '') {
      Toast.show('Please enter Name', Toast.LONG);
      return false;
    } else if (emailAddress === '') {
      Toast.show('Please enter Email Address', Toast.LONG);
      return false;
    }
    return true;
  };
  const bookSlot = id => {
    if (!validation()) {
      return;
    }
    const slotsCopy = [...slots];
    const updatedSlots = slotsCopy.map(el => {
      if (el?.id === id) {
        return {...el, available: false};
      } else {
        return el;
      }
    });
    setSlots([...updatedSlots]);
  };
  const renderSlot = ({item}) => {
    return (
      <View
        style={[
          styles.slotContainer,
          !item?.available ? {backgroundColor: Colors.RED} : null,
        ]}>
        <View style={styles.timeRow}>
          <MyText
            text="Time"
            fontSize={16}
            fontFamily="bold"
            textColor={Colors.WHITE}
          />
          <MyText
            text={item?.slotTime}
            fontSize={16}
            fontFamily="bold"
            textColor={Colors.WHITE}
            style={{marginLeft: 10}}
          />
        </View>
        <View style={styles.timeRow}>
          <MyText
            text="Date"
            fontSize={16}
            fontFamily="bold"
            textColor={Colors.WHITE}
          />
          <MyText
            text={item?.date}
            fontSize={16}
            fontFamily="bold"
            textColor={Colors.WHITE}
            style={{marginLeft: 10}}
          />
        </View>
        {item?.available ? (
          <MyButton
            title="Book Slot"
            onPress={() => {
              // bookSlot(item?.id);
              setSelectedSlot(item);
              setShowModal(true);
            }}
          />
        ) : (
          <MyText
            text={'Slot already booked'}
            fontSize={16}
            fontFamily="bold"
            textColor={Colors.WHITE}
            style={{}}
          />
        )}
      </View>
    );
  };
  //UI
  return (
    <View style={styles.container}>
      <MyHeader Title="Home" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainView}>
          <MyText
            text={'Booked Slots: ' + slots?.filter(el => !el.available)?.length}
            fontSize={16}
            fontFamily="bold"
            textColor={Colors.THEME_BLACK}
            style={{marginBottom: 10}}
          />
          <MyText
            text={
              'Available Slots: ' + slots?.filter(el => el.available)?.length
            }
            fontSize={16}
            fontFamily="bold"
            textColor={Colors.THEME_BLACK}
          />
          {slots?.length > 0 ? (
            <FlatList
              // data={slots?.filter(el => el?.available) || []}
              data={slots || []}
              style={{marginTop: 28}}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderSlot}
            />
          ) : null}
        </View>
      </ScrollView>
      <BookSlotModal
        visible={showModal}
        setVisibility={setShowModal}
        selectedSlot={selectedSlot}
        bookSlot={bookSlot}
        name={name}
        setName={setName}
        emailAddress={emailAddress}
        setEmailAddress={setEmailAddress}
      />
    </View>
  );
};
export default Home;

const getSlots = () => {
  return [...Array(24).keys()].map((el, index) => ({
    id: el?.toString(),
    slotTime: `${el} - ${el + 1} hrs`,
    available: true,
    date: getCustomDate(index % 3),
  }));
};

const getCustomDate = (day = 0) => {
  return `${new Date().getDate() + day}/${
    new Date().getMonth() + 1
  }/${new Date().getFullYear()}`;
};

const MyButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <MyText
        text={title}
        fontSize={16}
        fontFamily="bold"
        textColor={Colors.WHITE}
        style={{}}
      />
    </TouchableOpacity>
  );
};
