import type { V2_MetaFunction } from "@remix-run/cloudflare";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen w-full bg-slate-600">
      <h1 className="font-bold text-5xl bg-blue-600">Welcome to rogerranium dev branch</h1>
     
    </div>
  );
}
