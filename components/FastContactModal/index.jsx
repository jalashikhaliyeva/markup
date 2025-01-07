import React, { useState, useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { instanceAxios } from "@/shared/instanceAxios";
import { getServices } from "@/services/getServices";

function FastContactModal({ onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // For custom dropdown
  const [services, setServices] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState({
    title: "",
    slug: "",
  });

  const [errors, setErrors] = useState({});

  // Reference to dropdown wrapper for outside clicks
  const dropdownRef = useRef(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Fetch services on mount
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices("az"); // or any language code you need
        setServices(data.item);
      } catch (error) {
        console.error("Error fetching services:", error);
        toast.error(
          "Xidmətlər siyahısı yüklənmədi. Zəhmət olmasa yenidən cəhd edin."
        );
      }
    };
    fetchServices();
  }, []);

  // Close modal when clicking outside the modal content
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Close the dropdown if the user clicks anywhere outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple client-side validation
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Ad vacibdir";
    }
    if (!phone.trim()) {
      newErrors.phone = "Nömrə vacibdir";
    }
    if (!email.trim()) {
      newErrors.email = "Email vacibdir";
    }
    if (!selectedService.slug) {
      newErrors.service = "Xidmət seçin";
    }

    // If there are errors, set them and don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Otherwise, clear any existing errors
    setErrors({});

    try {
      // POST to https://new.markup.az/api/service-form
      await instanceAxios.post("https://new.markup.az/api/service-form", {
        name,
        phone,
        email,
        service_id: selectedService.slug,
      });

      toast.success("Form uğurla göndərildi!");

      // Reset form
      setName("");
      setPhone("");
      setEmail("");
      setSelectedService({ title: "", slug: "" });
    } catch (error) {
      console.error("Error submitting service form:", error);
      toast.error("Xəta baş verdi, zəhmət olmasa yenidən cəhd edin.");
    }
  };

  // Only allow digits and the plus sign in phone
  const handlePhoneChange = (e) => {
    const inputVal = e.target.value;
    // Remove any character that isn't a digit or '+'
    const sanitizedVal = inputVal.replace(/[^0-9+]/g, "");
    setPhone(sanitizedVal);
  };

  // Toggle custom dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Select a service from the list
  const handleSelectService = (service) => {
    setSelectedService({ title: service.title, slug: service.slug });
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div
        className="relative bg-white dark:bg-bgHoverCategory shadow-lg p-6 md:p-8 rounded-2xl w-full max-w-lg mx-4 
           "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 focus:outline-none"
          aria-label="Close Modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ToastContainer />

        <h3
          id="modal-title"
          className="text-black dark:text-white font-bold text-xl md:text-2xl leading-6 md:leading-8 pb-4"
        >
          Gəlin birlikdə işləyək.
        </h3>
        <p className="text-darkGray dark:text-white text-sm md:text-base font-normal leading-5 md:leading-6 pb-6">
          Bir layihəniz var? Bizə müraciət edərək xəyallarınızı reallaşdıraq.
        </p>

        <form
          className="space-y-4 md:space-y-6 dark:bg-bgHoverCategory"
          onSubmit={handleSubmit}
        >
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-normal text-black dark:text-white mb-1 md:mb-2"
            >
              Ad və Soyad
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Adınız və Soyadınız"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full p-2 md:p-3 border rounded-md shadow-sm transition duration-300
                ${
                  errors.name
                    ? "border-red-500"
                    : "border-gray-200 dark:bg-bgHoverCategory"
                }
                focus:ring-gray-500 focus:border-gray-500
                hover:bg-gray-100 hover:border-gray-300
              `}
            />
            {errors.name && (
              <p className="text-red-500 text-xs md:text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>


      {/* Custom Services Dropdown */}
      <div className="relative" ref={dropdownRef}>
            <label
              htmlFor="service"
              className="block text-sm font-normal text-black dark:text-white mb-1 md:mb-2"
            >
              Xidmət
            </label>
          
            <button
              type="button"
              className={`w-full p-2 md:p-3 border rounded-md shadow-sm transition duration-300 text-left
                ${
                  errors.service
                    ? "border-red-500"
                    : "border-gray-200 dark:bg-bgHoverCategory"
                }
                focus:ring-gray-500 focus:border-gray-500 hover:bg-gray-100 hover:border-gray-300
              `}
              onClick={toggleDropdown}
            >
              {selectedService.title || "Xidmət seçin"}
            </button>
            {isDropdownOpen && (
              <ul
                className="absolute w-full bg-white dark:bg-bgHoverCategory border rounded-md shadow-md mt-1 z-10
                           max-h-60 overflow-y-auto"
              >
                {services.map((service) => (
                  <li
                    key={service.slug}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                    onClick={() => handleSelectService(service)}
                  >
                    {service.title}
                  </li>
                ))}
              </ul>
            )}
            {errors.service && (
              <p className="text-red-500 text-xs md:text-sm mt-1">
                {errors.service}
              </p>
            )}
          </div>
          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-normal text-black dark:text-white mb-1 md:mb-2"
            >
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="+994"
              value={phone}
              onChange={handlePhoneChange}
              className={`w-full p-2 md:p-3 border rounded-md shadow-sm transition duration-300
                ${
                  errors.phone
                    ? "border-red-500"
                    : "border-gray-200 dark:bg-bgHoverCategory"
                }
                focus:ring-gray-500 focus:border-gray-500
                hover:bg-gray-100 hover:border-gray-300
              `}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs md:text-sm mt-1">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-normal text-black dark:text-white mb-1 md:mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-2 md:p-3 border rounded-md shadow-sm transition duration-300
                ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-200 dark:bg-bgHoverCategory"
                }
                focus:ring-gray-500 focus:border-gray-500
                hover:bg-gray-100 hover:border-gray-300
              `}
            />
            {errors.email && (
              <p className="text-red-500 text-xs md:text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="self-start bg-black dark:bg-white text-white dark:text-black px-3 md:px-4 py-2 md:py-3 
                         hover:bg-blackButtonHover transition duration-300 
                         rounded-2xl flex items-center gap-2 text-base md:text-xl leading-5 md:leading-6 font-medium group"
            >
              Göndər
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                className="transform transition-transform duration-300 
                           group-hover:rotate-45 group-hover:translate-x-1 
                           group-hover:-translate-y-0.5"
              >
                <path
                  d="M16.0037 10.3842L7.39712 18.9908L5.98291 17.5766L14.5895 8.96997H7.00373V6.96997H18.0037V17.97H16.0037V10.3842Z"
                  className="fill-white dark:fill-black"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FastContactModal;
