"use client";
import { motion } from "framer-motion";
import { Download, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

export default function ProductPage() {
 
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
      
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8"
        >
          <Zap className="w-4 h-4 text-blue-500 fill-blue-500" />
          <span className="text-xs font-bold tracking-widest uppercase">Instant Digital Access</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-8xl font-black tracking-tighter mb-6"
        >
          നമസ്കാരം <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">ലളിതമായ പഠന സഹായി</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12"
        >
          നിസ്കാരം കൃത്യമായും ലളിതമായും പഠിക്കാൻ വേണ്ടി തയ്യാറാക്കിയ ഒരു സമ്പൂർണ്ണ ഡിജിറ്റൽ ഗൈഡാണിത്. ഓരോ ചലനങ്ങളും പ്രാർത്ഥനകളും ഈ E-Book ൽ ഉൾപ്പെടുത്തിയിരിക്കുന്നു.
        </motion.p>

        {/* Pricing Card */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-zinc-900/50 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-xl max-w-sm w-full shadow-2xl"
        >
          <div className="text-sm font-bold text-gray-500 mb-2 uppercase">One-time payment</div>
          <div className="text-5xl font-black mb-2">₹49</div>
          
          <Image src="/usthad.jpg" alt="Product Preview" width={350} className="mb-4 border-radius-lg" height={400} />

          <a href="https://wa.me/917902452718?text=Hello!%20I%20am%20interested%20in%20your%20services."
            className="w-full bg-white text-black hover:bg-blue-600 hover:text-white py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 group"
          >
            Get it Now <Download className="w-5 h-5 group-hover:animate-bounce" />
          </a>
          
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Secure GPay</span>
            <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Instant PDF</span>
          </div>
        </motion.div>
      </main>
    </div>
  );
}