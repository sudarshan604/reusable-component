interface BreadCrumbProps {
  children: React.ReactNode;
}

const BreadCrumb = ({ children }: BreadCrumbProps) => {
  return (
    <nav>
      <ol>{children}</ol>
    </nav>
  );
};

export default BreadCrumb;
