
import { Region, Province, City, Municipality, Barangay } from "../../types";

type LocationEntity = Region | Province | City | Municipality | Barangay;

interface Props {
  data: LocationEntity[];
  type: "region" | "province" | "city" | "municipality" | "barangay";
  parentKey?: string;
}

const RegionTable = ({ data, type, parentKey }: Props) => {
  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="table-responsive">
          <table className="table table-bordered text-nowrap table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                {type !== "region" && <th>Parent</th>}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entity) => (
                <LocationTableRow
                  key={entity.id}
                  entity={entity}
                  type={type}
                  parentName={
                    parentKey && (entity as any)[parentKey]
                      ? (entity as any)[parentKey]
                      : undefined
                  }
                />
              ))}

              {data.length === 0 && (
                <tr>
                  <td
                    colSpan={type !== "region" ? 4 : 3}
                    className="text-center"
                  >
                    No {type}s found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegionTable;
