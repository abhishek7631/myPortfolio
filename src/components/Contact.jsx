import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useOnScreen } from "../hooks/useOnScreen";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";
import { buttonHover, cardHover, iconHover } from "../utils/motion";
import { sendContactEmail } from "../utils/sendContactEmail";

const contactInfo = {
  email: "abhishek.choudhary7631@gmail.com",
  phone: "+91 9576134807",
  location: "Gurgaon, India",
};

const contactMethods = [
  {
    icon: MdEmail,
    title: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    iconBg: "bg-red-50 text-red-500 dark:bg-red-500/10 dark:text-red-400",
  },
  {
    icon: MdPhone,
    title: "Phone",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
    iconBg: "bg-emerald-50 text-emerald-500 dark:bg-emerald-500/10 dark:text-emerald-400",
  },
  {
    icon: MdLocationOn,
    title: "Location",
    value: contactInfo.location,
    iconBg: "bg-sky-50 text-sky-500 dark:bg-sky-500/10 dark:text-sky-400",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    url: "https://github.com/",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/abhishek7631/",
    label: "LinkedIn",
  },
];

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-400 hover:border-sky-300/60 dark:hover:border-sky-600/40 transition-all duration-300";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const ref = useRef();
  const visible = useOnScreen(ref);
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (data) => {
    setIsSending(true);

    try {
      await sendContactEmail({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      });

      toast.success("Your message has been sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error(
        error.message || "Failed to send message. Please try again.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl dark:bg-violet-500/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl dark:bg-sky-500/10"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            Get In{" "}
            <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you. Let&apos;s create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              Let&apos;s Connect
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              through any of the channels below.
            </p>

            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const content = (
                  <motion.div
                    {...cardHover}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-gray-200/80 dark:border-slate-700/50 shadow-sm hover:shadow-lg hover:border-sky-300/40 dark:hover:border-sky-600/30 transition-[box-shadow,border-color] duration-300"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${method.iconBg}`}
                    >
                      <Icon size={22} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {method.title}
                      </p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 break-all">
                        {method.value}
                      </p>
                    </div>
                  </motion.div>
                );

                return method.href ? (
                  <a key={method.title} href={method.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={method.title}>{content}</div>
                );
              })}
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Follow Me
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      {...iconHover}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-300 dark:hover:border-sky-600 shadow-sm hover:shadow-md transition-colors duration-300"
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit(onSubmit)}
            whileHover={{
              y: -4,
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              transition: { type: "spring", stiffness: 360, damping: 24 },
            }}
            className="rounded-2xl bg-white dark:bg-slate-900/80 border border-gray-200/80 dark:border-slate-700/50 shadow-md hover:shadow-xl hover:border-sky-300/30 dark:hover:border-sky-600/20 p-6 sm:p-8 transition-[box-shadow,border-color] duration-300"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Send Message
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className={inputClass}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className={inputClass}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project inquiry"
                className={inputClass}
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && (
                <span className="text-red-500 text-xs mt-1 block">
                  {errors.subject.message}
                </span>
              )}
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project..."
                rows="5"
                className={`${inputClass} resize-none`}
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <span className="text-red-500 text-xs mt-1 block">
                  {errors.message.message}
                </span>
              )}
            </div>

            <motion.button
              {...(isSending ? {} : buttonHover)}
              type="submit"
              disabled={isSending}
              className="w-full mt-6 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-400 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-colors duration-300 shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/35"
            >
              <FaPaperPlane size={16} className={isSending ? "animate-pulse" : ""} />
              {isSending ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
