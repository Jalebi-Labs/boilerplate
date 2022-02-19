import {
  Box,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const EmailInput = ({ register }) => {
  return (
    <FormControl isRequired>
      <FormLabel>Email</FormLabel>
      <Input {...register('email')} />
      <FormHelperText>HelperText</FormHelperText>
      <FormErrorMessage>ErrorMessage</FormErrorMessage>
    </FormControl>
  );
};

export default function LoginForm() {
  const { register } = useForm();

  return <EmailInput register={register} />;
}
