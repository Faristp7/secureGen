export type CheckboxValuesType = {
  uppercase: boolean;
  special: boolean;
  number: boolean;
};

export interface CheckBoxProps {
  checkboxValues: CheckboxValuesType;
  setCheckboxValues: React.Dispatch<React.SetStateAction<CheckboxValuesType>>;
}
