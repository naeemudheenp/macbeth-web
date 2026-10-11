/**
 * Nested albums + auto-import, drawn in Studio's own vocabulary. Counts on a
 * parent cover its whole subtree, as they do in Studio. Auto-import mirrors
 * the real dialog: pick a date range, see what the box found, add it in one go.
 * Illustrative data, not a screenshot.
 */
type Node = { name: string; count: number; children?: Node[]; active?: boolean };

const TREE: Node[] = [
  {
    name: "Clients",
    count: 2_468,
    children: [
      {
        name: "Mehta wedding",
        count: 1_284,
        children: [
          { name: "Haldi", count: 212 },
          { name: "Ceremony", count: 412, active: true },
          { name: "Reception", count: 538 },
          { name: "Couple portraits", count: 122 },
        ],
      },
      { name: "Arjun & Diya engagement", count: 640 },
      { name: "Kapoor anniversary", count: 544 },
    ],
  },
  { name: "Studio portraits 2026", count: 318 },
];

const TONES = ["#7A5A45", "#5B6B57", "#3F4B5E", "#8A6F5A", "#4D4540", "#6E7A86", "#9B7B5B", "#566a5e"];

export default function AlbumsDemo() {
  return (
    <div className="albums-demo">
      <div className="card tree-card">
        <div className="tree-head">
          <span className="eyebrow">Albums</span>
          <span className="tree-add" aria-hidden="true">
            +
          </span>
        </div>
        <ul className="tree" role="tree" aria-label="Nested albums">
          {TREE.map((n) => (
            <TreeNode key={n.name} node={n} depth={0} />
          ))}
        </ul>
      </div>

      <div className="card import-card">
        <div className="import-title">
          <ImportIcon />
          <span>
            Auto-import to <strong>“Ceremony”</strong>
          </span>
        </div>
        <div className="import-range">
          <div>
            <span className="import-label">From</span>
            <span className="import-field">14 Sep 2026</span>
          </div>
          <div>
            <span className="import-label">To</span>
            <span className="import-field">14 Sep 2026</span>
          </div>
        </div>
        <div className="import-found">
          <span>
            <strong>412 photos</strong> found on your Box
          </span>
          <div className="import-thumbs" aria-hidden="true">
            {TONES.map((t) => (
              <span key={t} style={{ background: t }} />
            ))}
          </div>
        </div>
        <span className="btn btn-dark import-btn" aria-hidden="true">
          Add 412 to album
        </span>
      </div>
    </div>
  );
}

function TreeNode({ node, depth }: { node: Node; depth: number }) {
  const open = !!node.children;
  return (
    <li role="treeitem" aria-expanded={open ? true : undefined} aria-selected={node.active || undefined}>
      <div className={`tree-row${node.active ? " active" : ""}`} style={{ paddingLeft: 10 + depth * 18 }}>
        <span className="tree-caret" aria-hidden="true">
          {open ? "▾" : ""}
        </span>
        <FolderIcon open={open} />
        <span className="tree-name">{node.name}</span>
        <span className="tree-count">{node.count.toLocaleString("en-IN")}</span>
      </div>
      {open && (
        <ul role="group">
          {node.children!.map((c) => (
            <TreeNode key={c.name} node={c} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

function FolderIcon({ open }: { open: boolean }) {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {open ? (
        <path d="M3 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v1H8.5a2 2 0 0 0-1.9 1.4L4 19H5" />
      ) : null}
      {open ? (
        <path d="M6.6 11.4A2 2 0 0 1 8.5 10H21l-2.6 7.6a2 2 0 0 1-1.9 1.4H4z" />
      ) : (
        <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      )}
    </svg>
  );
}

function ImportIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12M7 10l5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}
