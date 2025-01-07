import { VerticalMarquee } from "./vertical-maruee";

const Tools = () => {
  return (
    <div className="py-12 md:px-0 px-6 overflow-hidden mt-20">
      <div className="container md:max-w-[1200px] mx-auto bg-zinc-200 dark:bg-zinc-800 bg-opacity-0.5 overflow-hidden rounded-3xl px-10">
        <div className="flex flex-col lg:flex-row py-12 lg:py-2">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl lg:text-6xl font-semibold leading-snug lg:w-2/3">
              Seamless Tool <span className="text-primary">Integration</span>{" "}
            </h1>
            <p className="text-lg text-secondary-content max-w-lg mt-1 leading-tight mb-8">
              NajmAI offers seamless integration with a variety of popular
              design and project management tools, ensuring a smooth and
              efficient workflow.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center py-12 lg:py-2">
            <VerticalMarquee />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
