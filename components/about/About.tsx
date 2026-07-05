import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { aboutTimeline, profile } from "@/data/portfolio";
export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        eyebrow="About Me"
        title="Engineering digital products with precision and taste."
        description="I combine strong frontend craft, backend architecture, cloud deployment, and product thinking to build experiences that look premium and perform reliably."
      />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass rounded-3xl p-8">
          <h3 className="font-poppins text-2xl font-bold">Professional Summary</h3>
          <p className="mt-5 leading-8 text-muted">
            Hello! I'm Ayyappan M, an Information Technology graduate from Kerala, India, passionate about software development, Artificial Intelligence, and data-driven solutions. I enjoy building modern web applications and exploring new technologies that solve real-world problems.
My technical skills include Python, Java, JavaScript, React.js, SQL, Flask, Power BI, Machine Learning, and AI technologies. I have developed projects in AI, web development, database management, and data analytics, strengthening both my technical and problem-solving abilities.
 I believe in continuous learning and enjoy taking on new challenges to improve my skills. My goal is to contribute to innovative projects, collaborate with talented teams, and grow as a Software Developer while creating impactful digital solutions.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-5">
              <p className="text-sm text-muted">Location</p>
              <p className="mt-1 font-semibold">{profile.location}</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-5">
              <p className="text-sm text-muted">Primary Role</p>
              <p className="mt-1 font-semibold">{profile.title}</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-400" />
          <div className="space-y-6">
            {aboutTimeline.map((item) => (
              <div key={item.year} className="relative pl-14">
                <div className="absolute left-2 top-2 h-7 w-7 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-glow" />
                <div className="glass rounded-3xl p-6 transition hover:-translate-y-1">
                  <span className="text-sm font-bold text-cyan-400">{item.year}</span>
                  <h3 className="mt-2 font-poppins text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}