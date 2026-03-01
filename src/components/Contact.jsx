import axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useOnScreen } from "../hooks/useOnScreen";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const ref = useRef();
  const visible = useOnScreen(ref);

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      const res = await axios.post("/api/contact", userInfo);
      if (res.data && res.data.ok) {
        toast.success("Your message has been sent successfully!");
        reset();
      } else {
        console.error("Mail endpoint response:", res.data);
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  const contactMethods = [
    {
      icon: MdEmail,
      title: "Email",
      value: "abhishek.choudhary7631@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MdPhone,
      title: "Phone",
      value: "+91 9576134807",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MdLocationOn,
      title: "Location",
      value: "New Delhi, India",
      color: "from-red-500 to-orange-500",
    },
  ];

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-pink-900/10 dark:to-slate-950 relative"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-gray-400 dark:text-gray-400 mb-12 text-lg"
        >
          Let's connect and build something amazing together!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-purple-300 dark:text-purple-200 mb-6">
              Contact Information
            </h3>
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-lg border border-slate-700/50 bg-slate-900/30 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r ${method.color}`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 dark:text-gray-400 text-sm">
                      {method.title}
                    </p>
                    <p className="text-gray-200 dark:text-gray-100 font-semibold">
                      {method.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 bg-gradient-to-br from-slate-900/50 to-slate-900/80 dark:from-slate-900/60 dark:to-slate-900/40 backdrop-blur-md border border-purple-500/20 dark:border-purple-600/30 p-8 rounded-2xl shadow-2xl"
          >
            <div>
              <label className="block text-gray-300 dark:text-gray-200 text-sm font-semibold mb-2">
                Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/70 text-gray-100 dark:text-gray-100 border border-slate-700/50 dark:border-slate-700/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-400 text-sm mt-1 block">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div>
              <label className="block text-gray-300 dark:text-gray-200 text-sm font-semibold mb-2">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/70 text-gray-100 dark:text-gray-100 border border-slate-700/50 dark:border-slate-700/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-400 text-sm mt-1 block">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <label className="block text-gray-300 dark:text-gray-200 text-sm font-semibold mb-2">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                placeholder="Your message"
                className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/70 text-gray-100 dark:text-gray-100 border border-slate-700/50 dark:border-slate-700/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
                rows="4"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <span className="text-red-400 text-sm mt-1 block">
                  {errors.message.message}
                </span>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
