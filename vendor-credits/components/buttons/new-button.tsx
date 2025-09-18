import Link from 'next/link';

const NewButton = () => {
  return (
    <>
      <Link href="/admin/v2/inventory/items/new">
        <button
          type="button"
          className="btn btn-sm btn-primary align-items-center d-inline-flex"
        >
          <i className="ti ti-plus me-1 fw-semibold" />
          New Item
        </button>
      </Link>
    </>
  );
};

export default NewButton;
