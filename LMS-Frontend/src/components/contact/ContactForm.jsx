import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactForm = () => {

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = () => {
    toast.success("Message Sent Successfully!");
    reset();
  };

  return (
    <section className="bg-slate-900 py-20">

      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-white text-center mb-10">
          Send Us A Message
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >

          <input
            {...register("name")}
            placeholder="Your Name"
            className="w-full bg-slate-800 rounded-xl p-4 text-white outline-none"
          />

          <input
            {...register("email")}
            placeholder="Your Email"
            className="w-full bg-slate-800 rounded-xl p-4 text-white outline-none"
          />

          <input
            {...register("subject")}
            placeholder="Subject"
            className="w-full bg-slate-800 rounded-xl p-4 text-white outline-none"
          />

          <textarea
            rows="6"
            {...register("message")}
            placeholder="Message"
            className="w-full bg-slate-800 rounded-xl p-4 text-white outline-none"
          />

          <button
            className="w-full bg-cyan-600 hover:bg-cyan-500 py-4 rounded-xl text-white font-bold"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};

export default ContactForm;