export default function AboutSection() {
  return (
    <section className="py-section-gap grid grid-cols-1 md:grid-cols-2 gap-24 items-center" id="about">
      <div className="space-y-stack-md">
        <h2 className="font-h2 text-h2">About <span className="text-primary-container">Me</span></h2>
        <div className="w-20 h-1 bg-primary-container rounded-full"></div>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          With over half a decade of experience in the digital trenches, I've evolved from a curious coder to a technical architect. I specialize in bridging the gap between complex backend systems and intuitive user interfaces. My philosophy is simple: performance is a feature, and accessibility is a right.
        </p>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          When I'm not pushing pixels or optimizing bundle sizes, you can find me exploring the latest in decentralized web technologies or mentoring aspiring developers.
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-gutter">
        <div className="glass-card p-stack-lg rounded-2xl flex flex-col items-center text-center">
          <span className="text-h2 font-h2 text-primary-container">50+</span>
          <p className="text-on-surface-variant font-label-caps">Projects Delivered</p>
        </div>
        <div className="glass-card p-stack-lg rounded-2xl flex flex-col items-center text-center">
          <span className="text-h2 font-h2 text-tertiary-container">5+</span>
          <p className="text-on-surface-variant font-label-caps">Years Experience</p>
        </div>
        <div className="glass-card p-stack-lg rounded-2xl flex flex-col items-center text-center">
          <span className="text-h2 font-h2 text-primary-container">100%</span>
          <p className="text-on-surface-variant font-label-caps">Satisfaction</p>
        </div>
        <div className="glass-card p-stack-lg rounded-2xl flex flex-col items-center text-center">
          <span className="text-h2 font-h2 text-tertiary-container">24/7</span>
          <p className="text-on-surface-variant font-label-caps">Precision Support</p>
        </div>
      </div>
    </section>
  );
}
