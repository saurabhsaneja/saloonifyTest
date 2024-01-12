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

//global
import {Colors, Constant, Images, ScreenNames, Service} from 'global/Index';
//styles
import {styles} from './HomeStyle';
// import SubmitPrediction from '../../../modals/SubmitPrediction/SubmitPrediction';
// import ValuePicker from 'rn-value-picker';

const Home = ({navigation}) => {
  //variables
  //states
  const [showModal, setShowModal] = useState(false);
  const [slots, setSlots] = useState(getSlots());
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    console.log('slots', slots);
  }, []);
  const bookSlot = id => {
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
    console.log('item?.slotTime', item?.slotTime);
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
              setSelectedId(item?.id);
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
      {/* <SubmitPrediction
        visible={showModal}
        setVisibility={setShowModal}
        numberChosen={numberChosen}
        setNumberChosen={setNumberChosen}
        setShowPicker={setShowPicker}
      /> */}
      {/* <ValuePicker
        visible={showPicker}
        setVisibility={setShowPicker}
        Title="Your Weight"
        unit=""
        minValue={20}
        maxValue={150}
        setValue={setNumberChosen}
      /> */}
    </View>
  );
};
export default Home;

const getSlots = () => {
  return [...Array(24).keys()].map((el, index) => ({
    id: el?.toString(),
    slotTime: `${el} - ${el + 1}`,
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
