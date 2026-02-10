import { Button } from "../button";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleContact = (data) => {
    console.log(data);
    reset();
  };

  return (
    <article className="w-200 py-10 px-8 rounded-md shadow-md">
      <form onSubmit={handleSubmit(handleContact)}>
        <div className="flex items-center gap-4">
          <div className="w-full">
            <label className="sr-only">Your Name</label>
            <input
              {...register("yourName", { required: "Your Name is required" })}
              className="w-full pl-4 py-3 rounded-md bg-muted"
              type="text"
              placeholder="Your Name *"
            />
            <p className="h-8 text-accent font-medium p-2 rounded-md">
              {errors.yourName?.message}
            </p>
          </div>
          <div className="w-full">
            <label className="sr-only">Your Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full pl-4 py-3 rounded-md bg-muted"
              type="email"
              placeholder="Your Email *"
            />
            <p className="h-8 text-accent font-medium p-2 rounded-md">
              {errors.email?.message}
            </p>
          </div>
          <div className="w-full">
            <label className="sr-only">Your Phone</label>
            <input
              {...register("yourPhone", { required: "Your Phone is required" })}
              className="w-full pl-4 py-3 rounded-md bg-muted"
              type="text"
              placeholder="Your Phone *"
            />
            <p className="h-8 text-accent font-medium p-2 rounded-md">
              {errors.yourPhone?.message}
            </p>
          </div>
        </div>
        <div>
          <textarea
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
            className="w-184.25 h-51.75 pl-4 py-3 rounded-md bg-muted"
            placeholder="Your Massage"
          ></textarea>
          <p className="h-8 text-accent font-medium p-2 rounded-md">
            {errors.message?.message}
          </p>
        </div>
        <div className="flex items-center justify-end">
          <Button>Send Massage</Button>
        </div>
      </form>
    </article>
  );
};
export default ContactForm;
