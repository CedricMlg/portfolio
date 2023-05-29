export default function Tick({ value, coordinates }) {
  return (
    <text
      x={coordinates.x}
      y={coordinates.y}
      textAnchor="middle"
    >
      <tspan>{value}</tspan>
    </text>
  );
}
