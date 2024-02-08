import { useState } from "react";
import { Input, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const RoyaltyInput = ({
  royaltyInputHandler,
  defaultValue = null,
}: {
  defaultValue?: number | null;
  royaltyInputHandler: (royalty: number) => void;
}) => {
  const [royaltyInputError, setRoyaltyInputError] = useState("");

  const onRoyaltyInputChange = (royaltyValueStr: string) => {
    setRoyaltyInputError("");
    const royaltyValue = Number(royaltyValueStr);

    if (isNaN(royaltyValue)) {
      setRoyaltyInputError(
        "Enter a valid royalty percentage for this project."
      );
      return;
    }

    if (royaltyValue < 0 || royaltyValue > 100) {
      setRoyaltyInputError(
        "Royalty percentage should be a value number from 0-100%."
      );
      return;
    }
    royaltyInputHandler(royaltyValue);
  };

  return (
    <>
      <Input
        onChange={(e) => onRoyaltyInputChange(e.target.value)}
        placeholder="10%"
        height={"54px"}
        bgColor={"#EBEDF2"}
        defaultValue={defaultValue}
      />
      {royaltyInputError && (
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
          {royaltyInputError}
        </Text>
      )}
    </>
  );
};

export default RoyaltyInput;
