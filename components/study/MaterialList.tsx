import { Material } from '@/types';

export default function MaterialList({ materials }: { materials: Material[] }) {
  return (
    <div className="card p-5">
      <h2 className="mb-4 text-lg font-bold">학습 자료</h2>
      <ul className="space-y-2">
        {materials.map((material) => (
          <li key={material.id} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm">
            <span>{material.title}</span>
            <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-600">{material.type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
