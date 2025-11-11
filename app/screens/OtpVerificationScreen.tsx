import React, { useRef, useState } from 'react';
import {
  Alert,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import useOtpTimer from '../hooks/useOtpTimer';
import { styles as s } from '../styles/OtpVerificationStyles';
import { delay } from "../utils/delay";

const OTP_LENGTH = 4;
const RESEND_TIME = 60;

const OtpVerificationScreen: React.FC = () => {
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef<TextInput[]>([]);
  const { secondsLeft, resetTimer } = useOtpTimer(RESEND_TIME);

  const handleChange = (text: string, index: number) => {
    const next = [...otp];
    next[index] = text.slice(-1);
    setOtp(next);

    // auto move to next box
    if (text && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const onVerifyPress = async () => {
    const code = otp.join('');
    if (code.length !== OTP_LENGTH) {
      Alert.alert('Incomplete Code', 'Please enter all digits');
      return;
    }

    Keyboard.dismiss();
    setIsLoading(true);

    await new Promise(r => setTimeout(r, 1500));

    console.log('✅ OTP verified:', code);
    Alert.alert('Success', `Your OTP ${code} is verified!`);

    setIsLoading(false);
  };

  const onResendPress = () => {
    setOtp(Array(OTP_LENGTH).fill(''));
    inputRefs.current[0]?.focus();
    resetTimer();
    Alert.alert('OTP Resent', 'A new verification code has been sent.');
  };

  const handleVerifyOtp = async () => {
    setIsLoading(true);
    await delay(1500);
    setIsLoading(false);
    console.log("OTP Verified");
  };

  return (
    <View style={s.container}>
      <Text style={s.title}>OTP Verification</Text>
      <Text style={s.subtitle}>
        Enter the verification code we just sent you on
      </Text>
      <Text style={s.emailText}>vivek@gmail.com</Text>

      <View style={s.otpRow}>
        {otp.map((val, i) => (
          <TextInput
            key={i}
            ref={ref => {
              if (ref) inputRefs.current[i] = ref;
            }}
            style={s.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={val}
            onChangeText={t => handleChange(t, i)}
            onKeyPress={e => handleBackspace(e, i)}
          />
        ))}
      </View>

      <TouchableOpacity
        style={[s.verifyButton, isLoading && { opacity: 0.7 }]}
        onPress={onVerifyPress}
        disabled={isLoading}
      >
        <Text style={s.verifyText}>{isLoading ? 'Verifying...' : 'Verify'}</Text>
      </TouchableOpacity>

      <View style={s.resendSection}>
        {secondsLeft > 0 ? (
          <Text style={s.timerText}>Resend available in {secondsLeft}s</Text>
        ) : (
          <TouchableOpacity onPress={onResendPress}>
            <Text style={s.resendText}>Didn’t receive the code? Resend</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default OtpVerificationScreen;
