import {Colors} from 'global/Index';
import {StyleSheet} from 'react-native';
import { width } from '../../global/Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK + '66',
  },
  blurView: {
    flex: 1,
  },
  mainView: {
    padding: 20,
    margin: 20,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContent: {
    width: width,
    // height: 134,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#545454',
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: Colors.DARY_GREY,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slotBooked: {
    backgroundColor: Colors.THEME_VIOLET,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
