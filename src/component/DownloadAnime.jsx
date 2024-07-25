import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DownloadAnime = ({ watchAnime }) => {
  if (!watchAnime) {
    return <div>Loading...</div>;
  }

  console.log(watchAnime);
  return (
    <>
      {watchAnime ? (
        <div className="w-full min-h-auto">
          <div className="flex flex-col gap-3 lg:flex-row ">
            <div className="w-full rounded-lg p-3 bg-gray-50 border overflow-hidden">
              <h1 className="font-bold mb-5 text-lg ">Download URL's .mp4</h1>

              {watchAnime.mp4.map((mp4, indexMp4) => {
                return (
                  <div key={indexMp4} className="flex mb-2  gap-2">
                    <div className="flex items-center">
                      <h1 className="font-semibold text-lg mr-3">{mp4.resolution}: </h1>
                    </div>

                    <div className="flex flex-wrap p-2  gap-2">
                      {mp4.urls.map((url, urlIndex) => {
                        return (
                          <a key={urlIndex} href={url.url} target="_blank" className="font-normal bg-slate-100 px-2.5 py-0.5  rounded-full text-base">
                            {url.provider}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-full rounded-lg p-3 bg-gray-50 border overflow-hidden">
              <h1 className="font-bold mb-5 text-lg ">Download URL's .mkv</h1>

              {watchAnime.mkv.map((mkv, indexMkv) => {
                return (
                  <div key={indexMkv} className="flex mb-2  gap-2">
                    <div className="flex items-center">
                      <h1 className="font-semibold text-lg mr-3">{mkv.resolution}: </h1>
                    </div>

                    <div className="flex flex-wrap p-2  gap-2">
                      {mkv.urls.map((url, urlIndex) => {
                        return (
                          <a key={urlIndex} href={url.url} target="_blank" className="font-normal bg-slate-100 px-2.5 py-0.5  rounded-full text-base">
                            {url.provider}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default DownloadAnime;
