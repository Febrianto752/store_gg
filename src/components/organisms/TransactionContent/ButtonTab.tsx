import cx from "classnames";

interface IButtonTabProps {
  title: string;
  active: boolean;
}
export default function ButtonTab({ title, active }: IButtonTabProps) {
  const btnClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });
  return (
    <button type="button" className={btnClass}>
      {title}
    </button>
  );
}
