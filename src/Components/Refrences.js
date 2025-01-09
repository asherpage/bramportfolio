import React from "react";
import "../Assets/Styles/refrences.css";

// Import images
import grandviewImage from "../Assets/Images/grandview.jpg";
import lalomaImage from "../Assets/Images/Laloma.jpg";
import colonnadeImage from "../Assets/Images/colonnade.jpg";
import serviceMaintenanceImage from "../Assets/Images/serv.jpg";
import diamondRidgeImage from "../Assets/Images/diamond.png";
import kowalskiImage from "../Assets/Images/kow.jpg";

// Array of location data
const locations = [
  {
    name: "Grandview Terrace",
    email: "Shani Olexa",
    phone: "(602) 478-1935",
    mapLink: "https://www.google.com/maps/place/Grandview+Terrace/@33.6614534,-112.3778348,17.13z/data=!4m15!1m8!3m7!1s0x872b5b21906da6bd:0xcf1cce5e6e724700!2s14515+W+Granite+Valley+Dr,+Sun+City+West,+AZ+85375!3b1!8m2!3d33.6617441!4d-112.3757965!16s%2Fg%2F11c3q3dg1q!3m5!1s0x872b5b223d9cd8a7:0x24c7aea4d8fe02a6!8m2!3d33.6620131!4d-112.3758286!16s%2Fg%2F1tfrmt9s?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D",
    image: grandviewImage,
  },
  {
    name: "LaLoma Village",
    email: "Tony Soriano",
    phone: "(623) 694-5326",
    mapLink: "https://www.google.com/maps/place/La+Loma+Village/@33.5119764,-112.3654067,16.06z/data=!4m15!1m8!3m7!1s0x872b471945d2fffd:0x72af7a23ac557e0b!2s14154+Denny+Blvd,+Litchfield+Park,+AZ+85340!3b1!8m2!3d33.5119167!4d-112.3627423!16s%2Fg%2F11cppwql5q!3m5!1s0x872b47191a476d43:0xbee2f1693f8bb9ea!8m2!3d33.5105258!4d-112.3612997!16s%2Fg%2F1tgfx2n1?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D",
    image: lalomaImage,
  },
  {
    name: "The Colonnade",
    email: "Tim Landis",
    phone: "(267) 250-4303",
    mapLink: "https://www.google.com/maps/place/The+Colonnade/@33.6577224,-112.3805178,16z/data=!3m1!4b1!4m6!3m5!1s0x872b5b270eb254b1:0x49bf1e5a67b13c74!8m2!3d33.6577224!4d-112.3779429!16s%2Fg%2F1v41_y5v?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D",
    image: colonnadeImage,
  },
  {
    name: "Service Maintenance Inc.",
    email: "Mat Coates",
    phone: "(602) 486-0420",
    mapLink: "https://www.google.com/maps/place/Service+Maintenance+Inc/@33.4941787,-111.9249977,18z/data=!3m1!4b1!4m6!3m5!1s0x872b0bbf6dad43bd:0x37def73d32f16184!8m2!3d33.4941787!4d-111.924354!16s%2Fg%2F1tglnc5s?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D",
    image: serviceMaintenanceImage,
  },
  {
    name: "Diamond Ridge Development",
    email: "Brett",
    phone: "(602) 743-3016",
    mapLink: "https://www.google.com/maps/place/Diamond+Ridge+Development/@33.5600306,-112.2633949,16z/data=!3m1!4b1!4m6!3m5!1s0x872b41eae5997449:0xa6f361981dc48184!8m2!3d33.5600306!4d-112.26082!16s%2Fg%2F1tslk5l5?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D",
    image: diamondRidgeImage,
  },
  {
    name: "Kowalski Construction",
    email: "Mike",
    phone: "(480) 276-6958",
    mapLink: "https://www.google.com/maps/place/Kowalski+Construction,+Inc./@33.6816213,-112.1099674,16z/data=!3m1!4b1!4m6!3m5!1s0x872b6f6fe2992ef7:0x5267f14b83491c5b!8m2!3d33.6816213!4d-112.1073925!16s%2Fg%2F1thmfw4x?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D",
    image: kowalskiImage,
  },
];

const Refrences = () => {
  return (
    <>
    <h2 className="ref-title">Refrences</h2>
    <div className="ref-container">
      <div className="ref-slider">
        <div className="ref-box-container">
          {locations.map((location, index) => (
            <div className="ref-box" key={index}>
              {/* Image Section */}
              <div className="ref-box-image">
<img
  src={location.image}
  alt={location.name}  // Removed the redundant "Image" term
  loading="lazy"
/>

              </div>
              {/* Content Section */}
              <h3 className="ref-h3">{location.name}</h3>
              <hr />
              <p className="ref-p">{location.email}</p>
              <p className="ref-p">{location.phone}</p>
              <a
                href={location.mapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="ref-button">View Location</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Refrences;
