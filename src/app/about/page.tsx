import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="bg-background text-foreground p-12  max-w-2xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <Image
          src="/PinoUB.jpg" // Pastikan gambar ada di folder /public
          alt="Profile Picture"
          width={120}
          height={120}
          className="rounded-full border-4 border-primary"
        />
        <h1 className="text-2xl font-bold mt-4">Wildan Aridh Takhfif</h1>
        <p className="text-sm text-secondary mt-2">
          Full-Stack Developer | IT Student
        </p>
        <p className="mt-4 text-base">
          Full-stack Developer with a strong background in computer network engineering and IT. Expert in both
          frontend and backend. Passionate about creating seamless, user-centric web apps and optimizing digital
          experiences. Continuously learning and driven to deliver impactful solutions.
        </p>
        <div className="flex gap-4 mt-6">
          <a href="https://github.com/Pinoivceu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/wildannn" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            LinkedIn
          </a>
          <a href="mailto:apipkph@gmail.com" className="text-primary hover:underline">
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
