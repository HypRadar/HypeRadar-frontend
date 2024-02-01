import { CircularProgress } from "@chakra-ui/react";

const PageLoader = () => {
  return (
    <div className="flex justify-center my-10">
      <CircularProgress color="#5404FF" thickness="4px" isIndeterminate />
    </div>
  );
};

export default PageLoader;
