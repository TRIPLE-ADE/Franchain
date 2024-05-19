import profile from "@/assets/profile.webp";

const Hero = () => {
  return (
    <section className="relative isolate h-64 pt-2.5 overflow-hidden">
      <div className="rounded-[10px] px-7 py-4 absolute left-52 rounded-es-none bg-white border border-indigo-400 max-w-96 ">
        <p className="text-lg">
          Hi Jonathan, I'm Dan from Franchain. I'm here to help you get set up
          and collecting payments from your franchisees.
        </p>
      </div>
      <div className="w-72 aspect-square absolute top-28 -z-[1] rounded-full bg-indigo-400" />
      <img src={profile} alt="hero" className="ml-4 mt-3.5" />
    </section>
  );
};

export default Hero;
