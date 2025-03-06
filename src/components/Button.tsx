import { useState } from "react";
import NepaliDate from "nepali-date-converter"; // Import the NepaliDate class
import "./Button.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  const [nepaliDate, setNepaliDate] = useState<string>("");

  const handleClick = () => {
    onClick(); // Call the passed onClick function
    const nepaliDateObject = new NepaliDate();
    setNepaliDate(nepaliDateObject.format("YYYY-MM-DD")); // Convert and display the current Nepali date
  };

  return (
    <div>
      <button className="custom-button" onClick={handleClick}>
        {label}
      </button>
      {nepaliDate && (
        <div className="nepali-date">Nepali Date: {nepaliDate}</div>
      )}
    </div>
  );
};

export default CustomButton;
