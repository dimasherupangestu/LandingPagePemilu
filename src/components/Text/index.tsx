import React from "react";

const sizeClasses = {
  txtInterBold40: "font-bold font-inter",
  txtInterBold32Black900: "font-bold font-inter",
  txtInterMedium20: "font-inter font-medium",
  txtInterRegular20: "font-inter font-normal",
  txtInterBold32: "font-bold font-inter",
  txtInterBold24: "font-bold font-inter",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
