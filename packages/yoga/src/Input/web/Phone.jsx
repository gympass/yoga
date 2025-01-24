import React, { useRef, useCallback } from 'react';
import BasePhoneInput from 'react-phone-input-2';
import PropTypes, { func, string, bool } from 'prop-types';
import * as S from './Phone.style';
import Input from './Input';
import { useCombinedRefs } from '../../hooks';

const phoneBaseSettings = {
  onlyCountries: [
    'ar',
    'br',
    'cl',
    'de',
    'es',
    'gb',
    'ie',
    'it',
    'mx',
    'pt',
    'us',
    'ca',
  ],
};

const Phone = React.forwardRef(
  (
    {
      defaultCountry = 'br',
      disabled = false,
      readOnly = false,
      error,
      full = false,
      helper,
      label = '',
      placeholder = '+55 (11) 999999999',
      value = '',
      onChange = () => {},
      cleanable = true,
      ...rest
    },
    forwardedRef,
  ) => {
    const inputRef = useCombinedRefs(forwardedRef);
    const currentCountry = useRef(defaultCountry);
    const onChangeCountry = useCallback(countryCode => {
      if (currentCountry.current !== countryCode) {
        inputRef.current.focus();
        currentCountry.current = countryCode;
      }
    }, []);

    return (
      <Input
        {...{
          disabled,
          readOnly,
          error,
          full,
          helper,
          value,
          cleanable,
          ...rest,
        }}
        ref={inputRef}
        label=""
        onClean={phoneNumber => onChange(phoneNumber)}
      >
        <S.Container error={error} disabled={disabled} full={full}>
          <BasePhoneInput
            {...phoneBaseSettings}
            ref={phoneRef => {
              inputRef.current = phoneRef?.numberInputRef;
            }}
            inputProps={{ readOnly }}
            disabled={disabled}
            disableDropdown={readOnly}
            country={defaultCountry}
            specialLabel={label}
            placeholder={placeholder}
            onChange={(phoneNumber, options) => {
              onChange(phoneNumber, options);
              onChangeCountry(options.countryCode);
            }}
            value={value}
          />
        </S.Container>
      </Input>
    );
  },
);

Phone.propTypes = {
  className: string,
  /** display a close icon to clean the field */
  cleanable: bool,
  /** default country to be selected on the dropdown */
  defaultCountry: PropTypes.string,
  /** disable the whole input */
  disabled: bool,
  /** display a error message and error style */
  error: string,
  /** should occupy the whole container width */
  full: bool,
  /** a helper text to be displayed below field */
  helper: string,
  /** label for the input */
  label: string,
  /** make the input read only */
  readOnly: bool,
  /** value of the input */
  value: string,
  /** callback invoked when value changes, either by typing of selecting a country */
  onChange: func,
  /** placeholder to show when the input is cleared */
  placeholder: string,
};

export default Phone;
