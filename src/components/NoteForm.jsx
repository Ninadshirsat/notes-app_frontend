import { useState } from "react";
import TextInput from "./input/TextInput";
import TextAreaInput from "./input/TextAreaInput";
import SelectInput from "./input/SelectInput";

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "High",
    category: "Work",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    if (!formData.title || !formData.description) return;

    //create Note Object
    const newNote = { id: Date.now(), ...formData };

    //add note to the State
    setNotes([newNote, ...notes]);

    //reset the formData
    setFormData({
      title: "",
      priority: "High",
      category: "Work",
      description: "",
    });
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover: border-purple-300 transition mb-4"
      >
        {isFormVisible ? "Hide Form ✖️" : "Add New Note ➕"}
      </button>
      {/* Form */}

      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: "High", label: "🔴 High" },
              { value: "Medium", label: "🟠 Medium" },
              { value: "Low", label: "🟢 Low" },
            ]}
          />

          <div className="div mb-4">
            <label htmlFor="category" className="block font-semibold">
              Category
            </label>
            <SelectInput
              name="category"
              className="w-full p-2 border rounded-lg"
              value={formData.category}
              onChange={handleChange}
              options={[
                { value: "Work", label: "📂 Work" },
                { value: "Personal", label: "🏠 Personal" },
                { value: "Ideas", label: "💡 Ideas" },
              ]}
            />
          </div>

          <TextAreaInput
            name="description"
            label="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover : bg-purple-600">
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
