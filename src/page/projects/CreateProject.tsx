import { useState } from "react";
import { Select, Textarea, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import RoyaltyInput from "../../components/form/RoyaltyInput";
import TextInput from "../../components/form/TextInput";
import PhotoUploadBtn from "../../components/buttons/PhotoUploadBtn";
import { useCreateRepCallback } from "../../helpers/calls/useCreateRepCallback";
import ConnectWallet from "../../components/buttons/ConnectWallet";
import { CreateProjectSchema } from "../../schemas";
import { useWeb3Context } from "../../context/Web3Context";
import { useCustomToast } from "../../helpers/useToast";
import Http from "../../helpers/http";

function CreateProject() {
  const createRepCallback = useCreateRepCallback();
  const navigate = useNavigate();
  const { isConnected, address } = useWeb3Context();
  
  const [tab, setTab] = useState(false);
  const [pendingTx, setTxStatus] = useState<boolean>(false);
  const [royalty, setRoyalty] = useState(0);
  const [photoFile, setPhotoFile] = useState(null);

  const { txToast, errorToast, successToast } = useCustomToast();

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
    validationSchema: CreateProjectSchema,
    onSubmit: () => {},
  });

  const onContinueHandler = () => {
    if (!formik.dirty) {
      errorToast("You have to fill in the form to continue");
      return;
    } else if (!formik.isValid) {
      errorToast("You have to fill in the form to continue");
      return;
    } else if (!photoFile) {
      errorToast("Upload Photo for your project");
    } else {
      setTab(true);
    }
  };

  const submit = async () => {
    if (!royalty || !formik.values.name || !formik.values.ticker) {
      errorToast("Could not verify project details. Reload and try again.");
      return;
    }
    setTxStatus(true);
    try {
      const tx = await createRepCallback.createRep({
        projectName: formik.values.name,
        projectTicker: formik.values.ticker.toUpperCase(),
        address: address,
        projectRoyalty: royalty,
      });
      successToast("Project created. Pending confirmation...");

      const receipt = await tx.wait();
      
      const formData = new FormData();
      formData.append('name', formik.values.name);
      formData.append('image', photoFile);
      formData.append('ticker', formik.values.ticker);
      formData.append('category', formik.values.category);
      formData.append('website', formik.values.website);
      formData.append('twitter_url', formik.values.twitter);
      formData.append('discord_url', formik.values.discord);
      formData.append('telegram_url', formik.values.telegram);
      formData.append('youtube_url', formik.values.youtube);
      formData.append('bio', formik.values.bio);
      formData.append('royalty', royalty.toString());
      formData.append('txhash', receipt.hash);
      
      const url = '/projects/create';
      const response = await new Http().post(url, formData);

      txToast(receipt.hash);
      setTxStatus(false);

      navigate(`/projects/${response['address']}`);
    } catch (err: any) {
      errorToast(err)
      setTxStatus(false);
    }
  };

  return (
    <>
      {!tab && (
        <div className=" lg:max-w-7xl w-full flex flex-col px-4 lg:px-8 gap-6 ">
          <div className=" bg-white w-full rounded-[10px] py-9 px-4 lg:py-[56px] lg:px-[80px] gap-5 flex lg:flex-row flex-col ">
            <PhotoUploadBtn
              currentImagePath={photoFile}
              onFileChangeHandler={setPhotoFile}
            />
            <div className=" w-full flex flex-col gap-6 ">
              <div className=" w-full flex flex-col gap-2  ">
                <p className=" text-[#4D4D4D] ">
                  <span className=" text-[#D20000] ">*</span> Project name
                </p>
                <TextInput
                  name="name"
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldTouched("name", true, true)}
                  touch={formik.touched.name}
                  error={formik.errors.name}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className=" w-full flex flex-col gap-2  ">
                <p className=" text-[#4D4D4D] ">
                  <span className=" text-[#D20000] ">*</span> Project ticker
                </p>
                <TextInput
                  name="ticker"
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldTouched("ticker", true, true)}
                  touch={formik.touched.ticker}
                  error={formik.errors.ticker}
                  type="text"
                  placeholder="e.g BTC"
                />
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
                <TextInput
                  name="website"
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldTouched("website", true, true)}
                  touch={formik.touched.website}
                  error={formik.errors.website}
                  type="text"
                  placeholder="https://"
                />
              </div>
              <div className=" w-full flex flex-col gap-2  ">
                <p className=" text-[#4D4D4D] ">Twitter url</p>
                <TextInput
                  name="twitter"
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldTouched("twitter", true, true)}
                  touch={formik.touched.twitter}
                  error={formik.errors.twitter}
                  type="text"
                  placeholder="https://"
                />
              </div>
              <div className=" w-full flex flex-col gap-2  ">
                <p className=" text-[#4D4D4D] ">Discord url</p>
                <TextInput
                  name="discord"
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldTouched("discord", true, true)}
                  touch={formik.touched.discord}
                  error={formik.errors.discord}
                  type="text"
                  placeholder="https://"
                />
              </div>
              <div className=" w-full flex flex-col gap-2  ">
                <p className=" text-[#4D4D4D] ">Telegram url</p>
                <TextInput
                  name="telegram"
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldTouched("telegram", true, true)}
                  touch={formik.touched.telegram}
                  error={formik.errors.telegram}
                  type="text"
                  placeholder="https://"
                />
              </div>
              <div className=" w-full flex flex-col gap-2  ">
                <p className=" text-[#4D4D4D] ">Youtube video(Embedded Link)</p>
                <TextInput
                  name="youtube"
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldTouched("youtube", true, true)}
                  touch={formik.touched.youtube}
                  error={formik.errors.youtube}
                  type="text"
                  placeholder="https://"
                />
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
            </div>
            
          </div>
          <div className=" w-full">
            {!isConnected ? (
              <ConnectWallet>
                <Button
                  py={3}
                  rounded={"30px"}
                  width={"full"}
                  bgColor={"#5404FF"}
                  color={"white"}
                  _hover={{ backgroundColor: "#5404FF" }}
                  fontSize={["sm", "medium"]}
                  paddingY={"3"}
                >
                  Connect Wallet
                </Button>
              </ConnectWallet>
            ) : (
              <Button
                py={3}
                onClick={() => onContinueHandler()}
                rounded={"30px"}
                width={"full"}
                bgColor={"#5404FF"}
                color={"white"}
                _hover={{ backgroundColor: "#5404FF" }}
                fontSize={["sm", "medium"]}
                paddingY={"3"}
              >
                Continue
              </Button>
            )}
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
                <span className=" text-[#D20000] ">*</span> Project royalty
              </p>
              <RoyaltyInput royaltyInputHandler={setRoyalty} />
            </div>
          </div>
          {!isConnected ? (
            <ConnectWallet>
              <Button
                mt={"4"}
                rounded={"30px"}
                bgColor={"#5404FF"}
                color={"white"}
                _hover={{ backgroundColor: "#5404FF" }}
                py={"4"}
              >
                Connect Wallet
              </Button>
            </ConnectWallet>
          ) : (
            <Button
              onClick={() => submit()}
              mt={"4"}
              rounded={"30px"}
              bgColor={"#5404FF"}
              color={"white"}
              _hover={{ backgroundColor: "#5404FF" }}
              py={"4"}
              isDisabled={pendingTx}
              isLoading={pendingTx}
            >
              {pendingTx ? "Confirming..." : "Create Project"}
            </Button>
          )}
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

export default CreateProject;
