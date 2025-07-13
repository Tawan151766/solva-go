export default function ManagementTable({
  templates,
  onEdit,
  onDelete,
  loading,
}) {
  return (
    <div className=" rounded shadow">
      {loading ? (
        <div className="p-4 text-center">Loading...</div>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="">
              <th className="p-2">Title</th>
              <th className="p-2">Category</th>
              <th className="p-2">BU</th>
              <th className="p-2">Theme</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {templates.map((t) => (
              <tr key={t.id} className="border-t">
                <td className="p-2">{t.title}</td>
                <td className="p-2">{t.category}</td>
                <td className="p-2">{t.bu}</td>
                <td className="p-2">
                  {Array.isArray(t.theme) ? t.theme.join(", ") : t.theme}
                </td>
                <td className="p-2">
                  <button
                    onClick={() => onEdit(t)}
                    className="text-blue-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(t.id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
