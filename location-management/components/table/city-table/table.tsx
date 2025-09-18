"use client";

import { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import DeleteButton from "../../../components/buttons/delete-button";
import CityEditModal from "../../../components/edit-modals/city-modal";
import { City, Province, Region } from "../../../schemas";
import { getCities } from "../../../services/city-services";
import { getProvinces } from "../../../services/province-services";
import { getRegions } from "../../../services/region-services";

export default function CityTable() {
  const [cities, setCities] = useState<City[]>([]);
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const regionList = await getRegions();
        const provinceList = await getProvinces();
        const cityList = await getCities();

        console.log("Loaded regions:", regionList);
        console.log("Loaded provinces:", provinceList);
        console.log("Loaded cities:", cityList);

        setRegions(regionList);
        setProvinces(provinceList);
        setCities(cityList);
      } catch (error) {
        console.error("Failed to load cities:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (!loading && cities.length > 0) {
      const table = $("#city-table").DataTable({
        pageLength: 10,
        lengthMenu: [5, 10, 25, 50],
        destroy: true,
      });

      return () => void table.destroy(false);
    }
  }, [loading, cities]);

  if (loading) return <p>Loading cities...</p>;

  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="table-responsive">
          <table
            id="city-table"
            className="display table table-bordered table-hover w-100"
          >
            <thead>
              <tr>
                <th>City/Municipality</th>
                <th>Province</th>
                <th>Region</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cities.map((city) => {
                const province = provinces.find(
                  (p) => p.id === city.provinceId
                );
                const region = regions.find((r) => r.id === province?.regionId);
                const modalId = `cityEditModal-${city.id}`;

                return (
                  <tr key={city.id}>
                    <td>{city.name}</td>
                    <td>{province?.name || "—"}</td>
                    <td>{region?.name || "—"}</td>
                    <td className="d-flex gap-1">
                      <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target={`#${modalId}`}
                        onClick={() => setSelectedCity(city)}
                      >
                        Edit
                      </button>

                      <DeleteButton />

                      {selectedCity && selectedCity.id === city.id && (
                        <CityEditModal
                          id={modalId}
                          city={selectedCity}
                          provinces={provinces}
                          regions={regions}
                          onSubmit={async (data) => {
                            console.log("Updated City:", data);
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
