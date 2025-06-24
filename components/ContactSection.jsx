export default function ContactSection() {
  const triggerVibration = () => {
    if (navigator.vibrate) {
      navigator.vibrate([15]);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-4 text-[#66ccff]">Let's Build Something Cool</h2>
      <p className="text-gray-400 mb-8">Fill this quick form — we'll get back to you soon!</p>

      <form
        action="https://formspree.io/f/mvgrwqoz"
        method="POST"
        className="max-w-xl mx-auto space-y-6 text-left"
        onSubmit={triggerVibration}
      >
        <label className="block">
          <span className="text-gray-300">Your Name</span>
          <input
            type="text"
            name="name"
            required
            className="mt-1 w-full px-4 py-2 rounded bg-gray-800 text-white"
            placeholder="Fist Name Last Name"
          />
        </label>

        <label className="block">
          <span className="text-gray-300">Email Address</span>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full px-4 py-2 rounded bg-gray-800 text-white"
            placeholder="you@example.com"
          />
        </label>

        <label className="block">
          <span className="text-gray-300">Which industry are you in?</span>
          <select
            name="industry"
            required
            className="mt-1 w-full px-4 py-2 rounded bg-gray-800 text-white"
          >
            <option value="">Select Industry</option>
            <option value="Tech">Tech</option>
            <option value="Education">Education</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Finance">Finance</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="block">
          <span className="text-gray-300">What type of project?</span>
          <select
            name="project"
            required
            className="mt-1 w-full px-4 py-2 rounded bg-gray-800 text-white"
          >
            <option value="">Select Project</option>
            <option value="Website">Website</option>
            <option value="Mobile App">Mobile App</option>
            <option value="Branding">Branding</option>
            <option value="Consultation">Consultation</option>
          </select>
        </label>

        <label className="block">
          <span className="text-gray-300">How urgent is it?</span>
          <select
            name="urgency"
            required
            className="mt-1 w-full px-4 py-2 rounded bg-gray-800 text-white"
          >
            <option value="">Select Urgency</option>
            <option value="Immediately">Immediately</option>
            <option value="Within 2 Weeks">Within 2 Weeks</option>
            <option value="Next Month">Next Month</option>
            <option value="No Rush">No Rush</option>
          </select>
        </label>

        <button
          type="submit"
          className="w-full bg-[#66ccff] text-black font-semibold py-3 px-6 rounded-xl hover:bg-white transition"
        >
          Submit & Contact Us
        </button>
      </form>
    </section>
  );
}
