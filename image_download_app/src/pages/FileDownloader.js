import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFileDownloader from "../customHooks/useFileDownloader";
import { Context } from "../App";

const FileDownloader = () => {
  let { selectedImg, setSelectedImg } = useContext(Context);
  const [downloadFile, downloaderComponentUI] = useFileDownloader();

  const download = (file) => downloadFile(file);

  return (
    <>
      <div className="row">
        {selectedImg ? (
          <>
            <div className="col text-center">
              <div className="row mt-3">
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <img
                        className="card-img-top mb-3"
                        src={selectedImg.thumb}
                      />

                      <h5 className="card-title">{selectedImg.name}</h5>

                      <a
                        className="btn btn-primary cursor-pointer text-white"
                        onClick={() => download(selectedImg)}
                      >
                        Download <FontAwesomeIcon icon="download" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {downloaderComponentUI}
          </>
        ) : (
          <div className="col text-center">
            <div className="row mt-3">
              <div className="col">
                <div className="card h-100 text-white p-10">
                  <h2>Select a file</h2>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FileDownloader;
