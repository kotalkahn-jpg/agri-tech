import React from "react";
import { useParams } from "react-router-dom";
import { getServices } from "../lib/services";

function ServiceDetailPage({service}) {
  const { serviceId } = useParams(); 



  if (!service) {
    return <div className="p-10 text-center text-gray-600">Loading service details...</div>;
  }

  return (
    <div className="p-8 md:p-16">
      <section className="flex flex-col md:flex-row items-center gap-10">
        <img
          src={service.imageUri}
          alt={service.name}
          className="w-full md:w-1/2 rounded-2xl shadow-md object-cover"
        />
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{service.name}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetailPage;
