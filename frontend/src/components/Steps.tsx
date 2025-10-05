import { LucideIcon } from "lucide-react";

interface Step {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

interface StepsProps {
  steps: Step[];
}

export const Steps = ({ steps }: StepsProps) => {
  return (
    <div className="relative">
      <div className="absolute left-8 top-16 hidden h-[calc(100%-8rem)] w-0.5 bg-gradient-to-b from-blue-500 to-blue-200 md:block" />

      <div className="space-y-12">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="relative animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-6">
                <div className="relative shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg shadow-blue-500/25">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow-lg">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 pt-2">
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};