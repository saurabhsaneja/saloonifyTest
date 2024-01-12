import {Colors} from 'global/Index';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainView: {
    padding: 17,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slotContainer: {
    backgroundColor: Colors.THEME_VIOLET,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  btn: {
    backgroundColor: Colors.DARY_GREY,
    padding: 10,
    borderRadius: 5,
    marginRight: 'auto'
  },
});
