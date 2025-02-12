import React from 'react';
import TextInput from '../TextInput';

interface SearchBarProps {
  value: string;
  setValue: (val: string) => void;
}
export default function index({value, setValue}: SearchBarProps) {
  return (
    <TextInput
      value={value}
      setValue={setValue}
      isSearchBar
      placeholder="Search"
    />
  );
}
