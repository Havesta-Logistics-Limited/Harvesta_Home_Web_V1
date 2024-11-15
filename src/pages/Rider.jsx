import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { riderForm, riderStats } from "../config/rider.config";
import Checkbox from "@mui/joy/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FAQ from "../components/faq..jsx";
import { setIcon } from "../redux/features/iconSlice.js";
import { useDispatch } from "react-redux";
import WebReview from "../components/landing/Reviews-Fragment/WebReview.jsx";
import MobileReview from "../components/landing/Reviews-Fragment/MobileReview.jsx";
import axiosInstance from "../config/axios.config.js";
const Rider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastname: "",
    email: "",
    phone_number: "",
    // date_of_birth: "",
    // gender: null,
    // country: "Nigeria",
    // state: "Lagos",
    // method_of_delivery: null,
    // location: null,
    // currently_working_with_another_logistics: null,
    // NIN: null,
    // bank_name: null,
    // account_number: null,
    // guarantor_1_name: null,
    // guarantor_1_phone_number: null,
    // guarantor_2_name: null,
    // guarantor_2_phone_number: null,
    agreed_to_regular_updates: false,
    accepted_privacy_policy: false,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIcon("rider"));

    return () => {
      dispatch(setIcon("home"));
    };
  }, []);

  useEffect(() => {
    let input = document.querySelector(".phoneNum");

    input.addEventListener("input", (e) => {
      if (input.value.length > 11) {
        input.value = input.value.substr(0, 11);
      }
      input.value = this.value.replace(/[^0-9]/g, "");
    });
  }, []);

  const formTitleStyle = {
    fontSize: "11px",
    fontWeight: "700",
    color: "#242424",
    lineHeight: "1.5",
    fontFamily: "Plus Jakarta Sans",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      console.log(formData)
      const { data } = await axiosInstance.post(
        `${import.meta.env.VITE_AUTH_ENDPOINT}/riders/signup`,
        formData
      );
      setLoading(false);
      navigate(`/riders/congratulations/${data.public_unique_Id}`);
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error, "err");
    }

    // const value = 4935340340229425;
  };

  const setErrors = (target) => {
    switch (target.name) {
      case "date_of_birth":
        let inputDateString = target.value;
        let inputDate = new Date(inputDateString);
        const currentDate = new Date();

        if (inputDate > currentDate) {
          setError("Date cannot be a future date");
          // return "Date cannot be a future date";
        }
        setError("");
        break;

      case "email":
        if (!validateEmailFormat(target.value)) {
          setError("Invalid email format");
          // return "Invalid email format";
        } else setError("");
        // console.log(error);
        break;

      default:
        return;
    }
  };

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

    setErrors(event.target);
    console.log(event.target.value);
    // switch (event.target.name) {
    //   case "date_of_birth":
    //     let inputDateString = event.target.value;
    //     let inputDate = new Date(inputDateString);
    //     const currentDate = new Date();

    //     if (inputDate > currentDate) {
    //       setError("Date of birth cannot be a future date");
    //     }
    //     console.log(error);
    //     break;

    //   case "email":
    //     if (!validateEmailFormat(event.target.value)) {
    //       setError("Invalid email format");
    //     } else setError("");
    //     console.log(error);
    //     break;

    //   default:
    //     console.log("fgfd");
    // }
    // if (event.target.name === "date_of_birth") {
    //   let inputDateString = event.target.value;
    //   let inputDate = new Date(inputDateString)
    //   const currentDate = new Date();

    //   if (inputDate > currentDate) {
    //     setError("Date cannot be a future date")
    //   }
    //   console.log(error)
  };

  function validateEmailFormat(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  const handleCheckboxChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));

    console.log(
      event.target.name,
      event.target.checked,
      formData.accepted_privacy_policy,
      "ertghgdh"
    );
    // console.log(event.target.checked)
  };

  // const playwithdate = (
  //   date = startDate,
  //   dur = duration,
  //   durt = durationType
  // ) => {
  //   setStartDate(date);
  //   if (dur == null || dur == "" || dur == NaN) {
  //     console.log("bad");
  //     return;
  //   }
  //   const d = new Date(date);
  //   console.log(d);
  //   if (durt == "MONTHS") {
  //     console.log(durt, 1);
  //     d.setMonth(d.getMonth() + dur);
  //   } else {
  //     console.log(durt, 2);
  //     d.setDate(d.getDate() + dur);
  //   }
  //   console.log(d);
  //   const dateObj = d;
  //   const month = dateObj.getUTCMonth() + 1; //months from 1-12
  //   const day = dateObj.getUTCDate();
  //   const year = dateObj.getUTCFullYear();
  //   let newDate = day + "-" + month + "-" + year;
  //   setFormatedEndDate(newDate);
  //   newDate = year + "-" + month + "-" + day;
  //   console.log(newDate);
  //   setEndDate(newDate);
  // };

  return (
    <>
      <section>
        <div className="relative pb-5">
          <div className="w-full bg-cover  py-20 bg-[url('https://res.cloudinary.com/dtc89xi2r/image/upload/v1721822845/Group_1000002050_isyw0e.png')]">
            {/* HERO SECTION */}
            <div className="mt-32 md:grid grid-cols-2 justify-items-center lg:h-[40vh] relative lg:ml-44">
              <div className=" p-2">
                <h2 className="p-3 text-[50px] font-primary font-bold lg:leading-tight lg:text-[55px] text-[#242424] text-6xl">
                  Become a Delivery <br />
                  <span className="text-white font-[700]">AGENT </span>with
                  Harvesta
                </h2>
                <p className=" p-3  text-[#242424] font-primary">
                  Be your Boss. Build your income daily, weekly, or monthly.
                </p>
                {/*  <button className="mt-10 font-primary rounded-full bg-primary p-3 text-white text-xs font-bold shadow-md w-[100px] ml-2">
                  Get Started
                </button> */}
              </div>
              <div className="lg:absolute right-52">
                <img
                  src="https://res.cloudinary.com/dtc89xi2r/image/upload/v1719527279/Ellipse_69_3_yhglfw.svg"
                  alt=""
                  className="w-[400px] "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-items-center mt-10 font-primary">
          <h2 className="text-[54px] font-bold font-primary">
            Complete The Form
          </h2>

          <form className="my-4 lg:w-[70%] w-full p-8">
            <div className="lg:grid grid-cols-2 gap-6">
              {riderForm.map((item, index) =>
                item.options ? (
                  <FormControl key={index} className="max-w-[542px]">
                    <FormLabel style={formTitleStyle} className="font-primary">
                      {item.title}
                    </FormLabel>

                    <Select
                      placeholder={item.placeholder}
                      startDecorator={
                        item.phoneNumber ? <KeyboardArrowDown /> : false
                      }
                      endDecorator={
                        item.phoneNumber ? "" : <KeyboardArrowDown />
                      }
                      indicator
                      sx={{
                        padding: "8px",
                        backgroundColor: "#f3f4f6",
                        fontFamily: "Helvetica",
                        fontSize: "12px",
                        height: "56px",
                      }}
                    >
                      {item.subItems &&
                        item.subItems.map((subItem, subIndex) => (
                          <>
                            <Option key={subIndex} value={subItem}>
                              {subItem}
                            </Option>
                          </>
                        ))}
                    </Select>
                  </FormControl>
                ) : (
                  <FormControl key={index} className="relative max-w-[542px]">
                    <FormLabel style={formTitleStyle}>{item.title}</FormLabel>
                    {/* <div className="w-full bg-red-500 absolute"> */}
                    {item.name == "phone_number" ? (
                      <div className="absolute bottom-[18px] left-2.5">
                        <img src="icons/naija-flag.svg" alt="flag" />
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <input
                      type={item.type}
                      placeholder={item.placeholder}
                      className={`border-[0.5px] border-gray p-2 rounded-md bg-gray-100 rider-field focus:outline-none font-primary h-[56px] text-sm w-full ${
                        item.name == "phone_number" ? "pl-10 phoneNum" : ""
                      }`}
                      value={formData[item.name]}
                      name={item.name}
                      onChange={handleChange}
                      readOnly={item.constant}
                      max={item.max}
                      // onInput={item.oninput}
                      id={item.id}
                      required={item.required}
                    />
                    {/* </div> */}
                    {error.includes(item.error_identifier) ? (
                      <div>{error}</div>
                    ) : (
                      <div></div>
                    )}
                  </FormControl>
                )
              )}
            </div>
          </form>

          <style jsx>{`
            input[type="date"].empty::before {
              content: attr(data-placeholder);
              position: absolute;
              top: 50%;
              left: 10px;
              transform: translateY(-50%);
              color: #6b7280; /* Tailwind's gray-500 */
              font-style: italic;
              pointer-events: none;
            }

            input[type="date"]:focus::before {
              display: none;
            }
          `}</style>

          <div className="grid grid-col-1 gap-5 p-3 justify-items-center">
            <Checkbox
              sx={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "12px",
                marginLeft: "-5px",
              }}
              color="success"
              size="sm"
              label="I agree to get regular updates from Harvesta"
              name="agreed_to_regular_updates"
              onChange={handleCheckboxChange}
              checked={formData.agreed_to_regular_updates}
            />
            <Checkbox
              sx={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "12px",
              }}
              color="success"
              size="sm"
              label="By clicking this, you accept the  privacy policy "
              name="accepted_privacy_policy"
              onChange={handleCheckboxChange}
              checked={formData.accepted_privacy_policy}
            />

            <button
              className={
                loading == false && formData.accepted_privacy_policy == true
                  ? "mt-10 font-primary rounded-full bg-primary p-3 text-white text-xs font-bold shadow-md w-[100px] hover:bg-primaryHover"
                  : "mt-10 font-primary rounded-full bg-[#005231] opacity-50 p-3 text-white text-xs font-bold shadow-md w-[100px] cursor-not-allowed"
              }
              onClick={handleSubmit}
              disabled={
                loading == true && !formData.accepted_privacy_policy == false
              }
            >
              Submit
            </button>
            <p className="text-xs">
              Want to become a Vendor?{" "}
              <Link
                to="/vendor"
                className="text-harvestaLightGreen font-bold hover:text-primaryHover"
              >
                Register Here
              </Link>{" "}
            </p>
          </div>
        </div>

        <div className="w-full h-auto bg-harvestaYellow px-1 flex justify-center mt-20">
          {" "}
          {/* container */}
          <div className="w-3/4 bg-white lg:grid grid-flow-col gap-3 border-2 border-white rounded-[20px]">
            {riderStats.map((item, index) => (
              <div
                key={index}
                className="grid grid-flow-col items-center font-primary text-[13px] gap-2 p-6 w-[300px] font-semibold "
              >
                <img src={item.image} alt="icon" className="w-10" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="font-primary grid grid-flow-row justify-items-center mt-28">
          <h2 className="text-3xl font-semibold">Riders Review</h2>
          <p className="text-gray-600 text-sm mt-4 text-center">
            We are proud of our accomplishments. We will keep <br /> delivering
            excellence and satisfaction
          </p>
          <div className="mt-4">
            <MobileReview type={"rider"} />
            <WebReview
              type={"rider"}
              image={
                "https://res.cloudinary.com/dtc89xi2r/image/upload/v1721822928/Imager_k8hx5b.png"
              }
            />
          </div>
        </div>

        <div className="space-y-10 lg:space-y-0 grid grid-flow-col justify-items-center p-14 lg:w-1/2 mx-auto lg:space-x-4 mb-40 ">
        <div className=" ">
          <h1 className="text-6xl text-harvestaDarkGreen font-semibold">1M+</h1>
          <h3 className="">Monthly Customer Visit</h3>
        </div>
        <div className="">
          <h1 className="text-6xl text-harvestaDarkGreen font-semibold">92%</h1>
          <h3 className="">Customer Satisfaction Rate</h3>
        </div>
        <div className="">
          <h1 className="text-6xl text-harvestaDarkGreen font-semibold">4.9</h1>
          <h3 className="">Average Customer Ratings</h3>
        </div>
      </div>
      

        <FAQ />
      </section>
    </>
  );
};

export default Rider;
