import { useForm } from "react-hook-form";
import Modal from "../Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const people = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Mike Johnson" },
  { id: 4, name: "Sarah Williams" },
];

const priorities = [
  { id: 1, label: "High", value: "high" },
  { id: 2, label: "Medium", value: "medium" },
  { id: 3, label: "Low", value: "low" },
];

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch()

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
   dispatch(addTask(data));
    onCancel();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add New Task">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-sm font-semibold text-gray-700">Title</label>
            <input
              className="w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 px-4 py-2.5"
              type="text"
              id="title"
              placeholder="Enter task title"
              {...register("title")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-sm font-semibold text-gray-700">Description</label>
            <textarea
              className="w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 px-4 py-2.5"
              rows="3"
              id="description"
              placeholder="Enter task description"
              {...register("description")}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="deadline" className="text-sm font-semibold text-gray-700">Deadline</label>
              <input
                className="w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 px-4 py-2.5"
                type="date"
                id="deadline"
                {...register("deadline")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="priority" className="text-sm font-semibold text-gray-700">Priority</label>
              <select
                className="w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 px-4 py-2.5"
                id="priority"
                {...register("priority")}
              >
                <option value="">Select priority</option>
                {priorities.map((priority) => (
                  <option key={priority.id} value={priority.value}>
                    {priority.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="assignee" className="text-sm font-semibold text-gray-700">Assign To</label>
            <select
              className="w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 px-4 py-2.5"
              id="assignee"
              {...register("assignee")}
            >
              <option value="">Select a person</option>
              {people.map((person) => (
                <option key={person.id} value={person.id}>
                  {person.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            Create Task
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;