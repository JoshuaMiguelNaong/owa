"use client";

import { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import DeleteButton from "../../../components/buttons/delete-button";
import MunicipalityEditModal from "../../../components/edit-modals/municipality-modal";
import { Municipality, Province } from "../../../schemas";
import {
  getMunicipalities,
  updateMunicipality,
  deleteMunicipality,
} from "../../../services/municipality-services";
import { getProvinces } from "../../../services/province-services";

export default function MunicipalityTable() {
  const [municipalities, setMunicipalities] = useState<Municipality[]>([]);
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMunicipality, setSelectedMunicipality] =
    useState<Municipality | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const municipalityList = await getMunicipalities();
        const provinceList = await getProvinces();
        setMunicipalities(municipalityList);
        setProvinces(provinceList);
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (!loading && municipalities.length > 0) {
      const table = $("#municipality-table").DataTable({
        pageLength: 10,
        lengthMenu: [5, 10, 25, 50],
        destroy: true,
      });

      return () => void table.destroy(false);
    }
  }, [loading, municipalities]);

  if (loading) return <p>Loading municipalities...</p>;

  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="table-responsive">
          <table
            id="municipality-table"
            className="display table table-bordered table-hover w-100"
          >
            <thead>
              <tr>
                <th>Municipality</th>
                <th>Province</th>
                <th>Type</th>
                <th>District</th>
                <th>Zip Code</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {municipalities.map((m) => {
                const province = provinces.find((p) => p.id === m.provinceId);
                const modalId = `municipalityEditModal-${m.id}`;

                return (
                  <tr key={m.id}>
                    <td>{m.name}</td>
                    <td>{province?.name || "—"}</td>
                    <td>{m.type}</td>
                    <td>{m.district || "—"}</td>
                    <td>{m.zipCode || "—"}</td>
                    <td className="d-flex gap-1">
                      <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target={`#${modalId}`}
                        onClick={() => setSelectedMunicipality(m)}
                      >
                        Edit
                      </button>

                      <DeleteButton
                        id={m.id!}
                        onDelete={async (id) => {
                          try {
                            await deleteMunicipality(id);
                            setMunicipalities((prev) =>
                              prev.filter((mun) => mun.id !== id)
                            );
                          } catch (error) {
                            console.error(
                              "Failed to delete municipality:",
                              error
                            );
                            alert("Failed to delete municipality");
                          }
                        }}
                      />

                      {selectedMunicipality?.id === m.id && (
                        <MunicipalityEditModal
                          id={modalId}
                          municipality={selectedMunicipality}
                          provinces={provinces}
                          onSubmit={async (data) => {
                            try {
                              const updated = await updateMunicipality(
                                data.id!,
                                {
                                  name: data.name,
                                  provinceId: data.provinceId,
                                  type: data.type,
                                  district: data.district,
                                  zipCode: data.zipCode,
                                }
                              );
                              setMunicipalities((prev) =>
                                prev.map((mun) =>
                                  mun.id === updated.id ? updated : mun
                                )
                              );
                              console.log("Updated Municipality:", updated);
                            } catch (error) {
                              console.error(
                                "Failed to update municipality:",
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
