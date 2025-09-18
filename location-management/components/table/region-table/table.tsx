"use client";

import { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";

//import EditButton from "../../buttons/edit-button";
import DeleteButton from "../../../components/buttons/delete-button";
import RegionEditModal from "../../../components/edit-modals/region-modal";

import { Region } from "../../../schemas";
//import { getRegions } from "../../../server-actions";
import {
  getRegions,
  updateRegion,
  deleteRegion,
} from "../../../services/region-services";

//import { updateRegion } from "../../../server-actions";

export default function RegionTable() {
  const [regions, setRegions] = useState<Region[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log("fire");
        const regionList = await getRegions();
        setRegions(regionList);
      } catch (error) {
        console.error("Failed to load regions:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    if (!loading && regions.length > 0) {
      const table = $("#region-table").DataTable({
        pageLength: 10,
        lengthMenu: [5, 10, 25, 50],
        destroy: true,
      });

      return () => void table.destroy(false);
    }
  }, [loading, regions]);

  if (loading) return <p>Loading regions...</p>;

  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="table-responsive">
          <table
            id="region-table"
            className="display table table-bordered table-hover w-100"
          >
            <thead>
              <tr>
                <th>Region</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {regions.map((r) => {
                const modalId = `regionEditModal-${r.id}`;
                return (
                  <tr key={r.id}>
                    <td>{r.name}</td>

                    <td className="d-flex gap-1">
                      <button
                        type="button"
                        className="btn btn-sm bg-primary text-white"
                        data-bs-toggle="modal"
                        data-bs-target={`#${modalId}`}
                        onClick={() => setSelectedRegion(r)}
                      >
                        <i className="ri ri-pencil-line mr-2"></i>
                        {/* Edit */}
                      </button>
                      {/* <EditButton 
                        modalId={modalId} 
                        onSelectedItem = {() => setSelectedRegion(r)} /> */}

                      <DeleteButton
                        id={r.id!}
                        onDelete={async (id) => {
                          try {
                            await deleteRegion(id);
                            setRegions((prev) =>
                              prev.filter((region) => region.id !== id)
                            );
                          } catch (error) {
                            console.error("Failed to delete region:", error);
                            alert("Failed to delete region");
                          }
                        }}
                      />

                      {selectedRegion?.id === r.id && (
                        <RegionEditModal
                          id={modalId}
                          region={selectedRegion!}
                          onSubmit={async (data) => {
                            try {
                              const updated = await updateRegion(data.id!, {
                                name: data.name,
                              });
                              setRegions((prev) =>
                                prev.map((r) =>
                                  r.id === updated.id ? updated : r
                                )
                              );
                              console.log("Updated Region:", updated);
                            } catch (error) {
                              console.error("Failed to update region:", error);
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
