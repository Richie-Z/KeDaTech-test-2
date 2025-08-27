import type { JSX } from "react";
import "./Pricing.scss";
import SectionHeader from "@/components/section-header";
import Button from "@/components/button";
import { FaCheckCircle } from "react-icons/fa";

const tiers: {
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
}[] = [
    {
      title: "Basic",
      price: "Rp 50.000",
      features: [
        "Mencatat barang masuk",
        "Mencatat barang keluar",
        "Mencatat hasil keuntungan",
      ],
    },
    {
      title: "Business",
      price: "Rp 150.000",
      features: [
        "Mencatat barang masuk dan keluar",
        "Mencatat keuntungan",
        "Analisa penjualan dengan CHART",
        "Support 7x24 Jam",
      ],
      highlight: true,
    },
    {
      title: "Entrepreneur",
      price: "Rp 300.000",
      features: [
        "Mencatat barang masuk dan keluar",
        "Mencatat keuntungan",
        "Analisa penjualan dengan CHART",
        "Support 7x24 Jam",
        "Export data ke Excel",
        "AI Prediksi penghasilan",
      ],
    },
  ];

const Pricing = (): JSX.Element => {
  return (
    <section className="pricing" id="pricing">

      <SectionHeader
        title="Our Plan"
        subtitle="Choose a package according to your business needs"
      />

      <div className="pricing-cards">
        {tiers.map((tier, i) => (
          <div
            key={i}
            className={`card ${tier.highlight ? "highlight" : ""}`}
          >
            <h3>{tier.title}</h3>
            <p className="price">
              {tier.price}
              <span>/bulan</span>
            </p>
            <ul>
              {tier.features.map((f, idx) => (
                <li key={idx}>
                  <FaCheckCircle className="icon" />
                  {f}
                </li>
              ))}
            </ul>
            <Button name={`Pilih ${tier.title}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
