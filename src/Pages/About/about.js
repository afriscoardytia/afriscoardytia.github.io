import foto from "./../../Assets/Images/foto.jpg";

export const About = () => {
  return (
    <div className="m-6 md:mx-10 md:my-12 flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-7">
      <div className="w-full flex justify-center md:justify-end">
        <img
          src={foto}
          alt=""
          className="rounded-3xl w-1/2 md:w-3/4 hover:-rotate-3 duration-500"
        />
      </div>
      <div className="flex flex-col text-center w-full md:text-left items-center md:items-start">
        <div className="w-full md:w-3/4">
          <p className="font-bold text-md md:text-lg">
            Hello, my name{" "}
            <u>
              <i>Afrisco Ardytia Febrian Amarta</i>
            </u>
          </p>
          <p>
            I am a fresh graduate in informatics engineering. I am a IT
            Enthusiast, therefore I like all technological developments
            including application development.
          </p>
        </div>
      </div>
    </div>
  );
};
