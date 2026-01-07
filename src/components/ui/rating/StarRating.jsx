import Star from "./Star";

const StarRating = ({ rating, reviews }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[...Array(5)].map((_, index) => {
          if (index < fullStars) {
            return <Star key={index} filled />;
          }

          if (index === fullStars && hasHalfStar) {
            return (
              <div key={index} className="relative">
                <Star filled={false} />
                <div className="absolute inset-0 w-1/2 overflow-hidden">
                  <Star filled />
                </div>
              </div>
            );
          }

          return <Star key={index} filled={false} />;
        })}
      </div>

      {reviews && <span className="text-xs text-gray-500">({reviews})</span>}
    </div>
  );
};
export default StarRating;
