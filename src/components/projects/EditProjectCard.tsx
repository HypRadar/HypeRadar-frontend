import { useState } from "react";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { Select, Textarea, Button, Text } from "@chakra-ui/react";
import TextInput from "..//form/TextInput";
import PhotoUploadBtn from "../buttons/PhotoUploadBtn";
import ConnectWallet from "..//buttons/ConnectWallet";
import { EditProjectSchema } from "../../schemas";
import { Project } from "../../types";
import { useWeb3Context } from "../../context/Web3Context";
import { useCustomToast } from "../../helpers/useToast";
import Http from "../../helpers/http";

const EditProjectCard = ({ project }: { project: Project }) => {
  const [photoFile, setPhotoFile] = useState(null);
  const [pendingTx, setTxStatus] = useState<boolean>(false);

  const { isConnected } = useWeb3Context();
  const { errorToast, successToast } = useCustomToast();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      category: project.category,
      website: project.websiteUrl,
      twitter: project.twitterUrl ?? "",
      discord: project.telegramUrl ?? "",
      telegram: project.telegramUrl ?? "",
      youtube: project.youtubeUrl ?? "",
      bio: project.bio ?? "",
    },
    validationSchema: EditProjectSchema,
    onSubmit: () => {},
  });

  const onSubmit = async () => {
    if (!formik.isValid) {
      errorToast("You have to fill in the form to continue");
      return;
    }

    setTxStatus(true);
    try {
      const formData = new FormData();
      if (photoFile) {
        formData.append("image", photoFile);
      }
      formData.append("category", formik.values.category);
      formData.append("website", formik.values.website);
      formData.append("twitter_url", formik.values.twitter);
      formData.append("discord_url", formik.values.discord);
      formData.append("telegram_url", formik.values.telegram);
      formData.append("youtube_url", formik.values.youtube);
      formData.append("bio", formik.values.bio);

      const url = `/projects/edit/${project.address}`;
      await new Http().put(url, formData);

      setTxStatus(false);
      successToast("Project details updated successfully!");

      window.location.reload();
    } catch (err: any) {
      errorToast(err);
      setTxStatus(false);
    }
  };

  return (
    <div className=" lg:max-w-7xl w-full flex flex-col px-4 lg:px-8 gap-6 ">
      <div className=" bg-white w-full rounded-[10px] py-9 px-4 lg:py-[56px] lg:px-[80px] gap-5 flex lg:flex-row flex-col ">
        <PhotoUploadBtn
          currentImagePath={photoFile ?? project.logo}
          onFileChangeHandler={setPhotoFile}
        />
        <div className=" w-full flex flex-col gap-6 ">
          <div className=" w-full flex flex-col gap-2  ">
            <p className=" text-[#4D4D4D] ">
              <span className=" text-[#D20000] ">*</span> Project name
            </p>
            <TextInput
              name="name"
              type="text"
              value={project.name}
              isDisabled={true}
              placeholder="Email"
            />
          </div>
          <div className=" w-full flex flex-col gap-2  ">
            <p className=" text-[#4D4D4D] ">
              <span className=" text-[#D20000] ">*</span> Project ticker
            </p>
            <TextInput
              name="ticker"
              value={project.ticker}
              isDisabled={true}
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
              value={formik.values.category}
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
              value={formik.values.website}
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
              value={formik.values.twitter ?? ""}
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
              value={formik.values.discord ?? ""}
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
              value={formik.values.telegram ?? ""}
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
              value={formik.values.youtube ?? ""}
              placeholder="https://www.youtube.com/embed/whatever?si=whatever"
            />
          </div>
        </div>
      </div>
      <div className=" bg-white w-full rounded-[10px] lg:px-9 py-9 px-4 gap-5 flex lg:flex-row flex-col-reverse ">
        <div className=" w-full flex flex-col gap-2 ">
          <p className=" text-[#4D4D4D] ">Enter bio</p>
          <Textarea
            name="bio"
            value={formik.values.bio ?? ""}
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
            onClick={() => onSubmit()}
            rounded={"30px"}
            width={"full"}
            bgColor={"#5404FF"}
            color={"white"}
            _hover={{ backgroundColor: "#5404FF" }}
            fontSize={["sm", "medium"]}
            paddingY={"3"}
            isDisabled={pendingTx}
            isLoading={pendingTx}
          >
            {pendingTx ? "Confirming..." : "Submit"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default EditProjectCard;
