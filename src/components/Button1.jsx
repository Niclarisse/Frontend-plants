import { useState } from "react";

function Button1({
  loading = false,
  onClick,
  btnColor = "primary",
  Style = "",
  content = "",
  type = "button",
  padding = "px-4 py-2",
  loadingPadding = "px-4",
  disabled = false,
}) {
  const [isPopped, setIsPopped] = useState(false);
  const handleClick = () => {
    setIsPopped(true);
    setTimeout(() => {
      setIsPopped(false);
      if (onClick) {
        onClick();
      }
    }, 50);
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`bg-${btnColor} ${padding} ${Style} transition-transform duration-50 ${
        isPopped ? "transform scale-[0.95]" : ""
      } ${loading ? "opacity-50" : ""}`}
      disabled={loading || disabled}
    >
      {loading ? (
        <div className={`loader mr-1 ${loadingPadding}`} />
      ) : (
        <div className="m-0">{content}</div>
      )}
    </button>
  );
}

export default Button1;
