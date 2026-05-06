import { cx } from "../../styled-system/css";
import { section } from "../assets/style/App.styles";

type SectionProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cx(section, className ? className : "")}>
      {children}
    </section>
  );
}
