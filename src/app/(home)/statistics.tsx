const statistics = [
  {
    value: 50,
    label: "Projetos realizados",
  },
  {
    value: 10,
    label: "Clientes satisfeitos",
  },
  {
    value: 8,
    label: "Anos atuando",
  },
  {
    value: 5,
    label: "Paises atendidos",
  },
];

export const HomeStatistics = () => {
  return (
    <div className="container flex flex-col items-center">
      <div className="w-full max-w-[36rem] lg:max-w-[72rem] grid gap-8 grid-cols-2 lg:grid-cols-4">
        {statistics.map((item) => (
          <div key={item.label} className="text-center gap-2 flex flex-col">
            <strong className="text-6xl md:text-7xl">{item.value}</strong>
            <span className="font-semibold md:text-lg">{item.label}</span>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};
