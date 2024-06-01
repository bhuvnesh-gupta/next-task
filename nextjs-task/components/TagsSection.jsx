import Flame from "./Flame";

const TAGS = [
  "UPSC",
  "UPSC Mains",
  "UPSC Prelims",
  "Preparation",
  "Indian History",
  "UPSC Mains",
  "Sociology",
  "Polity",
  "Indian History",
  "UPSC Mains",
  "Sociology",
  "Polity",
  "Indian History",
  "UPSC Mains",
  "Sociology",
  "Polity",
];

const TagsSection = () => {
  return (
    <div className="max-w-md mr-8 p-4">
      <div className="relative flex justify-start flame-bg p-6 rounded-lg">
        <Flame />
        <div className="ml-[137px]">
          <h2 className="text-xl font-bold mb-2">
            Achieve Your Goals with Keep The Streak Alive
          </h2>
          <button className="bg-orange-500  text-white px-4 py-2 rounded-xl hover:bg-orange-600  mt-2 ">
            Start Practicing
          </button>
        </div>
      </div>

      <div className="mt-6 border-2 border-gray-300 rounded-md p-5">
        <h3 className="text-lg font-semibold mb-4">Tags</h3>
        <input
          type="text"
          placeholder="Search for tag"
          className="w-full p-2 border border-gray-200 rounded mb-4"
        />
        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag, index) => (
            <span
              key={index}
              className="cursor-pointer bg-transparent border mt-3 border-gray-400 text-gray-500 font-semibold py-1 px-3 rounded-2xl hover:bg-gray-300 hover:border-gray-800 hover:text-gray-800 transition duration-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagsSection;
