interface ProgressBarProps {
  size: "small" | "medium" | "large";
  value: number | string;
}

const SizeClasses: Record<ProgressBarProps["size"], string> = {
  small: "h-2 ",
  medium: "h-8",
  large: "h-4",
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  value = 90,
  size = "small",
}) => {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`bg-gray-400
       
      `}
    >
      <div
        className="
        rounded-s
        overflow-hidden
        "
      >
        <div className={`w-1/4 ${SizeClasses[size]}  bg-blue-500`}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
