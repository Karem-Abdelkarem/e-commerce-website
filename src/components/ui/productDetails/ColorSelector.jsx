import { useTranslation } from "react-i18next";

const ColorSelector = ({ colors, selectedColor, onSelectColor }) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-6">
      <p className="font-inter text-xl">{t("productDetails.Colours")}:</p>

      <div className="flex gap-2">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onSelectColor(color)}
            className={`w-5 h-5 rounded-full border-2
              ${selectedColor === color ? "border-black" : "border-gray-300"}`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
