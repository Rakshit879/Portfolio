export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800"
    >
      <div className="max-w-5xl mx-auto text-center md:text-left">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 flex items-center justify-center md:justify-start gap-2">
          <span role="img" aria-label="lightbulb">💡</span> About Me
        </h2>

        {/* Description */}
        <div className="space-y-5 text-lg leading-relaxed text-gray-700">
          <p>
            Hi, I’m <span className="font-semibold text-red-600">Rakshit Garg</span> — a{" "}
            <span className="font-medium text-gray-900">Full Stack Developer</span> and{" "}
            <span className="font-medium text-gray-900">Problem Solver</span> passionate about building
            clean, responsive, and impactful digital experiences.
          </p>

          <p>
            I specialize in{" "}
            <span className="text-blue-600 font-semibold">React</span>,{" "}
            <span className="text-black font-semibold">Next.js</span>,{" "}
            <span className="text-sky-600 font-semibold">TypeScript</span>,{" "}
            <span className="text-teal-600 font-semibold">Tailwind CSS</span>,{" "}
            <span className="text-green-600 font-semibold">Node.js</span>, and{" "}
            <span className="text-emerald-600 font-semibold">MongoDB</span>, turning ideas into seamless,
            high-performance web apps.
          </p>

          <p>
            With a strong foundation in{" "}
            <span className="text-purple-600 font-semibold">C++</span>, I’ve sharpened my{" "}
            <span className="font-medium text-gray-900">problem-solving and algorithmic skills</span>{" "}
            through countless challenges, giving me the mindset to tackle complex systems with clarity
            and efficiency.
          </p>

          <p>
            I love combining <span className="font-semibold text-gray-900">creativity with code</span> —
            whether it’s designing smooth UIs, optimizing performance, or breaking down tough problems
            into elegant solutions. Always curious, always learning, and always building.
          </p>

          <p className="text-xl font-semibold text-red-600">
            ⚡ Let’s connect and create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}
