import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type skeletonsType = {
  count: number;
  className?: string;
};

const SkeletonComp = ({ count, className, }: skeletonsType) => {
  return (
      <Skeleton count={count} className={className} />
  );
};

export default SkeletonComp;
