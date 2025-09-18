type DeleteButtonProps = {
  id: string;
  onDelete: (id: string) => void | Promise<void>;
};

const DeleteButton = ({ id, onDelete }: DeleteButtonProps) => {
  const handleClick = () => {
    if (confirm("Are you sure you want to delete this?")) {
      onDelete(id);
    }
  };

  return (
    <button
      type="button"
      className="btn btn-sm btn-danger btn-wave"
      onClick={handleClick}
    >
      <i className="ri ri-delete-bin-5-line"></i>
    </button>
  );
};

export default DeleteButton;
