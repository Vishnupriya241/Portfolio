import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

type Params = {
  slug: string;
};

type Props = {
  params: Params | Promise<Params>;
};

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const techStack = project.details?.techStack ?? project.tech;
  const practices = project.details?.practices ?? [];

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Project details</p>
          <h1 className="text-4xl font-bold text-text-primary">{project.title}</h1>
          <p className="max-w-3xl text-base text-text-secondary">{project.description}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 text-text-secondary shadow-2xl">
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-text-primary">Business problem</h2>
                <p>{project.details.businessProblem}</p>
              </div>
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-text-primary">Situation</h2>
                <p>{project.details.situation}</p>
              </div>
              <div className="grid gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-text-primary">Tasks</h3>
                  <ul className="space-y-2 list-disc pl-5 text-text-secondary">
                    {project.details.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-text-primary">Actions</h3>
                  <ul className="space-y-2 list-disc pl-5 text-text-secondary">
                    {project.details.actions.map((action) => (
                      <li key={action}>{action}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-text-primary">Outcomes</h3>
                <ul className="space-y-2 list-disc pl-5 text-text-secondary">
                  {project.details.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-text-primary">Responsibilities</h3>
                <ul className="space-y-2 list-disc pl-5 text-text-secondary">
                  {project.details.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>

          <aside className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 text-text-secondary shadow-2xl">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Summary</p>
              <p className="text-sm text-text-secondary">
                {project.details.role} &middot; {project.details.period}
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm uppercase tracking-[0.3em] text-primary">Tech stack</h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-card-border bg-white/[0.03] px-3 py-1 text-xs font-medium text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {practices.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-sm uppercase tracking-[0.3em] text-primary">Practices</h2>
                <div className="flex flex-wrap gap-2">
                  {practices.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-card-border bg-white/[0.03] px-3 py-1 text-xs font-medium text-text-secondary"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            )}

              <div className="space-y-3">
                <h2 className="text-sm uppercase tracking-[0.3em] text-primary">Quick facts</h2>
                <div className="space-y-2 text-sm text-text-secondary">
                  <p>
                    <span className="font-semibold text-text-primary">Title:</span> {project.title}
                  </p>
                </div>
              </div>

            <Link
              href="/#projects"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Back to projects
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
