'use client';

export default function ContactForm() {
  return (
    <div className="bg-[#1e40af] rounded-2xl p-6 shadow-sm border border-[#2563eb]">
      <h3 className="text-white text-lg font-semibold mb-6">Send us a message</h3>
      
      <form className="space-y-4">
        {['Your Name', 'Your Email', 'Your Phone'].map((label, idx) => (
          <div key={idx} className="space-y-2">
            <label className="block text-white text-sm font-medium">
              {label}
            </label>
            <input
              placeholder={`Enter your ${label.toLowerCase()}`}
              className="w-full rounded-xl h-12 px-4 bg-[#2563eb] text-white placeholder:text-[#7cb8ff] border border-transparent focus:border-[#f4af00] focus:ring-2 focus:ring-[#f4af00]/20 focus:outline-none transition-all duration-200"
              required
            />
          </div>
        ))}

        <div className="space-y-2">
          <label className="block text-white text-sm font-medium">
            Project Details
          </label>
          <textarea
            placeholder="Tell us about your project..."
            className="w-full rounded-xl min-h-32 p-4 bg-[#2563eb] text-white placeholder:text-[#7cb8ff] border border-transparent focus:border-[#f4af00] focus:ring-2 focus:ring-[#f4af00]/20 focus:outline-none resize-none transition-all duration-200"
            required
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full h-12 px-6 rounded-xl bg-[#f4af00] hover:bg-[#e09e00] text-[#1045a2] font-semibold text-sm transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
