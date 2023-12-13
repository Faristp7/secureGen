import React from 'react';
import '../App.css'

interface SliderProps {
  onSlide: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ onSlide }) => {
  const [value, setValue] = React.useState<number>(15);

  const handleSlide = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setValue(newValue);
    onSlide(newValue);
  };

  return (
    <div className="flex-1 max-w-xs">
      <input
        type="range"
        id="slider"
        min="10"
        max="20"
        step="1"
        value={value}
        onChange={handleSlide}
        className="w-full mt-2"
      />
    </div>
  );
};

export default Slider;
