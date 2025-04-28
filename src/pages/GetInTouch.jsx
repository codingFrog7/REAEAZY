import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function GetInTouch() {
  return (
    <div className="min-h-screen md:w-screen  text-white">
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-center font-['Fliege_Mono' ]">Get in Touch</h2>

            <form className="space-y-4 bg-black p-8 rounded-lg">
              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div className="space-y-2" variants={fadeIn} transition={{ delay: 0.1 }}>
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full bg-zinc-900 border-gray-700 text-white focus:border-amber-500 focus:ring-amber-500 transition-colors"
                  />
                </motion.div>
                <motion.div className="space-y-2" variants={fadeIn} transition={{ delay: 0.2 }}>
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    required
                    className="w-full bg-zinc-900 border-gray-700 text-white focus:border-amber-500 focus:ring-amber-500 transition-colors"
                  />
                </motion.div>
              </div>

              <motion.div className="space-y-2" variants={fadeIn} transition={{ delay: 0.3 }}>
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  required
                  className="w-full bg-zinc-900 border-gray-700 text-white focus:border-amber-500 focus:ring-amber-500 transition-colors"
                />
              </motion.div>

              <motion.div className="space-y-2" variants={fadeIn} transition={{ delay: 0.4 }}>
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  required
                  className="w-full bg-zinc-900 border-gray-700 text-white focus:border-amber-500 focus:ring-amber-500 min-h-[120px] transition-colors"
                />
              </motion.div>

              <motion.div
                variants={fadeIn}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black py-2 rounded-md relative overflow-hidden group transition-all font-['Fliege_Mono']"
                >
                  <span className="relative z-10 font-['Fliege_Mono'] ">GET in TOUCH</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-75 transform group-hover:scale-110" />
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-gray-400">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-white font-['Fliege_Mono'] font-extrabold text-xl border-8 leading-4 p-1 border-white">
              RENT<br />EAZY


            </div>
            <p className="text-sm ">© {new Date().getFullYear()} Reanzy. All rights reserved.</p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors text-sm"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors text-sm"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
