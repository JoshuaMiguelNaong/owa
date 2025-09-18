"use client";

import { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import DeleteButton from "../../../components/buttons/delete-button";
import ProvinceEditModal from "../../../components/edit-modals/province-modal";
import { Province, Region } from "../../../schemas";
import {
  getProvinces,
  updateProvince,
  deleteProvince,
} from "../../../services/province-services";
import { getRegions } from "../../../services/region-services";

export default function ProvinceTable() {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(
    null
  );

  useEffect(() => {
    const loadData = async () => {
      try {
        const regionList = await getRegions();
        const provinceList = await getProvinces();
        setProvinces(provinceList);
        setRegions(regionList);
      } catch (error) {
        console.error("Failed to load provinces:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (!loading && provinces.length > 0) {
      const table = $("#province-table").DataTable({
        pageLength: 10,
        lengthMenu: [5, 10, 25, 50],
        destroy: true,
      });

      return () => void table.destroy(false);
    }
  }, [loading, provinces]);

  if (loading) return <p>Loading provinces...</p>;

  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="table-responsive">
          <table
            id="province-table"
            className="display table table-bordered table-hover w-100"
          >
            <thead>
              <tr>
                <th>Province</th>
                <th>Region</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {provinces.map((province) => {
                const region = regions.find((r) => r.id === province.regionId);
                const modalId = `provinceEditModal-${province.id}`;

                return (
                  <tr key={province.id}>
                    <td>{province.name}</td>
                    <td>{region?.name || "—"}</td>
                    <td className="d-flex gap-1">
                      <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target={`#${modalId}`}
                        onClick={() => setSelectedProvince(province)}
                      >
                        Edit
                      </button>

                      <DeleteButton
                        id={province.id!}
                        onDelete={async (id) => {
                          try {
                            await deleteProvince(id);
                            setProvinces((prev) =>
                              prev.filter((p) => p.id !== id)
                            );
                          } catch (error) {
                            console.error("Failed to delete province:", error);
                            alert("Failed to delete province");
                          }
                        }}
                      />

                      {selectedProvince?.id === province.id && (
                        <ProvinceEditModal
                          id={modalId}
                          province={selectedProvince}
                          regions={regions}
                          onSubmit={async (data) => {
                            try {
                              const updated = await updateProvince(data.id!, {
                                name: data.name,
                                regionId: data.regionId, // ✅ include region if needed
                              });
                              setProvinces((prev) =>
                                prev.map((p) =>
                                  p.id === updated.id ? updated : p
                                )
                              );
                              console.log("Updated Province:", updated);
                            } catch (error) {
                              console.error(
                                "Failed to update province:",
                                error
                              );
                            }
                          }}
                        />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
