import { InputGroup, Input, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  left?: boolean;
  leftIcon?: any;
  right?: boolean;
  rightIcon?: any;
  type: string;
  h?: string;
  touch?: any;
  error?: any;
  [x: string]: any;
}

export default function TextInput({
  left,
  leftIcon,
  right,
  rightIcon,
  type,
  touch,
  error,
  h,
  ...rest
}: Props) {
  return (
    <>
      <InputGroup>
        <Input
          {...rest}
          type={type}
          textColor="#000"
          paddingLeft={left ? "45px" : ""}
          fontSize={["sm", "medium"]}
          fontWeight="350"
          bgColor="#EBEDF2"
          borderColor="#EBEDF2"
          _hover={{ borderColor: "#EBEDF2" }}
          _focus={{ backgroundColor: "#EBEDF2" }}
          focusBorderColor="#EBEDF2"
          height={h ? h : ["38px", "54px"]}
        />
      </InputGroup>
      {touch && error && (
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
          {error}
        </Text>
      )}
    </>
  );
}
