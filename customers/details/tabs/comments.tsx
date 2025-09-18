import { Comment } from "../../schema-and-types";
import { format } from "date-fns";

const Comments = async ({ id }: { id: string }) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const res = await fetch(`${baseUrl}/api/customers/${id}/comments`);
    const { comments }: { comments: Comment[] } = await res.json()

    return (
        <>
            <div className="card mt-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <span className="fw-semibold">Comments &amp; History</span>
                    <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-light" type="button" title="Bold">
                            <i className="ri-bold"></i>
                        </button>
                        <button className="btn btn-sm btn-light" type="button" title="Italic">
                            <i className="ri-italic"></i>
                        </button>
                        <button className="btn btn-sm btn-light" type="button" title="Underline">
                            <i className="ri-underline"></i>
                        </button>
                    </div>
                </div>

                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                placeholder="Add a comment..."
                                rows={3}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Add Comment
                        </button>
                    </form>


                </div>
            </div>

            <div>
                <ul className="list-group mb-3">
                    {comments.map((comment: Comment) => (
                        <li key={comment.id} className="list-group-item">
                            <strong>{comment.from}:</strong> {comment.message}
                            <br />
                            <small className="text-muted">{format(comment.dateTime, "MMMM d, yyyy 'at' h:mm a")}</small>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Comments;
