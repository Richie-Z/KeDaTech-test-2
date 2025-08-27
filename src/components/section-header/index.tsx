import type React from "react";
import "./section-header.scss";

type SectionHeaderProps = {
  title: string;
  subtitle: string;
}

const sectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

export default sectionHeader;
