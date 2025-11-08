function About() {
  return (
    <section id="about" className="relative w-full min-h-screen bg-gradient-to-b from-[#6CDAEA] to-[#4A9FBF] py-20 px-6 mt-[100vh]">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <h2
          className="text-5xl md:text-6xl text-white text-center mb-12 drop-shadow-lg"
          style={{ fontFamily: 'pixelGridL' }}
        >
          ABOUT ME
        </h2>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column - Image/Avatar */}
          <div className="flex-shrink-0 w-full lg:w-1/3">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 shadow-xl">
              <div className="aspect-square bg-gradient-to-br from-[#2AA0D6] to-[#12093B] rounded-lg flex items-center justify-center">
                <span
                  className="text-8xl text-white/50"
                  style={{ fontFamily: 'pixelGridL' }}
                >
                  JDL
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Bio Content */}
          <div className="flex-1 space-y-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <h3
                className="text-3xl text-white mb-4"
                style={{ fontFamily: 'pixelGridM' }}
              >
                Who I Am
              </h3>
              <p
                className="text-lg text-white/90 leading-relaxed mb-4"
                style={{ fontFamily: 'pixelGridS' }}
              >
                Hi! I'm Joemire Dave Loeremas, a passionate web developer and UI/UX designer
                dedicated to creating beautiful, functional, and user-friendly digital experiences.
              </p>
              <p
                className="text-lg text-white/90 leading-relaxed"
                style={{ fontFamily: 'pixelGridS' }}
              >
                I love transforming ideas into reality through clean code and thoughtful design.
                My goal is to build websites that not only look great but also provide seamless
                user experiences.
              </p>
            </div>

            {/* Skills Section */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <h3
                className="text-3xl text-white mb-6"
                style={{ fontFamily: 'pixelGridM' }}
              >
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'React',
                  'TypeScript',
                  'Tailwind CSS',
                  'Node.js',
                  'UI/UX Design',
                  'Figma',
                  'Git',
                  'Responsive Design',
                  'Framer Motion',
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/30 backdrop-blur-sm rounded-lg px-4 py-3 text-center text-white font-medium hover:bg-white/40 transition-colors"
                    style={{ fontFamily: 'pixelGridS' }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <h3
                className="text-3xl text-white mb-4"
                style={{ fontFamily: 'pixelGridM' }}
              >
                Fun Facts
              </h3>
              <ul
                className="space-y-2 text-lg text-white/90"
                style={{ fontFamily: 'pixelGridS' }}
              >
                <li>🎮 Love creating interactive web experiences</li>
                <li>☕ Coffee enthusiast and code optimizer</li>
                <li>🎨 Always exploring new design trends</li>
                <li>📚 Continuous learner and problem solver</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
