import useTasks from "../taskcontext/useTasks";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import TaskModalContent from "./TaskModalContent";

const TaskModalDialog = ({ className, bgColor }) => {
  const { open, handleOpenChange, isEdit } = useTasks();

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            className={`rounded-lg bg-gradient-to-r ${bgColor}  font-medium text-white shadow hover:text-white ${className}`}
          >
            {isEdit ? <Pencil className="h-4 w-4 text-gray-700" /> : "Add Task"}
          </Button>
        }
      />
      <TaskModalContent className={className} bgColor={bgColor} />
    </Dialog>
  );
};

export default TaskModalDialog;
