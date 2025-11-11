import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#666',
  },

  emailText: {
    textAlign: 'center',
    marginTop: 6,
    fontWeight: '600',
  },

  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    marginBottom: 40,
  },

  otpInput: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
  },

  verifyButton: {
    backgroundColor: '#222',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },

  verifyText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 17,
  },

  resendSection: {
    marginTop: 22,
    alignItems: 'center',
  },

  resendText: {
    color: '#222',
    fontWeight: '600',
  },

  timerText: {
    color: '#777',
  },
});
