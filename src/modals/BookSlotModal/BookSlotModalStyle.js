import {Colors} from 'global/Index';
import {StyleSheet} from 'react-native';

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
});
