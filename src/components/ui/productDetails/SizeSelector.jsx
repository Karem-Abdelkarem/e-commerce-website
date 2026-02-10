const SizeSelector = ({ sizes, selectedSize, onSelectSize }) => {
  return (
    <div className="flex items-center gap-6">
      <p className="font-inter text-xl">Size:</p>

      <div className="flex gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelectSize(size)}
            className={`px-4 py-2 border rounded-md
              ${
                selectedSize === size
                  ? "bg-secondary text-white"
                  : "border-gray-300"
              }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
