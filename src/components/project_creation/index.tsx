import {
  Input,
  Select,
  Textarea,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
// import React from 'react'
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { motion } from "framer-motion";
import InputComponent from "../shared/CustomInput";
import { useEffect, useState } from "react";
import PhotoBtn from "./photoBtn";
import MediaBtn from "./mediaBtn";
import { useCreateRepCallback } from "../../helpers/calls/useCreateRepCallback";

function ProjectCreation() {
  const createRepCallback = useCreateRepCallback();

  const navigate = useNavigate();
  const schema = yup.object({
    name: yup.string().required("required"),
    ticker: yup.string().required("required"),
    category: yup.string().required("required"),
    website: yup.string().required("required"),
    // twitter: yup.string().required('required'),
    // discord: yup.string().required('required'),
    // telegram: yup.string().required('required'),
    // youtube: yup.string().required('required'),
    // bio: yup.string().required('required'),
  });

  const [tab, setTab] = useState(false);

  const [royality, setRoyality] = useState("");
  const [photoFile, setPhotoFile] = useState("");
  const [mediaFile, setMediaFile] = useState("");

  const toast = useToast();

  // formik
  const formik = useFormik({
    initialValues: {
      name: "",
      ticker: "",
      category: "",
      website: "",
      twitter: "",
      discord: "",
      telegram: "",
      youtube: "",
      bio: "",
    },
    validationSchema: schema,
    onSubmit: () => {},
  });

  console.log(royality);

  const jjj = async () => {
    await createRepCallback.createRep({
      projectName: "MySonThingsBSC100222",
      projectTicker: "MYSONTHINGS1002112",
      address: "0x293ee4b57E05d32aC5284744d1Bf1cA4E7d52352",
      projectRoyalty: 20,
    });
  };

  const clickHandler = () => {
    if (window?.location?.pathname?.includes("edit")) {
      // goto the project profile of edit project
      navigate("/project");
    } else {
      if (!formik.dirty) {
        toast({
          title: "You have to fill in the form to continue",
          position: "top-right",
          status: "error",
          isClosable: true,
        });
        return;
      } else if (!formik.isValid) {
        toast({
          title: "You have to fill in the form to continue",
          position: "top-right",
          status: "error",
          isClosable: true,
        });
        return;
      } else if (!photoFile) {
        toast({
          title: "Upload Photo",
          position: "top-right",
          status: "error",
          isClosable: true,
        });
      } else if (!mediaFile) {
        toast({
          title: "Upload Media Image",
          position: "top-right",
          status: "error",
          isClosable: true,
        });
      } else {
        setTab(true);
      }
    }
  };

  const submit = () => {
    if (window?.location?.pathname?.includes("edit")) {
      // goto the project profile of create project
      navigate("/project");
    }
  };

  return (
    <>
      {!tab && (
        <div className=" lg:max-w-7xl w-full flex flex-col px-4 lg:px-8 gap-6 ">
          <div className=" bg-white w-full rounded-[10px] py-9 px-4 lg:py-[56px] lg:px-[80px] gap-5 flex lg:flex-row flex-col ">
            <PhotoBtn intial={photoFile} file={setPhotoFile} />
            <div className=" w-full flex flex-col gap-6 ">
              <div className=" w-full flex flex-col gap-2  ">
                <p className=" text-[#4D4D4D] ">
                  <span className=" text-[#D20000] ">*</span> Project name
                </p>
                <InputComponent
                  name="name"
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldTouched("name", true, true)}
                  touch={formik.touched.name}
                  error={formik.errors.name}
                  cursor={
                    window?.location?.pathname?.includes("edit")
                      ? "not-allowed"
                      : "auto"
                  }
                  type="text"
                  placeholder="Email"
                />
                {/* <Input disabled={window?.location?.pathname?.includes("edit") ? true : false} cursor={window?.location?.pathname?.includes("edit") ? "not-allowed" : "auto"} fontSize={["sm", "medium"]} height={["38px", "54px"]} bgColor={"#EBEDF2"} /> */}
              </div>
              {window?.location?.pathname?.includes("edit") && (
                <div className=" w-full flex flex-col gap-2  ">
                  <p className=" text-[#4D4D4D] ">
                    <span className=" text-[#D20000] ">*</span> Project royality
                  </p>
                  <Input
                    onChange={(e) => setRoyality(e.target.value)}
                    placeholder="10%"
                    fontSize={["sm", "medium"]}
                    height={["38px", "54px"]}
                    bgColor={"#EBEDF2"}
                  />
                </div>
              )}
              <div className=" w-full flex flex-col gap-2  ">
                <p className=" text-[#4D4D4D] ">
                  <span className=" text-[#D20000] ">*</span> Project ticker
                </p>
                <InputComponent
                  name="ticker"
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldTouched("ticker", true, true)}
                  touch={formik.touched.ticker}
                  error={formik.errors.ticker}
                  type="text"
                  placeholder="e.g BTC"
                  disabled={
                    window?.location?.pathname?.includes("edit") ? true : false
                  }
                  cursor={
                    window?.location?.pathname?.includes("edit")
                      ? "not-allowed"
                      : "auto"
                  }
                />
                {/* <Input  placeholder='e.g BTC' fontSize={["sm", "medium"]} height={["38px", "54px"]} bgColor={"#EBEDF2"} /> */}
              </div>
              <div className=" w-full flex flex-col gap-2  ">
                <p className=" text-[#4D4D4D] ">
                  <span className=" text-[#D20000] ">*</span> Project category
                </p>
                <Select
                  name="category"
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldTouched("category", true, true)}
                  placeholder="Choose category"
                  fontSize={["sm", "medium"]}
                  height={["38px", "54px"]}
                  bgColor={"#EBEDF2"}
                >
                  <option>Blockchain</option>
                  <option>DeFi</option>
                  <option>NFT</option>
                  <option>DAO</option>
                  <option>CeFI</option>
                  <option>Meme</option>
                  <option>Coin</option>
                  <option>Game</option>
                  <option>GameFi</option>
                  <option>GamebleFI</option>
                  <option>Others</option>
                </Select>
                {formik.touched.category && formik.errors.category && (
                  <Text
                    as={motion.p}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    color="#E84545"
                    fontWeight="600"
                    fontSize="xs"
                    mt="-8px"
                    textAlign="left"
                  >
                    {formik.errors.category}
                  </Text>
                )}
              </div>
              <div className=" w-full flex flex-col gap-2  ">
                <p className=" text-[#4D4D4D] ">
                  <span className=" text-[#D20000] ">*</span> Website
                </p>
                <InputComponent
                  name="website"
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldTouched("website", true, true)}
                  touch={formik.touched.website}
                  error={formik.errors.website}
                  type="text"
                  placeholder="https://"
                />
                {/* <Input placeholder='https://' fontSize={["sm", "medium"]} height={["38px", "54px"]} bgColor={"#EBEDF2"} /> */}
              </div>
              <div className=" w-full flex flex-col gap-2  ">
                <p className=" text-[#4D4D4D] ">Twitter url</p>
                <InputComponent
                  name="twitter"
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldTouched("twitter", true, true)}
                  touch={formik.touched.twitter}
                  error={formik.errors.twitter}
                  type="text"
                  placeholder="https://"
                />
                {/* <Input placeholder='https://' fontSize={["sm", "medium"]} height={["38px", "54px"]} bgColor={"#EBEDF2"} /> */}
              </div>
              <div className=" w-full flex flex-col gap-2  ">
                <p className=" text-[#4D4D4D] ">Discord url</p>
                <InputComponent
                  name="discord"
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldTouched("discord", true, true)}
                  touch={formik.touched.discord}
                  error={formik.errors.discord}
                  type="text"
                  placeholder="https://"
                />
                {/* <Input placeholder='https://' fontSize={["sm", "medium"]} height={["38px", "54px"]} bgColor={"#EBEDF2"} /> */}
              </div>
              <div className=" w-full flex flex-col gap-2  ">
                <p className=" text-[#4D4D4D] ">Telegram url</p>
                <InputComponent
                  name="telegram"
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldTouched("telegram", true, true)}
                  touch={formik.touched.telegram}
                  error={formik.errors.telegram}
                  type="text"
                  placeholder="https://"
                />
                {/* <Input placeholder='https://' fontSize={["sm", "medium"]} height={["38px", "54px"]} bgColor={"#EBEDF2"} /> */}
              </div>
              <div className=" w-full flex flex-col gap-2  ">
                <p className=" text-[#4D4D4D] ">Youtube video</p>
                <InputComponent
                  name="youtube"
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldTouched("youtube", true, true)}
                  touch={formik.touched.youtube}
                  error={formik.errors.youtube}
                  type="text"
                  placeholder="https://"
                />
                {/* <Input placeholder='https://' fontSize={["sm", "medium"]} height={["38px", "54px"]} bgColor={"#EBEDF2"} /> */}
              </div>
            </div>
          </div>
          <div className=" bg-white w-full rounded-[10px] lg:px-9 py-9 px-4 gap-5 flex lg:flex-row flex-col-reverse ">
            <div className=" w-full flex flex-col gap-2 ">
              <p className=" text-[#4D4D4D] ">Enter bio</p>
              <Textarea
                name="bio"
                onChange={formik.handleChange}
                onFocus={() => formik.setFieldTouched("bio", true, true)}
                height={["250px", "500px"]}
                borderColor={"#EBEDF2"}
              />
              {/* {formik.touched.bio && formik.errors.bio && (
                                <Text as={motion.p}
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }} color="#E84545" fontWeight="600" fontSize="xs" mt="-6px" textAlign="left" >{formik.errors.bio}</Text>
                            )} */}
            </div>
            <MediaBtn intial={mediaFile} file={setMediaFile} />
          </div>
          <div className=" w-full">
            {/* <Button py={3} onClick={() => clickHandler()} rounded={"30px"} width={"full"} bgColor={"#5404FF"} color={"white"} _hover={{ backgroundColor: "#5404FF" }} fontSize={["sm", "medium"]} paddingY={"3"} >
                            Continue
                        </Button> */}
            <button onClick={() => jjj()}>Create Project</button>
          </div>
        </div>
      )}
      {tab && (
        <div className=" lg:max-w-7xl w-full flex flex-col px-4 lg:px-8 gap-4 ">
          <div className=" bg-white w-full rounded-[10px] py-9 lg:px-9 px-4 gap-5 flex flex-col ">
            <p className="text-center text-slate-900 text-2xl font-bold leading-loose">
              Project Royalty
            </p>
            <div className="w-full">
              <span className="text-neutral-600 text-base font-normal ">
                Each time your Project rep token is bought you earn a percentage
                of the purchase as royalty. The royalty is a percentage of the
                amount used in the purchase.
                <br />
                Each Project sets their own percentage. The recommended
                percentage is 10%. However, your are free to increase of reduce
                it.
                <br />
                <br />
                If you set the Project royalty to{" "}
              </span>
              <span className="text-neutral-600 text-base font-bold ">
                100%
              </span>
              <span className="text-neutral-600 text-base font-normal ">
                {" "}
                then no one (except you) will be able to buy your rep token
                until you reduce it. You can set your royalty to 100% if you are
                not ready to start taking purchases of your rep token
              </span>
            </div>
            <div className=" w-full flex flex-col gap-2  ">
              <p className=" text-[#4D4D4D] ">
                <span className=" text-[#D20000] ">*</span> Project royality
              </p>
              <Input
                onChange={(e) => setRoyality(e.target.value)}
                placeholder="10%"
                height={"54px"}
                bgColor={"#EBEDF2"}
              />
            </div>
          </div>
          <Button
            onClick={() => submit()}
            mt={"4"}
            rounded={"30px"}
            bgColor={"#5404FF"}
            color={"white"}
            _hover={{ backgroundColor: "#5404FF" }}
            py={"4"}
          >
            Create Project
          </Button>
          <div className="w-fit mx-auto h-[22px] justify-center items-start gap-4 inline-flex">
            <div className="text-slate-900 text-base font-normal  border-slate-900 border-r pr-4 ">
              Project creation fee
            </div>
            <div className=" text-slate-900 text-base font-normal ">
              0.45 BNB
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCreation;
