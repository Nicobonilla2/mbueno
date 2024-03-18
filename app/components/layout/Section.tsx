import type { ReactNode } from "react";

type ISectionProps = {
  title?: string;
  description?: string;
  add?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`${props.add} mx-auto max-w-screen-xl px-3`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl font-bold text-gray-900">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };