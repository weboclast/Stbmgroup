export function SuccessMetrics() {
  const metrics = [
    {
      value: "150+",
      label: "Production Lines Installed"
    },
    {
      value: "45%",
      label: "Average Efficiency Increase"
    },
    {
      value: "99.9%",
      label: "Uptime on Maintained Equipment"
    },
    {
      value: "24hrs",
      label: "Maximum Response Time"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-neutral-10 to-neutral-9 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="h2 text-white mb-2">Results That Speak</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-primary-5 mb-2">{metric.value}</div>
              <div className="text-sm text-neutral-1">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
