import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    await new Promise((res) => setTimeout(res, 800));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="bg-[#254F3E] text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-8">
          <p className="uppercase tracking-widest text-sm text-white/80 font-space-mono">
            Ready to start?
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Let’s build <br /> together.
          </h2>

          <p className="text-white/80 max-w-md font-space-mono">
            Get in touch and discover how RPRE can transform your
            technology landscape.
          </p>

          <div className="text-white/50 space-y-2 text-sm mt-8">
            <p>hello@rpre.dev</p>
            <p>+1 (555) 000-0000</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8"
        >
          {/* Name */}
          <div>
            <label className="block text-xs font-space-mono uppercase tracking-widest text-white/60 mb-3">
              Name
            </label>
            <input
              {...register("name")}
              placeholder="Your name"
              className="w-full font-space-mono bg-transparent border border-white/20 px-4 py-3 rounded-md placeholder-white/30 focus:outline-none focus:border-white transition"
            />
            {errors.name && (
              <p className="text-red-300 text-sm mt-2">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs uppercase tracking-widest font-space-mono text-white/60 mb-3">
              Email
            </label>
            <input
              {...register("email")}
              placeholder="you@company.com"
              className="w-full bg-transparent border font-space-mono border-white/20 px-4 py-3 rounded-md placeholder-white/30 focus:outline-none focus:border-white transition"
            />
            {errors.email && (
              <p className="text-red-300 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-space-mono uppercase tracking-widest text-white/60 mb-3">
              Message
            </label>
            <textarea
              {...register("message")}
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-md placeholder-white/30 font-space-mono resize-none focus:outline-none focus:border-white transition"
            />
            {errors.message && (
              <p className="text-red-300 text-sm mt-2">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-[#254F3E] py-4 font-space-mono rounded-md font-bold flex items-center justify-center gap-2 transition hover:bg-white/90 disabled:opacity-60"
          >
            {submitted ? (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2  "
              >
                <CheckCircle size={18} />
                Sent Successfully
              </motion.span>
            ) : isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;