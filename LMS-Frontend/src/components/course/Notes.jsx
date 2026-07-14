import { useEffect, useState } from "react";
import { FaStickyNote, FaSave } from "react-icons/fa";
import toast from "react-hot-toast";

import {
  getNote,
  saveNote,
} from "../../services/noteService";

const Notes = ({ currentLecture }) => {
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNote();
  }, [currentLecture]);

  const fetchNote = async () => {
    try {
      if (!currentLecture) return;

      const data = await getNote(
        currentLecture._id
      );

      setNote(data.note?.content || "");

    } catch (err) {
      console.log(err);
    }
  };

  const handleSave = async () => {
    try {
      if (!currentLecture) return;

      setLoading(true);

      await saveNote(
        currentLecture._id,
        note
      );

      toast.success("Note Saved");

    } catch (err) {

      console.log(err);
      toast.error("Failed to Save");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl p-8">

      <div className="flex items-center gap-3 mb-6">
        <FaStickyNote className="text-cyan-400 text-2xl" />

        <h2 className="text-2xl font-bold text-white">
          My Notes
        </h2>
      </div>

      <textarea
        rows={8}
        value={note}
        onChange={(e) =>
          setNote(e.target.value)
        }
        placeholder="Write your notes here..."
        className="w-full rounded-2xl bg-slate-800 border border-slate-700 p-5 text-white outline-none"
      />

      <button
        onClick={handleSave}
        disabled={loading}
        className="mt-5 flex items-center gap-3 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white"
      >
        <FaSave />

        {loading
          ? "Saving..."
          : "Save Notes"}
      </button>

    </div>
  );
};

export default Notes;