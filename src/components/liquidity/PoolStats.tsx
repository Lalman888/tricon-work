import React from "react";
import "./PoolStats.scss";

interface StatItemProps {
  label: string;
  value: string;
  className?: string;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, className = "" }) => {
  return (
    <div className={`statItem ${className}`}>
      <h3 className="statItem__label">{label}</h3>
      <p className="statItem__value">{value}</p>
    </div>
  );
};

const PoolStats: React.FC = () => {
  return (
    <article className="poolStats">
      {/* StatRow */}
      <section className="statRow">
        <StatItem label="WETH per USDbC" value="0.000587836" />
        <StatItem label="USDbC per WETH" value="1701.16" className="statRow__center" />
        <StatItem label="Share of Pool" value="0%" className="statRow__right" />
      </section>

      <div className="divider" />

      {/* Single Stats */}
      <section className="singleStatRow">
        <h3 className="singleStatRow__label">LP reward APR</h3>
        <p className="singleStatRow__value">0.5%</p>
      </section>

      <div className="divider" />

      <section className="singleStatRow">
        <h3 className="singleStatRow__label">Slippage Tolerance</h3>
        <p className="singleStatRow__value">2.39%</p>
      </section>

      <div className="divider" />
    </article>
  );
};

export default PoolStats;
