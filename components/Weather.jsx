import React from "react";
import Image from "Next/image";

const Weather = ({ data }) => {
  //   console.log(data);
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-[10]">
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
      </div>

      <div className="bg-black/50 relative p-8 rounded-md">
        <p className="text-2xl text-center pb-6">
          weather in {data.name} - {data.sys.country}
        </p>
        <div className="flex justify-between text-center">
          <div>
            <p className="text-xl">Feels Like</p>
            <p className="font-bold text-2xl">
              {data.main.feels_like.toFixed(0)}&#176;
            </p>
          </div>
          <div>
            <p className="text-xl">Humidity</p>
            <p className="font-bold text-2xl">{data.main.humidity}%</p>
          </div>
          <div>
            <p className="text-xl">Winds</p>
            <p className="font-bold text-2xl">{data.wind.speed} k/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;