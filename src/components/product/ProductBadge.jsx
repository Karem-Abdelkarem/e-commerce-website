const ProductBadge = ({ value }) => {
  return (
    <section className="flex items-center gap-4">
      <span className="bg-secondary w-5 h-10 rounded-md"></span>
      <h2 className="font-poppins font-semibold text-[16px] text-secondary">
        {value}
      </h2>
    </section>
  );
};
export default ProductBadge;
