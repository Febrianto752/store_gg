import cx from "classnames";

interface IButtonTabProps {
  title: string;
  active: boolean;
  onClick: () => void;
}
export default function ButtonTab({ title, active, onClick }: IButtonTabProps) {
  const btnClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });
  return (
    <button type="button" onClick={onClick} className={btnClass}>
      {title}
    </button>
  );
}
