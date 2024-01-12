//import : react components
import React, {useRef, useState} from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
//import : custom components
import MyText from 'components/MyText/MyText';
//import : third parties
import Toast from 'react-native-simple-toast';
//import : global
import {Colors, MyIcon, ScreenNames, Service} from 'global/Index';
//import : styles
import {styles} from './BookSlotModalStyle';
import MyTextInput from '../../components/MyTextInput/MyTextInput';
//
const BookSlotModal = ({
  visible,
  setVisibility,
  selectedSlot,
  bookSlot,
  name,
  setName,
  emailAddress,
  setEmailAddress,
  isSlotBooked,
  setIsSlotBooked,
}) => {
  //variables
  //variables : redux variables
  //states
  const nameRef = useRef();
  const emailAddressRef = useRef();
  // const [name, setName] = useState('');
  // const [emailAddress, setEmailAddress] = useState('');
  //function : modal function
  const closeModal = () => {
    setVisibility(false);
  };
  //UI
  return (
    <Modal
      visible={visible}
      onRequestClose={closeModal}
      onShow={() => {
        setIsSlotBooked(false);
        setName('');
        setEmailAddress('');
      }}
      // onHide={() => {
      //   setIsSlotBooked(false);
      //   setName('');
      //   setEmailAddress('');
      // }}
      animationType="fade"
      transparent>
      <View style={styles.container}>
        <TouchableOpacity style={styles.blurView} onPress={closeModal} />
        <View style={styles.mainView}>
          {!isSlotBooked ? (
            <>
              <MyTextInput
                inputRef={nameRef}
                Title="Name"
                value={name}
                setValue={setName}
                placeholder="Enter Name"
                // onChangeText={text => setName(text)}
                onSubmitEditing={() => emailAddressRef.current.focus()}
              />
              <MyTextInput
                inputRef={emailAddressRef}
                Title="Email Address"
                value={emailAddress}
                setValue={setEmailAddress}
                placeholder="Enter Email Address"
                keyboardType="email-address"
                // onChangeText={text => setEmailAddress(text)}
                onSubmitEditing={() => phoneNumberRef.current.focus()}
              />
              <View style={[styles.timeRow, {marginBottom: 10}]}>
                <MyText
                  text="Selected Slot"
                  fontSize={16}
                  fontFamily="bold"
                  textColor={Colors.BLACK}
                />
                <MyText
                  text={selectedSlot?.slotTime}
                  fontSize={16}
                  fontFamily="bold"
                  textColor={Colors.BLACK}
                  style={{marginLeft: 10}}
                />
              </View>
              <MyButton
                title="Submit"
                onPress={() => bookSlot(selectedSlot?.id)}
                style={{width: '100%'}}
              />
            </>
          ) : (
            <View style={styles.slotBooked}>
              <MyText
                text={'Slot booked successfuly'}
                fontSize={16}
                fontFamily="bold"
                textColor={Colors.BLACK}
                style={{marginLeft: 10}}
              />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default BookSlotModal;

const MyButton = ({title, onPress, style = {}}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
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
