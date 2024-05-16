'use client';

import { ITask } from "@/types/tasks";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {
    const router = useRouter();

    const [openModelEdit, setOpenModelEdit] = useState<boolean>(false);
    const [openModelDeleted, setOpenModelDeleted] = useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editTodo({
            id: task.id,
            text: taskToEdit
        })
        setOpenModelEdit(false);
        router.refresh();
    }

    const handleDeleteTask = async (id: string) => {
        await deleteTodo(id);
        setOpenModelDeleted(false);
        router.refresh();
    }

    return (
        (
            <tr key={task.id} className="hover">
                <td className="w-full">{task.text}</td>
                <td className="flex gap-7">
                    <FiEdit onClick={() => setOpenModelEdit(true)} className="text-blue-500" size={18} cursor="pointer" />
                    <Modal modalOpen={openModelEdit} setModalOpen={setOpenModelEdit}>
                        <form onSubmit={handleSubmitEditTodo}>
                            <h3 className='font-bold text-lg'>Edit Task</h3>
                            <div className="modal-action">
                                <input
                                    value={taskToEdit}
                                    onChange={(e) => setTaskToEdit(e.target.value)}
                                    type="text" placeholder='Type here' className='input input-bordered w-full' />
                                <button type="submit" className='btn'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </Modal>
                    <FiTrash2 onClick={() => (setOpenModelDeleted(true))} className="text-red-500" size={20} cursor="pointer" />
                    <Modal modalOpen={openModelDeleted} setModalOpen={setOpenModelDeleted}>
                        <h3 className="text-lg text-red-500 text-center mt-3">Are you sure that you want to delete this task?</h3>
                        <div className="modal-action">
                            <button className="btn" 
                            onClick={() => handleDeleteTask(task.id)}
                            >Yes</button>
                        </div>
                    </Modal>
                </td>
            </tr>
        )
    )
}

export default Task
