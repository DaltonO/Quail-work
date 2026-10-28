/** "Proposed service status" — blush note with approval/availability pair (employers / partners). */
export function ProposedServiceStatus({ notes }: { notes: string[] }) {
  return (
    <div className="flex flex-col gap-3 rounded-[14px] bg-blush p-5 lg:p-6">
      <p className="text-sm leading-[1.5] font-semibold text-ink">Quail Job Coaching · Proposed direct service</p>
      <div className="grid gap-3 text-sm leading-[1.5] text-ink sm:grid-cols-2">
        <p>Approval: To be confirmed</p>
        <p>Service availability: To be confirmed</p>
      </div>
      {notes.map((note) => (
        <p key={note} className="text-[13.3px] leading-5 text-muted">
          {note}
        </p>
      ))}
    </div>
  );
}
