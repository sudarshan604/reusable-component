interface BreadCrumbProps {
  children: React.ReactNode;
}

const BreadCrumb = ({ children }: BreadCrumbProps) => {
  return (
    <nav aria-label="BreadCrumb">
      <ol className={`p-0 m-0 list-none`}>{children}</ol>
    </nav>
  );
};

export default BreadCrumb;
