export const LinkExternal = ({
  children,
  className,
  href,
  ...rest
}: React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => {
  return (
    <a
      {...{ href, className, ...rest }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
