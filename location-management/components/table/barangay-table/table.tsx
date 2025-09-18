"use client";

import { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";

import DeleteButton from "../../../components/buttons/delete-button";
import BarangayEditModal from "../../../components/edit-modals/barangay-modal";
import { Barangay, Municipality, Province, Region } from "../../../schemas";
import {
  deleteBarangay,
  updateBarangay,
} from "../../../services/barangay-services";

interface BarangayTableProps {
  barangays: Barangay[];
  municipalities: Municipality[];
  provinces: Province[];
  regions: Region[];
}

export default function BarangayTable({
  barangays,
  municipalities,
  provinces,
  regions,
}: BarangayTableProps) {
  const [localBarangays, setLocalBarangays] = useState<Barangay[]>(barangays);
  const [selectedBarangay, setSelectedBarangay] = useState<Barangay | null>(
    null
  );

  // Keep local state in sync when parent data changes
  useEffect(() => {
    setLocalBarangays(barangays);
  }, [barangays]);

  // Initialize DataTable
  useEffect(() => {
    if (localBarangays.length > 0) {
      const table = $("#barangay-table").DataTable({
        pageLength: 10,
        lengthMenu: [5, 10, 25, 50],
        destroy: true,
      });

      return () => void table.destroy(false);
    }
  }, [localBarangays]);

  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="table-responsive">
          <table
            id="barangay-table"
            className="display table table-bordered table-hover w-100"
          >
            <thead>
              <tr>
                <th>Barangay</th>
                <th>Municipality</th>
                <th>Province</th>
                <th>Region</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {localBarangays.map((b) => {
                const municipality = municipalities.find(
                  (m) => m.id === b.lguId
                );
                const province = provinces.find(
                  (p) => p.id === municipality?.provinceId
                );
                const region = regions.find((r) => r.id === province?.regionId);

                const modalId = `barangayEditModal-${b.id}`;

                return (
                  <tr key={b.id}>
                    <td>{b.name}</td>
                    <td>{municipality?.name || "—"}</td>
                    <td>{province?.name || "—"}</td>
                    <td>{region?.name || "—"}</td>
                    <td className="d-flex gap-1">
                      {/* Edit Button */}
                      <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target={`#${modalId}`}
                        onClick={() => setSelectedBarangay(b)}
                      >
                        Edit
                      </button>

                      {/* Delete Button */}
                      <DeleteButton
                        id={b.id!}
                        onDelete={async (id) => {
                          try {
                            await deleteBarangay(id);
                            setLocalBarangays((prev) =>
                              prev.filter((barangay) => barangay.id !== id)
                            );
                          } catch (error) {
                            console.error("Failed to delete barangay:", error);
                            alert("Failed to delete barangay");
                          }
                        }}
                      />

                      {/* Edit Modal */}
                      {selectedBarangay?.id === b.id && (
                        <BarangayEditModal
                          id={modalId}
                          barangay={selectedBarangay}
                          municipalities={municipalities}
                          provinces={provinces}
                          regions={regions}
                          onSubmit={async (data) => {
                            try {
                              const updated = await updateBarangay(data.id!, {
                                name: data.name,
                                lguId: data.lguId,
                              });
                              setLocalBarangays((prev) =>
                                prev.map((barangay) =>
                                  barangay.id === updated.id
                                    ? updated
                                    : barangay
                                )
                              );
                              console.log("Updated Barangay:", updated);
                            } catch (error) {
                              console.error(
                                "Failed to update barangay:",
                                error
                              );
                              alert("Failed to update barangay");
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
