export const FilledButton = (props: { text: string; onClick: () => void }) => {
  return (
    <button
      onClick={props.onClick}
      className="rounded-md bg-white text-slate-800 pl-2 pr-2 pt-1 pb-1 mb-2"
    >
      {props.text}
    </button>
  );
};
