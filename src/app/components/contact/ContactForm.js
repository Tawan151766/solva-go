'use client';

export default function ContactForm() {
  return (
    <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-white/20">
      <h3 className="text-[#f0c674] text-lg font-semibold mb-6">Connect with Premium Excellence</h3>
      
      <form className="space-y-4">
        {['Your Name', 'Your Email', 'Your Phone'].map((label, idx) => (
          <div key={idx} className="space-y-2">
            <label className="block text-[#f0c674] text-sm font-medium">
              {label}
            </label>
            <input
              placeholder={`Enter your ${label.toLowerCase()}`}
              className="w-full rounded-xl h-12 px-4 bg-[#21262d] text-[#f0c674] placeholder:text-[#ffd700] border border-transparent focus:border-[#f0c674] focus:ring-2 focus:ring-[#f0c674]/20 focus:outline-none transition-all duration-200"
              required
            />
          </div>
        ))}

        <div className="space-y-2">
          <label className="block text-[#f0c674] text-sm font-medium">
            Luxury Project Details
          </label>
          <textarea
            placeholder="Share your premium vision and requirements..."
            className="w-full rounded-xl min-h-32 p-4 bg-[#21262d] text-[#f0c674] placeholder:text-[#ffd700] border border-transparent focus:border-[#f0c674] focus:ring-2 focus:ring-[#f0c674]/20 focus:outline-none resize-none transition-all duration-200"
            required
          ></textarea>
        </div>
        <button 
          type="submit"
          className="w-full h-12 px-6 rounded-xl bg-[#f0c674] hover:bg-[#ffd700] text-[#0d1117] font-semibold text-sm transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
        >
          Request Premium Consultation
        </button>
      </form>
    </div>
  )
}
