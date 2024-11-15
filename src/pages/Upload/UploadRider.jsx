import { setIcon } from "../../redux/features/iconSlice.js";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import uploadList from "../../config/uploadrider.config.jsx";
import checkIcon from "../../assets/icons/icon.png";
import uploadIcon from "../../assets/icons/upload.png";
import cancelSend from "../../assets/icons/cancel.png";
import LogoNav from "../../common/LogoNav.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../config/axios.config.js";

const UploadRider = () => {
  const [progress, setProgress] = useState({});
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();
  const [buttonAvailable, setButtonAvailable] = useState(false);
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);

    selectedFiles.forEach((file) => {
      simulateUploadProgress(file);
    });
  };

  const simulateUploadProgress = (file) => {
    const totalSize = file.size;
    let uploadedSize = 0;
    const interval = setInterval(() => {
      uploadedSize += totalSize / 100;
      const percentComplete = Math.round((uploadedSize / totalSize) * 100);
      setProgress((prevProgress) => ({
        ...prevProgress,
        [file.name]: percentComplete,
      }));
      if (percentComplete >= 100) {
        clearInterval(interval);
      }
    }, 10);
  };

  const cancelUpload = (fileName) => {
    console.log(`Cancelling upload of ${fileName}`);
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
    setProgress((prevProgress) => {
      const updatedProgress = { ...prevProgress };
      delete updatedProgress[fileName];
      return updatedProgress;
    });
  };

  // const nextPage = () => {
  //   if (files.length > 1) {
  //     setButtonAvailable(true);
  //     navigate("/finalmessage");
  //   } else {
  //     return;
  //   }
  // };

  const handleSubmit = async (e) => {
    // let id = 0
    e.preventDefault();
    const formData = new FormData();
    files.forEach((file, index) => {
        // id +=1
      formData.append('images', file)
      // formData.append(`metadata-${id}`, id);
    })
    console.log(formData.getAll("images"))
    try {
    const data = await axiosInstance.post(`${import.meta.env.VITE_AUTH_ENDPOINT}/riders/upload`,formData, {
      headers:{
        "Content-Type" : "multipart/form-data"
      },
    })

    console.log(data.data)
    if (data.data.status == "success") {
      navigate("/finalmessage")
    }
  } 
  catch(err) {
    console.error(err)
  }
  }

  useEffect(() => {
    dispatch(setIcon("rider"));

    return () => {
      dispatch(setIcon("home"));
    };
  }, []);

  useEffect(() => {
    if (files.length == 2  && files.length != 0 && files.length != 1) {
      console.log(files, 'files')
      setButtonAvailable(true);
      console.log(files, "files")
    } else {
      setButtonAvailable(false)
    }
  }, [files]);

  console.log(buttonAvailable, files.length);

  return (
    <>
      <LogoNav />
      <section className="bg-harvestaYellow p-5">
        <div className="h-screen lg:grid grid-flow-col justify-items-center items-center">
          <div className="p-4  mt-28 lg:ml-28 lg:mt-[-28px]">
            <h1 className="lg:text-[60px] text-[40px] mb-4 text-white font-primary font-semibold leading-11">
              Upload Your <br /> Documents
            </h1>

            {uploadList.map((item, index) => (
              <p
                key={index}
                className="grid grid-flow-col list-none text-left justify-start mb-3 items-center gap-2 font-primary font-bold text-md"
              >
                <span>
                  <img src={checkIcon} alt="" className="w-3" />
                </span>
                {item}
              </p>
            ))}
          </div>









          <div className="grid grid-flow-row justify-items-center">
            <div className="bg-white w-full p-4 md:w-[500px] h-auto rounded-2xl mb-6 ">
              <div className="p-3">
                <h3 className="text-harvestaSecondBlack font-bold font-primary">
                  Upload and attach files
                </h3>
                <p className="text-gray-400 text-xs font-semibold mt-1.5">
                  Supported formats: png, jpeg, pdf
                </p>
              </div>
              <form className="border-2 border-dashed border-harvestaYellow grid grid-flow-row justify-items-center items-center p-3 mb-4">
                <img
                  src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1720271606/Cloud_uploading_3_ka2xmk.gif"
                  className="w-[50px] bg-black rounded-full mt-5 cursor-pointer"
                  onClick={handleImageClick}
                  alt=""
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                  disabled={files.length == 2}
                  multiple
                  
                />
                <p
                  className="font-primary font-semibold text-harvestaSecondBlack text-sm mt-2 cursor-pointer"
                  onClick={handleImageClick}
                >
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-400 font-primary mb-10">
                  Maximum file size 50 MB.
                </p>
              </form>
              {files.map((file, index) => (
                <div
                  key={index}
                  className="bg-gray-200 overflow-hidden mt-4 rounded-lg w-full"
                >
                  <div className="grid grid-flow-col justify-between p-2 items-center">
                    <div className="grid grid-flow-col items-center space-x-2">
                      <img
                        src={uploadIcon}
                        alt=""
                        className="w-[30px] bg-white p-2 rounded-md"
                      />
                      <div>
                        <p className="text-xs font-primary text-harvestaBlack font-bold">
                          {file.name}
                        </p>
                        <p className="text-xs text-gray-400 font-semibold">
                          {file.size}
                        </p>
                      </div>
                    </div>
                    <div>
                      <img
                        src={cancelSend}
                        alt="cancel"
                        onClick={() => cancelUpload(file.name)}
                        className="cursor-pointer p-2"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div
                      className="bg-harvestaYellow h-1.5 rounded mb-1.5 ml-2 w-[100px]"
                      style={{
                        width: `${progress[file.name] || 0}%`,
                        maxWidth: "90%",
                      }}
                    ></div>
                    <p className="text-[10px] absolute top-0 bottom-0 right-0 flex items-center pr-2 ml-2 font-primary font-semibold text-gray-600">
                      {progress[file.name] || 0}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className={`p-2.5 rounded-full font-primary text-sm font-semibold text-white w-1/4  ${
                buttonAvailable
                  ? "bg-harvestaBlack hover:bg-black"
                  : "bg-gray-300 hover:none opacity-80"
              }`}
              onClick={(e)=> handleSubmit(e)}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default UploadRider;
