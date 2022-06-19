export const Menu = ({ menuItem }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-white grid gap-5 grid-cols-1 md:grid-cols-3 w-full md:w-5/6">
        {menuItem.map((item) => {
          return (
            <div
              className="w-full h-fit rounded-lg p-1 bg-gray-200 overflow-hidden"
              key={item.id}
            >
              <img src={item.image} alt="" className="rounded-t-lg" />
              <div className="px-3 py-4 flex flex-col space-y-2 text-sm">
                <span className="font-bold">
                  <u>{item.title}</u>
                </span>
                <a
                  href={item.link}
                  className="bg-gray-600 hover:bg-gray-800 text-white py-1 px-2 rounded-md font-semibold w-fit text-xs"
                >
                  Github Repo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
